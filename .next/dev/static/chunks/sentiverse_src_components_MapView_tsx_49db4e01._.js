(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sentiverse/src/components/MapView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "YOUR_MAPBOX_TOKEN_HERE";
const MapView = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "1dd9fdb6987d766ac9acee5bc682a4c7e7a0fb158a885bc3a4bc55765d76c21a") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1dd9fdb6987d766ac9acee5bc682a4c7e7a0fb158a885bc3a4bc55765d76c21a";
    }
    const { geoJson } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t1;
    let t2;
    if ($[1] !== geoJson) {
        t1 = ()=>{
            if (initializedRef.current) {
                return;
            }
            const container = containerRef.current;
            if (!container) {
                return;
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken || __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken === "YOUR_MAPBOX_TOKEN_HERE") {
                return;
            }
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container,
                style: "mapbox://styles/mapbox/dark-v11",
                center: [
                    0,
                    20
                ],
                zoom: 1.2,
                attributionControl: false
            });
            mapRef.current = map;
            map.on("load", ()=>{
                map.addSource("sentiment", {
                    type: "geojson",
                    data: geoJson
                });
                map.addLayer({
                    id: "sentiment-heat",
                    type: "heatmap",
                    source: "sentiment",
                    paint: {
                        "heatmap-weight": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "get",
                                "intensity"
                            ],
                            -1,
                            0,
                            0,
                            0.2,
                            1,
                            1
                        ],
                        "heatmap-intensity": 1.4,
                        "heatmap-radius": 20,
                        "heatmap-opacity": 0.95,
                        "heatmap-color": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "heatmap-density"
                            ],
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
                            "rgba(248,113,113,1)"
                        ]
                    }
                });
            });
            initializedRef.current = true;
            return ()=>{
                map.remove();
                mapRef.current = null;
                initializedRef.current = false;
            };
        };
        t2 = [
            geoJson
        ];
        $[1] = geoJson;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== geoJson) {
        t3 = ()=>{
            const map_0 = mapRef.current;
            if (!map_0) {
                return;
            }
            if (!map_0.getSource("sentiment")) {
                return;
            }
            try {
                const source = map_0.getSource("sentiment");
                source.setData(geoJson);
                map_0.easeTo({
                    duration: 600,
                    zoom: map_0.getZoom()
                });
            } catch  {}
        };
        t4 = [
            geoJson
        ];
        $[4] = geoJson;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAPBOX_TOKEN) {
        let t5;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500",
                children: "Mapbox token missing"
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/components/MapView.tsx",
                lineNumber: 113,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        let t6;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-xs text-center text-[11px] text-zinc-500",
                        children: [
                            "Add ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "text-[10px] text-zinc-300",
                                children: "NEXT_PUBLIC_MAPBOX_TOKEN"
                            }, void 0, false, {
                                fileName: "[project]/sentiverse/src/components/MapView.tsx",
                                lineNumber: 120,
                                columnNumber: 204
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            "to your environment to enable the live 2D map."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sentiverse/src/components/MapView.tsx",
                        lineNumber: 120,
                        columnNumber: 138
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/MapView.tsx",
                lineNumber: 120,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        return t6;
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between border-b border-white/5 px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-zinc-100",
                        children: "Global Map"
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/MapView.tsx",
                        lineNumber: 129,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500",
                        children: "Pulsing heatmap of sentiment intensity."
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/MapView.tsx",
                        lineNumber: 129,
                        columnNumber: 168
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/MapView.tsx",
                lineNumber: 129,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/MapView.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-full flex-1 flex-col",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "h-[320px] w-full flex-1 lg:h-[420px]"
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/MapView.tsx",
                        lineNumber: 136,
                        columnNumber: 106
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/components/MapView.tsx",
                    lineNumber: 136,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/MapView.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
};
_s(MapView, "8Y/jJwUYB9MxOq6ef37bh9HE/ns=");
_c = MapView;
const __TURBOPACK__default__export__ = MapView;
var _c;
__turbopack_context__.k.register(_c, "MapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sentiverse/src/components/MapView.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/sentiverse/src/components/MapView.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=sentiverse_src_components_MapView_tsx_49db4e01._.js.map