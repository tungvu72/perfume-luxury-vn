
## Rule ảnh sản phẩm Maison De Son
- 2 ảnh mỗi sản phẩm: (1) chai + hộp, (2) chỉ chai
- Ảnh đại diện luôn là chai + hộp; ảnh phụ là chỉ chai
- Nguồn ưu tiên thống nhất: Amazon
- Không chắc đúng variant/nồng độ/packaging thì để pending, không đoán

## Chốt role Anti / Coder
- Coder (OpenClaw) là lead dự án: code, content, UI/UX, architecture, roadmap
- Anti (Antigravity) chỉ làm: giám sát, audit, inject, build verify, deploy, push, live check
- Anti không viết content và không tự nhận vai trò lead
- File role chuẩn: docs/agent-roles/anti-ops.md

## Quyền vận hành OpenClaw / Anti / Coder (2026-03-15)
- Coder có thể có quyền đọc/ghi repo, chạy exec, git, build khi OpenClaw runtime đã cấp đúng permission.
- Anti được hiểu là phía cài đặt/vận hành OpenClaw cho máy này; có thể nắm quyền cấu hình runtime, gateway, tool permission và mức truy cập hệ thống.
- Phân biệt rõ: quyền trong repo/workspace của Coder != quyền admin/runtime của phía vận hành OpenClaw.
- Khi chưa verify trực tiếp bằng tool/repo, không được trả lời như thể đã kiểm tra xong.
- Với các claim từ Anti về build/deploy/report/artifact, ưu tiên tự check repo/tool trước khi chốt.
