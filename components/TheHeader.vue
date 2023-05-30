<script setup lang="ts"></script>

<template>
  <div class="container">
    <img class="header__logo" src="@/assets/images/logo.png" alt="MMPRO logo" />

    <BurgerMenu />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.header {
  &__logo {
    padding: 6px 2px;
  }
}
</style>
