---
name: article-production
description: Produce Maison De Son knowledge articles and article handoffs with strict markdown draft formatting, consistent brand voice, image planning, CTA placement, and Anti-ready delivery. Use when writing or rewriting perfume roundup/listicle, review, comparison, educational, trend, or brand-story content for Maison De Son; when preparing `content/drafts/*.md`; when standardizing article handoff for Anti; or when checking paragraph spacing, image brief structure, CTA placement, and self-review before delivery.
---

# Article Production

Follow this skill when creating or rewriting Maison De Son article content.

## Core output

Create a **content-only** Markdown draft in `content/drafts/` unless the user explicitly asks for another path.

Do **not** paste full articles in chat if a file can be created.

Do **not** add frontmatter unless explicitly requested.

Anti owns:
- frontmatter
- internal link insertion
- image generation / sourcing / placement
- deploy / render check

Coder owns:
- article copy
- structure
- Maison De Son voice
- image brief
- CTA wording direction

## Required workflow

1. Identify article type:
   - roundup/listicle
   - review
   - comparison
   - educational
   - trend
   - brand story
2. Read the references needed for the task:
   - `references/content-standards.md` for structure/length
   - `references/handoff-rules.md` for Anti handoff format
   - `references/image-policy.md` when the article needs image planning
3. Draft the article in `content/drafts/`
4. Add image brief at the end of the draft
5. Self-review before delivery
6. Report only the real file path and what is inside

## Markdown draft rules

Treat each content block as a separate paragraph block.

Mandatory spacing rules:
- Put **one blank line** between every two paragraph blocks
- Put **one blank line above and below every `##` heading**
- Put `Hợp với:`, `Đẹp nhất khi:`, `Không hợp lắm nếu:` each on its **own paragraph block**
- Keep bullet lists as one item per line, with one blank line before the list section

Correct pattern:

```md
## 1. Bleu de Chanel EDP — An toàn, sang và gần như không làm sai bối cảnh

Bleu de Chanel EDP là một lựa chọn rất mạnh cho nam giới đi làm.

Mùi mở đầu sạch, sáng và gọn, sau đó đi dần vào lớp gỗ ấm hơn.

Hợp với: người cần 1 chai all-rounder đi làm

Đẹp nhất khi: dùng trong môi trường văn phòng, gặp khách, đi làm hằng ngày

Không hợp lắm nếu: bạn chỉ thích mùi thật khác biệt hoặc thật cá tính
```

If formatting is likely to be damaged in chat, always prefer file delivery.

## Maison De Son voice rules

Write in Vietnamese.

Write with this tone:
- chuyên nghiệp
- có gu
- thẳng
- không phô trương
- không sáo rỗng

Avoid:
- generic AI phrasing
- press-release tone
- hard-sell affiliate tone
- poetic over-writing
- praise without judgment

Every article should do these things:
- answer user intent early
- include real judgment
- say who it fits and who it does not fit
- stay grounded in Vietnamese climate / usage context when relevant

Use sharp but controlled statements.

Prefer:
- “an toàn, nhưng không hề nhạt”
- “đẹp khi đi làm, nhưng chưa chắc hợp đi tối”
- “ít rủi ro trong khí hậu nóng ẩm”

Avoid filler like:
- “đẳng cấp vượt trội”
- “say đắm mọi ánh nhìn”
- “ai dùng cũng hợp”

## CTA rules

CTA is part of workflow, not just style guidance.

Default rule:
- use **2–4 CTA/article** only when natural
- do not cluster CTAs too closely
- do not use hard-sell wording

Preferred CTA locations:
1. after quick conclusion / quick pick block
2. after a major comparison or selection-help section
3. near the conclusion
4. optional soft CTA after FAQ or buying guidance

Preferred CTA types:
- tư vấn chọn mùi qua Zalo
- xem thêm bài so sánh liên quan
- tham khảo trang sản phẩm / thương hiệu liên quan
- đọc tiếp bài kiến thức liên quan

Avoid CTA styles that sound like direct affiliate pushing.

## Image brief rules

Every draft should end with an image brief block.

For roundup / comparison / review with specific bottles:
- specify bottle-specific needs clearly
- roundup default: **1 hero + 1 image per main bottle** unless user says otherwise

For educational / trend / brand story:
- concept/editorial images are allowed
- still maintain body-image rhythm

At minimum, state:
- total suggested image count
- what each image should show
- purpose of each image
- suggested placement
- alt-text direction if useful

## Self-review checklist

Before delivering, verify:
- article type matches intent
- length fits the selected format
- verdict appears early enough
- paragraphs are short and mobile-readable
- markdown spacing follows the draft rules
- tone sounds like Maison De Son, not generic SEO
- there is real judgment, not only description
- CTA plan is soft and controlled
- image brief exists and matches article type
- file is saved in the correct path

## Delivery format

When done, report briefly with real evidence only:
- file path
- article type
- whether image brief is included

Example:

```text
✅ Draft xong
File: content/drafts/top-7-....md
Type: roundup
Image brief: có
```
