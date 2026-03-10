"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { RawSentimentPost } from "@/lib/aggregation";

type Props = {
  getLatestPosts: () => RawSentimentPost[];
};

const MAX_MARKERS = 500;
const MARKER_LIFETIME = 5000;

const GlobeView = ({ getLatestPosts }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x0b1120,
      emissive: 0x0f172a,
      shininess: 12,
      wireframe: false,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    const ambientLight = new THREE.AmbientLight(0x64748b, 1.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const markerGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const markerMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 1,
    });
    const markers = new THREE.InstancedMesh(
      markerGeometry,
      markerMaterial,
      MAX_MARKERS
    );
    scene.add(markers);

    const dummy = new THREE.Object3D();
    const colors = new Float32Array(MAX_MARKERS * 3);
    const lifetimes = new Float32Array(MAX_MARKERS);
    const startTimes = new Float32Array(MAX_MARKERS);
    let markerIndex = 0;

    const colorAttr = new THREE.InstancedBufferAttribute(colors, 3);
    markers.instanceColor = colorAttr;

    const addMarkerFromPost = (post: RawSentimentPost, now: number) => {
      const [lng, lat] = post.coordinates;
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const radius = 1.01;

      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      dummy.position.set(x, y, z);
      dummy.lookAt(0, 0, 0);
      dummy.updateMatrix();

      const i = markerIndex % MAX_MARKERS;
      markers.setMatrixAt(i, dummy.matrix);

      let color: THREE.Color;
      if (post.sentiment === "positive") {
        color = new THREE.Color(0x22c55e);
      } else if (post.sentiment === "negative") {
        color = new THREE.Color(0xef4444);
      } else {
        color = new THREE.Color(0xfacc15);
      }
      colors[i * 3 + 0] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      startTimes[i] = now;
      lifetimes[i] = MARKER_LIFETIME;

      markerIndex += 1;
      markers.instanceMatrix.needsUpdate = true;
      (markers.instanceColor as THREE.InstancedBufferAttribute).needsUpdate =
        true;
    };

    let frameId: number;
    let lastCheck = performance.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = now - lastCheck;

      globe.rotation.y += 0.0008 * delta;
      atmosphere.rotation.y += 0.0008 * delta;

      if (delta > 400) {
        const latest = getLatestPosts();
        if (latest.length > 0) {
          const newest = latest[0];
          addMarkerFromPost(newest, now);
        }
        lastCheck = now;
      }

      for (let i = 0; i < MAX_MARKERS; i += 1) {
        const age = now - startTimes[i];
        if (age <= 0 || age > lifetimes[i]) continue;
        const t = age / lifetimes[i];
        const opacity = 1 - t;
        (markerMaterial as THREE.MeshBasicMaterial).opacity = opacity;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth || width;
      const h = container.clientHeight || height;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    cleanupRef.current = () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      globeGeometry.dispose();
      globeMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      markerGeometry.dispose();
      markerMaterial.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [getLatestPosts]);

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div>
          <h2 className="text-sm font-medium text-zinc-100">3D Mood Globe</h2>
          <p className="text-xs text-zinc-500">
            Rotating Earth with pulsing sentiment markers.
          </p>
        </div>
      </header>
      <div
        ref={containerRef}
        className="relative h-[320px] w-full flex-1 overflow-hidden rounded-b-[1rem] bg-slate-950 lg:h-[420px]"
      />
    </div>
  );
};

export default GlobeView;

