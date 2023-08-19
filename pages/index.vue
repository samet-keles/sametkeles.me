<template>
  <div class="light-effect"></div>
  <main class="main">
    <div class="container">
      <section class="content">
        <h1 class="title">
          <span class="title__text">Hello, I’m Samet</span>
        </h1>
        <p class="description">
          and this is my portfolio site where I showcase my creative work. Here
          you will find a world full of my own blog posts and projects. I love
          combining technology and entertainment to create amazing experiences.
          I hope you enjoy exploring my portfolio, feel free to contact me if
          you have any questions or comments.
        </p>

        <nuxt-link class="contactLink" to="/contact"
          ><ButtonComp class="btn" name="Contact Me"></ButtonComp
        ></nuxt-link>
      </section>
      <section class="animation">
        <nuxt-img
          class="animation__gif"
          src="/img/home-animation.gif"
          alt="Developer writing code"
          loading="lazy"
        />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";

.main {
  @include mq("tablet") {
    margin-top: 6rem;
  }

  @include mq("large") {
    margin-top: 0rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
    .content {
      @include mq("tablet") {
        flex-basis: 50%;
      }

      .title {
        margin-top: 3rem;
        text-align: center;

        &__text {
          font-size: 5rem;
          font-weight: 600;
          background: $purple-to-orange;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          @include mq("tablet") {
            font-size: 6.4rem;
          }
        }
      }

      .description {
        font-size: $text-xl;
        line-height: $line-xl;

        margin-top: 3rem;
        text-align: center;
      }

      .contactLink {
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 3rem;
      }
    }

    .animation {
      display: none;

      @include mq("tablet") {
        align-self: center;
        flex-basis: 40%;
        display: block;
      }

      &__gif {
        display: block;
        margin-right: auto;
        margin-left: auto;

        @include mq("tablet") {
          width: 100%;
        }
        @include mq("large") {
          width: auto;
        }
      }
    }
  }
}
</style>
