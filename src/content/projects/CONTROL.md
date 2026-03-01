---
title: "CONTROL"
description: "An event-driven personal assistant framework in TypeScript for task automation, integrating with Telegram, Discord, and Google Calendar using LLM decision-making."
tags: [TypeScript, Node.js, Express, Pino, Zod, Ollama]
imageUrl: "/projects/CONTROL.jpg"
repoUrl: "https://github.com/SCWPretorius/CONTROL"
liveUrl: ""
featured: true
---

## Overview

CONTROL is a modular assistant like Jarvis, processing events from integrations, making LLM-based decisions, and executing skills with security features.

## Tech Stack

- **Runtime**: Node.js >=20.0.0 with Express
- **Language**: TypeScript
- **LLM**: Ollama (models: qwen3:4b, mistral:7b, phi:2.7b)
- **Logging**: Pino
- **Validation**: Zod
- **Security**: express-rate-limit

## How It Works

1. Events from integrations are normalized and contextualized.
2. LLM engine selects and executes appropriate skills.
3. Apply RBAC, rate limiting, and approvals as needed.
4. Log traces and persist data with backups.

## Key Features

- Multi-platform integrations (Telegram, Discord, Google Calendar).
- Extensible skills with hot-reloading.
- Context-aware memory and semantic search.
- Security via RBAC, rate limiting, and approvals.
- Monitoring with health checks and logging.