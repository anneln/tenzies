# Tenzies

A simple dice game built with **React**.

## About

The goal of the game is to get all 10 dice to show the same value. Players can click on dice to hold them between rolls and keep rolling until all dice match.

## Technologies Used

- React
- Vite
- NanoID (for generating unique IDs for each die)
- React Confetti (for the winning celebration animation)

## Features

- Roll dice
- Hold/unhold dice
- Win detection
- Confetti animation on victory
- Start a new game

## Deployment

This project is deployed on **Netlify**.

## Installation

```bash
npm install
npm run dev
```

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
