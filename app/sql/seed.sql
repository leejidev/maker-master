-- Seed data for Maker Master database

-- Jobs
INSERT INTO public.jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location, salary_range, created_at, updated_at) VALUES
  ('Frontend Engineer', 'Build performant web interfaces for our analytics suite.', 'Implement UI components, collaborate with product, ensure accessibility compliance.', '3+ years React, strong TypeScript fundamentals, CSS mastery.', 'Remote stipend, health coverage, stock options.', 'React,TypeScript,Tailwind,Testing Library', 'Nova Metrics', 'https://cdn.example.com/logos/nova.svg', 'San Francisco, CA', 'https://careers.nova.dev/frontend-engineer', 'full-time', 'hybrid', '$120,000 - $150,000', '2024-10-01 09:00:00', '2024-10-05 18:00:00'),
  ('Backend Engineer', 'Design resilient APIs and data pipelines.', 'Own API design, optimize queries, maintain observability tooling.', 'Experience with Node.js services and PostgreSQL.', 'Flexible PTO, equipment budget.', 'Node.js,PostgreSQL,AWS,OpenTelemetry', 'Flux Systems', 'https://cdn.example.com/logos/flux.svg', 'New York, NY', 'https://jobs.flux.io/backend-engineer', 'full-time', 'in-person', '$150,000 - $250,000', '2024-09-12 10:00:00', '2024-09-18 12:00:00'),
  ('Product Designer', 'Create thoughtful user experiences across web and mobile.', 'Lead discovery workshops, produce high-fidelity prototypes.', 'Portfolio demonstrating shipped products, proficiency in Figma.', 'Quarterly wellness credit, mentorship program.', 'Figma,User Research,Prototyping,Design Systems', 'Orbit Labs', 'https://cdn.example.com/logos/orbit.svg', 'Remote', 'https://orbit.design/careers/product-designer', 'full-time', 'remote', '$100,000 - $120,000', '2024-08-10 11:30:00', '2024-08-15 14:45:00'),
  ('Growth Marketer', 'Drive sustainable growth loops and campaign strategies.', 'Experiment across channels, analyze funnels, report performance.', 'Experience scaling SaaS, strong analytical mindset.', 'Learning stipend, quarterly offsites.', 'Lifecycle Marketing,SQL,Amplitude,Copywriting', 'Pulse CRM', 'https://cdn.example.com/logos/pulse.svg', 'Austin, TX', 'https://pulsecrm.com/careers/growth-marketer', 'full-time', 'hybrid', '$70,000 - $100,000', '2024-07-05 08:00:00', '2024-07-09 08:00:00'),
  ('DevOps Engineer', 'Maintain CI/CD pipelines and cloud infrastructure.', 'Automate deployments, manage IaC, enforce security baselines.', 'Expertise with Terraform, Kubernetes.', '401k match, home office allowance.', 'Terraform,Kubernetes,GitHub Actions,Prometheus', 'Stack Forge', 'https://cdn.example.com/logos/stackforge.svg', 'Seattle, WA', 'https://stackforge.dev/jobs/devops-engineer', 'full-time', 'hybrid', '$150,000 - $250,000', '2024-10-21 13:15:00', '2024-10-21 13:15:00');

-- Categories
INSERT INTO public.categories (name, description, created_at, updated_at) VALUES
  ('Productivity', 'Tools that streamline workflows and automate repetitive tasks.', '2024-09-10 09:00:00', '2024-09-10 09:00:00'),
  ('Design', 'Resources crafted to elevate visual and UX design practices.', '2024-09-11 10:30:00', '2024-09-11 10:30:00'),
  ('Developer Tools', 'Infrastructure and utilities that improve developer efficiency.', '2024-09-12 12:45:00', '2024-09-12 12:45:00'),
  ('Marketing', 'Platforms that boost acquisition, activation, and retention.', '2024-09-13 08:15:00', '2024-09-13 08:15:00'),
  ('AI', 'Intelligent assistants delivering personalized automation.', '2024-09-14 13:20:00', '2024-09-14 13:20:00');

-- Products
INSERT INTO public.products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id, created_at, updated_at) VALUES
  ('FocusLayer', 'Automate your deep work sprints.', 'FocusLayer helps teams schedule uninterrupted focus blocks with AI scheduling.', 'Connect calendars, define focus rules, let the assistant orchestrate sprints.', 'https://cdn.example.com/icons/focuslayer.svg', 'https://focuslayer.app', '{"views":1200,"reviews":24}'::jsonb, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 1, '2024-09-20 09:00:00', '2024-09-25 09:00:00'),
  ('SketchSync', 'Design feedback without friction.', 'SketchSync centralizes stakeholder feedback directly inside your canvas.', 'Invite reviewers, gather annotations, sync decisions instantly.', 'https://cdn.example.com/icons/sketchsync.svg', 'https://sketchsync.design', '{"views":845,"reviews":12}'::jsonb, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 2, '2024-09-20 10:00:00', '2024-09-23 10:00:00'),
  ('DevPulse', 'CI insights in real-time.', 'DevPulse aggregates CI/CD metrics and highlights risky deployments.', 'Ingest pipeline events, learn from incidents, flag anomalies.', 'https://cdn.example.com/icons/devpulse.svg', 'https://devpulse.dev', '{"views":1520,"reviews":33}'::jsonb, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 3, '2024-09-21 11:15:00', '2024-09-24 12:00:00'),
  ('GrowthLoop', 'Launch experiments fast.', 'GrowthLoop bundles templates for lifecycle campaigns and runbooks.', 'Select a playbook, set triggers, launch across channels.', 'https://cdn.example.com/icons/growthloop.svg', 'https://growthloop.marketing', '{"views":670,"reviews":8}'::jsonb, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 4, '2024-09-22 09:45:00', '2024-09-22 09:45:00'),
  ('PromptSmith', 'Craft better prompts collaboratively.', 'PromptSmith enables teams to version, review, and deploy AI prompts.', 'Create prompt libraries, simulate outputs, track usage.', 'https://cdn.example.com/icons/promptsmith.svg', 'https://promptsmith.ai', '{"views":990,"reviews":15}'::jsonb, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 5, '2024-09-23 14:20:00', '2024-09-26 16:10:00');

-- Product Upvotes (composite primary key)
INSERT INTO public.product_upvotes (product_id, profile_id) VALUES
  (1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00');

-- Reviews
INSERT INTO public.reviews (product_id, profile_id, rating, review, created_at, updated_at) VALUES
  (1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 5, 'Boosted our teams productivity within a week.', '2024-09-28 09:00:00', '2024-09-28 09:00:00'),
  (2, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 4, 'Streamlined stakeholder feedback for design reviews.', '2024-09-28 10:30:00', '2024-09-28 10:30:00'),
  (3, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 5, 'Essential for monitoring release quality.', '2024-09-29 08:15:00', '2024-09-29 08:15:00'),
  (4, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 4, 'Great starting point for lifecycle experiments.', '2024-09-29 11:45:00', '2024-09-29 11:45:00'),
  (5, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 5, 'Prompt collaboration finally feels organized.', '2024-09-30 13:00:00', '2024-09-30 13:00:00');

-- GPT Ideas
INSERT INTO public.gpt_ideas (idea, views, claimed_at, claimed_by, created_at) VALUES
  ('Voice-driven standup summaries for async teams.', 245, '2024-09-30 08:00:00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-09-25 07:45:00'),
  ('AI coach that pairs junior devs with code review snippets.', 198, NULL, NULL, '2024-09-25 08:00:00'),
  ('Automated sentiment analysis for customer interviews.', 410, '2024-10-01 09:30:00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-09-25 08:30:00'),
  ('Dynamic product roadmap generator from support tickets.', 320, NULL, NULL, '2024-09-25 09:00:00'),
  ('Meeting note assistant with action item tracking.', 500, '2024-10-02 10:15:00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-09-25 09:30:00');

-- GPT Ideas Likes (composite primary key)
INSERT INTO public.gpt_ideas_likes (gpt_idea_id, profile_id) VALUES
  (1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00');

-- Topics
INSERT INTO public.topics (name, slug, created_at) VALUES
  ('Product Launches', 'product-launches', '2024-08-01 09:00:00'),
  ('Founder Stories', 'founder-stories', '2024-08-02 10:00:00'),
  ('Growth Experiments', 'growth-experiments', '2024-08-03 11:00:00'),
  ('Team Building', 'team-building', '2024-08-04 12:00:00'),
  ('AI Workflows', 'ai-workflows', '2024-08-05 13:00:00');

-- Posts
INSERT INTO public.posts (title, content, created_at, updated_at, topic_id, profile_id) VALUES
  ('How We Launched FocusLayer in 30 Days', 'Sharing the sprint breakdown and lessons from shipping FocusLayer fast.', '2024-10-01 09:00:00', '2024-10-02 09:00:00', 1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00'),
  ('From Idea to Prototype: SketchSync Journey', 'Iterating through dozens of prototypes before landing on SketchSync.', '2024-10-03 10:15:00', '2024-10-04 11:00:00', 2, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00'),
  ('Growth Experiments that Failed', 'A candid breakdown of experiments that did not move the needle.', '2024-10-05 12:30:00', '2024-10-06 12:30:00', 3, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00'),
  ('Building Remote Rituals', 'How we keep distributed teams aligned and motivated.', '2024-10-07 14:00:00', '2024-10-07 14:00:00', 4, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00'),
  ('Prompt Engineering Playbook', 'Frameworks we use to craft prompts for PromptSmith.', '2024-10-09 16:45:00', '2024-10-10 16:45:00', 5, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00');

-- Post Replies
INSERT INTO public.post_replies (post_id, parent_id, profile_id, reply, created_at, updated_at) VALUES
  (1, NULL, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Thanks for outlining the launch checklist—super helpful!', '2024-10-11 09:30:00', '2024-10-11 09:30:00'),
  (1, 1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Happy to share templates if anyone needs them.', '2024-10-11 10:00:00', '2024-10-11 10:00:00'),
  (2, NULL, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Prototype iterations were intense but worth it.', '2024-10-12 08:45:00', '2024-10-12 08:45:00'),
  (3, NULL, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Documenting failures keeps us honest.', '2024-10-13 12:00:00', '2024-10-13 12:00:00'),
  (5, NULL, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Running prompt reviews weekly is a game changer.', '2024-10-14 15:20:00', '2024-10-14 15:20:00');

-- Post Upvotes (composite primary key)
INSERT INTO public.post_upvotes (post_id, profile_id) VALUES
  (1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00');

-- Teams
INSERT INTO public.teams (product_name, team_size, equity_split, product_stage, roles, product_description, created_at, updated_at) VALUES
  ('FocusLayer', 5, 20, 'mvp', 'Product Manager,Frontend Engineer,Backend Engineer,Designer,Marketing', 'AI-assisted focus workflow tool for product teams.', '2024-10-01 09:00:00', '2024-10-02 09:00:00'),
  ('SketchSync', 4, 25, 'prototype', 'Designer,Frontend Engineer,Researcher,Product Manager', 'Collaborative feedback layer for design platforms.', '2024-10-03 10:30:00', '2024-10-04 10:30:00'),
  ('DevPulse', 6, 18, 'product', 'Backend Engineer,Data Scientist,DevOps,Product Manager,Designer,Support', 'DevOps intelligence dashboard for continuous delivery teams.', '2024-10-05 12:00:00', '2024-10-05 12:00:00'),
  ('GrowthLoop', 3, 33, 'idea', 'Growth Marketer,Engineer,Designer', 'Experiment automation platform for SaaS marketers.', '2024-10-06 14:20:00', '2024-10-06 14:20:00'),
  ('PromptSmith', 5, 20, 'mvp', 'Prompt Engineer,Product Manager,Frontend Engineer,Backend Engineer,QA', 'Prompt lifecycle management for AI-focused teams.', '2024-10-08 16:45:00', '2024-10-09 08:30:00');


-- 아직 실행하지 않음 --------------------------------------------------------------
-- Message Rooms
INSERT INTO public.message_rooms (created_at) VALUES
  ('2024-10-01 08:00:00'),
  ('2024-10-02 08:00:00'),
  ('2024-10-03 08:00:00'),
  ('2024-10-04 08:00:00'),
  ('2024-10-05 08:00:00');

-- Message Room Members (composite primary key)
INSERT INTO public.message_room_members (message_room_id, profile_id, created_at) VALUES
  (1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-10-01 08:05:00');

-- Messages
INSERT INTO public.messages (message_room_id, sender_id, content, created_at) VALUES
  (1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Morning! Syncing on todays launch tasks.', '2024-10-01 08:10:00'),
  (1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Drafted the announcement copy for review.', '2024-10-01 08:30:00'),
  (2, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Uploading new design iterations tonight.', '2024-10-02 20:45:00'),
  (3, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Deploying the latest build now.', '2024-10-03 14:15:00'),
  (4, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'Reminder: retro at 4 PM tomorrow.', '2024-10-04 09:30:00');

-- Notifications
INSERT INTO public.notifications (source_id, product_id, post_id, target_id, type, created_at) VALUES
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 1, NULL, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'review', '2024-10-05 09:00:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', NULL, 1, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'reply', '2024-10-05 10:00:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 2, NULL, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'mention', '2024-10-06 11:15:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', NULL, 2, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'reply', '2024-10-07 13:45:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 3, 3, '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', 'follow', '2024-10-08 15:30:00');

-- Follows
INSERT INTO public.follows (follower_id, following_id, created_at) VALUES
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-06-01 08:00:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-07-01 09:30:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-08-01 11:15:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-09-01 14:45:00'),
  ('4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '4b64bad3-95a0-41ff-9ace-7b62b4bbed00', '2024-10-01 16:00:00');
