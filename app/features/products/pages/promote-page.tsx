import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    { name: "description", content: "Promote your product to get more visibility" },
  ];
};

export default function PromotePage() {
  return (
    <div className="px-20 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Promote Product</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Promote your product to get more visibility
        </p>
        <div className="space-y-6">
          {/* Promotion form will be rendered here */}
        </div>
      </div>
    </div>
  );
}
