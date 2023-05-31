<script setup lang="ts"></script>

<template>
  <main class="order">
    <h2 class="order__title">
      Order MMPro services and
      <span class="green-span"> win paid allocation </span>
      of pre-IPO secondaries
    </h2>

    <OrderWorksBlock />
    <OrderPrizeBlock />
    <OrderRewardsBlock />
    <OrderDrawBlock />

    <TheForm />
  </main>
</template>

<style lang="scss" scoped>
.order {
  padding: 20px;
  background-image: url("@/assets/images/background-two.png");
  background-size: cover;

  &__title {
    padding: 20px 0;
  }

  &__subtitle {
    color: var(--green-gradient-from);
    text-transform: uppercase;
  }
}
</style>
