<template>
    <div class="settings">
        <SearchField v-model="search" class="search" />
        <Dropdown :options="['Issues', 'Feature Requests']" :option-display="(a: string) => a" v-model="mode"
            class="mode" />
        <Dropdown :options="['Open', 'Closed']" :option-display="(a: string) => a" v-model="status" class="status"
            width="140px" />
    </div>
    <RoundedContainer v-if="mode === 'Issues'">
        <template #title>Known Issues</template>
        <div v-if="filtered.length > 0" v-for="issue in filtered" :key="issue.id" class="left-aligned">
            <BugItem :issue="issue" />
        </div>
        <div v-else class="left-aligned">
            <div class="container">
                <span class="title">No known issues at this time. If you encounter any
                    problems, please report them!</span>
            </div>
        </div>
    </RoundedContainer>
    <RoundedContainer v-if="mode === 'Feature Requests'">
        <template #title>Enhancements and Feature Requests</template>
        <div v-if="filtered.length > 0" v-for="enhancement in filtered" :key="enhancement.id" class="left-aligned">
            <EnhancementItem :enhancement="enhancement" />
        </div>
        <div v-else class="left-aligned">
            <div class="container">
                <span class="title">No known enhancements or feature requests at this time.
                    If you have any ideas for new features, please let us
                    know!</span>
            </div>
        </div>
    </RoundedContainer>
</template>

<script setup lang="ts">
import type { GitHubIssue } from '~/types/GitHubIssue';
import { computed, onMounted, ref } from 'vue';
import { SearchField, Dropdown, RoundedContainer } from '@origami-systems/ui';
import BugItem from './BugItem.vue';
import EnhancementItem from './EnhancementItem.vue';
import { getEnhancements } from '@utils/GetEnhancements'
import { getIssues } from '@utils/GetIssues'

const mode = ref<'Issues' | 'Feature Requests'>('Issues');
const status = ref<'Open' | 'Closed'>('Open');
const search = ref<string>('');

const issues = ref<GitHubIssue[]>([]);
const enhancements = ref<GitHubIssue[]>([]);

const filtered = computed<GitHubIssue[]>(() => {
    let result: GitHubIssue[] = [];
    if (mode.value === 'Issues') {
        result = issues.value;
    } else {
        result = enhancements.value;
    }

    result = result.filter(u => u.state == status.value.toLowerCase());

    if (search.value.trim() !== "") {
        result = result.filter(u =>
            u.title.toLowerCase().includes(search.value.toLowerCase().trim())
        );
    }
    return result;
})

onMounted(() => {
    getIssues().then(data => (issues.value = data))
    getEnhancements().then(data => (enhancements.value = data))
})
</script>

<style scoped lang="scss">
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
