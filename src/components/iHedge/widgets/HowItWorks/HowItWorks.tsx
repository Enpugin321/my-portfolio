import React from "react";
import {
  USDTIcon,
  TokenIcon,
  BarChart4BarsIcon,
  PaymentArrowDownIcon,
  ArrowIcon,
  Button,
} from "@/components/iHedge/ui";
import Link from "next/link";

const steps: { icon: React.ReactNode; title: string; description: string }[] = [
  {
    icon: <USDTIcon className="w-10 h-10 text-project-accent" />,
    title: "Deposit USDT",
    description: "Subscribe from just 100 USDT",
  },
  {
    icon: <TokenIcon className="w-10 h-10 text-project-accent" />,
    title: "Receive LP Token",
    description:
      "You will instantly receive an on-chain token that represents your share in the vault — transparent and trackable at any time",
  },
  {
    icon: <BarChart4BarsIcon className="w-10 h-10 text-project-accent" />,
    title: "Track Vault Performance",
    description:
      "Token price always reflects your actual investment performance",
  },
  {
    icon: <PaymentArrowDownIcon className="w-10 h-10 text-project-accent" />,
    title: "Redeem Anytime",
    description:
      "Follow your investment performance and withdraw your funds with returns anytime",
  },
];

export default function HowItWorks() {
  return (
    <div className="px-5 lg:px-[60px] 2xl:px-[100px] mt-[150px]">
      <h2 className="leading-[1.15] text-[48px] lg:text-[80px] text-center font-medium">
        How it works
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col gap-3">
            <h5
              className="text-[48px] lg:text-[80px] text-transparent bg-clip-text font-medium"
              style={{
                lineHeight: "125%",
                letterSpacing: "0%",
                backgroundImage:
                  "linear-gradient(180deg, #C4CFE9 0.01%, rgba(196, 207, 233, 0) 100.01%)",
              }}
            >
              Step {i + 1}
            </h5>
            <div className="bg-white rounded-[16px] h-[244px] md:h-[311px] p-[30px] space-y-5">
              <div className="w-fit rounded-[16px] p-[13px] border-[5px] border-[#F3F5FA]">
                {step.icon}
              </div>
              <h6 className="font-medium text-[20px] lg:text-[28px] leading-tight">
                {step.title}
              </h6>
              <p className="text-second text-base leading-tight">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-10 flex justify-center">
        <Link href="/ihedge/preview/account">
          <Button
            variant="ghost"
            className="h-fit sm:pt-[5px] sm:pr-[5px] sm:pb-[4px] sm:pl-[34px] pt-[5px] pr-[5px] pb-[4px] pl-[34px] rounded-[20px] gap-[15px] bg-[#008BF5] shadow-[0px_10px_54px_0px_#008BF580] text-white hover:bg-[#008BF5]/90 hover:text-white"
          >
            Deposit USDT
            <div className="p-[23px] bg-[#0074CC] rounded-[15px]">
              <ArrowIcon className="w-6 h-6" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
