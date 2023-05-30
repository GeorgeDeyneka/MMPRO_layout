<script setup lang="ts">
interface Props {
  text: string;
  link: string;
}

const props = defineProps<Props>();
</script>

<template>
  <a :href="link" target="_blank">
    <button class="link-btn">{{ text }}</button>
  </a>
</template>

<style lang="scss" scoped>
.link-btn {
  margin: 5px 0;
  width: 100%;
  padding: 11px 0;
  border-radius: 44px;
  border: 1px solid var(--green-gradient-from);
  color: var(--green-gradient-from);
  background-color: transparent;
}
</style>
