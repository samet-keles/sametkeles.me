<script setup>
import IconGroup from "@/components/Header/IconGroup.vue";
import LogoComp from "@/components/Header/LogoComp.vue";
import MenuComp from "@/components/Header/MenuComp.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navigation">
        <MenuComp class="menuComp"></MenuComp>
        <LogoComp class="logoComp"></LogoComp>
        <IconGroup class="iconGroup"></IconGroup>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/mixin.scss";

.header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  max-height: 70px;

  @include mq("large") {
    position: static;
    max-height: 100%;
  }
  .navigation {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .menuComp {
    flex-basis: 33.33%;

    @include mq("large") {
      order: 2;
      flex-basis: 46%;
    }
  }

  .logoComp {
    flex-basis: 33.33%;
    text-align: center;

    @include mq("large") {
      order: 1;
      text-align: left;
      flex-basis: 27%;
    }
  }

  .iconGroup {
    flex-basis: 33.33%;

    @include mq("large") {
      order: 3;
      flex-basis: 27%;
    }
  }
}
</style>
