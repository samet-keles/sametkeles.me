<template>
  <section class="page-404 page">
    <div class="content">
      <img src="img/goodies-hey.svg" alt="" class="goodies-hey" />
      <p class="text">What are you doing here?!</p>
      <div class="img-wrapper">
        <img src="img/goodies-crying.svg" alt="" class="goodies-crying" />
        <img src="img/404.svg" alt="" class="img-404" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";
.content {
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include mq("large") {
    margin-top: 0;
  }

  .goodies-hey {
    width: 20%;
    margin-bottom: 2rem;

    @include mq("large") {
      width: 9%;
    }
  }

  .text {
    font-size: $text-md;
    line-height: $line-md;
    background: $purple-to-orange;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8rem;
  }

  .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    .goodies-crying {
      position: absolute;
      width: 23%;
      top: 0;
      z-index: 1;
    }

    .img-404 {
      position: absolute;
      width: 45%;
      top: -2.7rem;

      @include mq("tablet") {
        top: -4.9rem;
      }

      @include mq("large") {
        top: -9rem;
      }
    }
  }
}
</style>
