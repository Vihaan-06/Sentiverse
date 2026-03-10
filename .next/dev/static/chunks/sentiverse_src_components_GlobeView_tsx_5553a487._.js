(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sentiverse/src/components/GlobeView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MAX_MARKERS = 500;
const MARKER_LIFETIME = 5000;
const GlobeView = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "6b44f8d8024b325218ad65d2d98ce8606bdb253f140429c90ef9b84e3168a58a") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6b44f8d8024b325218ad65d2d98ce8606bdb253f140429c90ef9b84e3168a58a";
    }
    const { getLatestPosts } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== getLatestPosts) {
        t1 = ()=>{
            const container = containerRef.current;
            if (!container) {
                return;
            }
            const width = container.clientWidth || 400;
            const height = container.clientHeight || 320;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](132631);
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, width / height, 0.1, 1000);
            camera.position.z = 3.2;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);
            const globeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 64, 64);
            const globeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                color: 725280,
                emissive: 988970,
                shininess: 12,
                wireframe: false
            });
            const globe = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](globeGeometry, globeMaterial);
            scene.add(globe);
            const atmosphereGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1.05, 64, 64);
            const atmosphereMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 3718648,
                transparent: true,
                opacity: 0.18,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
            });
            const atmosphere = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](atmosphereGeometry, atmosphereMaterial);
            scene.add(atmosphere);
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](6583435, 1.3);
            scene.add(ambientLight);
            const directionalLight = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](3718648, 1.5);
            directionalLight.position.set(5, 3, 5);
            scene.add(directionalLight);
            const markerGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.02, 8, 8);
            const markerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                vertexColors: true,
                transparent: true,
                opacity: 1
            });
            const markers = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](markerGeometry, markerMaterial, MAX_MARKERS);
            scene.add(markers);
            const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
            const colors = new Float32Array(MAX_MARKERS * 3);
            const lifetimes = new Float32Array(MAX_MARKERS);
            const startTimes = new Float32Array(MAX_MARKERS);
            let markerIndex = 0;
            const colorAttr = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedBufferAttribute"](colors, 3);
            markers.instanceColor = colorAttr;
            const addMarkerFromPost = (post, now)=>{
                const [lng, lat] = post.coordinates;
                const phi = (90 - lat) * (Math.PI / 180);
                const theta = (lng + 180) * (Math.PI / 180);
                const x = -1.01 * Math.sin(phi) * Math.cos(theta);
                const y = 1.01 * Math.cos(phi);
                const z = 1.01 * Math.sin(phi) * Math.sin(theta);
                dummy.position.set(x, y, z);
                dummy.lookAt(0, 0, 0);
                dummy.updateMatrix();
                const i = markerIndex % MAX_MARKERS;
                markers.setMatrixAt(i, dummy.matrix);
                let color;
                if (post.sentiment === "positive") {
                    color = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](2278750);
                } else {
                    if (post.sentiment === "negative") {
                        color = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](15680580);
                    } else {
                        color = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](16436245);
                    }
                }
                colors[i * 3 + 0] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;
                startTimes[i] = now;
                lifetimes[i] = MARKER_LIFETIME;
                markerIndex = markerIndex + 1;
                markerIndex;
                markers.instanceMatrix.needsUpdate = true;
                markers.instanceColor.needsUpdate = true;
            };
            let frameId;
            let lastCheck = performance.now();
            const animate = ()=>{
                frameId = requestAnimationFrame(animate);
                const now_0 = performance.now();
                const delta = now_0 - lastCheck;
                globe.rotation.y = globe.rotation.y + 0.0008 * delta;
                atmosphere.rotation.y = atmosphere.rotation.y + 0.0008 * delta;
                if (delta > 400) {
                    const latest = getLatestPosts();
                    if (latest.length > 0) {
                        const newest = latest[0];
                        addMarkerFromPost(newest, now_0);
                    }
                    lastCheck = now_0;
                }
                for(let i_0 = 0; i_0 < MAX_MARKERS; i_0 = i_0 + 1, i_0){
                    const age = now_0 - startTimes[i_0];
                    if (age <= 0 || age > lifetimes[i_0]) {
                        continue;
                    }
                    const t = age / lifetimes[i_0];
                    const opacity = 1 - t;
                    markerMaterial.opacity = opacity;
                }
                renderer.render(scene, camera);
            };
            animate();
            const handleResize = ()=>{
                const w = container.clientWidth || width;
                const h = container.clientHeight || height;
                renderer.setSize(w, h);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
            };
            window.addEventListener("resize", handleResize);
            cleanupRef.current = ()=>{
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
            return ()=>{
                if (cleanupRef.current) {
                    cleanupRef.current();
                }
            };
        };
        t2 = [
            getLatestPosts
        ];
        $[1] = getLatestPosts;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between border-b border-white/5 px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-medium text-zinc-100",
                                children: "3D Mood Globe"
                            }, void 0, false, {
                                fileName: "[project]/sentiverse/src/components/GlobeView.tsx",
                                lineNumber: 184,
                                columnNumber: 141
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500",
                                children: "Rotating Earth with pulsing sentiment markers."
                            }, void 0, false, {
                                fileName: "[project]/sentiverse/src/components/GlobeView.tsx",
                                lineNumber: 184,
                                columnNumber: 209
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sentiverse/src/components/GlobeView.tsx",
                        lineNumber: 184,
                        columnNumber: 136
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/components/GlobeView.tsx",
                    lineNumber: 184,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "relative h-[320px] w-full flex-1 overflow-hidden rounded-b-[1rem] bg-slate-950 lg:h-[420px]"
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/components/GlobeView.tsx",
                    lineNumber: 184,
                    columnNumber: 311
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/GlobeView.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_s(GlobeView, "7HConDru4M77YuPdINsRopO3o60=");
_c = GlobeView;
const __TURBOPACK__default__export__ = GlobeView;
var _c;
__turbopack_context__.k.register(_c, "GlobeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sentiverse/src/components/GlobeView.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/sentiverse/src/components/GlobeView.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=sentiverse_src_components_GlobeView_tsx_5553a487._.js.map