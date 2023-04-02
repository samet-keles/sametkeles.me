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

<style lang="scss">
.header {
  .navigation {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .menuComp {
    flex-basis: 33.33%;
  }

  .logoComp {
    flex-basis: 33.33%;
  }

  .iconGroup {
    flex-basis: 33.33%;
  }
}
</style>
