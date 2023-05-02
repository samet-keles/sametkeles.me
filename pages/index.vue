<template>
  <div class="light-effect"></div>
  <main class="main">
    <div class="container">
      <section class="content">
        <h1 class="title">
          <span class="title__text">Merhaba, ben Samet.</span>
        </h1>
        <p class="description">
          Benim yaratıcılığımın ürünü olan portfolyo siteme hoş geldiniz. Burada
          kendi blog yazılarım ve projelerimle dolu bir dünya bulacaksınız.
          Teknoloji ve eğlenceyi bir araya getiriyoruz ve birlikte hayallerimizi
          gerçekleştirebiliriz. Sizi de burada heyecanla bekliyoruz, haydi
          birlikte keşfe çıkalım!
        </p>
        <ButtonComp class="btn" name="Contact Me"></ButtonComp>
      </section>
      <section class="animation">
        <img class="animation__gif" src="/img/home-animation.gif" />
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

      .btn {
        display: block;
        margin-right: auto;
        margin-left: auto;
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
