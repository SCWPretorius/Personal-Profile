---
title: "Load-shedding-city-power"
description: "A work-in-progress Home Assistant integration for users of City Power in Johannesburg to manage load-shedding schedules."
tags: [Go]
imageUrl: "/projects/Load-shedding-city-power.jpg"
repoUrl: "https://github.com/SCWPretorius/Load-shedding-city-power"
liveUrl: ""
featured: false
---

## Overview

This project provides a Home Assistant integration tailored for City Power users in Johannesburg, focusing on load-shedding management. It is currently in development and invites community suggestions via issues.

## Tech Stack

- **Language**: Go

## How It Works

1. Set environment variables such as SUBBLOCK (from the mapping spreadsheet) and optionally PORT (defaults to 8000).
2. Run the Go-based service to integrate load-shedding data into Home Assistant.
3. The integration pulls schedule data based on the configured subblock for real-time updates.

## Key Features

- Environment variable configuration for subblock and port.
- Integration with Home Assistant for load-shedding notifications.
- Includes a mapping spreadsheet (Blocks vs Suburbs version 2.0.xls) for subblock identification.