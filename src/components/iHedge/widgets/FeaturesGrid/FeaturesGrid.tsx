import React from "react";
import styles from "./FeaturesGrid.module.scss";
import cs from "clsx";
import { USDTIcon } from "@/components/iHedge/ui";
import Image from "next/image";

interface FeaturesGridProps {
  className?: string;
}

export function FeaturesGrid({ className }: FeaturesGridProps) {
  const vectorBlock = (
    <div
      className="h-[420px] relative rounded-2xl flex flex-col items-center overflow-hidden pt-[35px]"
      style={{
        background:
          "radial-gradient(62.15% 77.5% at 50.05% 100%, #D0D6E5 0%, #FFFFFF 100%)",
      }}
    >
      <div className="text-center z-20">
        <h4 className="font-medium text-[44px]">Strategy</h4>
        <p className="block max-w-[479px] text-center text-xl leading-tight text-[#5D6172]">
          Alpha Vault is an actively managed crypto fund that allocates capital
          across a wide range of digital assets and trading strategies.
        </p>
      </div>

      <div className="w-full translate-y-[-20px] z-10 absolute top-0 left-0 @container">
        <img
          src="/assets/vector.png"
          alt=""
          className="w-full h-[299.5px] object-fill hidden @[600px]:block"
        />
        <img
          src="/assets/vector2.png"
          alt=""
          className="w-full h-[299.5px] object-fill block @[600px]:hidden"
        />
      </div>

      {/* Ellipses: each absolutely centered at bottom, concentric rings */}
      <img
        src="/assets/strategy/ellipse.png"
        alt=""
        className="absolute z-15 aspect-[5/4] h-[139px] bottom-0 left-1/2 -translate-x-1/2"
      />
      <img
        src="/assets/strategy/ellipse2.png"
        alt=""
        className="absolute z-14  aspect-[10/7] h-[227px] bottom-0 left-1/2 -translate-x-1/2"
      />
      <img
        src="/assets/strategy/ellipse3.png"
        alt=""
        className="absolute z-13  aspect-[10/6.5] h-[293px] bottom-0 left-1/2 -translate-x-1/2 "
      />
      <img
        src="/assets/strategy/ellipse4.png"
        alt=""
        className="absolute z-12  aspect-[10/6] h-[340px] bottom-0 left-1/2 -translate-x-1/2 "
      />
      <img
        src="/assets/strategy/alpha.svg"
        className="absolute w-[53px] h-[53px] z-16 bottom-[30px]"
        alt=""
      />

      <div
        className="z-20 px-[10px] py-2 absolute top-[166px] left-[7px] bg-white rounded-full"
        style={{ boxShadow: "0px 7px 24px 0px #57607B33" }}
      >
        <span className="text-project-accent text-[13px]">
          Asymmetric Investment
        </span>
      </div>

      <div
        className="z-20 px-[10px] py-2 absolute top-[166px] right-[7px] bg-white rounded-full"
        style={{ boxShadow: "0px 7px 24px 0px #57607B33" }}
      >
        <span className="text-project-accent text-[13px]">Diversification</span>
      </div>
    </div>
  );

  const rightBlock = (
    <div className="flex flex-col justify-between h-[420px] relative overflow-hidden rounded-2xl bg-[#008BF5] shadow-md p-6">
      <img
        src="/assets/strategy/sunlight_effect.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover 
             pointer-events-none select-none 
             mix-blend-screen"
      />

      <span className="text-background leading-tight font-medium text-[44px]">
        Expected Annual Return
      </span>
      <p className="leading-[1.15] text-white/40 text-[240px]">40%</p>

      {/* Right block placeholder */}
    </div>
  );

  return (
    <div className={cs(styles.container, className)}>
      {/* XL+ only: top row with 10/7 proportions */}
      <div className={styles.xlTopRow}>
        {vectorBlock}
        {rightBlock}
      </div>

      {/* Grid: div1 and div2 hidden on xl, shown on <xl */}
      <div className={cs(styles.gridParent)}>
        <div className={cs(styles.gridDiv1, styles.hideOnXl)}>
          {vectorBlock}
        </div>

        <div className={cs(styles.gridDiv2, styles.hideOnXl)}>{rightBlock}</div>

        <div
          className={cs(
            styles.gridDiv3,
            "h-[420px] rounded-2xl bg-white shadow-md p-6 flex flex-col justify-between",
          )}
        >
          <span className="text-[44px] font-medium">Minimum investment</span>
          <div className="flex items-center">
            <span className="2xl:text-[190px] tracking-[-5%] text-[160px] leading-tight text-project-accent">
              100
            </span>
            <div className="flex flex-col items-center">
              <USDTIcon className="text-project-accent w-[92px] h-[76px]" />
              <span className="text-[44px] leading-tight text-project-accent font-bold">
                USDT
              </span>
            </div>
          </div>
          {/* Block 3 */}
        </div>

        <div
          className={cs(
            styles.gridDiv4,
            "relative overflow-hidden h-[420px] rounded-2xl bg-white shadow-md p-[17px]",
          )}
        >
          <div className={styles.dotPattern} />
          <div className={styles.dotCornerFade} />
          <span className="relative text-[44px] font-medium z-10">Fees</span>

          {/* Performance fee label + dashed SVG connector — flex row */}
          <div
            className="relative z-10 flex flex-row items-end mt-2"
            style={{ height: 70 }}
          >
            {/* Dashed connector: bottom touches top of Checkbox, right end at center of Block 1 */}
            <svg
              width="61"
              height="70"
              viewBox="0 0 61 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                bottom: 0,
                left: "calc(17px + 33% / 2 - 15px)",
              }}
            >
              <path
                d="M0.75 69.25V30.75C0.75 14.1815 14.1815 0.75 30.75 0.75H60.25"
                stroke="#BEC5E0"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
            {/* Text label: right of SVG path + 16px gap */}
            <div
              className="absolute top-0 translate-y-[-50%] flex flex-col leading-tight"
              style={{ left: "calc(17px + 33% / 2 + 62px)" }}
            >
              <span className="text-[#5D6172] text-xl">Performance fee:</span>
              <span className="text-[#1A1D2E] text-xl font-medium">
                30% (High-Water Mark)
              </span>
            </div>
          </div>

          {/* Checkbox */}
          <div className="relative bg-project-accent rounded-[24px] h-[100px] w-full z-10 px-1 py-[3px]">
            {/* Diagonal stripe background */}
            <div
              className={cs(
                "absolute inset-x-0 inset-y-[3px] rounded-[22px] overflow-hidden",
                styles.stripePattern,
              )}
            />
            {/* Content row */}
            <div className="relative flex h-full z-10">
              {/* Block 1: white indicator with inset shadow */}
              <div
                className="h-full rounded-[20px]"
                style={{
                  width: "33%",
                  background: "#FFFFFF",
                  boxShadow: "0px -4px 4px 0px #008BF540 inset",
                }}
              />
              {/* Block 2: semi-transparent narrow separator */}
              <div className="h-full ml-[3px] w-[18px] rounded-[20px] bg-white/70" />
              {/* Block 3: transparent flex zone with centered label */}
              <div className="flex-1 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  Investor return
                </span>
              </div>
            </div>
          </div>

          {/* Management fee label + dashed SVG connector — below Checkbox, points to Block 2 */}
          <div
            className="relative z-10 flex flex-row items-start"
            style={{ height: 51 }}
          >
            {/* Dashed connector: top touches bottom of Checkbox, right end at center of Block 2 */}
            <svg
              width="61"
              height="51"
              viewBox="0 0 61 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: 0,
                left: "calc(33% + 12px)",
              }}
            >
              <path
                d="M0.75 0V19.5C0.75 36.0685 14.1815 49.5 30.75 49.5H60.25"
                stroke="#BEC5E0"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
            {/* Text label: right of SVG tip + 16px gap */}
            <div
              className="absolute top-0 translate-y-[50%] flex flex-col leading-tight"
              style={{ left: "calc(33% + 79px)" }}
            >
              <span className="text-[#5D6172] text-xl">Management fee:</span>
              <span className="text-[#1A1D2E] text-xl font-medium">
                3% per year
              </span>
            </div>
          </div>

          {/* Block 4 */}
        </div>

        <div
          className={cs(
            styles.gridDiv5,
            "h-[420px] flex flex-col justify-between items-start rounded-2xl bg-white shadow-md p-6 relative overflow-hidden",
          )}
        >
          <span className="text-[44px] font-medium">Risk</span>
          <Image
            className="absolute top-[34px] left-1/2 -translate-x-1/2"
            src="/assets/strategy/encrypted.png"
            alt="Risk"
            width={140}
            height={172}
          />

          <p className="block max-w-[490px] text-center text-xl leading-tight text-[#5D6172]">
            This is a high-risk investment product. The fund engages in
            leveraged trading and directional positions across volatile crypto
            assets. While professionally managed, there is no guarantee of
            profit, and partial or total capital loss is possible.
          </p>
          <div className="h-[818px] w-[818px] rounded-full bg-project-accent/5 absolute bottom-[362px] left-1/2 -translate-x-1/2"></div>
          <div className="h-[818px] w-[818px] rounded-full bg-project-accent/5 absolute top-[123px] left-1/2 -translate-x-1/2"></div>
          {/* Block 5 */}
        </div>
      </div>
    </div>
  );
}

export default FeaturesGrid;
