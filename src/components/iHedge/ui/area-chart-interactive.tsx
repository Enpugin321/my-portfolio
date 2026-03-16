"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/iHedge/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/iHedge/ui/chart";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "var(--color-project-accent)",
  },
} satisfies ChartConfig;

interface TickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string | number;
  };
}

const CustomTick = (props: TickProps) => {
  const { x, y, payload } = props;

  if (!payload || x === undefined || y === undefined) {
    return null;
  }

  // Emulating the requested CSS:
  // gap: 10px (we'll implement this by adding an x-offset)
  // borderRadius: "30px 5px 5px 30px"
  // padding: "4px 8px 4px 8px"
  // Assuming text height is roughly 12px.
  // Total rect height ~ 12 + 4 + 4 = 20px
  // Total rect width ~ roughly 40-50px depending on the number. Let's make it 42px.
  // start drawing from top-left, but after the gap. Gap from axis = 10px.
  const gap = 10;
  const h = 22; // Height
  const w = 46; // Width
  const rL = 11; // Left radius (max half of height for pill shape)
  const rR = 5; // Right radius

  // Custom SVG path for independent corner radii
  const pathData = `
    M ${gap + rL} ${-h / 2}
    H ${gap + w - rR}
    A ${rR} ${rR} 0 0 1 ${gap + w} ${-h / 2 + rR}
    V ${h / 2 - rR}
    A ${rR} ${rR} 0 0 1 ${gap + w - rR} ${h / 2}
    H ${gap + rL}
    A ${rL} ${rL} 0 0 1 ${gap} ${h / 2 - rL}
    V ${-h / 2 + rL}
    A ${rL} ${rL} 0 0 1 ${gap + rL} ${-h / 2}
    Z
  `;

  return (
    <g transform={`translate(${x},${y})`}>
      <path
        d={pathData}
        fill="#f8f9fa" // Very light gray background
      />
      <text
        x={gap + w / 2}
        y={4}
        fill="#0f172a" // Text color
        textAnchor="middle"
        fontSize={12}
        fontWeight={500}
      >
        ${payload.value}
      </text>
    </g>
  );
};

interface CustomHoverTickProps {
  viewBox?: { x: number; y: number; width: number; height: number };
  value?: number | string;
}

const CustomHoverTick = (props: CustomHoverTickProps) => {
  const { viewBox, value } = props;

  if (!viewBox) return null;
  const gap = 10;
  const w = 46;
  const h = 22;

  return (
    <foreignObject
      x={viewBox.width + viewBox.x + gap}
      y={viewBox.y - h / 2}
      width={w}
      height={h}
      style={{ overflow: "visible" }}
    >
      <div
        style={{
          background: "var(--Accent, #008BF5)",
          boxShadow:
            "0px 6px 24px 0px #008BF54D, 0px -3px 7px 0px #FFFFFF75 inset",
          borderRadius: "30px 5px 5px 30px",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        ${value}
      </div>
    </foreignObject>
  );
};

export function ChartAreaInteractive({
  externalData = [],
  timeRange = "30d",
  onTimeRangeChange,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  externalData?: any[];
  timeRange?: string;
  onTimeRangeChange?: (range: string) => void;
}) {
  // timeRange is controlled by props now
  const [hoveredDate, setHoveredDate] = React.useState<string | null>(null);
  const charRef = React.useRef<SVGSVGElement>(null);

  const filteredData = React.useMemo(() => {
    return chartData
      .filter((item) => {
        const date = new Date(item.date);
        const referenceDate = new Date("2024-06-30");
        let daysToSubtract = 30;
        if (timeRange === "30d") {
          daysToSubtract = 30;
        } else if (timeRange === "7d") {
          daysToSubtract = 7;
        } else if (timeRange === "1d") {
          daysToSubtract = 1;
        }
        const startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
      })
      .map((item) => ({ date: item.date, price: item.desktop }));
  }, [timeRange]);

  const activePoint = React.useMemo(() => {
    if (hoveredDate) {
      const point = filteredData.find((d) => d.date === hoveredDate);
      if (point) return point;
    }
    return filteredData.length > 0
      ? filteredData[filteredData.length - 1]
      : null;
  }, [filteredData, hoveredDate]);

  return (
    <Card className="pt-0 py-7 border-0 gap-0">
      <CardHeader className="flex flex-col  gap-4 sm:flex-row sm:items-center sm:gap-2 sm:space-y-0">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardDescription className="text-[18px]">Alpha vault</CardDescription>
          <CardTitle className="text-[32px]">Price chart</CardTitle>
        </div>
        <div className="flex bg-[#F3F5FA] rounded-[15px] p-[3px] gap-[3px] ml-auto">
          {[
            { label: "Month", value: "30d" },
            { label: "Week", value: "7d" },
            { label: "Day", value: "1d" }, // Map 'Day' to something visually sensible, e.g., 1 day or similar logic
          ].map((range) => {
            const isActive = timeRange === range.value;
            return (
              <button
                key={range.value}
                onClick={() =>
                  onTimeRangeChange && onTimeRangeChange(range.value)
                }
                className={`px-[18px] py-[11px] rounded-[12px] text-[16px] font-medium transition-colors ${
                  isActive
                    ? "bg-[--Accent] text-white"
                    : "bg-transparent text-[#64748B] hover:bg-white"
                }`}
                style={
                  isActive
                    ? {
                        background: "var(--Accent, #008BF5)",
                        boxShadow:
                          "0px 6px 24px 0px #008BF54D, 0px -3px 7px 0px #FFFFFF75 inset",
                      }
                    : undefined
                }
              >
                {range.label}
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart
            ref={charRef}
            data={filteredData}
            margin={{ right: 40, left: 0, top: 20, bottom: 0 }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onMouseMove={(e: any) => {
              console.log(e);
              if (e && e.activeLabel) {
                setHoveredDate(e.activeLabel);
              }
            }}
          >
            <defs>
              <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-price)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-price)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="2 10"
              stroke="#BEC5E0"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`;
              }}
            />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              tick={<CustomTick />}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`;
                  }}
                  indicator="dot"
                />
              }
            />
            {activePoint && (
              <ReferenceLine
                y={activePoint.price}
                stroke="var(--Accent, #008BF5)"
                strokeDasharray="2 10"
                label={<CustomHoverTick value={activePoint.price} />}
              />
            )}
            <Area
              dataKey="price"
              type="natural"
              fill="url(#fillPrice)"
              stroke="var(--color-price)"
              strokeWidth={2}
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
