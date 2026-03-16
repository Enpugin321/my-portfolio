import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { Button } from "@/components/iHedge/ui";
import { ArrowIcon } from "@/components/iHedge/ui";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        "relative overflow-hidden flex items-center pl-5 lg:pr-[60px] xl:pl-[100px]",
        styles.root,
      )}
    >
      <div className="z-20">
        <h1>
          Invest. Earn. Withdraw. <br /> Fully Transparent <br /> Crypto.
        </h1>

        <div className="flex max-w-[636px] justify-between">
          <span>We bring a human way to invest</span>

          <Link href="/ihedge/preview/account">
            <Button className="text-[#47AFFF] pt-[5px] pb-[9px] pr-[5px] pl-[23px] sm:pt-[5px] sm:pb-[9px] sm:pr-[5px] sm:pl-[23px]">
              Get Started
              <div className="p-[23px] bg-[#47AFFF03] rounded-[15px] shadow-[inset_0px_0px_34px_0px_#47AFFF7D]">
                <ArrowIcon className="w-6 h-6" />
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <Image
        className="absolute bottom-0 right-0"
        src="/assets/hero-bg.png"
        alt="Hero"
        height={842}
        width={840}
      />
    </div>
  );
};
