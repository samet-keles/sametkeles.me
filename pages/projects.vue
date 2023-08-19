<script setup>
import { onMounted, onUnmounted } from "vue";
import { useProjectsArr, useProjectsData } from "@/composables/useProjects";

useHead({
  title: "Projects | Samet Keles",
});

let unsubscribe;

onMounted(() => {
  unsubscribe = useProjectsData();
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});
</script>

<template>
  <section class="projects page">
    <div class="container">
      <h1 class="page__title">Projects</h1>
      <div class="cards">
        <div class="card" v-for="project in useProjectsArr" :key="project.id">
          <a :href="project.link" target="_blank">
            <nuxt-img
              :src="project.img"
              :alt="project.alt"
              class="card__img"
              loading="lazy"
            />
            <div class="card__text">
              <h3 class="card__title">{{ project.title }}</h3>
              <p class="card__description">{{ project.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";

.projects {
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    @include mq("tablet") {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .card {
      width: 75%;
      border-radius: 12px;
      outline: 1px solid $light-gray;

      @include mq("tablet") {
        width: 37.5%;
      }

      @include mq("large") {
        width: 27.5%;
      }

      .dark & {
        outline: 1px solid $gray;
      }

      &:hover {
        outline: 2px solid $purple;
      }

      &__img {
        width: 100%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
      }

      &__text {
        padding: 2rem;
        width: 100%;
        background-color: #fdfcfc;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;

        .dark & {
          background-color: $dark-gray;
        }
      }

      &__title {
        font-size: $text-xl;
        font-weight: 500;
        margin-bottom: 0.75rem;
        color: $gray;

        .dark & {
          color: white;
        }
      }

      &__description {
        display: flex;
        align-items: center;
        height: 13ch;
        color: #8b8b8b;
        font-size: 12px;
        font-weight: 400;

        .dark & {
          color: $light-gray;
        }
      }
    }
  }
}
</style>
