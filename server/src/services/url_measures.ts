import fetch from "node-fetch";
import httpError from "http-errors";

const SAFE_BROWSING_URL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find'
const VIRUS_TOTAL_URL = 'https://www.virustotal.com/api/v3/urls'

const blacklist = [
    'https://example.com'
]

type ObjectType = { [key: string]: any }

export function isBlacklisted(url: string): boolean {
    return blacklist.some(blacklistedUrl => url.includes(blacklistedUrl))
}

export async function checkUrlSafe(url: string) {
    const requestBody = {
        client: {
            clientId: "malonda",
            clientVersion: "1.5.2"
        },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{url}]
        }
    };

    try {
        const response = await fetch(
            `${SAFE_BROWSING_URL}?key=${process.env.G_API_KEY}`,
            {
                method: "POST",
                body: JSON.stringify(requestBody),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data: any = await response.json();

        return data.matches && data.matches.length > 0;

    } catch (e) {
        throw new httpError.InternalServerError("Error Checking URL");
    }
}

export async function scanUrlContent (url: string) {
    try {
        const base64Url = Buffer.from(url).toString("base64").replace(/=/g, '');

        const response = await fetch(
            `${VIRUS_TOTAL_URL}`,
            {
                method: "POST",
                body: JSON.stringify({url: base64Url}),
                headers: {
                    ContentType: "application/json",
                    'x-api-key': `${process.env.VT_API_KEY}`,
                }
            }
        )

        const data: any = await response.json();

        const analysisResponse = await fetch(
            `${VIRUS_TOTAL_URL}/${data.data.id}`,
            {
                method: "GET",
                headers: {
                    'x-api-key': `${process.env.VT_API_KEY}`,
                }
            }
        );

        const responseData: any = await analysisResponse.json();
        const analysisResults: any = responseData.data.attributes.last_analysis_results;
        const maliciousCount: number = Object.values(analysisResults).filter((result: any) =>
            result.category === 'malicious'
        ).length;
        return maliciousCount > 0;
    } catch (e) {
        throw new httpError.InternalServerError("Error Scanning URL");
    }
}
