import type { GitHubIssue } from '~/types/GitHubIssue';

export async function getIssues() {
    try {
        const res = await fetch(
            "https://n8n.origamiking3612.com/webhook/the-house-app/get/issues"
        )

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }

        const data = await res.json() as GitHubIssue[]

        if (!Array.isArray(data)) {
            console.error("Expected array of issues, got:", typeof data)
        }

        return data
    } catch (err) {
        console.error("error:", err)
        return []
    }
}
