module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/sentiverse/src/lib/sentiment.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeSentimentScore",
    ()=>analyzeSentimentScore,
    "categorizeSentiment",
    ()=>categorizeSentiment
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$sentiment__$5b$external$5d$__$28$sentiment$2c$__cjs$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$sentiment$29$__ = __turbopack_context__.i("[externals]/sentiment [external] (sentiment, cjs, [project]/sentiverse/node_modules/sentiment)");
;
const analyzer = new __TURBOPACK__imported__module__$5b$externals$5d2f$sentiment__$5b$external$5d$__$28$sentiment$2c$__cjs$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$sentiment$29$__["default"]();
const analyzeSentimentScore = (text)=>{
    const { score } = analyzer.analyze(text);
    return score;
};
const categorizeSentiment = (score)=>{
    if (score > 0) return "positive";
    if (score < 0) return "negative";
    return "neutral";
};
}),
"[project]/sentiverse/src/lib/postGenerator.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateRandomPost",
    ()=>generateRandomPost
]);
const SAMPLE_TEXTS = [
    "I love this new update",
    "This is terrible",
    "Feeling great today",
    "This is the worst thing ever",
    "Everything is broken"
];
const COUNTRIES = [
    {
        country: "United States",
        coordinates: [
            -98.35,
            39.5
        ]
    },
    {
        country: "United Kingdom",
        coordinates: [
            -3.436,
            55.378
        ]
    },
    {
        country: "India",
        coordinates: [
            78.9629,
            20.5937
        ]
    },
    {
        country: "Brazil",
        coordinates: [
            -51.9253,
            -14.235
        ]
    },
    {
        country: "Japan",
        coordinates: [
            138.2529,
            36.2048
        ]
    },
    {
        country: "Germany",
        coordinates: [
            10.4515,
            51.1657
        ]
    },
    {
        country: "South Africa",
        coordinates: [
            22.9375,
            -30.5595
        ]
    },
    {
        country: "Canada",
        coordinates: [
            -106.3468,
            56.1304
        ]
    },
    {
        country: "Australia",
        coordinates: [
            133.7751,
            -25.2744
        ]
    },
    {
        country: "Mexico",
        coordinates: [
            -102.5528,
            23.6345
        ]
    }
];
const randomItem = (arr)=>arr[Math.floor(Math.random() * arr.length)];
const generateRandomPost = ()=>{
    const baseText = randomItem(SAMPLE_TEXTS);
    const countryData = randomItem(COUNTRIES);
    const text = Math.random() > 0.4 ? `${baseText} #${[
        "update",
        "vibes",
        "mood",
        "tech",
        "news"
    ].at(Math.floor(Math.random() * 5))}` : baseText;
    return {
        text,
        country: countryData.country,
        coordinates: countryData.coordinates,
        timestamp: Date.now()
    };
};
}),
"[project]/sentiverse/src/lib/aggregation.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildGeoJsonFromCountries",
    ()=>buildGeoJsonFromCountries,
    "resetAggregation",
    ()=>resetAggregation,
    "updateAggregation",
    ()=>updateAggregation
]);
const keywordWeights = {};
const countryAggregates = {};
const resetAggregation = ()=>{
    Object.keys(keywordWeights).forEach((k)=>delete keywordWeights[k]);
    Object.keys(countryAggregates).forEach((k)=>delete countryAggregates[k]);
};
const extractKeywords = (text)=>{
    return text.toLowerCase().replace(/[^a-z0-9#\s]/g, "").split(/\s+/).filter((token)=>token.length > 2 && ![
            "this",
            "the",
            "and"
        ].includes(token));
};
const updateAggregation = (post)=>{
    const { country, sentimentScore, text } = post;
    const existing = countryAggregates[country] ?? {
        country,
        totalScore: 0,
        count: 0
    };
    existing.totalScore += sentimentScore;
    existing.count += 1;
    countryAggregates[country] = existing;
    const keywords = extractKeywords(text);
    const decay = 0.98;
    Object.keys(keywordWeights).forEach((key)=>{
        keywordWeights[key] *= decay;
        if (keywordWeights[key] < 0.01) {
            delete keywordWeights[key];
        }
    });
    const delta = sentimentScore >= 0 ? 1 : -1;
    keywords.forEach((word)=>{
        keywordWeights[word] = (keywordWeights[word] ?? 0) + delta;
    });
    let happiestCountry = null;
    let happiestScore = null;
    let mostNegativeCountry = null;
    let mostNegativeScore = null;
    let globalTotalScore = 0;
    let totalMessages = 0;
    Object.values(countryAggregates).forEach((agg)=>{
        const avg = agg.totalScore / agg.count;
        globalTotalScore += agg.totalScore;
        totalMessages += agg.count;
        if (happiestScore === null || avg > happiestScore) {
            happiestCountry = agg.country;
            happiestScore = avg;
        }
        if (mostNegativeScore === null || avg < mostNegativeScore) {
            mostNegativeCountry = agg.country;
            mostNegativeScore = avg;
        }
    });
    const globalMoodScore = totalMessages ? globalTotalScore / totalMessages : 0;
    const trendingKeywords = Object.entries(keywordWeights).sort((a, b)=>b[1] - a[1]).slice(0, 6).map(([word, score])=>({
            word,
            score
        }));
    const globalCategory = globalMoodScore > 0 ? "positive" : globalMoodScore < 0 ? "negative" : "neutral";
    return {
        globalMoodScore,
        globalCategory,
        happiestCountry,
        happiestScore,
        mostNegativeCountry,
        mostNegativeScore,
        totalMessages,
        trendingKeywords
    };
};
const buildGeoJsonFromCountries = ()=>{
    const features = Object.values(countryAggregates).map((agg)=>{
        const avg = agg.totalScore / agg.count;
        const intensity = Math.max(-3, Math.min(3, avg));
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [
                    0,
                    0
                ]
            },
            properties: {
                country: agg.country,
                intensity
            }
        };
    });
    return {
        type: "FeatureCollection",
        features
    };
};
}),
"[project]/sentiverse/src/pages/api/stream.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$socket$2e$io__$5b$external$5d$__$28$socket$2e$io$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$29$__ = __turbopack_context__.i("[externals]/socket.io [external] (socket.io, esm_import, [project]/sentiverse/node_modules/socket.io)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$nanoid$29$__ = __turbopack_context__.i("[externals]/nanoid [external] (nanoid, esm_import, [project]/sentiverse/node_modules/nanoid)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$sentiment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/lib/sentiment.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$postGenerator$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/lib/postGenerator.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$aggregation$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sentiverse/src/lib/aggregation.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$socket$2e$io__$5b$external$5d$__$28$socket$2e$io$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$nanoid$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$socket$2e$io__$5b$external$5d$__$28$socket$2e$io$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$nanoid$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const config = {
    api: {
        bodyParser: false
    }
};
const INTERVAL_MIN = 1000;
const INTERVAL_MAX = 2000;
const createRandomDelay = ()=>Math.floor(INTERVAL_MIN + Math.random() * (INTERVAL_MAX - INTERVAL_MIN));
const registerStreamer = (io)=>{
    if (io.streamerRegistered) return;
    io.streamerRegistered = true;
    const loop = ()=>{
        const basePost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$postGenerator$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["generateRandomPost"])();
        const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$sentiment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["analyzeSentimentScore"])(basePost.text);
        const sentiment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$sentiment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["categorizeSentiment"])(score);
        const post = {
            id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$nanoid$29$__["nanoid"])(),
            text: basePost.text,
            country: basePost.country,
            coordinates: basePost.coordinates,
            sentimentScore: score,
            sentiment,
            timestamp: basePost.timestamp
        };
        const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$aggregation$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["updateAggregation"])(post);
        const geoJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sentiverse$2f$src$2f$lib$2f$aggregation$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["buildGeoJsonFromCountries"])();
        const payload = {
            post,
            stats,
            geoJson
        };
        io.emit("sentiment_update", payload);
        setTimeout(loop, createRandomDelay());
    };
    setTimeout(loop, createRandomDelay());
};
function handler(_req, res) {
    if (!res.socket.server.io) {
        const io = new __TURBOPACK__imported__module__$5b$externals$5d2f$socket$2e$io__$5b$external$5d$__$28$socket$2e$io$2c$__esm_import$2c$__$5b$project$5d2f$sentiverse$2f$node_modules$2f$socket$2e$io$29$__["Server"](res.socket.server, {
            path: "/api/stream",
            cors: {
                origin: "*"
            }
        });
        res.socket.server.io = io;
        registerStreamer(io);
    }
    res.end();
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9d75c284._.js.map