"use client";

import { ReactNode, useRef, useLayoutEffect, useState } from "react";
import styles from "./AdaptiveBlock6.module.scss";

interface AdaptiveBlock6Props {
  children?: ReactNode;
  className?: string;
}

const STATIC_LEFT_PATH = `M492.25 278 V264.5 C492.25 247.931 478.819 234.5 462.25 234.5 H445.882 C437.872 234.5 430.194 231.296 424.559 225.603 L399.98 200.768 C394.421 195.151 391.303 187.567 391.303 179.665 V85.25 M391.303 -21.5 V85.25 M391.303 85.25 H317.224 C309.214 85.25 301.536 88.4536 295.901 94.1472 L199.059 192 M199.059 192 L185.844 205.353 C180.209 211.046 172.531 214.25 164.521 214.25 M199.059 192 L185.844 178.647 C180.209 172.954 172.531 169.75 164.521 169.75`;
const STATIC_RIGHT_PATH = `M492.25 278 V264.5 C492.25 247.931 505.681 234.5 522.25 234.5 H538.618 C546.628 234.5 554.306 231.296 559.941 225.603 L584.52 200.768 C590.079 195.151 593.197 187.567 593.197 179.665 V85.25 M593.197 -21.5 V85.25 M593.197 85.25 H667.276 C675.286 85.25 682.964 88.4536 688.599 94.1472 L785.441 192 M785.441 192 L798.656 205.353 C804.291 211.046 811.969 214.25 819.979 214.25 M785.441 192 L798.656 178.647 C804.291 172.954 811.969 169.75 819.979 169.75`;

export default function AdaptiveBlock6({
  children,
  className,
}: AdaptiveBlock6Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    ro.observe(el);
    setContainerWidth(el.getBoundingClientRect().width);

    return () => ro.disconnect();
  }, []);

  const MIN_WIDTH = 984;
  const HEIGHT = 278;
  const W = Math.max(containerWidth, MIN_WIDTH);
  const S = (W - MIN_WIDTH) / 2;

  const strokeProps = {
    stroke: "#BEC5E0",
    strokeWidth: 1.5,
    strokeDasharray: "6 6",
  };

  return (
    <div
      ref={containerRef}
      className={[styles.block, className].filter(Boolean).join(" ")}
    >
      {containerWidth > 0 && (
        <svg
          className={styles.svg}
          viewBox={`0 0 ${W} ${HEIGHT}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g transform={`translate(${S}, 0)`}>
            <path d={STATIC_LEFT_PATH} {...strokeProps} />
            <path d={STATIC_RIGHT_PATH} {...strokeProps} />
          </g>

          {/* Left extending lines */}
          <line x1={0} y1={192} x2={199.059 + S} y2={192} {...strokeProps} />
          <line
            x1={0}
            y1={214.25}
            x2={164.521 + S}
            y2={214.25}
            {...strokeProps}
          />
          <line
            x1={0}
            y1={169.75}
            x2={164.521 + S}
            y2={169.75}
            {...strokeProps}
          />

          {/* Right extending lines */}
          <line x1={785.441 + S} y1={192} x2={W} y2={192} {...strokeProps} />
          <line
            x1={819.979 + S}
            y1={214.25}
            x2={W}
            y2={214.25}
            {...strokeProps}
          />
          <line
            x1={819.979 + S}
            y1={169.75}
            x2={W}
            y2={169.75}
            {...strokeProps}
          />
        </svg>
      )}

      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}
