import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Hero2.module.scss";
import { Button } from "@/components/iHedge/ui";
import { ArrowIcon } from "@/components/iHedge/ui";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Hero2: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        "relative overflow-hidden flex justify-center pt-[80px] pl-5 lg:pr-[60px] xl:pl-[100px]",
        styles.root,
      )}
    >
      <div className="z-20 w-full">
        <h1 className="text-center">
          Invest. Earn. Withdraw. <br /> Fully Transparent Crypto.
        </h1>

        <div className="flex max-w-[1157px] mt-[50px] justify-between items-center">
          <span>
            All investments involve risks, including the possible loss of
            capital
          </span>

          <Link href="/ihedge/preview/account">
            <Button
              toColor="[#ED910F]"
              className="text-[#ED910F] h-fit pt-[5px] pb-[9px] pr-[5px] pl-[23px] sm:pt-[5px] sm:pb-[9px] sm:pr-[5px] sm:pl-[23px]"
            >
              Get Started
              <div className="p-[23px] bg-[#47AFFF03] rounded-[15px] shadow-[inset_0px_0px_34px_0px_#47AFFF7D]">
                <ArrowIcon className="w-6 h-6" />
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute h-[600px] max-w-none bottom-0 left-1/2 -translate-x-1/2"
        src="/assets/planet2.png"
        alt="Planet"
      />
    </div>
  );
};
