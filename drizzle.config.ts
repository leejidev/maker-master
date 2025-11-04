// drizzle-kit이 데이터베이스 스키마를 관리하기 위한 설정 파일

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts", // 스키마 파일이 저장될 디렉토리
  out: "./app/migrations", // 마이그레이션 파일이 저장될 디렉토리
  dialect: "postgresql", // 데이터베이스 엔진 (postgresql은 자동으로 pg 드라이버 사용)
  dbCredentials: {
    url: process.env.DATABASE_URL!, // 데이터베이스 연결 정보
  },
});
