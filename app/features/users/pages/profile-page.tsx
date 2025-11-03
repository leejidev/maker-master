import type { Route } from "./+types/profile-page";

export const meta: Route.MetaFunction = () => [{ title: "Profile | wemake" }];

export default function ProfilePage() {
  return (
    <div className="max-w-screen-md flex flex-col space-y-10">
      <div className="space-y-2">
        <h4 className="text-lg font-bold">Headline</h4>
        <p className="text-muted-foreground">
          I'm a backend developer based on the Korea, I like doing backend
          development, API development and database design.
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-bold">About</h4>
        <p className="text-muted-foreground">
          I'm a backend developer based on the Korea, I like doing backend
          development, API development and database design.
        </p>
      </div>
    </div>
  );
}
