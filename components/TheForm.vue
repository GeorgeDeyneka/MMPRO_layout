<template>
  <form class="form">
    <input class="form__input" placeholder="Name" type="text" />
    <input class="form__input" placeholder="Email" type="text" />
    <textarea
      class="form__input form__input_textarea"
      placeholder="Message"
      type="textarea"
    />
    <TheButton text="Send" btn-type="submit" />
  </form>
</template>

<style lang="scss" scoped>
.form {
  padding: 18px 0;

  &__input {
    border-radius: 44px;
    padding: 11px 22px;
    margin: 6px 0;
    border: 1px solid var(--green-gradient-from);
    width: 100%;

    &_textarea {
      height: 110px;
      border-radius: 20px;
      margin-bottom: 2px;
    }

    &::placeholder {
      color: var(--green-gradient-from);
    }
  }
}
</style>
