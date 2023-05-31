<template>
  <div class="text-block works">
    <h4 class="green-subtitle">How it works?</h4>
    <p class="paragraph">
      Apply to any of the MMPro services via the form below:
    </p>
    <ul class="works__list">
      <li class="works__item">Market Making</li>
      <li class="works__item">Community Building</li>
      <li class="works__item">Listings</li>
      <li class="works__item">Advisory</li>
    </ul>
    <p class="paragraph">
      Write in the message section what type of service you need, past the link
      yo your website,
      <br />
      receive email with confirmation.
    </p>
    <p class="paragraph">
      Applications without website and service orders won't be considered
    </p>
  </div>
</template>

<style lang="scss" scoped>
.works {
  &__list {
    background-color: var(--white);
    padding: 14px 30px;
    border-radius: 20px;
    margin: 5px 0 10px;
  }

  &__item {
    color: var(--green-gradient-from);
    text-decoration: dotted;
  }
}
</style>
