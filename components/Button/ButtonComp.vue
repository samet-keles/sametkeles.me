<template>
  <button class="button">Contact me</button>
</template>

<style lang="scss">
@import "@/assets/scss/config/variables.scss";

.button {
  margin-top: 50px;
  margin-left: 50px;

  cursor: pointer;
  padding: 0.8rem 1.6rem;
  font-size: $text-md;
  line-height: $line-md;
  font-weight: 500;
  color: white;

  background: linear-gradient($gray, $gray) padding-box,
    $purple-to-pink border-box;
  border-radius: 1rem;
  border: 3px solid transparent;
  border-width: 3px;
  border-style: solid;

  &:hover {
    background: linear-gradient($black, $black) padding-box,
      $purple-to-pink border-box;

    filter: drop-shadow(0px 0px 6px $purple);
  }
}
</style>
