import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | Wemake" },
    { name: "description", content: "Submit your product to our community" },
  ];
};

export default function SubmitPage() {
  return (
    <div className="px-20 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Submit Product</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Submit your product to our community
        </p>
        <div className="space-y-6">
          {/* Submit form will be rendered here */}
        </div>
      </div>
    </div>
  );
}
