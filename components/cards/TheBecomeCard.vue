<script lang="ts" setup>
const router = useRouter();

const redirect = (route: string) => router.push(route);
</script>

<template>
  <li class="card">
    <h4 class="card__subtitle">
      Buy $100K worth of pre-IPO secondaries and
      <span class="green-span"> win NFT </span>
      worth of
      <span class="green-span"> $60K </span>
    </h4>

    <p class="card__paragraph">
      NFT gives you a unique opportunity to share revenue from NFT-Store - the
      Trust Venture subdivision for retail investors
    </p>

    <TheButton text="Apply" @click="redirect('/become')" />
  </li>
</template>

<style lang="scss" scoped></style>
