<script setup>
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-menu-2"
    :class="{ '-darkMode': isDark }"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="#18181b"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
</template>
