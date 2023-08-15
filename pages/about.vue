<template>
  <section class="about page">
    <div class="container">
      <h1 class="page__title">About Me</h1>
      <p class="about__content">
        I am Samet Keleş, a highly motivated front-end developer with
        proficiency in HTML, CSS, and JavaScript. I have a strong passion for
        creating visually appealing and high-quality web applications, and I
        always strive to deliver exceptional work that exceeds expectations. I
        am a collaborative team player who thrives in fast-paced environments
        and values open communication and mutual respect. I am committed to
        staying up-to-date with the latest trends and technologies in the
        industry and I am currently learning Vue.js to expand my skillset. My
        enthusiasm for my work, attention to detail, and dedication to producing
        quality work make me a valuable addition to any organization seeking a
        highly skilled and reliable front-end developer.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";

.about {
  &__content {
    text-align: center;
    font-size: $text-lg;
    line-height: $line-lg;
  }
}
</style>
