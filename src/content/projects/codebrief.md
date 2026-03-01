---
title: "Codebrief"
description: "A developer-focused newsletter aggregator that summarizes top GitHub trending repos and Hacker News threads daily."
tags: [Node.js, Express, PostgreSQL, Cron]
imageUrl: ""
repoUrl: "https://github.com/yourusername/codebrief"
liveUrl: ""
featured: true
---

## Overview

Codebrief is a developer-focused newsletter aggregator that surfaces trending content from GitHub and Hacker News, delivered as a daily digest.

## Tech Stack

- **Runtime**: Node.js with Express
- **Database**: PostgreSQL
- **Scheduling**: Node-cron for daily digest generation
- **Delivery**: Transactional email via SMTP

## How It Works

1. A cron job fires daily at 06:00 UTC
2. GitHub Trending and HN Top Stories APIs are scraped
3. Content is ranked and deduplicated
4. A digest is assembled and delivered to subscribers

## Key Features

- Configurable topic filters (languages, keywords)
- Subscriber management with unsubscribe support
- Digest archive accessible via web interface
