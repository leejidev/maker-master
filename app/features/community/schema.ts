import {
  type AnyPgColumn,
  bigint,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";

export const topics = pgTable("topics", {
  topic_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  slug: text().notNull(), // URL에 name 대신 표시할 'name의 URL 친화적인 버전'을 저장하는 컬럼
  created_at: timestamp().notNull().defaultNow(),
});

export const posts = pgTable("posts", {
  post_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  content: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  topic_id: bigint({ mode: "number" }).references(() => topics.topic_id, {
    onDelete: "cascade",
  }),
  profile_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
});

export const postUpvotes = pgTable(
  "post_upvotes",
  {
    post_id: bigint({ mode: "number" }).references(() => posts.post_id, {
      onDelete: "cascade",
    }),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "cascade",
    }),
  },
  // 제약 조건 설정: 두 개의 컬럼을 기반으로 기본 키 설정
  table => [primaryKey({ columns: [table.post_id, table.profile_id] })]
);

export const postReplies = pgTable("post_replies", {
  post_reply_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  post_id: bigint({ mode: "number" }).references(() => posts.post_id, {
    onDelete: "cascade",
  }),
  // 댓글의 부모 댓글 ID를 저장하는 컬럼
  parent_id: bigint({ mode: "number" }).references(
    // 자기 자신을 참조(자체 참조)하기 위해 사용하는 타입 AnyPgColumn 선언
    (): AnyPgColumn => postReplies.post_reply_id,
    {
      onDelete: "cascade",
    }
  ),
  profile_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(),
  reply: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
