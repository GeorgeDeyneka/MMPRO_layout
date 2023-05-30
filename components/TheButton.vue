<script setup lang="ts">
type ButtonTypes = "button" | "submit";

interface Props {
  text: string;
  btnType?: ButtonTypes;
}

const props = withDefaults(defineProps<Props>(), {
  btnType: "button",
});
</script>

<template>
  <button class="btn" :type="btnType">{{ text }}</button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 12px 66.5px;
  margin: 10px 0;
  border-radius: 44px;
  border: none;
  color: var(--white);
  background-image: linear-gradient(
    to bottom,
    var(--green-gradient-from),
    var(--green-gradient-to)
  );
}
</style>
