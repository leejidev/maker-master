CREATE VIEW community_post_list_view AS
SELECT
  posts.post_id,
  posts.title,
  posts.created_at,
  topics.name AS topic,
  profiles.name AS author,
  profiles.avatar AS author_avatar,
  profiles.username AS author_username,
  posts.upvotes
FROM posts
INNER JOIN topics USING (topic_id)
INNER JOIN profiles USING (profile_id);

-- view 확인
SELECT * FROM community_post_list_view;

-- 기존 view 삭제
-- DROP VIEW IF EXISTS community_post_list_view;