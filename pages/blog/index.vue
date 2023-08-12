<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/db";
import { collection, onSnapshot } from "firebase/firestore";

const postsArr = ref([]);

const postsCollection = collection(db, "posts");

function postsData() {
  return onSnapshot(postsCollection, (snapshot) => {
    postsArr.value = snapshot.docs.map((post) => post.data());
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
            <NuxtLink to="blog/slug">
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
            <NuxtLink to="blog/slug">
              <h2 class="post__title">{{ post.title }}</h2>
              <p class="post__introduction">{{ post.summary }}</p>
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

      .dark & {
        outline: 1px solid $dark-gray;
      }

      &__figure {
        margin-bottom: 2rem;
      }

      &__img {
        width: 100%;
        border-radius: 0.4rem;
      }

      &__text {
        height: 16vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &__date {
        display: inline-block;
        padding: 0.5rem 1rem;
        margin-right: 1rem;
        font-size: 0.8rem;
        line-height: 1.2rem;
        background-color: #111;
        color: #fff;
      }

      &__introduction {
        color: #8b8b8b;
      }
    }
  }
}
</style>
