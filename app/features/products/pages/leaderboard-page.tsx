import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/leaderboard-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Top products ranked by our community" },
  ];
};

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        subtitle="Top products ranked by our community"
      />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Daily Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products of the day.</p>
          <Button variant="link" asChild className="text-lg p-0 text-cyan-500">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={102}
              votesCount={25}
            />
          ))}
          <Button variant="link" asChild className="text-lg self-center text-cyan-500">
            <Link to="/products/leaderboards/daily">Explore all products &rarr;</Link>
          </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Weekly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products of the week.</p>
          <Button variant="link" asChild className="text-lg p-0 text-cyan-500">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={102}
              votesCount={25}
            />
          ))}
          <Button variant="link" asChild className="text-lg self-center text-cyan-500">
            <Link to="/products/leaderboards/weekly">Explore all products &rarr;</Link>
          </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Monthly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products of the month.</p>
          <Button variant="link" asChild className="text-lg p-0 text-cyan-500">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={102}
              votesCount={25}
            />
          ))}
          <Button variant="link" asChild className="text-lg self-center text-cyan-500">
            <Link to="/products/leaderboards/monthly">Explore all products &rarr;</Link>
          </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Yearly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products of the year.</p>
          <Button variant="link" asChild className="text-lg p-0 text-cyan-500">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductCard
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={102}
              votesCount={25}
            />
          ))}
          <Button variant="link" asChild className="text-lg self-center text-cyan-500">
            <Link to="/products/leaderboards/yearly">Explore all products &rarr;</Link>
          </Button>
      </div>
    </div>
  );
}
