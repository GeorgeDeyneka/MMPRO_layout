<script setup lang="ts"></script>

<template>
  <main class="order">
    <h2 class="order__title">
      Order MMPro services and
      <span class="green-span"> win paid allocation </span>
      of pre-IPO secondaries
    </h2>

    <div class="order__block works">
      <h4 class="green-subtitle">How it works?</h4>
      <p>Apply to any of the MMPro services via the form below:</p>
      <ul>
        <li>Market Making</li>
        <li>Community Building</li>
        <li>Listings</li>
        <li>Advisory</li>
      </ul>
      <p>
        Write in the message section what type of service you need, past the
        link yo your website, receive email with confirmation.
      </p>
      <p>Applications without website and service orders won’t be considered</p>
    </div>

    <div class="order__block prize">
      <h4 class="green-subtitle">Prize pool</h4>
      <p>
        You can win one of the 10 pre-IPO secondaries NFTs with $500 paid
        allocation
      </p>
    </div>

    <div class="order__block rewards">
      <h4 class="green-subtitle">Rewards</h4>
      <p>
        Rewards will be distributed on our booth with the help of Random.org
      </p>
    </div>

    <div class="order__block draw">
      <h4 class="green-subtitle">Rewards</h4>
      <p>
        The draw will happen on the 30th March on MMPro booth preliminary 4 PM
        HG time.
      </p>

      <p>
        If you don't have a chance to come we will record the draw process on
        video and share it with you in email.
      </p>

      <p>
        Please keep an eye on your email as we will send all the information
        there.
      </p>
    </div>

<TheForm/>
  </main>
</template>

<style lang="scss" scoped>
.order {
  padding: 20px;

  &__title {
    padding: 20px 0;
  }

  &__subtitle {
    color: var(--green-gradient-from);
    text-transform: uppercase;
  }

  &__block {
    padding: 25px 0;
  }
}
</style>
