<script setup>
import { ref } from "vue";

import MenuIcon from "@/components/icons/MenuIcons.vue";

const hidden = ref(false);
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navigation">
        <div class="logo">
          <a class="logo__link" href="">
            <img class="logo__img" src="/img/light-logo.webp" alt="logo" />
          </a>
        </div>
        <Transition name="slide-fade">
          <ul class="menu" v-if="hidden">
            <a class="menu__item" href=""><li>Home</li></a>
            <a class="menu__item" href=""><li>Projects</li></a>
            <a class="menu__item" href=""><li>About me</li></a>
            <a class="menu__item" href=""><li>Blog</li></a>
            <a class="menu__item" href=""><li>Contact me</li></a>
          </ul>
        </Transition>
        <div>
          <button @click="hidden = !hidden">
            <MenuIcon class="menu__icon"></MenuIcon>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables.scss";
.header {
  .navigation {
    position: relative;
    .logo {
      width: 7.5rem;
      &__img {
        width: 100%;
      }
    }

    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateY(-100%);
      opacity: 0;
    }

    .menu {
      width: 100%;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 20px 10px rgba(black, 0.3);
      border-radius: 12px;
      background-color: transparent;

      &__item {
        font-size: $text-sm;
        display: block;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;

        &:hover {
          color: $purple;
        }
      }
    }

    .menu__icon {
      position: absolute;
      right: 0;
      top: 10px;
    }
  }
}
</style>
