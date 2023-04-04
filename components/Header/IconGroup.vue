<script setup>
import { useDark, useToggle } from "@vueuse/core";

import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import SunIcon from "@/components/icons/SunIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <ul class="icons">
    <li class="icons__item">
      <a href="https://github.com/samet-keles" target="_blank"
        ><GithubIcon class="icons__github"></GithubIcon
      ></a>
    </li>
    <li class="icons__item">
      <a href="https://www.linkedin.com/in/samet-keles/" target="_blank"
        ><LinkedinIcon class="icons__linkedin"></LinkedinIcon
      ></a>
    </li>
    <li class="icons__item icons--light" v-if="!isDark" @click="toggleDark()">
      <button class="btn btn--light">
        <SunIcon class="icons__sun"></SunIcon>
      </button>
    </li>
    <li class="icons__item icons--dark" v-if="isDark">
      <button class="btn btn--dark" @click="toggleDark()">
        <MoonIcon class="icons__moon"></MoonIcon>
      </button>
    </li>
  </ul>
</template>

<style lang="scss">
@import "@/assets/scss/config/variables.scss";

.icons {
  display: flex;
  justify-content: flex-end;

  &__github:hover {
    stroke: rgb(180, 180, 180);
  }

  &__linkedin:hover {
    stroke: $blue;
  }

  &__sun:hover {
    stroke: $orange;
  }

  &__moon:hover {
    stroke: $gray-2;
  }

  &__item + &__item {
    margin-left: 1.5rem;
  }
  .btn {
    cursor: pointer;
    background-color: transparent;
  }
}
</style>
