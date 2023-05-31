<script setup lang="ts"></script>

<template>
  <main class="buy">
    <h2 class="buy__title">
      Buy any tier of pre-IPO secondaries and
      <span class="green-span"> win </span>
      additional
      <span class="green-span"> allocation </span>
    </h2>

    <BuyWorksBlock />
    <BuyGetItBlock />
    <OrderDrawBlock />
    <TheForm />
  </main>
</template>

<style lang="scss" scoped>
.buy {
  padding: 20px;
  background-image: url("@/assets/images/background-two.png");
  background-size: cover;

  &__title {
    padding: 20px 0;
  }
}
</style>
