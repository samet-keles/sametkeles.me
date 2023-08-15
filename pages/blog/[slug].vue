<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { usePostsData, usePostsArr } from "@/composables/usePosts";

const { slug } = useRoute().params;

const post = ref([]);

post.value = usePostsArr.value.find((item) => item.slug === slug);

let unsubscribe;

onMounted(() => {
  unsubscribe = usePostsData();
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});
</script>

<template>
  <section class="post page">
    <div class="container">
      <article class="post">
        <h2 class="post__title">{{ post.title }}</h2>
        <div class="post__info">
          <time :datetime="post.date" class="post__date">
            {{ post.date }}
          </time>
          <span class="post__read">5 min read</span>
        </div>
        <div class="post__figure">
          <img :src="post.image" alt="" class="post__img" />
        </div>
        <p class="post__content">{{ post.text }}</p>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";
.container {
  margin-right: 1rem;
  margin-left: 1rem;

  @include mq("tablet") {
    margin-right: 5rem;
    margin-left: 5rem;
  }

  @include mq("large") {
    margin-right: 20rem;
    margin-left: 20rem;
  }

  .post {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-size: $text-xxl;
      line-height: $line-xxl;
      margin-bottom: 1rem;
      color: $black;

      .dark & {
        color: $white;
      }
    }

    &__info {
      font-size: $text-sm;
      line-height: $line-sm;
      margin-bottom: 3rem;

      .post__read {
        margin-left: 1rem;

        @include mq("tablet") {
          margin-left: 2rem;
        }

        @include mq("large") {
          margin-left: 3rem;
        }
      }
    }

    &__img {
      width: 100%;
      margin-bottom: 5rem;
    }

    &__content {
      font-size: $text-md;
      line-height: $line-md;

      @include mq("tablet") {
        font-size: $text-lg;
        line-height: $line-lg;
      }
    }
  }
}
</style>
