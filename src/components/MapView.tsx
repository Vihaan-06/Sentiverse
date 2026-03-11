"use client";

import { useEffect, useRef } from "react";
import maplibregl, { Map } from "maplibre-gl";
import type { FeatureCollection } from "geojson";

type Props = {
  geoJson: FeatureCollection;
};

const MapView = ({ geoJson }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (mapRef.current) return;

    const map = new maplibregl.Map({
      container,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: [
              "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          },
        },
        layers: [
          {
            id: "osm-base",
            type: "raster",
            source: "osm",
          },
        ],
      },
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
        id: "sentiment-bubbles",
        type: "circle",
        source: "sentiment",
        paint: {
          // Bubble size scales with absolute intensity
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["abs", ["get", "intensity"]],
            0,
            4,
            1,
            10,
            3,
            22,
          ],
          // Color indicates positive / neutral / negative
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "intensity"],
            -3,
            "#ef4444", // strong negative (red)
            -0.1,
            "#f97316", // mild negative (orange)
            0,
            "#eab308", // neutral (yellow)
            0.1,
            "#22c55e", // mild positive (green)
            3,
            "#22c55e", // strong positive (green)
          ],
          "circle-opacity": 0.5,
          "circle-blur": 0,
        },
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (!map.getSource("sentiment")) return;

    try {
      const source = map.getSource("sentiment") as maplibregl.GeoJSONSource;
      source.setData(geoJson);

      map.easeTo({
        duration: 600,
        zoom: map.getZoom(),
      });
    } catch {
      // ignore
    }
  }, [geoJson]);

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

