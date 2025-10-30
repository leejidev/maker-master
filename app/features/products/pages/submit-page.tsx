import { Form } from "react-router";
import type { Route } from "./+types/submit-page";
import { Hero } from "~/common/components/hero";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product" },
  ];
};

export default function SubmitPage() {
  return (
    <div>
      <Hero title="Submit Your Product" subtitle="Share your product with the world" />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-4">
          <InputPair label="Name" description="This is the name of your product" id="name" name="name" type="text" required placeholder="Name of your product" />
          <InputPair label="Tagline" description="60 characters or less" id="tagline" name="tagline" type="text" required placeholder="A concise description of your product" />
          <InputPair label="URL" description="The URL of your product" id="url" name="url" type="text" required placeholder="https://www.example.com" />
          <InputPair textArea label="Description" description="A detailed description of your product" id="description" name="description" type="text" required placeholder="A detailed description of your product" />
          <SelectPair name="category" required label="Category" description="The category of your product" placeholder="Select a category" options={[{ label: "Software", value: "software" }, { label: "Hardware", value: "hardware" }, { label: "Service", value: "service" }]} />
        </div>
      </Form>
    </div>
  );
}
