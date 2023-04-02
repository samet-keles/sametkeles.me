<script setup>
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>

<template>
  <div class="logo">
    <a class="logo__link" href="">
      <img
        v-if="!isDark"
        class="logo__img"
        src="/img/light-logo.webp"
        alt="logo"
      />
      <img
        v-if="isDark"
        class="logo__img"
        src="/img/dark-logo.webp"
        alt="logo"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  text-align: center;

  &__img {
    width: 75px;
    height: 75px;
  }
}
</style>
