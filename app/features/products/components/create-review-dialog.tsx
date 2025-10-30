import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/common/components/ui/dialog";
import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Label } from "~/common/components/ui/label";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          What do you think of this product?
        </DialogTitle>
        <DialogDescription>
          Please write a review for the product.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1">
            Rating
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex mt-5">
            {[1, 2, 3, 4, 5].map(star => (
              <label
                key={star}
                className="relative hover:cursor-pointer"
                onMouseEnter={() => setHoveredStar(star)} // hover중인 위치를 파악
                onMouseLeave={() => setHoveredStar(0)} // hover 중인 위치를 초기화
              >
                <StarIcon
                  className="size-5 text-yellow-400"
                  fill={
                    hoveredStar >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  required
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)} // 현재 별점
                />
              </label>
            ))}
          </div>
        </div>
        <InputPair
          textArea
          required
          label="Review"
          description="Maximum 1000 characters"
          placeholder="Tell us more about your experience with this product."
        />
        <DialogFooter>
          <Button type="submit">Submit Review</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}
