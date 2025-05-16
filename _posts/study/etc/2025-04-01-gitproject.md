---
layout: post
title: 📘 [Git] Project Pratice
image:
  path: /assets/img/thumbnail/b4-thumbnail.jpg
categories:
  - study
  - etc
related_posts:
  - _posts/study/etc/2025-02-25-gitcmd.md
description: 혼자서 협업처럼 Git 연습하기
published: true
date: 2025-04-01
tags:
  - git
sitemap: true
---

# 📘 [Git] 혼자서 협업처럼 Git 연습하기

---

## 🧠 시작하며

혼자 프로젝트를 하면서도 **협업하는 것처럼 Git을 쓰는 습관**은 나중에 팀 프로젝트에 참여할 때 큰 도움이 됩니다.  
이번에는 제가 직접 혼자서 협업 환경을 연습해보기 위해 설정한 흐름을 정리해봅니다.

---

### 📝 브랜치 개요

---

- `main` : 배포용 (항상 안정된 상태 유지)
- `dev` : 통합 개발용 (기능 브랜치를 여기로 merge)
- `feature/*` : 기능 개발 브랜치 (기능별 세분화)

---

## 🔄 1. 프로젝트 구조 만들기

---

```bash
git add .
git commit -m "init commit"
git branch -M main
git remote add origin [원격 저장소 주소]
git push -u origin main
```

---

## 🌿 2. `dev` 브랜치 생성 (협업용 개발 브랜치)

---

```bash
git checkout -b dev
git push -u origin dev
```

- 이제 **개발 작업은 모두 `dev`에서 시작**합니다.
- `main`은 오직 **리뷰 및 테스트 완료된 코드만 머지**합니다.

---

## 🛠️ 3. 기능 브랜치 나눠서 작업하기

---

```bash
git checkout -b feature/search
git add .
git commit -m "검색 기능 구현"
git push -u origin feature/search
```

```bash
git checkout -b feature/submenu
git add .
git commit -m "서브 메뉴 구현"
git push -u origin feature/submenu
```

* 기능 단위로 `feature/*` 브랜치를 생성하여 작업하고, 완료되면 `dev`로 PR(Pull Request)합니다.

---

## 🔁 4. PR 시뮬레이션: `feature` → `dev` → `main`

---

1. `feature/search` → `dev`로 Pull Request
2. 혼자지만 **코드 리뷰 시뮬레이션** (자신에게 코멘트 달기)
3. `merge` 완료 후 `dev` 확인
4. `dev`에서 일정 수준 통합되면 → `main`으로 배포

```bash
# 배포 전 병합 (테스트 완료 가정)
git checkout main
git merge dev
git push origin main
```

---

## ⚔️ 5. 충돌 상황 일부러 만들어보기

---

`feature/search` 와 `feature/submenu` 같은 부분을 수정후 commit 상황에서 merge를 해볼것이다.

각 브랜치에서 수정 파일이 같을때 수정 위치가 다르면 `merge` 가능
but 수정한 위치가 같으면 충돌이 일어난다.

1. `feature/search`에서 같은 파일 일부 수정 후 `commit`
2. `feature/submenu`에서도 같은 부분 수정 후 `commit`
3. 두 브랜치를 `dev`에 merge할 때 **충돌 발생**
4. `git status` 보고 수동으로 충돌 해결

```bash
git checkout dev
git merge feature/search
git merge feature/submenu
# >> 충돌 발생
# 파일 수정 후:
git add .
git commit -m "충돌 해결"
```

---

## 📦 6. 브랜치 전략 시각화

---

```
main (배포)
│
├── dev (통합 개발)
│   ├── feature/search
│   ├── feature/submenu
│   └── feature/user-profile
```

---

## 💬 마무리

---

Git 관리는 나의 코드를 관리하고 작업물을 자세히 기록하는 공간입니다.
혼자서 Git을 관리할때 보다 팀 단위로 협업을 할때 그 중요성은 더 크게 느낄것입니다.
실무에서 협업은 브랜치 전략부터 리뷰 방식까지 모두 중요합니다.  
혼자라도 이런 흐름을 연습해두면 **실제 팀 프로젝트에서도 빠르게 적응**할 수 있습니다.

---
## 📑 Reference

---

- [Git 브랜치 전략 완전정복](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://docs.github.com/ko/get-started/quickstart/github-flow)

---

