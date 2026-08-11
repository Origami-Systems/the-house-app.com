<template>
    <div class="settings">
        <input type="search" v-model.trim="search" class="search" placeholder="Search" />
        <Dropdown
            :options="['issues', 'enhancements']"
            :option-display="(a) => normalizeString(a)"
            v-model="mode" />
        <Dropdown
            :options="['open', 'closed']"
            :option-display="(a) => normalizeString(a)"
            v-model="status"
            width="140px" />
    </div>
    <RoundedContainer>
        <template #title>
            <template v-if="mode === 'issues'"> Known Issues </template>
            <template v-if="mode === 'enhancements'"> Enhancements and Feature Requests </template>
        </template>
        <div v-if="filtered.length > 0" v-for="issue in filtered" :key="issue.id" class="list">
            <GitHubIssueItem :issue="issue" />
        </div>
        <div v-else class="none left-aligned">
            <template v-if="mode === 'issues'">
                No known issues at this time. If you encounter any problems, please report them!
            </template>
            <template v-if="mode === 'enhancements'">
                No known enhancements or feature requests at this time. If you have any ideas for
                new features, please let us know!
            </template>
        </div>
    </RoundedContainer>
</template>

<script setup lang="ts">
import type { GitHubIssue } from "~/types/GitHubIssue";
import { computed, onMounted, ref } from "vue";
import { Dropdown, normalizeString, RoundedContainer } from "@origami-systems/ui";
import { getEnhancements } from "@utils/GetEnhancements";
import { getIssues } from "@utils/GetIssues";
import GitHubIssueItem from "./GitHubIssueItem.vue";

const mode = ref<"issues" | "enhancements">("issues");
const status = ref<"open" | "closed">("open");
const search = ref<string>("");

const issues = ref<GitHubIssue[]>([]);
const enhancements = ref<GitHubIssue[]>([]);

const filtered = computed<GitHubIssue[]>(() => {
    let result: GitHubIssue[] = [];
    if (mode.value === "issues") {
        result = issues.value;
    } else {
        result = enhancements.value;
    }

    result = result.filter((u) => u.state == status.value.toLowerCase());

    if (search.value !== "") {
        result = result.filter((u) => u.title.toLowerCase().includes(search.value.toLowerCase()));
    }
    return result;
});

onMounted(() => {
    getIssues().then((data) => (issues.value = data));
    getEnhancements().then((data) => (enhancements.value = data));
});
</script>

<style scoped>
.list > * {
    border-bottom: 1px solid var(--background-1);
}

.list > *:last-child {
    border-bottom: none;
}

.settings {
    width: 100%;
    max-width: 700px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    align-items: center;
    justify-items: center;
    transition: all 0.3s ease;
}

.none {
    text-align: center;
}

@media (max-width: 720px) {
    .settings {
        grid-template-columns: repeat(2, 1fr);
    }

    .search {
        grid-column: span 2;
    }
}

@media (max-width: 460px) {
    .settings {
        grid-template-columns: 1fr;

        .search {
            grid-column: span 1;
        }
    }
}
</style>
