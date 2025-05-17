---
layout: post
title: 📘 [GithubPages] Jekyll Hydejack 블로그 SEO 최적화 방법
description: Jekyll Hydejack 블로그에서 검색엔진 최적화를 위해 적용한 방법을 정리합니다. 메타 태그, sitemap 설정, 페이지 속도 최적화까지 실제 적용한 팁을 담았습니다.
date: 2025-05-17
related_posts:
  - _posts/study/etc/2025-02-26-markdown-001.md
  - _posts/study/etc/2025-03-02-githubpages-002.md
  - _posts/study/etc/2025-03-03-githubpages-003.md
  - _posts/study/etc/2025-03-05-githubpages-004.md
  - _posts/study/etc/2025-03-07-githubpages-005.md
  - _posts/study/etc/2025-03-08-githubpages-006.md
  - _posts/study/etc/2025-03-10-githubpages-007.md
  - _posts/study/etc/2025-03-15-githubpages-008.md
categories:
  - study
  - etc
tags:
  - jekyll
  - seo
  - githubpages
image:
  path: /assets/img/thumbnail/seo-thumbnail.png
  alt: Jekyll SEO 최적화 가이드 썸네일
sitemap: true
published: true
---

# 📘 Jekyll Hydejack 블로그 SEO 최적화 방법

Hydejack 테마 기반의 Jekyll 블로그를 운영하면서 **검색엔진에 잘 노출되도록 만들기 위한 SEO 최적화** 작업을 정리해봤다.

루트 디렉터리 Gemfile을 열어보면 jekyll-sitemap, jekyll-feed 플러그인이 추가 되어 있다면 `bundle install` 통해서 추가가 되었을 것이다.
설치가 되어있다면 sitemap.xml, feed.xml이 자동으로 생성된다. 자세한건 아래 내용에 설명되어 있다.
두 플러그인 모두 `GitHub Pages`에서 공식 지원한다. 🔗 [https://pages.github.com/versions/](https://pages.github.com/versions/)

---
## ✅ 1. 포스트 메타데이터 설정

각 포스트 상단 Front Matter에 다음 요소를 반드시 추가했다:

```yaml
title: "포스트 제목"
description: "이 글에 대한 간략한 요약 설명"
image:
  path: /assets/img/썸네일.jpg
  alt: "썸네일 설명"
sitemap: true
```

- `description` → 구글 검색 요약에 사용됨
- `image` → SNS 미리보기 카드용
- `sitemap: true` → 자동 sitemap.xml 생성됨

---

## ✅ 2. 메타 태그 확인

Hydejack 테마는 다음과 같이 메타 태그가 자동으로 처리가 된다.
확인 방법은 내 블로그 주소에서 개발자도구(f12)에 들어가서 `<head>` 부분을 보면 알수 있다.

```html
<meta name="description" content="{{ page.description | default: site.description }}">
<meta property="og:title" content="{{ page.title }}">
<meta property="og:description" content="{{ page.description }}">
<meta property="og:image" content="{{ page.image.path | relative_url }}">
```

## ✅ 3. `Sitemap.xml` `feed.xml` & robots.txt

Hydejack는 `sitemap: true`이면 Jekyll sitemap 플러그인을 통해 자동 생성됩니다. 

- `https://domain/sitemap.xml` ← 생성되면 OK
- `https://domain/feed.xml` ← 생성되면 OK
- `https://domain/robots.txt` ← 생성되면 OK
-  직접 생성하고 싶다면 루트 디렉터리에 `robots.txt`에 다음이 포함되도록 설정

```txt
User-agent: *
Allow: /
Sitemap: https://domain/sitemap.xml
```

## ✅ 4. URL 구조 최적화

- 짧고 명확한 permalink 사용
- 예: `/tags/seo-guide/` 또는 `/study/github-seo/`

---

## ✅ 5. 카테고리/태그 페이지에도 설명 추가

- `tags.md`, `study.md`, `dev.md` 등의 카테고리 페이지에 `description:` 추가
- 태그 페이지는 `slug` 정리하여 SEO-friendly URL 구성
- 태그/카테고리 페이지에서 관련 글 자동 연결 (`related_posts:` 사용 가능)

---

## ✅ 6. 내부 링크 적극 활용

- 관련 글 하단에 prev/next 버튼 추가
- 포스트 내에서 다른 글을 링크해 탐색 유도

---

## ✅ 7. Google Search Console 등록

#### 🔗 [https://search.google.com/search-console](https://search.google.com/search-console) 접속
### 📝 URL 접두어 : github 블로그 주소 입력

![|754x590](https://i.imgur.com/1P25zNn.png)

### 📝 소유권 인증


![|885x348](https://i.imgur.com/r4U3Rch.png)

```html
<meta name="google-site-verification" content="내코드" />
```

```yml
# file: '_config.yml'
# SEO Tag
# ---------------------------------------------------------------------------------------

# Where you proof that you own this site (used by jekyll-seo-tag)
google_site_verification: "content코드 입력"
```

### 📝 소유권 확인 완료

![|908x395](https://i.imgur.com/sEi7TS0.png)

### 📝 sitemaps 메뉴에서 `sitemap.xml` `feed.xml` 제출

![|925x230](https://i.imgur.com/wdnNNWR.png)

* [naver webmaster](https://searchadvisor.naver.com/console/board)도 구글처럼 간단하게 등록할 수 있으니까 참고 바랍니다.

---

## ✅ 8. SNS 공유 카드 구성

- `og:title`, `og:description`, `og:image` 자동 생성
- 썸네일은 1200x630px 권장

---

## ✍️ 느낀점

처음에는 SEO가 어렵게 느껴졌지만, Jekyll과 Hydejack의 구조를 이해하고 나니  
메타데이터만 잘 설정해도 충분히 좋은 성과를 낼 수 있었다.

앞으로는 **구글 서치콘솔에서의 유입 키워드 확인**과  
**태그 구조 개선**을 통해 더 좋은 검색 결과를 만들 계획이다.

---
