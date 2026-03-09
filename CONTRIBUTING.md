# Contributing to Sunjay's Portfolio

Thank you for your interest in contributing!

This portfolio is open-source and welcomes suggestions, bug reports, and improvements.


## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Making Changes](#making-changes)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Customizing Your Fork](#customizing-your-fork)


## Code of Conduct

Please be respectful and constructive in all interactions. Keep this a welcoming space for everyone.

## How to Contribute

There are several ways to contribute:

- **Report a bug** by opening an [issue](https://github.com/sunjay-dev/Portfolio-website/issues/new/choose)
- **Suggest a feature** using the feature request template
- **Submit a fix or improvement** via a pull request


## Reporting Bugs

Use the [Bug Report](https://github.com/sunjay-dev/Portfolio-website/issues/new?template=bug_report.md) template and include:

- Steps to reproduce the issue
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable


## Suggesting Features

Use the [Feature Request](https://github.com/sunjay-dev/Portfolio-website/issues/new?template=feature_request.md) template. Please describe the problem you're solving — not just the solution.


## Making Changes

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Portfolio-website.git
   cd Portfolio-website
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Set up environment variables** — create a `.env` file:
   ```env
   SENDER_EMAIL=your-sender-email@example.com
   RECEIVING_EMAIL=your-receiving-email@example.com
   RESEND_EMAIL_API_KEY=your-resend-api-key
   ```
5. **Run the dev server**:
   ```bash
   pnpm dev
   ```
6. **Make your changes** in a new branch:
   ```bash
   git checkout -b fix/your-fix-name
   ```

## Customizing Your Fork

If you're forking this portfolio for yourself:

- Edit `src/data/user.json` to update your personal info.
- Edit `src/data/skills.ts` to update your skills (supports comments!).
- Edit `src/data/tech_mapping.ts` to control how tech tags are displayed.
- Icons are powered by [Iconify](https://iconify.design) — browse available icons at [icon.ly](https://icon.ly).

---

Thank you for contributing!
