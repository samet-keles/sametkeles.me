<script setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core";
import MenuIcon from "@/components/icons/MenuIcon.vue";

const show = ref(false);

const isDark = useDark();
</script>

<template>
  <div class="wrapper">
    <Transition name="slide-fade">
      <ul class="menu" v-show="show">
        <li class="menu__item" href=""><a>Home</a></li>
        <li class="menu__item" href=""><a>Projects</a></li>
        <li class="menu__item" href=""><a>About me</a></li>
        <li class="menu__item" href=""><a>Blog</a></li>
        <li class="menu__item" href=""><a>Contact me</a></li>
      </ul>
    </Transition>
    <div>
      <button class="btn" @click="show = !show">
        <MenuIcon :class="{ '-darkMode': isDark }"></MenuIcon>
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
  background-color: transparent;

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

  &__item {
    cursor: pointer;
    font-size: $text-sm;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    &:hover {
      color: $purple;
    }

    @include mq("large") {
      padding: 0.75rem 1.5rem;
      border-radius: 3px;
      color: $gray;

      &:hover {
        color: $dark-gray;
        background-color: rgba($color: $light-gray, $alpha: 0.3);
      }

      .dark & {
        color: $light-gray;

        &:hover {
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
