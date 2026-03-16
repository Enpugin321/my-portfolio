"use client";
import { ReactNode, useRef, useLayoutEffect, useState } from "react";
import styles from "./AdaptiveBlock.module.scss";

const HEIGHT = 299.5;

function buildPath(W: number) {
  return [
    `M0.75 ${HEIGHT} V264.5`,
    `C0.75 247.931 14.1815 234.5 30.75 234.5 H47.8236`,
    `C55.7801 234.5 63.4107 231.339 69.0368 225.713`,
    `L93.9632 200.787`,
    `C99.5893 195.161 102.75 187.53 102.75 179.574 V85.25`,
    `M102.75 -21.5 V85.25`,
    `M102.75 85.25 H177.824`,
    `C185.78 85.25 193.411 88.4107 199.037 94.0368`,
    `L297 192`,
    `M297 192 H${W + 1}`,
    `M297 192 L310.463 205.463 C316.089 211.089 323.72 214.25 331.676 214.25 H${W + 1}`,
    `M297 192 L310.463 178.537 C316.089 172.911 323.72 169.75 331.676 169.75 H${W + 1}`,
  ].join(" ");
}

interface AdaptiveBlockProps {
  children?: ReactNode;
  className?: string;
}

export default function AdaptiveBlock({
  children,
  className,
}: AdaptiveBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);

    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={[styles.block, className].filter(Boolean).join(" ")}
    >
      {width > 0 && (
        <svg
          className={styles.svg}
          viewBox={`0 0 ${width} ${HEIGHT}`}
          width={width}
          height={HEIGHT}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="0.75"
            y="0.75"
            width={width - 1.5}
            height={HEIGHT - 1.5}
            rx="29.25"
            stroke="#BEC5E0"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d={buildPath(width)}
            stroke="#BEC5E0"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      )}

      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}
