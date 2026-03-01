---
title: "DevCal"
description: "A CLI tool for syncing GitHub milestones and project deadlines to Google Calendar. Written in Python with Click."
tags: [Python, Click, GitHub API, Google API]
imageUrl: ""
repoUrl: "https://github.com/yourusername/devcal"
liveUrl: ""
featured: false
---

## Overview

DevCal is a command-line tool that bridges GitHub project milestones and Google Calendar, keeping deadlines visible outside of the terminal.

## Tech Stack

- **Language**: Python 3.10+
- **CLI Framework**: Click
- **APIs**: GitHub REST API v3, Google Calendar API v3
- **Auth**: OAuth2 for Google, PAT for GitHub

## Usage

```bash
devcal sync --repo owner/repo --calendar "Work"
devcal list --repo owner/repo
devcal clean --before 2024-01-01
```

## Key Features

- Two-way sync: creates, updates, and deletes Calendar events when milestones change
- Configurable calendar targeting
- Dry-run mode for safe previewing
- Cron-friendly with JSON output for scripting
