"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

const PreviewDemoContent: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const period = searchParams.get("period") || "30d";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(`/api/preview-demo?period=${period}`)
      .then((res) => res.json())
      .then((json) => {
        if (active) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch mock data:", err);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [period]);

  const stats = data?.stats || {
    currentPrice: 1.84,
    currentPriceChange: 1.84,
    aum: "1,023,222",
    pastReturn: 84,
    periodText: "this month",
  };

  const chartData = data?.chartData || [];

  const handleTimeRangeChange = (newRange: string) => {
    setLoading(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("period", newRange);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-[repeat(3,minmax(210px,1fr))] gap-[10px] overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2">
        <StatCard>
          <StatCardTitle>Current price</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <TrandIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>
                {loading ? "..." : `$${stats.currentPrice}`}
              </StatCardValue>
              <StatCardMessage>
                <CallMadeIcon className="text-[#65B891] mt-0.5" />
                <p>
                  <span className="text-[#65B891]">
                    {loading ? "..." : `$${stats.currentPriceChange}`}{" "}
                  </span>
                  <span className="text-second">
                    {loading ? "" : stats.periodText}
                  </span>
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
              <StatCardValue>{loading ? "..." : `$${stats.aum}`}</StatCardValue>
              <StatCardMessage>
                <CallMadeIcon className="text-[#65B891] mt-0.5" />
                <p>
                  <span className="text-[#65B891]">
                    {loading ? "..." : `$${stats.currentPriceChange}`}{" "}
                  </span>
                  <span className="text-second">
                    {loading ? "" : stats.periodText}
                  </span>
                </p>
              </StatCardMessage>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>

        <StatCard>
          <StatCardTitle>Past Return</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <GrowIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>
                {loading ? "..." : `${stats.pastReturn}%`}
              </StatCardValue>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>
      </div>
      <ChartAreaInteractive
        externalData={chartData}
        timeRange={period}
        onTimeRangeChange={handleTimeRangeChange}
      />
    </div>
  );
};

export const PreviewDemo: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={<div>Loading preview...</div>}>
      <PreviewDemoContent {...props} />
    </Suspense>
  );
};
