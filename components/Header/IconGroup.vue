<script setup>
import { useDark, useToggle } from "@vueuse/core";

import GithubIcon from "~~/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import SunIcon from "@/components/icons/SunIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

console.log(isDark.value);
</script>

<template>
  <ul class="icons">
    <li class="icons__item">
      <a href="https://github.com/samet-keles" target="_blank"
        ><GithubIcon></GithubIcon
      ></a>
    </li>
    <li class="icons__item">
      <a href="https://www.linkedin.com/in/samet-keles/" target="_blank"
        ><LinkedinIcon></LinkedinIcon
      ></a>
    </li>
    <li class="icons__item icons--light" v-if="!isDark" @click="toggleDark()">
      <button class="btn btn--light"><SunIcon></SunIcon></button>
    </li>
    <li class="icons__item icons--dark" v-if="isDark">
      <button class="btn btn--dark" @click="toggleDark()">
        <MoonIcon></MoonIcon>
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.icons {
  display: flex;
  justify-content: flex-end;

  &__item + &__item {
    margin-left: 1.5rem;
  }
  .btn {
    cursor: pointer;
    background-color: transparent;
  }
}
</style>
