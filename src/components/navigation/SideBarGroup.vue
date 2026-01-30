<template>
    <SidebarButton v-model="open" />
    <Sidebar v-model="open">
        <SideBarItem to="/">Home</SideBarItem>
        <SideBarItem to="/bugs-tracker">Bugs</SideBarItem>
        <SideBarItem to="/blog">Blog</SideBarItem>
        <SideBarItem to="/contact">Contact</SideBarItem>
    </Sidebar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Sidebar, SidebarButton } from "@origami-systems/ui";
import SideBarItem from "./SideBarItem.vue";

const open = ref(false);
</script>
