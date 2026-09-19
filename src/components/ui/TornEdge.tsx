// Slanted torn-paper divider, 1440x160, keeps its natural aspect ratio.
// Mirrors pastureforlife.org's `border-b-white.png`: used at the bottom of a
// section as-is, or flipped vertically (`-scale-y-100`) at the top of the next.
export const TORN_EDGE_PATH =
  "M0,150 L10,147.7 L20,148.4 L30,148.6 L40,146.7 L50,146.2 L60,143.4 L70,144.8 L80,140.7 L90,141.8 L100,142.6 L110,140.3 L120,140.3 L130,138.8 L140,139.6 L150,135.8 L160,134.9 L170,133.9 L180,133 L190,136.6 L200,130 L210,131.6 L220,130.1 L230,131.6 L240,128 L250,128.6 L260,127 L270,125.5 L280,124.4 L290,123.4 L300,123.9 L310,124.5 L320,123.4 L330,121.3 L340,119.8 L350,121.1 L360,119 L370,117.5 L380,115.4 L390,116.8 L400,112.5 L410,111.4 L420,110.9 L430,114.3 L440,111.6 L450,109.8 L460,107.3 L470,110.1 L480,109.3 L490,107.8 L500,103.1 L510,102.5 L520,104.4 L530,104.1 L540,102.9 L550,103 L560,99.6 L570,97.4 L580,96 L590,98.2 L600,94.3 L610,94.2 L620,97.7 L630,92.6 L640,93.4 L650,93.6 L660,92.4 L670,88.1 L680,91.7 L690,89.6 L700,85.5 L710,88.7 L720,92 L730,83.9 L740,86.1 L750,82 L760,84.4 L770,80.8 L780,81.8 L790,80.9 L800,77.4 L810,80.4 L820,83 L830,74.7 L840,73.5 L850,74.7 L860,75.8 L870,71.1 L880,70.1 L890,71 L900,70 L910,68.4 L920,65.9 L930,67.5 L940,67.6 L950,64.2 L960,64.3 L970,65.1 L980,65 L990,62.9 L1000,62.4 L1010,61.3 L1020,57 L1030,56.3 L1040,55.5 L1050,57.2 L1060,49.1 L1070,55.8 L1080,53.8 L1090,55.2 L1100,51.7 L1110,49.1 L1120,52 L1130,53.8 L1140,46.8 L1150,48.3 L1160,44.8 L1170,46.7 L1180,45 L1190,40.9 L1200,40.9 L1210,42 L1220,40.2 L1230,42.1 L1240,39.5 L1250,41.2 L1260,38.8 L1270,36.4 L1280,36.2 L1290,35.7 L1300,35.3 L1310,34.7 L1320,34.4 L1330,31.3 L1340,31.3 L1350,29.2 L1360,30.2 L1370,30.5 L1380,25.9 L1390,27.9 L1400,27.6 L1410,25.3 L1420,24 L1430,24.7 L1440,22 L1440,160 L0,160 Z";

type TornEdgeProps = {
  /** Flip vertically so the white sits on top (use at the top of a coloured section). */
  flip?: boolean;
  /**
   * Rotate 180° — white on top, tall on the left and short on the right.
   * Matches pastureforlife.org's `border-t-white-inverted.png` used above the footer.
   */
  reverse?: boolean;
  fill?: string;
  className?: string;
  /** Shorter tear so the jagged edge sits lower in the section (hero). */
  flat?: boolean;
};

export function TornEdge({
  flip = false,
  reverse = false,
  fill = "#ffffff",
  className = "",
  flat = false,
}: TornEdgeProps) {
  const orientation = reverse
    ? "rotate-180 -translate-y-px"
    : flip
      ? "-scale-y-100 -translate-y-px"
      : "-mb-px";
  return (
    <svg
      viewBox="0 0 1440 160"
      aria-hidden
      preserveAspectRatio={flat ? "none" : "xMidYMid meet"}
      className={`block w-full ${flat ? "h-[3.15rem] sm:h-[3.65rem] lg:h-[4.15rem]" : "h-auto"} ${orientation} ${className}`}
    >
      <path fill={fill} d={TORN_EDGE_PATH} />
    </svg>
  );
}
