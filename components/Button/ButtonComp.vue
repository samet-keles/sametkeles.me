<script setup>
const props = defineProps(["name"]);
</script>

<template>
  <button class="button">{{ props.name }}</button>
</template>

<style lang="scss">
@import "@/assets/scss/config/variables.scss";

.button {
  cursor: pointer;
  padding: 0.8rem 1.6rem;
  font-size: $text-md;
  line-height: $line-md;
  font-weight: 500;
  color: white;

  background: linear-gradient($gray, $gray) padding-box,
    $purple-to-pink border-box;
  border-radius: 1rem;
  border: 2px solid transparent;
  border-width: 2px;
  border-style: solid;

  &:hover {
    background: linear-gradient($black, $black) padding-box,
      $purple-to-pink border-box;

    filter: drop-shadow(0px 0px 6px $purple);
  }
}
</style>
