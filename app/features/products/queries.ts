import { DateTime } from "luxon";
import client from "~/supa-client";
import { PAGE_SIZE } from "./constants";

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit, // 한 페이지에 보여줄 상품 수
  page = 1, // 페이지 번호
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit?: number;
  page?: number;
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
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1); // 해당 페이지에 보여줄 상품 범위
  if (error) throw error;
  return data;
};

export const getProductPagesByDateRange = async ({
  startDate,
  endDate,
}: {
  startDate: DateTime;
  endDate: DateTime;
}) => {
  const { count, error } = await client
    .from("products")
    .select(`product_id`, { count: "exact", head: true })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO());
  if (error) throw error;
  if (!count) return 1;
  return Math.ceil(count / PAGE_SIZE);
};
