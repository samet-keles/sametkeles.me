<template>
  <section class="about">
    <div class="container">
      <h1 class="about__title">About Me</h1>
      <p class="about__content">
        I am Samet Keleş, a highly motivated front-end developer proficient in
        HTML, CSS, and JavaScript. I possess a strong passion for creating
        visually appealing and high-quality web applications, and am dedicated
        to delivering exceptional work that exceeds expectations. I am a
        collaborative team player who thrives in fast-paced environments and
        values open communication and mutual respect. I am committed to staying
        up-to-date with the latest trends and technologies in the industry and
        am actively learning Vue.js to expand my skillset. My enthusiasm for my
        work, attention to detail, and commitment to producing quality work make
        me a valuable addition to any organization seeking a highly motivated
        and dedicated front-end developer.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";

.about {
  padding-top: 1rem;
  padding-bottom: 5rem;
  &__title {
    padding-bottom: 5rem;
    text-align: center;
    font-size: 3.6rem;

    .dark & {
      color: white;
    }
  }

  &__content {
    text-align: center;
    font-size: $text-lg;
    line-height: $line-lg;
  }
}
</style>
