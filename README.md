## Internet Mood Map

Real-time dashboard that visualizes the emotional mood of the internet globally using simulated social media sentiment data.

Built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, **MapLibre GL JS**, **Socket.io**, and the **sentiment** npm package.

### Features

- **Real-time streaming** of simulated social posts over a single Socket.io connection.
- **2D Map** (MapLibre GL JS + OpenStreetMap tiles) with mood bubbles sized and colored by sentiment intensity.
- **Live activity feed** showing the latest 20 posts with sentiment, country, and timestamp.
- **Stats panel** with global mood score, happiest/most negative country, total messages, and trending keywords.
- **Dark, futuristic dashboard UI** with glow accents, skeleton loaders, and subtle animations.

### Getting started

1. Install dependencies:

```bash
npm install
```

2. Create an `.env.local` file at the project root (or copy from `.env.example`) and set your Mapbox token:

```bash
cp .env.example .env.local
# then edit .env.local
NEXT_PUBLIC_MAPBOX_TOKEN=your_real_mapbox_token
```

3. Run the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser.

### Architecture

- **App Router**: main UI under `src/app` (`layout.tsx`, `page.tsx`).
- **Components**: presentational and interactive components in `src/components`:
  - `MapView`, `GlobeView`, `ActivityFeed`, `StatsPanel`, `SentimentBadge`, `ViewToggle`.
- **Lib**: core logic in `src/lib`:
  - `sentiment.ts` – wraps the `sentiment` package.
  - `postGenerator.ts` – fake social post generator with countries and coordinates.
  - `aggregation.ts` – server-side aggregation of sentiment and GeoJSON builder.
- **Backend streaming**:
  - `src/pages/api/stream.ts` – Socket.io server that emits a new analyzed post every 1–2 seconds, plus aggregated stats and GeoJSON.

### Performance notes

- Mapbox map is initialized only once and updated via `map.getSource("sentiment").setData(newGeoJSON)`.
- Globe markers use `InstancedMesh` with a cap of 500 markers, reusing instances.
- UI updates are debounced to **every 500ms** and large datasets live in `useRef` instead of React state.
- Only one Socket.io connection is created (in a `useEffect` with an empty dependency array) and cleaned up on unmount.

