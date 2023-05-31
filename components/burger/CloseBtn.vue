<script setup></script>

<template>
  <button class="close-btn"></button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

.close-btn {
  @include burger-button;
  position: relative;
  margin-left: auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    @include burger-line;
    left: 0;
  }

  &::before {
    top: 20px;
    rotate: -45deg;
  }

  &::after {
    top: 20px;
    rotate: 45deg;
  }
}
</style>
