"use client";

import * as React from "react";
import { ChevronDownIcon } from "@/components/iHedge/ui";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "mb-[10px] last:mb-0 rounded-[16px] bg-white px-4 shadow-none",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  index,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  index?: number;
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-[28px] font-medium leading-[125%] tracking-normal transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <span className="flex items-center gap-4">
          {index !== undefined && (
            <span className="text-muted-foreground text-xs font-normal tabular-nums">
              {String(index).padStart(2, "0")}
            </span>
          )}
          {children}
        </span>
        <div className="p-[23px] bg-background rounded-[11px] shrink-0 ">
          <ChevronDownIcon className="pointer-events-none size-4 text-black transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-[20px] font-normal leading-[125%] tracking-normal text-second data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
