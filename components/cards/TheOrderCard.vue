<script lang="ts" setup>
const router = useRouter();

const redirect = (route: string) => router.push(route);
</script>

<template>
  <li class="card">
    <h4 class="card__subtitle">
      Order MMPro services and
      <span class="green-span"> win paid allocation </span>
      of pre-IPO secondaries
    </h4>

    <p class="card__paragraph">
      Get a chance to win
      <strong class="p-strong"> 1 of 10 NFTs </strong>
      with
      <strong class="p-strong"> $500 </strong>
      paid allocations
    </p>

    <TheButton text="Apply" @click="redirect('/order')" />
  </li>
</template>

<style lang="scss" scoped></style>
