<script setup lang="ts">
export interface CardData {
  title: string;
  text: string;
  routeTo: string;
}

const router = useRouter();
const props = defineProps<{
  cardData: CardData;
}>();

const redirect = (route: string) => router.push(route);
</script>

<template>
  <li class="card">
    <h4 class="card__subtitle">
      {{ cardData.title }}
    </h4>

    <p class="card__paragraph">
      {{ cardData.text }}
    </p>

    <TheButton
      text="Apply"
      @click="cardData.routeTo ? redirect(cardData.routeTo) : null"
    />
  </li>
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
