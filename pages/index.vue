<script setup lang="ts">
const cardsData = [
  {
    title:
      "Order MMPro services and win paid allocation of pre-IPO secondaries",
    text: "Get a chance to win 1 of 10 NFTs with $500 paid allocations",
    routeTo: "/order",
  },
  {
    title: "Buy any tier of pre-IPO secondaries and win additional allocation",
    text: "When purchasing pre-IPO secondaries on NFT Store you can win extra allocation of TOP performing late stage startups",
    routeTo: "/buy",
  },
  {
    title: "Buy $100K worth of pre-IPO secondaries and win NFT worth of $60K",
    text: "NFT gives you a unique opportunity to share revenue from NFT-Store - the Trust Venture subdivision for retail investors",
    routeTo: "/become",
  },
];

const btnsData = [
  {
    text: "Market Making Pro",
    link: "https://marketmaking.pro/",
  },
  {
    text: "Trust Ventures",
    link: "https://marketmaking.pro/trust",
  },
  {
    text: "NFT Store",
    link: "https://marketmaking.pro/store",
  },
  {
    text: "MMPRo Labs",
    link: "https://nft-store.marketmaking.pro/mmpro-labs",
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

    <ul class="welcome__cards">
      <TheCard v-for="(card, i) of cardsData" :card-data="card" :key="i" />
    </ul>

    <div class="welcome__links links">
      <h3 class="links__title">Project Links</h3>

      <div class="links__list">
        <TheLinkButton
          v-for="(btn, i) of btnsData"
          :text="btn.text"
          :link="btn.link"
          :key="i"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.welcome {
  padding: 40px 20px 108px;
  background-image: url("@/assets/images/background-gradient.png");
  background-size: cover;
  background-position: 0px -50px;

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px 0;
  }
}

.links {
  &__title {
    padding: 18px 24px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
}

.head {
  &__title {
    padding: 5px 0;
  }
}
</style>
