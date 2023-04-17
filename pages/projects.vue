<template>
  <section class="projects">
    <div class="container">
      <h1 class="projects__title">Projects</h1>
      <div class="cards">
        <div class="card">
          <a
            href="https://github.com/samet-keles/JavaScrit-ToDoList"
            target="_blank"
          >
            <img src="/img/todo-list.webp" alt="" class="card__img" />
            <div class="card__text">
              <h3 class="card__title">To Do List</h3>
              <p class="card__description">
                Html, Css, Bootstrap, Javascript todo list çalışması
              </p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            href="https://github.com/samet-keles/JavaScrit-ToDoList"
            target="_blank"
          >
            <img src="/img/todo-list.webp" alt="" class="card__img" />
            <div class="card__text">
              <h3 class="card__title">To Do List</h3>
              <p class="card__description">
                Html, Css, Bootstrap, Javascript todo list çalışması
              </p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            href="https://github.com/samet-keles/JavaScrit-ToDoList"
            target="_blank"
          >
            <img src="/img/todo-list.webp" alt="" class="card__img" />
            <div class="card__text">
              <h3 class="card__title">To Do List</h3>
              <p class="card__description">
                Html, Css, Bootstrap, Javascript todo list çalışması
              </p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            href="https://github.com/samet-keles/JavaScrit-ToDoList"
            target="_blank"
          >
            <img src="/img/todo-list.webp" alt="" class="card__img" />
            <div class="card__text">
              <h3 class="card__title">To Do List</h3>
              <p class="card__description">
                Html, Css, Bootstrap, Javascript todo list çalışması
              </p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            href="https://github.com/samet-keles/JavaScrit-ToDoList"
            target="_blank"
          >
            <img src="/img/todo-list.webp" alt="" class="card__img" />
            <div class="card__text">
              <h3 class="card__title">To Do List</h3>
              <p class="card__description">
                Html, Css, Bootstrap, Javascript todo list çalışması
              </p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            href="https://github.com/samet-keles/JavaScrit-ToDoList"
            target="_blank"
          >
            <img src="/img/todo-list.webp" alt="" class="card__img" />
            <div class="card__text">
              <h3 class="card__title">To Do List</h3>
              <p class="card__description">
                Html, Css, Bootstrap, Javascript todo list çalışması
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/config/variables";

.projects {
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
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    .card {
      width: 27.5%;
      // width: 31.09%;
      border-radius: 12px;
      outline: 1px solid $gray;
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
        background-color: $dark-gray;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &__title {
        color: white;
        font-size: 20px;
        margin-bottom: 0.75rem;
      }

      &__description {
        color: $light-gray;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
}
</style>
