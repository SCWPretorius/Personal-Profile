---
title: "Home-Assistant-Entity-Integration"
description: "A Python tool to extract devices and entities from Home Assistant for LLM integrations, enabling AI-driven automations and dashboards."
tags: [Python, Shell]
imageUrl: "/projects/Home-Assistant-Entity-Integration.jpg"
repoUrl: "https://github.com/SCWPretorius/Home-Assistant-Entity-Integration"
liveUrl: ""
featured: false
---

## Overview

This application fetches entity states and device information from Home Assistant, formatting it for use with LLMs to suggest automations, dashboards, and more.

## Tech Stack

- **Language**: Python 3.7+
- **Dependencies**: requests, python-dotenv
- **Scripting**: Shell for quickstart

## How It Works

1. Configure via .env with HA_URL and HA_TOKEN (long-lived access token).
2. Run main.py to fetch data via API.
3. Format output as markdown (for LLMs) and JSON (for export).
4. Use generated files in LLM prompts for smart home suggestions.

## Key Features

- Retrieve all entities and device information.
- LLM-optimized markdown output.
- JSON export for programmatic use.
- Command-line overrides for configuration.
- Comprehensive context for AI-driven home automation.