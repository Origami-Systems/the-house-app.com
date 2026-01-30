<template>
    <a :href="issue.html_url" class="link">
        <div class="container">
            <span class="title">#{{ issue.number }}: {{ issue.title }}</span>
            <span class="status-text capitalize" style="color: var(--always-white);" :class="{ [issue.state]: true }">{{
                issue.state }}</span>
        </div>
    </a>
</template>

<script setup lang="ts">
import type { GitHubIssue } from '~/types/GitHubIssue';

defineProps<{
    issue: GitHubIssue,
}>();
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    padding: 10px;
    border-bottom: 0.5px solid var(--background-0);
    text-align: left;

    .status-text {
        padding: 6px;
        border-radius: var(--border-radius);
        justify-content: center;
        align-content: center;

        &.closed {
            background-color: var(--color-purple);
        }

        &.open {
            background-color: var(--color-green);
        }
    }
}

.container:nth-child(odd) {
    background-color: var(--background-1);
}
</style>
