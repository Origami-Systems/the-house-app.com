<template>
    <a :href="to" class="link" :class="{ active: isActive }">
        <h1 class="title">
            <slot />
        </h1>
    </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
    to: string;
}>();

const isActive = ref(false);

onMounted(() => {
    isActive.value = window.location.pathname === props.to;
});
</script>

<style scoped lang="scss">
.active {
    :deep(h1) {
        color: var(--accent);
    }
}

.title {
    margin: 10px;
    font-size: 38px;
    font-weight: bold;
    line-height: 144%;
    letter-spacing: -5%;
    user-select: none;
}
</style>
