# Simple Chat by Eugeniu Marinescu
Interview Coding Challenge – Minimal Chat Application

---

# Demo
https://chat.p8q.net

For convenience, a demo is available to explore and evaluate the user interface and overall user experience.

---

# Feature Checklist

- [x] Simple login form for entering a nickname
- [x] Loading initial message history
- [x] Pagination (loading older messages)
- [x] Sending messages
- [x] Polling for new messages

---

# Engineering

- [x] React + TypeScript + Tailwind
- [x] Automated setup
- [x] Docker support
- [x] README documentation
- [x] Structured commit history

---

# Setup

## Prerequisites
Create a `.env.local` file (optional):
1. Rename `.env.local.example` to `.env.local`

## Docker Setup
1. Build: `docker compose build`
2. Start: `docker compose up`

## Manual Setup
1. Install dependencies: `npm install`
2. Build: `npm run build`
3. Start: `npm run preview`

## Backend
For the backend implementation details and setup instructions, please refer to the [Frontend Challenge Chat API repository](https://github.com/DoodleScheduling/frontend-challenge-chat-api)

---

# Candidate Comments

## Mobile-first approach
I followed a mobile-first approach in this project. I started by designing the layout for mobile devices, ensuring the content is clear, readable, and easy to use on small screens. I then adapted and enhanced the design for larger screens such as tablets and desktops. This approach helps ensure a consistent and good user experience across all devices.

## AI usage
I did not use AI for this challenge, as the project was relatively simple and I wanted to complete it as a personal coding exercise.

However, I do use Claude Code in my work process in a pair-programming style. I treat it as a development partner, where I remain responsible for all decisions and overall direction while using it to support implementation and speed up certain tasks. I avoid "vibe coding" approach to maintain a clear understanding of the codebase at all times.

## Technical focus
During development, I focused on writing clean code and building a solid, scalable component architecture, with strong emphasis on separation of concerns, modular design, and reusable components.

I also prioritized stability, performance, and overall user experience, ensuring the application remains reliable and responsive under different conditions.
