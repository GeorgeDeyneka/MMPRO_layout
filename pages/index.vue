<script setup lang="ts">
import TheIconLink from "~/components/icons/TheIconLink.vue";

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
      <CardsTheOrderCard />
      <CardsTheBuyCard />
      <CardsTheBecomeCard />
    </ul>

    <div class="welcome__links links">
      <div class="links__title-wrapper">
        <TheIconLink />
        <h3 class="links__title">Project Links</h3>
      </div>

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
    padding: 18px 0;

    &-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
    }
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
