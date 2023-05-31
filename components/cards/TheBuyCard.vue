<script lang="ts" setup>
const router = useRouter();

const redirect = (route: string) => router.push(route);
</script>

<template>
  <li class="card">
    <h4 class="card__subtitle">
      Buy any tier of pre-IPO secondaries and
      <span class="green-span"> win </span>
      additional
      <span class="green-span"> allocation </span>
    </h4>

    <p class="card__paragraph">
      When purchasing pre-IPO secondaries on NFT Store you can win extra
      allocation of TOP performing late stage startups
    </p>

    <TheButton text="Apply" @click="redirect('/buy')" />
  </li>
</template>

<style lang="scss" scoped></style>
