import React from "react";
import {
  TrandIcon,
  CallMadeIcon,
  AccountBalanceIcon,
  GrowIcon,
  StatCard,
  StatCardTitle,
  StatCardContent,
  StatCardIconWrapper,
  StatCardInfo,
  StatCardValue,
  StatCardMessage,
} from "@/components/iHedge/ui";
import { ChartAreaInteractive } from "@/components/iHedge/ui/area-chart-interactive";

interface Props {
  className?: string;
}

export const PReviewDEmo: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className="grid grid-cols-[repeat(3,minmax(210px,1fr))] gap-[10px] overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2">
        <StatCard>
          <StatCardTitle>Current price</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <TrandIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>$1.84</StatCardValue>
              <StatCardMessage>
                <CallMadeIcon className="text-[#65B891] mt-0.5" />
                <p>
                  <span className="text-[#65B891]">$1.84 </span>
                  <span className="text-second">this month</span>
                </p>
              </StatCardMessage>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>

        <StatCard>
          <StatCardTitle>AUM</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <AccountBalanceIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>$1,023,222</StatCardValue>
              <StatCardMessage>
                <CallMadeIcon className="text-[#65B891] mt-0.5" />
                <p>
                  <span className="text-[#65B891]">$1.84 </span>
                  <span className="text-second">this month</span>
                </p>
              </StatCardMessage>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>

        <StatCard>
          <StatCardTitle>Past Month Return</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <GrowIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>84%</StatCardValue>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>
      </div>
      <ChartAreaInteractive />
    </>
  );
};
