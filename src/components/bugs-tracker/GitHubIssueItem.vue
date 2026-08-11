<template>
    <a :href="issue.html_url" class="link">
        <div class="container">
            <span class="title">#{{ issue.number }}: {{ issue.title }}</span>
            <span class="status-text capitalize" :class="issue.state">
                {{ issue.state }}
            </span>
        </div>
    </a>
</template>

<script setup lang="ts">
import type { GitHubIssue } from "~/types/GitHubIssue";

defineProps<{
    issue: GitHubIssue;
}>();
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    text-align: left;
    align-items: center;
}

.title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.status-text {
    padding: 5px 10px;
    border-radius: var(--border-radius);
    color: var(--always-white);
    justify-content: center;
    align-content: center;

    &.closed {
        background-color: color-mix(in display-p3, var(--color-purple) 35%, var(--surface-0));
        outline: 2px solid var(--color-purple);
    }

    &.open {
        background-color: color-mix(in display-p3, var(--color-green) 35%, var(--surface-0));
        outline: 2px solid var(--color-green);
    }
}
</style>
