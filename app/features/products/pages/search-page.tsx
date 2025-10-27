import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | Wemake" },
    { name: "description", content: "Search for products in our community" },
  ];
};

export default function SearchPage() {
  return (
    <div className="px-20 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Search Products</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Search for products in our community
        </p>
        <div className="space-y-6">
          {/* Search form and results will be rendered here */}
        </div>
      </div>
    </div>
  );
}
