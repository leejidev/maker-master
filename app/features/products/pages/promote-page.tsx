import { Form } from "react-router";
import type { Route } from "./+types/promote-page";
import { Hero } from "~/common/components/hero";
import SelectPair from "~/common/components/select-pair";
import { Label } from "~/common/components/ui/label";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    {
      name: "description",
      content: "Promote your product",
    },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod?.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;
  return (
    <div>
      <Hero
        title="Promote Your Product"
        subtitle="Boost your product's visibility."
      />
      <Form className="max-w-screen-sm mx-auto flex flex-col gap-10 items-center">
        <SelectPair
          label="Select a product"
          description="Select the product you want to promote"
          name="product"
          placeholder="Select a product"
          options={[
            { label: "AI Dark Mode Maker", value: "ai-dark-mode-maker" },
            { label: "AI Image Generator", value: "ai-image-generator" },
            { label: "AI Text Generator", value: "ai-text-generator" },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full">
          <Label className="flex flex-col gap-1">
            Select a range of dates for promotion
            <small className="text-muted-foreground text-center">
              Minimum duration is 3 days.
            </small>
          </Label>
          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <Button disabled={totalDays == 0}>
          Go to checkout ${totalDays * 20}
        </Button>
      </Form>
    </div>
  );
}
