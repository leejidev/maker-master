import { Link } from "react-router";
import { Card, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface TeamCardProps {
  id: string;
  leaderUsername: string;
  leaderAvatarUrl: string;
  leaderAvatarFallback: string;
  projectDescription: string;
  positions: string[];
}

export function TeamCard({
  id,
  leaderUsername,
  leaderAvatarUrl,
  leaderAvatarFallback,
  projectDescription,
  positions,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="bg-transparent transition-colors hover:bg-accent/50">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge variant="secondary" className="inline-flex shadow-sm items-center text-base">
              <span>@{leaderUsername}</span>
              <Avatar className="size-5">
                <AvatarFallback>{leaderAvatarFallback}</AvatarFallback>
                <AvatarImage src={leaderAvatarUrl} />
              </Avatar>
            </Badge>
            <span> is looking for</span>
            {positions.map((position, index) => (
              <Badge key={index} className="text-base">
                {position}
              </Badge>
            ))}
            <span> to build </span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link" className="text-cyan-500">
            Join team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
