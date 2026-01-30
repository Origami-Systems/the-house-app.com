export interface GitHubLabel {
    id: number;
    name: string;
    color: string;
}
export interface GitHubIssue {
    id: number;
    number: number;
    title: string;
    html_url: string;
    labels: GitHubLabel[];
    state: string;
    body: string;
    state_reason: string;
}
