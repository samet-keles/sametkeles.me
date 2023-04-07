<template>
  <section class="projects">
    <div class="container">
      <h1 class="projects__title">Projects</h1>
      <div class="cards">
        <div class="card">
          <img src="/img/todo-list.webp" alt="" class="card__img" />
          <div class="card__text">
            <h3 class="card__title">To Do List</h3>
            <p class="card__description">
              Html, Css, Bootstrap, Javascript todo list çalışması
            </p>
          </div>
        </div>
        <!-- <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  .cards {
    margin-top: 5rem;
    .card {
      width: 350px;
      outline: 1px solid rgb(78, 78, 78);

      &:hover {
        outline: 2px solid purple;
      }

      &__img {
        width: 100%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
      }

      &__text {
        padding: 2rem;
        width: 100%;
        background-color: rgb(44, 44, 44);
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &__title {
        color: white;
        font-size: 20px;
        margin-bottom: 0.75rem;
      }

      &__description {
        color: rgb(196, 196, 196);
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
}
</style>
