import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/iHedge/ui";

export function FAQ() {
  return (
    <div className="mt-[150px] px-5 lg:px-[60px] 2xl:px-[100px] flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2 mt-auto">
        <h2
          className="text-[clamp(120px,20vw,400px)] font-medium leading-none w-full bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #C4CFE9 40.07%, rgba(196, 207, 233, 0) 100.01%)",
          }}
        >
          FAQ
        </h2>
      </div>
      <div className="md:w-1/2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger index={1}>
              Who are the asset managers behind iHedge?
            </AccordionTrigger>
            <AccordionContent>
              The iHedge investment team is a group of pragmatic,
              forward-looking traders and asset managers with deep experience in
              both traditional and crypto markets. With over 10 years of
              expertise — including navigating major bull runs, crashes, and
              structural shifts — the team applies a hands-on, dynamic approach
              to portfolio management. We blend data-driven decision making with
              real-time market awareness, executing active strategies across CEX
              and DEX. While we embrace automation, every trade is guided by
              human judgment and risk controls.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger index={2}>
              What&apos;s the minimum investment?
            </AccordionTrigger>
            <AccordionContent>
              The minimum investment amount starts at 100 USDT, making
              professional crypto fund management accessible to retail
              investors.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger index={3}>
              What are the management and performance fees, and how are they
              charged?
            </AccordionTrigger>
            <AccordionContent>
              We charge a competitive management fee annually, along with a
              performance fee applied only on profits above the high-water mark.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger index={4}>
              How often will my portfolio be updated?
            </AccordionTrigger>
            <AccordionContent>
              Your portfolio is rebalanced regularly based on market conditions
              and our algorithmic strategies, typically on a weekly or monthly
              basis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger index={5}>What are the risks?</AccordionTrigger>
            <AccordionContent>
              As with any investment, there are market risks involved.
              Cryptocurrency markets can be volatile, and past performance does
              not guarantee future results.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
