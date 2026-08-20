# Wedding Invitation Website (Nikkah & Walima)

An elegant, premium, and fully responsive digital wedding invitation landing page designed for the Nikkah & Walima of **Farhan Hussain & Amani Abd**.

The site incorporates cinematic video entries, luxury background aesthetics, multilingual localization, ambient sound controls, and interactive guest-management tools.

---

## 🌟 Key Features

- **Cinematic Entrance Flow**: A tap-to-play landing viewport (`clickbutton.mp4`) that transitions seamlessly into the invitation contents with a celebratory golden confetti burst.
- **Multilingual Support (EN / AR / DE)**: Complete language selector with native fonts and names for English, Arabic, and German.
- **Bi-directional Layout (LTR/RTL)**: Swaps automatically to Right-to-Left formatting when Arabic language is selected to ensure natural reading flow.
- **Ambient Audio Control**: Integrates a toggleable, looping atmospheric Nasheed background track with automated fade-in.
- **Countdowns & Calendars**: 
  - An animated timeline countdown (Days, Hours, Minutes, Seconds) leading up to the wedding date.
  - A stylized calendar component highlighting the big day.
  - Quick download for an `.ics` calendar invitation file.
- **Interactive Google Maps**: Integrated venue location iframe with a deep link to launch in native mapping applications.
- **Detailed Day Programme**: Responsive timeline presenting the schedule of events (Arrival, Nikkah, Zuhr Prayer, Walima Lunch, Cake Cutting, and Farewell).
- **Aesthetic Dress Code & Menu Cards**: Premium cards outlining the requested blush-pink/beige color theme guidelines, along with a multi-course dinner menu.
- **In-App RSVP**: Pre-populated WhatsApp RSVP message builder directing guests directly to the host's phone numbers.
- **Luxury Visual Theme**: Warm ivory/blush gradients, floral section backgrounds, glassmorphic card overlays, and fluid animations.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) & [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Icons**: Inline custom SVGs wrapped in a central helper

---

## 📁 Directory Structure

```text
├── src/
│   ├── components/            # Reusable UI sections and widgets
│   │   ├── App.tsx            # Application entrypoint & transition states
│   │   ├── RevealPage.tsx     # main invitation body content sections
│   │   ├── CalendarGrid.tsx   # Custom decorative calendar highlights
│   │   ├── AudioPlayer.tsx    # Loop controls for the ambient background track
│   │   ├── LanguageSwitcher.tsx # Language selector button set
│   │   └── BismillahHeader.tsx, WaxSeal.tsx, etc. (Legacy/Utility components)
│   ├── data/
│   │   └── content.ts         # Central translation records (EN, AR, DE)
│   ├── index.css              # Global styles & Tailwind configuration
│   └── main.tsx               # DOM Bootstrapper
├── photos/                    # Design background images (source)
├── public/                    # Root folder for build outputs
├── copy-assets.js             # Script to initialize public directories
├── tailwind.config.js         # Custom styled-themes & responsive variables
└── package.json               # Dependencies and script definitions
```

---

## 🚀 Setup & Local Development

### 1. Install Dependencies
Run the following package install command in the project directory root:
```bash
npm install
```

### 2. Copy Media Assets
This project utilizes high-resolution video clips (`click button.mp4`, `mainbackground video.mp4`) and photo assets located in the project root. Before running or building the project, copy these assets into the `public/` directory:
```bash
node copy-assets.js
```
*(Alternatively, you can run `node copy-videos.js` to transfer video files only.)*

### 3. Start Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open the provided URL (e.g. `http://localhost:5173`) in your browser.

### 4. Build for Production
To generate a lightweight, static production build, run:
```bash
npm run build
```
This outputs the bundle into the `dist/` directory, ready to be hosted on Netlify, Vercel, GH Pages, or any standard web server.

---

## 👨‍💻 Scripts

Inside `package.json`, you have access to:
- `npm run dev`: Fires up the local hot-reloading development web server.
- `npm run build`: Type-checks files using TypeScript (`tsc`) and compiles the static site.
- `npm run preview`: Hosts the built production directory (`dist`) locally for verification.
- `npm run lint`: Evaluates source code for styling consistency or defects using ESLint.
