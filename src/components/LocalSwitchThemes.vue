<template>
    <SwitchThemesButton @click="switchThemes" :colorMode="colorMode" />
</template>

<script setup lang="ts">
import { SwitchThemesButton, useColorTheme } from "@origami-systems/ui";

const { colorMode, switchThemes } = useColorTheme();
</script>
