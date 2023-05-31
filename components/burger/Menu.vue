<script lang="ts" setup>
const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/order",
    name: "Order services",
  },
  {
    path: "/buy",
    name: "Win allocation",
  },
  {
    path: "/become",
    name: "Win NFT",
  },
];

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
  setScroll(isOpen.value);
}

function setScroll(flag: boolean) {
  document.body.style.overflow = flag ? "hidden" : "";
  document.body.style.position = flag ? "fixed" : "";
}
</script>

<template>
  <BurgerOpenBtn @click="toggleMenu" />

  <div :class="{ opened: isOpen }" class="navbar">
    <BurgerCloseBtn @click="toggleMenu" />

    <nav class="navbar__list">
      <NuxtLink
        class="navbar__link"
        exact-active-class="active-link"
        v-for="(route, i) of routes"
        :key="i"
        :to="route.path"
        @click="toggleMenu"
      >
        {{ route.name }}
      </NuxtLink>
    </nav>
  </div>

  <div v-if="isOpen" @click="toggleMenu" class="navbar__overlay"></div>
</template>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 260px;
  top: 0;
  right: 0;
  bottom: 0;
  gap: 35px;
  background-color: var(--white);
  transform: translateX(100%);
  transition: transform 0.4s ease-out;
  z-index: 1000;
  overflow: hidden;
  padding: 20px;
  padding-top: 0;

  &.opened {
    transform: translateX(0);
  }

  .active-link {
    border-bottom: 2px solid var(--green-gradient-from);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__link {
    font-size: 30px;
    color: var(--black);
    text-decoration: none;
    max-width: fit-content;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
}
</style>
