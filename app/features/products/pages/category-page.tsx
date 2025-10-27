import { type MetaFunction } from "react-router";
import type { Route } from "./+types/category-page";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data.category} | Wemake` },
    { name: "description", content: `Products in ${data.category} category` },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  return {
    category: params.category,
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { category } = loaderData;

  return (
    <div className="px-20 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 capitalize">{category}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Products in {category} category
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category products will be rendered here */}
        </div>
      </div>
    </div>
  );
}
