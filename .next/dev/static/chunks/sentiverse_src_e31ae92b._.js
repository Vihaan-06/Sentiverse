(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sentiverse/src/components/SentimentBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const SENTIMENT_CONFIG = {
    positive: {
        label: "Positive",
        color: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
        emoji: "😊"
    },
    neutral: {
        label: "Neutral",
        color: "bg-yellow-400/15 text-yellow-200 border-yellow-400/50",
        emoji: "😐"
    },
    negative: {
        label: "Negative",
        color: "bg-red-500/15 text-red-300 border-red-400/45",
        emoji: "😡"
    }
};
const SentimentBadge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "25b2608845e635ce5e5bf2350c3e28067adc10fca6cd580fedd8ce7b143984a0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "25b2608845e635ce5e5bf2350c3e28067adc10fca6cd580fedd8ce7b143984a0";
    }
    const { sentiment } = t0;
    const config = SENTIMENT_CONFIG[sentiment];
    const t1 = `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${config.color}`;
    let t2;
    if ($[1] !== config.emoji) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: config.emoji
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/SentimentBadge.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = config.emoji;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== config.label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: config.label
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/SentimentBadge.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = config.label;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1 || $[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/SentimentBadge.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
};
_c = SentimentBadge;
const __TURBOPACK__default__export__ = SentimentBadge;
var _c;
__turbopack_context__.k.register(_c, "SentimentBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sentiverse/src/components/ActivityFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$SentimentBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/SentimentBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ActivityFeed = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "bd2fd67d37fe0243e6d0729b1dcc663aa840c36594e2d20665ebe981b563c99f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd2fd67d37fe0243e6d0729b1dcc663aa840c36594e2d20665ebe981b563c99f";
    }
    const { posts, isLoading } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const container = containerRef.current;
            if (!container) {
                return;
            }
            container.animate([
                {
                    transform: "translateY(6px)",
                    opacity: 0
                },
                {
                    transform: "translateY(0)",
                    opacity: 1
                }
            ], {
                duration: 220,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)"
            });
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== posts) {
        t2 = [
            posts
        ];
        $[2] = posts;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between border-b border-white/5 px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-zinc-100",
                        children: "Live Activity Feed"
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                        lineNumber: 58,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500",
                        children: "Streaming the latest simulated social posts."
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                        lineNumber: 58,
                        columnNumber: 176
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                lineNumber: 58,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== isLoading) {
        t4 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: Array.from({
                length: 6
            }).map(_temp)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
            lineNumber: 65,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = isLoading;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== isLoading || $[8] !== posts) {
        t5 = !isLoading && posts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center text-xs text-zinc-500",
            children: "Waiting for the first mood signals…"
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
            lineNumber: 75,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = isLoading;
        $[8] = posts;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== isLoading || $[11] !== posts) {
        t6 = !isLoading && posts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2.5 text-xs",
            children: posts.map(_temp2)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
            lineNumber: 84,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = isLoading;
        $[11] = posts;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t5 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "relative flex-1 overflow-hidden px-2 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-y-auto px-2 pb-3",
                        children: [
                            t4,
                            t5,
                            t6
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                        lineNumber: 93,
                        columnNumber: 130
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                    lineNumber: 93,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
};
_s(ActivityFeed, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = ActivityFeed;
const __TURBOPACK__default__export__ = ActivityFeed;
function _temp(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton h-14 rounded-lg bg-zinc-800/80"
    }, i, false, {
        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
function _temp2(post) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "group rounded-lg bg-zinc-900/60 px-3 py-2.5 ring-1 ring-white/5 transition hover:bg-zinc-900/90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$SentimentBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sentiment: post.sentiment
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                        lineNumber: 108,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-zinc-500",
                        children: new Date(post.timestamp).toLocaleTimeString(undefined, {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit"
                        })
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                        lineNumber: 108,
                        columnNumber: 243
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                lineNumber: 108,
                columnNumber: 136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "line-clamp-2 text-[11px] text-zinc-200",
                children: post.text
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                lineNumber: 112,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 flex items-center justify-between text-[11px] text-zinc-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-sky-400/80"
                            }, void 0, false, {
                                fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                                lineNumber: 112,
                                columnNumber: 227
                            }, this),
                            post.country
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                        lineNumber: 112,
                        columnNumber: 178
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-zinc-500",
                        children: [
                            "score ",
                            post.sentimentScore.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                        lineNumber: 112,
                        columnNumber: 307
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
                lineNumber: 112,
                columnNumber: 94
            }, this)
        ]
    }, post.id, true, {
        fileName: "[project]/sentiverse/src/components/ActivityFeed.tsx",
        lineNumber: 108,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ActivityFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sentiverse/src/components/StatsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$SentimentBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/SentimentBadge.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const AnimatedCounter = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "405f10ae94913e0d90257c20c8860c5db1b73337d272f89330382d79b540cb3b") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "405f10ae94913e0d90257c20c8860c5db1b73337d272f89330382d79b540cb3b";
    }
    const { value, suffix } = t0;
    let t1;
    if ($[1] !== value) {
        t1 = value.toLocaleString(undefined, {
            maximumFractionDigits: 1
        });
        $[1] = value;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== suffix) {
        t2 = suffix ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-0.5 text-[10px]",
            children: suffix
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
            lineNumber: 38,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0)) : null;
        $[3] = suffix;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tabular-nums",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
};
_c = AnimatedCounter;
const StatsPanel = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "405f10ae94913e0d90257c20c8860c5db1b73337d272f89330382d79b540cb3b") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "405f10ae94913e0d90257c20c8860c5db1b73337d272f89330382d79b540cb3b";
    }
    const { stats, isLoading } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 px-4 py-3",
            children: Array.from({
                length: 4
            }).map(_temp)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const skeleton = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between border-b border-white/5 px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-zinc-100",
                        children: "Global Stats"
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500",
                        children: "Aggregated mood signals by country."
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 170
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                lineNumber: 79,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== isLoading || $[4] !== stats) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                t2,
                isLoading || !stats ? skeleton : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 flex-col gap-4 px-4 py-3 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-zinc-950/60 p-3 ring-1 ring-emerald-500/30 sentiment-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] uppercase tracking-wide text-zinc-500",
                                                    children: "Global Mood Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 294
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-lg font-semibold text-emerald-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                        value: stats.globalMoodScore
                                                    }, void 0, false, {
                                                        fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 439
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 380
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 289
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$SentimentBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sentiment: stats.globalCategory
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 498
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 238
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] text-zinc-500",
                                    children: [
                                        "Based on ",
                                        stats.totalMessages.toLocaleString(),
                                        " messages."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 555
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                            lineNumber: 86,
                            columnNumber: 148
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-zinc-950/60 p-3 ring-1 ring-emerald-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] uppercase tracking-wide text-zinc-500",
                                            children: "Happiest Country"
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 782
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm font-medium text-emerald-200",
                                            children: stats.happiestCountry ?? "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 867
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[11px] text-emerald-300/80",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                value: stats.happiestScore ?? 0
                                            }, void 0, false, {
                                                fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                                lineNumber: 86,
                                                columnNumber: 1014
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 960
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 708
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-zinc-950/60 p-3 ring-1 ring-red-500/25 sentiment-pulse-negative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] uppercase tracking-wide text-zinc-500",
                                            children: "Most Negative"
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 1171
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm font-medium text-red-200",
                                            children: stats.mostNegativeCountry ?? "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 1253
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[11px] text-red-300/80",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                value: stats.mostNegativeScore ?? 0
                                            }, void 0, false, {
                                                fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                                lineNumber: 86,
                                                columnNumber: 1396
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 1346
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 1076
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                            lineNumber: 86,
                            columnNumber: 668
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-zinc-950/60 p-3 ring-1 ring-white/8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase tracking-wide text-zinc-500",
                                    children: "Total Messages"
                                }, void 0, false, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 1535
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-base font-semibold text-zinc-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                        value: stats.totalMessages
                                    }, void 0, false, {
                                        fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                        lineNumber: 86,
                                        columnNumber: 1676
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 1618
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                            lineNumber: 86,
                            columnNumber: 1468
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-zinc-950/60 p-3 ring-1 ring-sky-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] uppercase tracking-wide text-zinc-500",
                                    children: "Trending Keywords"
                                }, void 0, false, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 1803
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex flex-wrap gap-1.5",
                                    children: [
                                        stats.trendingKeywords.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-zinc-500",
                                            children: "Listening…"
                                        }, void 0, false, {
                                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 1974
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        stats.trendingKeywords.map(_temp2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 1889
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                            lineNumber: 86,
                            columnNumber: 1733
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
                    lineNumber: 86,
                    columnNumber: 86
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = isLoading;
        $[4] = stats;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
};
_c1 = StatsPanel;
const __TURBOPACK__default__export__ = StatsPanel;
function _temp(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton h-12 rounded-md bg-zinc-800/80"
    }, i, false, {
        fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
        lineNumber: 97,
        columnNumber: 10
    }, this);
}
function _temp2(keyword) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] text-sky-200 ring-1 ring-sky-400/40",
        children: [
            "#",
            keyword.word
        ]
    }, keyword.word, true, {
        fileName: "[project]/sentiverse/src/components/StatsPanel.tsx",
        lineNumber: 100,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "StatsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sentiverse/src/components/ViewToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const ViewToggle = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "2c16ff404365bd80416edc452eb6b6c4fc8f5424d85a702f98a8a48fdfa3367e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c16ff404365bd80416edc452eb6b6c4fc8f5424d85a702f98a8a48fdfa3367e";
    }
    const { mode, onChange } = t0;
    let t1;
    if ($[1] !== onChange) {
        t1 = ()=>onChange("map");
        $[1] = onChange;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = `flex items-center gap-1 rounded-full px-3 py-1 transition-colors ${mode === "map" ? "bg-emerald-500/20 text-emerald-200 shadow-[0_0_18px_rgba(34,197,94,0.6)]" : "text-zinc-400 hover:text-zinc-200"}`;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-1.5 w-1.5 rounded-full bg-emerald-400"
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t1 || $[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t1,
            className: t2,
            children: [
                t3,
                "2D Map"
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t1;
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== onChange) {
        t5 = ()=>onChange("globe");
        $[7] = onChange;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = `flex items-center gap-1 rounded-full px-3 py-1 transition-colors ${mode === "globe" ? "bg-sky-500/20 text-sky-200 shadow-[0_0_18px_rgba(56,189,248,0.6)]" : "text-zinc-400 hover:text-zinc-200"}`;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-1.5 w-1.5 rounded-full bg-sky-400"
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t5 || $[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t5,
            className: t6,
            children: [
                t7,
                "3D Globe"
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t4 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center rounded-full border border-white/10 bg-zinc-900/70 p-1 text-xs shadow-[0_0_24px_rgba(59,130,246,0.35)]",
            children: [
                t4,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t4;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    return t9;
};
_c = ViewToggle;
const __TURBOPACK__default__export__ = ViewToggle;
var _c;
__turbopack_context__.k.register(_c, "ViewToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sentiverse/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/ActivityFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/StatsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ViewToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/ViewToggle.tsx [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const MapView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/sentiverse/src/components/MapView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/sentiverse/src/components/MapView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapView;
const GlobeView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/sentiverse/src/components/GlobeView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/sentiverse/src/components/GlobeView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = GlobeView;
const SOCKET_EVENT = "sentiment_update";
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "818691d41079f906a749ae3eb844d68f94f051c447f5b9671545c814f5a235ef") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "818691d41079f906a749ae3eb844d68f94f051c447f5b9671545c814f5a235ef";
    }
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("map");
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [uiPosts, setUiPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [uiStats, setUiStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [geoVersion, setGeoVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            type: "FeatureCollection",
            features: []
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [geoSnapshot, setGeoSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const allPostsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            type: "FeatureCollection",
            features: []
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const geoJsonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t3);
    const updateTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Home[handleServerEvent]": (payload)=>{
                const now = Date.now();
                allPostsRef.current = [
                    payload.post,
                    ...allPostsRef.current.slice(0, 19)
                ];
                statsRef.current = payload.stats;
                geoJsonRef.current = payload.geoJson;
                if (!lastUpdateRef.current) {
                    lastUpdateRef.current = now;
                }
                const elapsed = now - lastUpdateRef.current;
                if (elapsed >= 500) {
                    lastUpdateRef.current = now;
                    setUiPosts(allPostsRef.current.slice());
                    setUiStats(statsRef.current);
                    setGeoVersion(_HomeHandleServerEventSetGeoVersion);
                    setGeoSnapshot(geoJsonRef.current);
                    return;
                }
                if (!updateTimeoutRef.current) {
                    updateTimeoutRef.current = setTimeout({
                        "Home[handleServerEvent > setTimeout()]": ()=>{
                            lastUpdateRef.current = Date.now();
                            updateTimeoutRef.current = null;
                            setUiPosts(allPostsRef.current.slice());
                            setUiStats(statsRef.current);
                            setGeoVersion(_HomeHandleServerEventSetTimeoutSetGeoVersion);
                            setGeoSnapshot(geoJsonRef.current);
                        }
                    }["Home[handleServerEvent > setTimeout()]"], 500 - elapsed);
                }
            }
        })["Home[handleServerEvent]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleServerEvent = t4;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Home[useEffect()]": ()=>{
                if (socketRef.current) {
                    return;
                }
                let isActive = true;
                const init = {
                    "Home[useEffect() > init]": async ()=>{
                        try {
                            await fetch("/api/stream");
                        } catch  {}
                        if (!isActive) {
                            return;
                        }
                        const socket$0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])({
                            path: "/api/stream",
                            transports: [
                                "websocket",
                                "polling"
                            ]
                        });
                        socketRef.current = socket$0;
                        socket$0.on("connect", {
                            "Home[useEffect() > init > socket.on()]": ()=>{
                                setConnected(true);
                            }
                        }["Home[useEffect() > init > socket.on()]"]);
                        socket$0.on("disconnect", {
                            "Home[useEffect() > init > socket.on()]": ()=>{
                                setConnected(false);
                            }
                        }["Home[useEffect() > init > socket.on()]"]);
                        socket$0.on("connect_error", {
                            "Home[useEffect() > init > socket.on()]": ()=>{
                                setConnected(false);
                            }
                        }["Home[useEffect() > init > socket.on()]"]);
                        socket$0.on(SOCKET_EVENT, handleServerEvent);
                    }
                }["Home[useEffect() > init]"];
                init();
                return ()=>{
                    isActive = false;
                    socket.off(SOCKET_EVENT, handleServerEvent);
                    socket.disconnect();
                    socketRef.current = null;
                    if (updateTimeoutRef.current) {
                        clearTimeout(updateTimeoutRef.current);
                    }
                };
            }
        })["Home[useEffect()]"];
        t6 = [];
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl",
                    children: "Internet Mood Map"
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/app/page.tsx",
                    lineNumber: 180,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-zinc-400 md:text-base",
                    children: "Real-time visualization of global social sentiment, rendered in a sleek dark dashboard."
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/app/page.tsx",
                    lineNumber: 180,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = `flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${connected ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40" : "bg-zinc-800/80 text-zinc-300 ring-1 ring-zinc-700"}`;
    const t9 = `h-2 w-2 rounded-full ${connected ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"}`;
    let t10;
    if ($[9] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t9
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    const t11 = connected ? "Streaming live mood data" : "Connecting\u2026";
    let t12;
    if ($[11] !== t10 || $[12] !== t11 || $[13] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
        $[13] = t8;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== viewMode) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ViewToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            mode: viewMode,
            onChange: setViewMode
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[15] = viewMode;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t12 || $[18] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/sentiverse/src/app/page.tsx",
                    lineNumber: 216,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[17] = t12;
        $[18] = t13;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== geoSnapshot || $[21] !== geoVersion || $[22] !== viewMode) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel relative flex min-h-[360px] flex-col overflow-hidden",
            children: viewMode === "map" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapView, {
                geoJson: geoSnapshot
            }, geoVersion, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 225,
                columnNumber: 115
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeView, {
                getLatestPosts: {
                    "Home[<GlobeView>.getLatestPosts]": ()=>allPostsRef.current
                }["Home[<GlobeView>.getLatestPosts]"]
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 225,
                columnNumber: 168
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[20] = geoSnapshot;
        $[21] = geoVersion;
        $[22] = viewMode;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    const t16 = !uiPosts.length;
    let t17;
    if ($[24] !== t16 || $[25] !== uiPosts) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel flex min-h-[360px] flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                posts: uiPosts,
                isLoading: t16
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 238,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[24] = t16;
        $[25] = uiPosts;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    const t18 = !uiStats;
    let t19;
    if ($[27] !== t18 || $[28] !== uiStats) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel flex min-h-[360px] flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stats: uiStats,
                isLoading: t18
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 248,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[27] = t18;
        $[28] = uiStats;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== t15 || $[31] !== t17 || $[32] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "dashboard-grid",
            children: [
                t15,
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[30] = t15;
        $[31] = t17;
        $[32] = t19;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== t14 || $[35] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen px-4 py-6 md:px-8 md:py-8 bg-gradient-to-br from-black via-[#050510] to-[#020617]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl flex-col gap-6",
                children: [
                    t14,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 267,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[34] = t14;
        $[35] = t20;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    return t21;
}
_s(Home, "sNobIS/6+ZzAAyDPjQYUuIGKAw0=");
_c2 = Home;
function _HomeHandleServerEventSetTimeoutSetGeoVersion(v_0) {
    return v_0 + 1;
}
function _HomeHandleServerEventSetGeoVersion(v) {
    return v + 1;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MapView");
__turbopack_context__.k.register(_c1, "GlobeView");
__turbopack_context__.k.register(_c2, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sentiverse_src_e31ae92b._.js.map