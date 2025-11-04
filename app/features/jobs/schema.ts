import { bigint, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "./constants";

/*
 * pgEnum은 PostgreSQL의 Enum 타입을 정의하는 데 사용되며, Enum 타입은 정해진 값들 중 하나만 선택할 수 있는 타입이다.
 * JOB_TYPES와 LOCATION_TYPES는 상수 배열로 정의되어 있으므로, map 메서드를 사용하여 데이터베이스에 저장될 value 값들만 추출하여 pgEnum의 인자로 전달한다.
 * as [string, ...string[]]는 pgEnum의 인자로 전달된 값들의 타입을 명시적으로 지정하는 것이다.
 * [string, ...string[]]는 string 타입의 배열이며, ...string[]은 배열의 크기가 정해져 있지 않은 경우를 의미한다.
 */
export const jobTypes = pgEnum(
  "job_type",
  JOB_TYPES.map(type => type.value) as [string, ...string[]]
);

export const locations = pgEnum(
  "location",
  LOCATION_TYPES.map(type => type.value) as [string, ...string[]]
);

export const salaryRanges = pgEnum("salary_range", SALARY_RANGE);

export const jobs = pgTable("jobs", {
  // SQL에서는 컬럼명을 snake_case로 작성하는 것이 관례이므로 camelCase로 작성하지 않았다.
  job_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  position: text().notNull(),
  overview: text().notNull(),
  responsibilities: text().notNull(),
  qualifications: text().notNull(),
  benefits: text().notNull(),
  skills: text().notNull(),
  company_name: text().notNull(),
  company_logo: text().notNull(),
  company_location: text().notNull(),
  apply_url: text().notNull(),
  job_type: jobTypes().notNull(),
  location: locations().notNull(),
  salary_range: salaryRanges().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
