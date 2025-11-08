import { DateTime } from "luxon";
import client from "~/supa-client";

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit, // 한 페이지에 보여줄 상품 수
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(
      `
        product_id,
        name,
        description,
        upvotes:stats->>upvotes,
        views:stats->>views,
        reviews:stats->>reviews
    `
    )
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO())
    // 필터링 후 정렬하면 속도가 더 빠르다.
    .order("stats->>upvotes", { ascending: false }) // 가장 많은 좋아요를 받은 상품부터 보여준다.
    .limit(limit);
  if (error) throw error;
  return data;
};
