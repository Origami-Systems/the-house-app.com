<template>
    <Notifications :notifications @close="close" />
</template>

<script setup lang="ts">
import { Notifications, useNotifications } from '@origami-systems/ui';
const { notifications, close } = useNotifications();
</script>
