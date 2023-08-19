<script setup>
import { ref } from "vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";

const show = ref(false);
const activeItem = ref("");
</script>

<template>
  <div class="wrapper">
    <Transition name="slide-fade">
      <div class="menu" v-show="show">
        <NuxtLink
          class="menu__item"
          :class="{ '-active': activeItem === 'home' }"
          @click="(activeItem = 'home'), (show = false)"
          to="/"
          >Home
        </NuxtLink>
        <NuxtLink
          class="menu__item"
          :class="{ '-active': activeItem === 'about' }"
          @click="(activeItem = 'about'), (show = false)"
          to="/about"
          >About me</NuxtLink
        >
        <NuxtLink
          class="menu__item"
          :class="{ '-active': activeItem === 'projects' }"
          @click="(activeItem = 'projects'), (show = false)"
          to="/projects"
          >Projects</NuxtLink
        >
        <NuxtLink
          class="menu__item"
          :class="{ '-active': activeItem === 'blog' }"
          @click="(activeItem = 'blog'), (show = false)"
          to="/blog"
          >Blog</NuxtLink
        >
        <NuxtLink
          class="menu__item"
          :class="{ '-active': activeItem === 'contact' }"
          @click="(activeItem = 'contact'), (show = false)"
          to="/contact"
          >Contact me</NuxtLink
        >
      </div>
    </Transition>
    <div>
      <button class="btn" @click="show = !show" aria-label="Menu">
        <MenuIcon></MenuIcon>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables.scss";
@import "@/assets/scss/config/mixin.scss";

.slide-fade {
  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.menu {
  position: absolute;
  top: 7rem;
  width: 100%;
  padding: 0.75rem;
  box-shadow: 0 20px 10px rgba(black, 0.3);
  border-radius: 12px;
  background-color: #fff;

  @include mq("tablet") {
    top: 10rem;
  }

  @include mq("large") {
    display: flex !important;
    justify-content: space-between;
    position: static;
    padding: 0;
    box-shadow: none;
  }

  .dark & {
    background-color: $black;

    @include mq("large") {
      background-color: transparent;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    font-size: $text-sm;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: currentColor;

    &:hover {
      color: $purple;
    }

    @include mq("large") {
      padding: 0.75rem 1.5rem;
      border-radius: 3px;

      &:hover {
        color: $dark-gray;
        background-color: rgba($color: $light-gray, $alpha: 0.3);
      }

      &.-active {
        color: $dark-gray;
        background-color: rgba($color: $light-gray, $alpha: 0.3);
      }

      .dark & {
        color: currentColor;

        &:hover {
          color: white;
          background-color: $dark-gray;
        }

        &.-active {
          color: white;
          background-color: $dark-gray;
        }
      }
    }
  }
}

.btn {
  cursor: pointer;
  background-color: transparent;

  @include mq("large") {
    display: none;
  }
}
</style>
