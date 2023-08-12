<script setup>
import axios from "axios";
import { reactive } from "vue";

// reactive state
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// function that submits the form data
async function handleSubmit() {
  const formData = new FormData();

  for (let [key, value] of Object.entries(form)) {
    formData.append(key, value);
  }

  await axios
    .post(
      "https://formeezy.com/api/v1/forms/644ec838db4f610008c3d9c7/submissions",
      formData
    )
    .then(({ data }) => {
      const { redirect } = data;
      // Redirect used for reCAPTCHA and/or thank you page
      window.location.href = redirect;
    })
    .catch((e) => {
      window.location.href = e.response.data.redirect;
    });
}
</script>

<template>
  <section class="contact page">
    <div class="container">
      <h1 class="page__title">Contact Me!</h1>

      <form class="form" @submit.prevent="handleSubmit">
        <input
          class="form__input"
          v-model="form.name"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          class="form__input"
          v-model="form.email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          class="form__input"
          v-model="form.subject"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          class="form__input"
          v-model="form.message"
          placeholder="Message"
          name="message"
          maxlength="800"
          required
        ></textarea>
        <ButtonComp class="btn" name="Send"></ButtonComp>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";
@import "@/assets/scss/config/mixin";

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &__input {
    width: 80%;
    min-height: 5rem;
    max-height: 20rem;
    padding: 1.25rem;
    font-size: $text-md;
    line-height: $line-md;
    border: 0;
    background-color: #f7f7f7;
    border-radius: 0.3rem;

    @include mq("large") {
      width: 50%;
    }

    &:hover {
      outline: $dark-gray solid 1px;

      .dark & {
        outline: #f7f7f7 solid 1px;
      }
    }

    .dark & {
      background-color: $dark-gray;
      color: white;
    }
  }

  .btn {
    width: 80%;

    @include mq("large") {
      width: 50%;
    }
  }
}
</style>
