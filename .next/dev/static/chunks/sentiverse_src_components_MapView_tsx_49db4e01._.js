(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sentiverse/src/components/MapView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/maplibre-gl/dist/maplibre-gl.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MapView = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "f5d5469e56dce9e57f6bb43871c649d1cc6670622bce0e018ff6752d950d1b11") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f5d5469e56dce9e57f6bb43871c649d1cc6670622bce0e018ff6752d950d1b11";
    }
    const { geoJson } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== geoJson) {
        t1 = ()=>{
            const container = containerRef.current;
            if (!container) {
                return;
            }
            if (mapRef.current) {
                return;
            }
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$maplibre$2d$gl$2f$dist$2f$maplibre$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container,
                style: {
                    version: 8,
                    sources: {
                        osm: {
                            type: "raster",
                            tiles: [
                                "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            ],
                            tileSize: 256,
                            attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
                        }
                    },
                    layers: [
                        {
                            id: "osm-base",
                            type: "raster",
                            source: "osm"
                        }
                    ]
                },
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
                    id: "sentiment-bubbles",
                    type: "circle",
                    source: "sentiment",
                    paint: {
                        "circle-radius": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "abs",
                                [
                                    "get",
                                    "intensity"
                                ]
                            ],
                            0,
                            4,
                            1,
                            10,
                            3,
                            22
                        ],
                        "circle-color": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "get",
                                "intensity"
                            ],
                            -3,
                            "#ef4444",
                            -0.1,
                            "#f97316",
                            0,
                            "#eab308",
                            0.1,
                            "#22c55e",
                            3,
                            "#22c55e"
                        ],
                        "circle-opacity": 0.5,
                        "circle-blur": 0
                    }
                });
            });
            return ()=>{
                map.remove();
                mapRef.current = null;
            };
        };
        $[1] = geoJson;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
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
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between border-b border-white/5 px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-zinc-100",
                        children: "Global Map"
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/MapView.tsx",
                        lineNumber: 122,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500",
                        children: "Pulsing heatmap of sentiment intensity."
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/MapView.tsx",
                        lineNumber: 122,
                        columnNumber: 168
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/MapView.tsx",
                lineNumber: 122,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/MapView.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
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
                        lineNumber: 129,
                        columnNumber: 106
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/components/MapView.tsx",
                    lineNumber: 129,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/MapView.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
};
_s(MapView, "Z5ajE9A4iwh6gE6IN9U3eeIw9UE=");
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