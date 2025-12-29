# 3D Portfolio (React + Three.js)

Interactive portfolio featuring 3D hero scenes, animated sections, and an accordion-style work experience carousel. Built with React 19, React Three Fiber, GSAP, and Tailwind (Vite).

## Table of Contents

- Overview
- Features
- Tech Stack
- Project Structure
- Setup
- Scripts
- Environment Variables
- Contact/Support

## Overview

This project delivers a full single-page portfolio with:
- Work carousel styled as an accordion with categories and responsibilities.
- Project showcases, tech stack highlights, and a contact form wired to EmailJS.
- Responsive layout with smooth motion and hover interactions.

## Features

- React Three Fiber scene with hero lights and room model
- GSAP-driven animations and smooth section transitions
- Accordion work experience with expandable details/tags
- Project showcase grid and logo strip
- Tech stack cards with 3D logos
- EmailJS-powered contact form
- Fully responsive design

## Tech Stack

<div>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=fff" />
  <img src="https://img.shields.io/badge/Three.js-0.174-000000?style=for-the-badge&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React%20Three%20Fiber-^9.1.0-000000?style=for-the-badge&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/EmailJS-Browser-FFB3B3?style=for-the-badge&logo=mail.ru&logoColor=000" />
</div>

## Project Structure

- `src/App.jsx` – page assembly and section order
- `src/sections/` – page sections (Hero, Showcase, LogoShowcase, FeatureCards, Experience, TechStack, Contact, Footer)
- `src/components/models/` – 3D scene components (hero room, lights, contact models, tech logos)
- `src/components/NavBar.jsx` – navigation
- `src/index.css` – global styles and custom utility/classes
- `public/` – static assets (images, textures, models)

## Setup

Prerequisites: Node.js (LTS) and npm.

```bash
git clone <this-repo-url>
cd 3d-portfolio-2026
npm install
```

Create a `.env` at the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – run ESLint

## Environment Variables

Used by the contact form (EmailJS):
- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

## Contact/Support

If you run into issues setting up or customizing the portfolio, open an issue or share the error/output and the steps to reproduce.
*** End Patch"】итель to=functions.apply_patch bow╝ JSON_OBJECTтарамовала## Test Output Reasoning
