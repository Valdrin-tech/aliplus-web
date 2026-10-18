"use client";

import { useEffect, useRef } from "react";

// Generative background for the contact page: soft gradient orbs that lean
// toward the pointer, and a drift of grain-like seeds that part around it.
// Brand palette only — olive, lime, cream and a touch of the pink accent.

type Orb = { x: number; y: number; r: number; hue: [number, number, number]; px: number; py: number; pull: number; t: number };
type Seed = { x: number; y: number; w: number; h: number; a: number; vy: number; vx: number; rot: number; vr: number; alpha: number };

export function ContactCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let frame = 0;
    let running = true;

    // Pointer, in canvas space; eased copy used for drawing.
    const mouse = { x: -1, y: -1, tx: -1, ty: -1, active: false };

    const orbs: Orb[] = [];
    const seeds: Seed[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const build = () => {
      orbs.length = 0;
      seeds.length = 0;
      const base: Array<{ fx: number; fy: number; fr: number; hue: [number, number, number]; pull: number }> = [
        { fx: 0.22, fy: 0.32, fr: 0.46, hue: [139, 195, 74], pull: 0.08 }, // lime
        { fx: 0.74, fy: 0.22, fr: 0.5, hue: [94, 108, 34], pull: 0.05 }, // olive
        { fx: 0.62, fy: 0.82, fr: 0.44, hue: [193, 28, 132], pull: 0.11 }, // pink accent
        { fx: 0.12, fy: 0.9, fr: 0.34, hue: [156, 204, 101], pull: 0.14 }, // light lime
      ];
      base.forEach((b, i) => {
        orbs.push({ x: b.fx * w, y: b.fy * h, r: b.fr * Math.min(w, h), hue: b.hue, px: 0, py: 0, pull: b.pull, t: i * 1.7 });
      });
      const count = Math.round(Math.min(110, (w * h) / 16000));
      for (let i = 0; i < count; i++) {
        seeds.push({
          x: rand(0, w),
          y: rand(0, h),
          w: rand(3, 7),
          h: rand(6, 14),
          a: 0,
          vy: rand(-0.22, -0.08),
          vx: rand(-0.06, 0.06),
          rot: rand(0, Math.PI * 2),
          vr: rand(-0.004, 0.004),
          alpha: rand(0.25, 0.7),
        });
      }
    };

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      if (!mouse.active) {
        mouse.x = mouse.tx;
        mouse.y = mouse.ty;
      }
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    let last = performance.now();
    const draw = (now: number) => {
      if (!running) return;
      const dt = Math.min(2.5, (now - last) / 16.67);
      last = now;
      const time = now / 1000;

      // Ease the pointer; when it leaves, drift the focus back to centre.
      const fx = mouse.active ? mouse.tx : w * 0.5;
      const fy = mouse.active ? mouse.ty : h * 0.5;
      mouse.x += (fx - mouse.x) * 0.06 * dt;
      mouse.y += (fy - mouse.y) * 0.06 * dt;

      // Base: deep olive gradient.
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#2f3b14");
      bg.addColorStop(0.55, "#41511c");
      bg.addColorStop(1, "#2a3412");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Orbs: slow wander plus a lean toward the pointer, each at its own strength.
      ctx.globalCompositeOperation = "lighter";
      for (const o of orbs) {
        const wanderX = Math.sin(time * 0.21 + o.t) * w * 0.035;
        const wanderY = Math.cos(time * 0.17 + o.t * 1.3) * h * 0.04;
        const leanX = (mouse.x - o.x) * o.pull;
        const leanY = (mouse.y - o.y) * o.pull;
        o.px += (wanderX + leanX - o.px) * 0.04 * dt;
        o.py += (wanderY + leanY - o.py) * 0.04 * dt;
        const cx = o.x + o.px;
        const cy = o.y + o.py;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, o.r);
        const [r, gg, b] = o.hue;
        g.addColorStop(0, `rgba(${r},${gg},${b},0.42)`);
        g.addColorStop(0.45, `rgba(${r},${gg},${b},0.14)`);
        g.addColorStop(1, `rgba(${r},${gg},${b},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, o.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      // Pointer halo: a soft cream light that follows the cursor.
      if (fine) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, Math.min(w, h) * 0.28);
        g.addColorStop(0, "rgba(255,251,247,0.16)");
        g.addColorStop(0.5, "rgba(255,251,247,0.05)");
        g.addColorStop(1, "rgba(255,251,247,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // Seeds: drift upward, spin slowly, and part around the pointer.
      const radius = Math.min(w, h) * 0.16;
      for (const s of seeds) {
        if (!reduced) {
          s.y += s.vy * dt;
          s.x += s.vx * dt + Math.sin(time * 0.6 + s.rot) * 0.08 * dt;
          s.rot += s.vr * dt;
          if (fine && mouse.active) {
            const dx = s.x - mouse.x;
            const dy = s.y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < radius && d > 0.001) {
              const push = ((radius - d) / radius) * 1.6 * dt;
              s.x += (dx / d) * push;
              s.y += (dy / d) * push;
            }
          }
          if (s.y < -20) {
            s.y = h + 20;
            s.x = rand(0, w);
          }
          if (s.x < -20) s.x = w + 20;
          if (s.x > w + 20) s.x = -20;
        }
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.fillStyle = `rgba(214, 232, 170, ${s.alpha})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, s.w / 2, s.h / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (fine) {
      canvas.parentElement?.addEventListener("pointermove", onMove);
      canvas.parentElement?.addEventListener("pointerleave", onLeave);
    }
    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        last = performance.now();
        frame = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("pointermove", onMove);
      canvas.parentElement?.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="contact-sheet__canvas" aria-hidden />;
}
