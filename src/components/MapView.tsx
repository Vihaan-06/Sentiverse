"use client";

import { useEffect, useRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import type { FeatureCollection } from "geojson";

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "YOUR_MAPBOX_TOKEN_HERE";

type Props = {
  geoJson: FeatureCollection;
};

const MapView = ({ geoJson }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    const container = containerRef.current;
    if (!container) return;
    if (!mapboxgl.accessToken || mapboxgl.accessToken === "YOUR_MAPBOX_TOKEN_HERE") {
      return;
    }

    const map = new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [0, 20],
      zoom: 1.2,
      attributionControl: false,
    });

    mapRef.current = map;

    map.on("load", () => {
      map.addSource("sentiment", {
        type: "geojson",
        data: geoJson,
      });

      map.addLayer({
        id: "sentiment-heat",
        type: "heatmap",
        source: "sentiment",
        paint: {
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "intensity"],
            -1,
            0,
            0,
            0.2,
            1,
            1,
          ],
          "heatmap-intensity": 1.4,
          "heatmap-radius": 20,
          "heatmap-opacity": 0.95,
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(15,23,42,0)",
            0.2,
            "rgba(63,81,181,0.7)",
            0.4,
            "rgba(56,189,248,0.9)",
            0.6,
            "rgba(34,197,94,0.9)",
            0.8,
            "rgba(250,204,21,0.95)",
            1,
            "rgba(248,113,113,1)",
          ],
        },
      });
    });

    initializedRef.current = true;

    return () => {
      map.remove();
      mapRef.current = null;
      initializedRef.current = false;
    };
  }, [geoJson]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (!map.getSource("sentiment")) return;

    try {
      const source = map.getSource("sentiment") as mapboxgl.GeoJSONSource;
      source.setData(geoJson);

      map.easeTo({
        duration: 600,
        zoom: map.getZoom(),
      });
    } catch {
      // ignore
    }
  }, [geoJson]);

  if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
          Mapbox token missing
        </p>
        <p className="max-w-xs text-center text-[11px] text-zinc-500">
          Add <code className="text-[10px] text-zinc-300">NEXT_PUBLIC_MAPBOX_TOKEN</code>{" "}
          to your environment to enable the live 2D map.
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div>
          <h2 className="text-sm font-medium text-zinc-100">Global Map</h2>
          <p className="text-xs text-zinc-500">
            Pulsing heatmap of sentiment intensity.
          </p>
        </div>
      </header>
      <div className="relative flex flex-1">
        <div
          ref={containerRef}
          className="h-[320px] w-full flex-1 lg:h-[420px]"
        />
      </div>
    </div>
  );
};

export default MapView;

