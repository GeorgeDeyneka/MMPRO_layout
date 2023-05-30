<script setup lang="ts">
export interface CardData {
  title: string;
  text: string;
  routeTo: string;
}

const props = defineProps<{
  cardData: CardData;
}>();

const myHtml = "<h4>Hello bitch</h4>";
</script>

<template>
  <div class="card">
    <h4 class="card__subtitle">
      {{ cardData.title }}
    </h4>

    <p class="card__paragraph">
      {{ cardData.text }}
    </p>

    <TheButton text="Apply" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--white);
  border-radius: 20px;
  padding: 28px 20px 20px;

  &__subtitle {
    text-transform: uppercase;
  }

  &__paragraph {
    padding: 9px 0;
  }
}
</style>
