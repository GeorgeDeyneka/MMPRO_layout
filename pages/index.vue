<script setup lang="ts">
const cardsData = [
  {
    title:
      "Order MMPro services and win paid allocation of pre-IPO secondaries",
    text: "Get a chance to win 1 of 10 NFTs with $500 paid allocations",
    routeTo: "/page1",
  },
  {
    title: "Buy any tier of pre-IPO secondaries and win additional allocation",
    text: "When purchasing pre-IPO secondaries on NFT Store you can win extra allocation of TOP performing late stage startups",
    routeTo: "/page2",
  },
  {
    title: "Buy $100K worth of pre-IPO secondaries and win NFT worth of $60K",
    text: "NFT gives you a unique opportunity to share revenue from NFT-Store - the Trust Venture subdivision for retail investors",
    routeTo: "/page3",
  },
];
</script>

<template>
  <main class="welcome">
    <div class="welcome__head head">
      <h3 class="head__subtitle">Welcome to</h3>
      <h1 class="head__title">
        <span class="green-span">Market Making Pro</span>
        WOW Summit Promo page
      </h1>
    </div>

    <div class="welcome__cards">
      <TheCard v-for="(card, i) of cardsData" :card-data="card" :key="i" />
    </div>

    <h3>Project Links</h3>
  </main>
</template>

<style lang="scss" scoped>
.welcome {
  padding: 0 20px;
  background-image: url("@/assets/images/background-gradient.png");
  background-size: cover;
  background-position: 0px -50px;

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}

.head {
  padding: 40px 0 30px;

  &__title {
    padding: 5px 0;
  }
}
</style>
