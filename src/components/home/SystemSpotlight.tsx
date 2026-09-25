"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { WordReveal } from "@/components/motion/WordReveal";

const steps = [
  {
    n: "01",
    title: "Fourteen natural components",
    body: "Urea, plant extracts, oligoelements and clay in one formula — mixed at 22 kg per ton of cereals you already grow.",
  },
  {
    n: "02",
    title: "Rumen-ready maturation",
    body: "Adjust moisture to about 24% and let the mix mature for 14 days so protein and energy values can rise.",
  },
  {
    n: "03",
    title: "Steadier nutrient use",
    body: "Prebiotic and probiotic support for rumen flora — energetic rations without the usual acidosis risk.",
  },
  {
    n: "04",
    title: "Built for real farms",
    body: "Works in existing mixers and rations for cattle, sheep and goats. No new feeding system required.",
  },
] as const;

function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    let frame = 0;
    let active = false;
    let offset = 0;
    let target = 0;
    let dragging = false;
    let dragOrigin = 0;
    let pointerStart = 0;
    let moved = false;
    let userLock = false;
    let lastScrollProgress = 0;

    const desktop = () => window.matchMedia("(max-width: 899px)").matches === false;

    const maxOffset = () =>
      Math.max(0, track.scrollWidth - viewport.clientWidth);

    const stepSize = () => {
      const card = track.querySelector<HTMLElement>(".how-step");
      if (!card) return viewport.clientWidth;
      const styles = getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      return card.offsetWidth + gap;
    };

    const clamp = (value: number) =>
      Math.min(maxOffset(), Math.max(0, value));

    const apply = () => {
      track.style.transform = desktop()
        ? `translate3d(${-offset}px, 0, 0)`
        : "";
    };

    const scrollProgress = () => {
      const range = section.offsetHeight - window.innerHeight;
      if (range <= 0) return 0;
      return Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range));
    };

    const update = () => {
      if (!active) return;

      if (!desktop()) {
        offset = 0;
        target = 0;
        track.style.transform = "";
        frame = requestAnimationFrame(update);
        return;
      }

      const progress = scrollProgress();
      if (!dragging && !userLock) {
        target = maxOffset() * progress;
      } else if (!dragging && Math.abs(progress - lastScrollProgress) > 0.04) {
        userLock = false;
        target = maxOffset() * progress;
      }

      offset += (target - offset) * (dragging ? 1 : 0.18);
      if (Math.abs(target - offset) < 0.4) offset = target;
      apply();
      frame = requestAnimationFrame(update);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!desktop()) return;
      if (event.button !== 0 && event.button !== 2) return;

      dragging = true;
      userLock = true;
      moved = false;
      pointerStart = event.clientX;
      dragOrigin = offset;
      target = offset;
      lastScrollProgress = scrollProgress();
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);
      event.preventDefault();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const delta = event.clientX - pointerStart;
      if (Math.abs(delta) > 4) moved = true;
      target = clamp(dragOrigin - delta);
      offset = target;
      apply();
    };

    const endDrag = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove("is-dragging");
      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }

      const size = stepSize();
      if (size > 0) {
        target = clamp(Math.round(offset / size) * size);
      }
    };

    const onContextMenu = (event: MouseEvent) => {
      if (moved) event.preventDefault();
    };

    const onWheel = (event: WheelEvent) => {
      if (!desktop()) return;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.shiftKey
          ? event.deltaY
          : 0;
      if (!delta) return;
      event.preventDefault();
      userLock = true;
      lastScrollProgress = scrollProgress();
      target = clamp(target + delta);
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("lostpointercapture", endDrag);
    viewport.addEventListener("contextmenu", onContextMenu);
    viewport.addEventListener("wheel", onWheel, { passive: false });

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(update);
        }
      },
      { threshold: 0 },
    );

    io.observe(section);
    return () => {
      active = false;
      io.disconnect();
      cancelAnimationFrame(frame);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", endDrag);
      viewport.removeEventListener("pointercancel", endDrag);
      viewport.removeEventListener("lostpointercapture", endDrag);
      viewport.removeEventListener("contextmenu", onContextMenu);
      viewport.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className="how-works">
      <div className="how-works__sticky">
        <div className="how-works__media">
          <Image
            src="/guide-feeding.jpg"
            alt="Cattle feeding on an Aliplus ration"
            fill
            className="object-cover object-[center_45%]"
            sizes="(max-width: 899px) 100vw, 50vw"
          />
        </div>

        <div className="how-works__panel">
          <div className="how-works__intro">
            <WordReveal
              as="h2"
              className="how-works__title"
              text="How it works"
              step={0.038}
            />
            <div className="how-works__desc">
              <WordReveal
                className="how-works__lead"
                text="Aliplus treats farm cereals so the ration works harder at the rumen — mix, mature, then feed."
                delay={0.1}
                step={0.024}
              />
              <Link href="/usage-guide" className="ghost-line-btn">
                Open Usage Guide
              </Link>
            </div>
          </div>

          <div
            ref={viewportRef}
            className="how-works__viewport"
            aria-label="How it works steps"
          >
            <div ref={trackRef} className="how-works__track">
              {steps.map((step) => (
                <article key={step.n} className="how-step">
                  <div className="how-step__rule" aria-hidden>
                    <span className="how-step__dot" />
                    <span className="how-step__bar" />
                  </div>
                  <div className="how-step__text">
                    <WordReveal className="how-step__n" text={step.n} step={0.08} />
                    <WordReveal
                      as="h3"
                      className="how-step__title"
                      text={step.title}
                      delay={0.08}
                      step={0.04}
                    />
                    <WordReveal
                      className="how-step__body"
                      text={step.body}
                      delay={0.16}
                      step={0.022}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SystemSpotlight() {
  return (
    <>
      <section className="what-is">
        <div className="what-is__grid">
          <div className="what-is__copy">
            <WordReveal
              as="h2"
              className="what-is__title"
              text={"What is\nAliplus"}
              step={0.038}
            />
            <WordReveal
              className="what-is__body"
              text="Feed should work harder than it does. Aliplus is a farm-ready blend of fourteen natural components, mixed at 22 kg per ton of cereals to help animals use the nutrition already in the ration. It supports the rumen, raises protein and energy after 14 days of maturation, and fits the feeding system you already run."
              delay={0.12}
              step={0.022}
            />
          </div>

          <div className="what-is__orbit" aria-hidden>
            <div className="what-is__photo">
              <Image
                src="/guide-grains.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 899px) 70vw, 28vw"
              />
            </div>
          </div>

          <div className="what-is__aside">
            <div>
              <WordReveal
                as="h3"
                className="what-is__aside-title"
                text="What it is"
                step={0.04}
              />
              <WordReveal
                className="what-is__aside-body"
                text="A structured blend of urea, plant extracts, oligoelements and clay that improves the nutritional value of farm cereals. Mixed on the farm, matured, then fed."
                delay={0.1}
                step={0.022}
              />
            </div>
            <div>
              <WordReveal
                as="h3"
                className="what-is__aside-title"
                text="What it is not"
                delay={0.06}
                step={0.04}
              />
              <WordReveal
                className="what-is__aside-body"
                text="Not a complete feed, not a veterinary medicine, and not a replacement for good husbandry. Use only at the stated rate of 22 kg per ton."
                delay={0.14}
                step={0.022}
              />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
    </>
  );
}
