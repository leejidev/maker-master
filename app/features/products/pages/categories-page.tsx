import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Wemake" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="px-20 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Categories</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Browse products by category
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category cards will be rendered here */}
        </div>
      </div>
    </div>
  );
}
