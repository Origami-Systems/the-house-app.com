<template>
    <a :href="to" class="link" :class="{ active: isActive }">
        <p class="title">
            <slot />
        </p>
    </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
    to: string;
}>();

const isActive = ref(false);

onMounted(() => {
    if (props.to === '/') {
        isActive.value = window.location.pathname === '/';
    } else {
        isActive.value = window.location.pathname.includes(props.to);
    }
});
</script>

<style scoped lang="scss">
.active {
    :deep(p) {
        color: var(--accent);
    }
}

.title {
    font-size: 24px;
    margin: 0 15px;
    font-weight: bold;
    color: var(--text-0);
    user-select: none;

    &:hover {
        color: var(--accent);
        cursor: pointer;
    }
}
</style>
