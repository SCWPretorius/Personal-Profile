---
title: "Database-Interrogator"
description: "A mono-repo tool combining backend and frontend components for database querying, including LLM-generated queries and SQL execution."
tags: [Go, Vue, JavaScript, Dockerfile]
imageUrl: "/projects/Database-Interrogator.jpg"
repoUrl: "https://github.com/SCWPretorius/Database-Interrogator"
liveUrl: ""
featured: false
---

## Overview

This repository structures a database interrogation system with modules for command handling, interpretation, frontend interaction, LLM query generation, and statement execution. No formal README is available, indicating an internal or experimental project.

## Tech Stack

- **Backend**: Go
- **Frontend**: Vue and JavaScript
- **Containerization**: Dockerfile

## How It Works

1. Use the commander module for basic CRUD operations.
2. Interpret database commands via db-interpreter.
3. Generate queries using LLMs in llm-generate-query.
4. Execute SQL statements through statement-executor.
5. Interact via the frontend, which includes login functionality.

## Key Features

- Basic CRUD functionality in commander.
- Database command interpreter.
- Frontend with login flow.
- LLM-based query generation.
- SQL statement executor.