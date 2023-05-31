<script setup lang="ts"></script>

<template>
  <header class="header">
    <img class="header__logo" src="@/assets/images/logo.png" alt="MMPRO logo" />

    <BurgerMenu />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  position: sticky;
  top: 0;
  background-color: var(--white);
  padding: 0 20px;
  align-items: flex-start;
  justify-content: space-between;

  &__logo {
    padding: 6px 2px;
  }
}
</style>
