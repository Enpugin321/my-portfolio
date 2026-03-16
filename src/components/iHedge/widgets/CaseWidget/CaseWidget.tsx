import Image from "next/image";
import { BookIcon, Button, ArrowIcon } from "@/components/iHedge/ui";
import Link from "next/link";

const CASE_ITEMS = Array(3).fill({
  title: "Our case is not a",
  description:
    "Our case is not as straightforward as it might seem: The current structure of the organiza",
});

export const CaseWidget = () => {
  return (
    <div className="mt-40 w-full relative overflow-hidden flex justify-between rounded-[40px] bg-white py-[43px] pr-[43px] pl-[62px]">
      <div className="flex flex-col justify-between">
        {CASE_ITEMS.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center gap-5 max-w-[30svw]"
          >
            <div
              className="absolute mr-5 top-1/2 -translate-y-1/2 right-full h-[2px] w-[50vw]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 139, 245, 0) 0%, #008BF5 54.24%, #008BF5 100%)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 4px, transparent 4px, transparent 8px)",
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 4px, transparent 4px, transparent 8px)",
              }}
            />
            <div className="p-[23px] bg-background rounded-[16px] max-h-fit relative z-10">
              <BookIcon className="w-6 h-6 text-black" />
            </div>
            <div className="relative z-10">
              <h5 className="font-medium text-[28px] leading-tight">
                {item.title}
              </h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <Link href="/ihedge/preview/dashboard">
          <Button
            variant="ghost"
            className="h-fit w-fit sm:pt-[5px] sm:pr-[5px] sm:pb-[4px] sm:pl-[34px] pt-[5px] pr-[5px] pb-[4px] pl-[34px] rounded-[20px] gap-[15px] bg-[#008BF5] shadow-[0px_10px_54px_0px_#008BF580] text-white hover:bg-[#008BF5]/90 hover:text-white"
          >
            Dashboard
            <div className="p-[23px] bg-[#0074CC] rounded-[15px]">
              <ArrowIcon className="w-6 h-6" />
            </div>
          </Button>
        </Link>
      </div>
      <div className="max-w-[57.5svw] w-full border border-[#C4CFE9] rounded-[40px] p-[15px]">
        <Image
          src="/assets/preview.jpg"
          alt="Hero"
          height={842}
          width={840}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
