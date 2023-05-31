<script setup lang="ts"></script>

<template>
  <main class="become">
    <h2 class="become__title">
      Become
      <span class="green-span"> 1 of 100 </span>
      revenue sharing NFT holders and share up to
      <span class="green-span"> 10% </span>
      from the NFT Store revenue
    </h2>

    <BecomeValueBlock />
    <BecomeGetItBlock />
    <BecomeRewardsBlock />
    <OrderDrawBlock />
    <TheForm />
  </main>
</template>

<style lang="scss" scoped>
.become {
  padding: 20px;
  background-image: url("@/assets/images/background-two.png");
  background-size: cover;

  &__title {
    padding: 20px 0 10px;
  }
}
</style>
