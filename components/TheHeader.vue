<script setup lang="ts"></script>

<template>
  <header class="header">
    <img class="header__logo" src="@/assets/images/logo.png" alt="MMPRO logo" />

    <BurgerMenu />
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &__logo {
    padding: 6px 2px;
  }
}
</style>
