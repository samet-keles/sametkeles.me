<script setup>
import ButtonComp from "@/components/Button/ButtonComp.vue";
</script>

<template>
  <span class="title">HomePage</span> <br />
  <ButtonComp></ButtonComp>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables.scss";

.title {
  font-size: 7.2rem;
  font-weight: 600;
  background: $purple-to-orange;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
