"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBlacklisted = isBlacklisted;
exports.checkUrlSafe = checkUrlSafe;
exports.scanUrlContent = scanUrlContent;
const node_fetch_1 = __importDefault(require("node-fetch"));
const http_errors_1 = __importDefault(require("http-errors"));
const SAFE_BROWSING_URL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find';
const VIRUS_TOTAL_URL = 'https://www.virustotal.com/api/v3/urls';
const blacklist = [
    'https://example.com'
];
function isBlacklisted(url) {
    return blacklist.some(blacklistedUrl => url.includes(blacklistedUrl));
}
function checkUrlSafe(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestBody = {
            client: {
                clientId: "malonda",
                clientVersion: "1.5.2"
            },
            threatInfo: {
                threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
                platformTypes: ["ANY_PLATFORM"],
                threatEntryTypes: ["URL"],
                threatEntries: [{ url }]
            }
        };
        try {
            const response = yield (0, node_fetch_1.default)(`${SAFE_BROWSING_URL}?key=${process.env.G_API_KEY}`, {
                method: "POST",
                body: JSON.stringify(requestBody),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = yield response.json();
            return data.matches && data.matches.length > 0;
        }
        catch (e) {
            throw new http_errors_1.default.InternalServerError("Error Checking URL");
        }
    });
}
function scanUrlContent(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const base64Url = Buffer.from(url).toString("base64").replace(/=/g, '');
            const response = yield (0, node_fetch_1.default)(`${VIRUS_TOTAL_URL}`, {
                method: "POST",
                body: JSON.stringify({ url: base64Url }),
                headers: {
                    ContentType: "application/json",
                    'x-api-key': `${process.env.VT_API_KEY}`,
                }
            });
            const data = yield response.json();
            const analysisResponse = yield (0, node_fetch_1.default)(`${VIRUS_TOTAL_URL}/${data.data.id}`, {
                method: "GET",
                headers: {
                    'x-api-key': `${process.env.VT_API_KEY}`,
                }
            });
            const responseData = yield analysisResponse.json();
            const analysisResults = responseData.data.attributes.last_analysis_results;
            const maliciousCount = Object.values(analysisResults).filter((result) => result.category === 'malicious').length;
            return maliciousCount > 0;
        }
        catch (e) {
            throw new http_errors_1.default.InternalServerError("Error Scanning URL");
        }
    });
}
