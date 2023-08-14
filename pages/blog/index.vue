<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { db } from "@/db";
import { collection, onSnapshot } from "firebase/firestore";

const postsArr = ref([]);

const postsCollection = collection(db, "posts");

function postsData() {
  return onSnapshot(postsCollection, (snapshot) => {
    postsArr.value = snapshot.docs.map((post) => post.data());
    console.log(postsArr.value[0].title);
  });
}

let unsubscribe;

onMounted(() => {
  unsubscribe = postsData();
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});
</script>

<template>
  <section class="blog page">
    <div class="container">
      <h1 class="page__title">Blog</h1>
      <div class="posts">
        <article class="post" v-for="post in postsArr" :key="post.id">
          <div class="post__figure">
            <NuxtLink :to="`blog/${post.slug}`">
              <img :src="post.image" alt="" class="post__img" />
            </NuxtLink>
          </div>
          <div class="post__text">
            <div class="post__info">
              <time :datetime="post.date" class="post__date">
                {{ post.date }}
              </time>
              <span class="post__read">5 min read</span>
            </div>
            <NuxtLink :to="`blog/${post.slug}`">
              <h2 class="post__title">{{ post.title }}</h2>
              <p class="post__introduction">
                {{ post.summary }}
              </p>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";

.blog {
  .posts {
    .post {
      margin-bottom: 5rem;
      outline: 1px solid $light-gray;
      border-radius: 0.4rem;
      padding: 1rem;
      @include mq("tablet") {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .dark & {
        outline: 1px solid $dark-gray;
      }

      &__figure {
        margin-bottom: 2rem;

        @include mq("tablet") {
          flex-basis: 47%;
          margin-bottom: 0;
        }
      }

      &__img {
        width: 100%;
        border-radius: 0.4rem;
      }

      &__text {
        font-size: $text-xs;
        line-height: $line-xs;
        min-height: 16vh;
        display: flex;
        flex-direction: column;

        @include mq("tablet") {
          flex-basis: 47%;
          font-size: $text-sm;
          line-height: $line-sm;
        }
      }

      &__info {
        margin-bottom: 1rem;
        margin-top: 1rem;

        @include mq("tablet") {
          margin-bottom: 3rem;
        }
      }

      &__date {
        display: inline-block;
        padding: 0.5rem 1rem;
        margin-right: 1rem;
        font-size: 0.8rem;
        line-height: 1.2rem;
        background-color: $dark-gray;
        color: #fff;

        .dark & {
          background-color: #fff;
          color: $black;
          font-weight: 600;
        }

        @include mq("tablet") {
          font-size: $text-xs;
          line-height: $line-xs;
          padding: 0.8rem 1.5rem;
        }
      }

      &__introduction {
        margin-top: 1rem;
        color: #8b8b8b;

        @include mq("large") {
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>
