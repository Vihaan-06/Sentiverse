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
    if ($[0] !== "7d54597c2245a0ab247e51d40d0e2b297566234e6a4e6a90ea6f676d2812e1b9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d54597c2245a0ab247e51d40d0e2b297566234e6a4e6a90ea6f676d2812e1b9";
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
    if ($[0] !== "e477251e189094d85c8dffef6c9196f668a6bd6934b1ab29b7700883c4e9630b") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e477251e189094d85c8dffef6c9196f668a6bd6934b1ab29b7700883c4e9630b";
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
    if ($[0] !== "d47e0ee879cf779322736e3ce6674ebb50de4e114246feab3476bf596b954252") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d47e0ee879cf779322736e3ce6674ebb50de4e114246feab3476bf596b954252";
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
    if ($[0] !== "d47e0ee879cf779322736e3ce6674ebb50de4e114246feab3476bf596b954252") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d47e0ee879cf779322736e3ce6674ebb50de4e114246feab3476bf596b954252";
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
const ViewToggle = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f7def63f0767891d04d51e1db07828d0430d79b9002476cbe18fbe8d9374effc") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7def63f0767891d04d51e1db07828d0430d79b9002476cbe18fbe8d9374effc";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center rounded-full border border-white/10 bg-zinc-900/70 p-1 text-xs shadow-[0_0_24px_rgba(59,130,246,0.35)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "flex items-center gap-1 rounded-full px-3 py-1 transition-colors bg-emerald-500/20 text-emerald-200 shadow-[0_0_18px_rgba(34,197,94,0.6)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-1.5 rounded-full bg-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
                        lineNumber: 15,
                        columnNumber: 327
                    }, ("TURBOPACK compile-time value", void 0)),
                    "2D Map"
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
                lineNumber: 15,
                columnNumber: 155
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/components/ViewToggle.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/ActivityFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/StatsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ViewToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/components/ViewToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
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
const SOCKET_EVENT = "sentiment_update";
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "813ad2a8725079b063d448452c3e5bbbd7cc5bbb80cd61823f3fd2ffeafc8031") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "813ad2a8725079b063d448452c3e5bbbd7cc5bbb80cd61823f3fd2ffeafc8031";
    }
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
                        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])({
                            path: "/api/stream",
                            transports: [
                                "websocket",
                                "polling"
                            ]
                        });
                        socketRef.current = socket;
                        socket.on("connect", {
                            "Home[useEffect() > init > socket.on()]": ()=>{
                                setConnected(true);
                            }
                        }["Home[useEffect() > init > socket.on()]"]);
                        socket.on("disconnect", {
                            "Home[useEffect() > init > socket.on()]": ()=>{
                                setConnected(false);
                            }
                        }["Home[useEffect() > init > socket.on()]"]);
                        socket.on("connect_error", {
                            "Home[useEffect() > init > socket.on()]": ()=>{
                                setConnected(false);
                            }
                        }["Home[useEffect() > init > socket.on()]"]);
                        socket.on(SOCKET_EVENT, handleServerEvent);
                    }
                }["Home[useEffect() > init]"];
                init();
                return ()=>{
                    isActive = false;
                    const socket_0 = socketRef.current;
                    if (socket_0) {
                        socket_0.off(SOCKET_EVENT, handleServerEvent);
                        socket_0.disconnect();
                    }
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
            className: "flex items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/logo.svg",
                alt: "Sentiverse logo",
                width: 32,
                height: 32,
                className: "h-8 w-8"
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 176,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold tracking-wide text-zinc-100",
                children: "Sentiverse"
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 183,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = `flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${connected ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40" : "bg-zinc-800/80 text-zinc-300 ring-1 ring-zinc-700"}`;
    const t10 = `h-2 w-2 rounded-full ${connected ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"}`;
    let t11;
    if ($[10] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t10
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    const t12 = connected ? "Streaming live mood data" : "Connecting\u2026";
    let t13;
    if ($[12] !== t11 || $[13] !== t12 || $[14] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[12] = t11;
        $[13] = t12;
        $[14] = t9;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ViewToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between",
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/sentiverse/src/app/page.tsx",
                    lineNumber: 218,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl",
                    children: "Internet Mood Map"
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/app/page.tsx",
                    lineNumber: 226,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-zinc-400 md:text-base",
                    children: "See How the World Feels Right Now"
                }, void 0, false, {
                    fileName: "[project]/sentiverse/src/app/page.tsx",
                    lineNumber: 226,
                    columnNumber: 150
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] !== geoSnapshot) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel relative flex min-h-[360px] flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapView, {
                geoJson: geoSnapshot
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 233,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[20] = geoSnapshot;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    const t18 = !uiPosts.length;
    let t19;
    if ($[22] !== t18 || $[23] !== uiPosts) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel flex min-h-[360px] flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                posts: uiPosts,
                isLoading: t18
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 242,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[22] = t18;
        $[23] = uiPosts;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    const t20 = !uiStats;
    let t21;
    if ($[25] !== t20 || $[26] !== uiStats) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel flex min-h-[360px] flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stats: uiStats,
                isLoading: t20
            }, void 0, false, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 252,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[25] = t20;
        $[26] = uiStats;
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] !== t17 || $[29] !== t19 || $[30] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "dashboard-grid",
            children: [
                t17,
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[28] = t17;
        $[29] = t19;
        $[30] = t21;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== t15 || $[33] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen px-4 py-6 md:px-8 md:py-8 bg-gradient-to-br from-black via-[#050510] to-[#020617]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl flex-col gap-6",
                children: [
                    t15,
                    t16,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/sentiverse/src/app/page.tsx",
                lineNumber: 271,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/sentiverse/src/app/page.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t22;
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    return t23;
}
_s(Home, "W2EYGu2dMw1dPMZnTWfb8jrthew=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapView");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sentiverse_src_e31ae92b._.js.map