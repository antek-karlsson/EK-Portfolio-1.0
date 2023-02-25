<template>
  <div class="navbar">
    <div class="navbar__content">
      <div class="navbar__header">
        <div class="navbar__logo">
          <NuxtLink to="/"><img src="/img/home/logo.svg" alt="EK logo" /></NuxtLink>
        </div>
        <IconButton
          v-if="isScreenMobile"
          class="navbar__menu-icon"
          type="menu"
          :is-nav-open="isNavOpen"
          @click="toggleMobileNav"
        />
      </div>
      <ClientOnly>
        <template v-if="!isScreenMobile">
          <div class="navbar__links">
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/projects' }" to="#">
              projects
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/about' }" to="#">
              about me
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/resume' }" to="#">
              resume
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/other' }" to="#">
              other work
            </NuxtLink>
          </div>
        </template>
        <template v-if="isScreenMobile">
          <div class="navbar__links--mobile" :class="isNavOpen ? 'open' : 'closed'">
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/projects' }" to="/">
              projects
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/about' }" to="/shop">
              about me
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/resume' }" to="/about">
              resume
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/other' }" to="/custom">
              other work
            </NuxtLink>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
  <div v-if="!isNavOpen" class="navbar__cover"></div>
</template>

<script setup lang="ts">
import breakpoints from '@/api/data/constants/mediaQueries';

const isNavOpen = ref(false);
const isScreenMobile = useMediaQuery(breakpoints.xs);
const route = useRoute();
const currentRoute = ref();

function toggleMobileNav() {
  isNavOpen.value = !isNavOpen.value;
}

watch(
  route,
  () => {
    currentRoute.value = route.path;
  },
  { immediate: true },
);

watch(isScreenMobile, () => {
  !isScreenMobile && isNavOpen.value === true ? (isNavOpen.value = false) : (isNavOpen.value = false);
});
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: $white;

  &__content {
    width: 100%;
    @include flex(column, space-between, center);
    padding: 2.5rem;

    @include tablet {
      @include flex(column, center, center, 2.4rem);
    }

    @include tablet-landscape {
      @include flex($direction: row, $justify: space-between, $align: center);
      padding: 3.2rem 6.4rem;
    }

    @include desktop {
      padding: 3.2rem 15rem;
    }
  }

  &__header {
    width: 100%;
    @include flex($justify: space-between, $align: flex-start);

    @include tablet {
      @include flex(row, center, center);
    }

    @include tablet-landscape {
      width: auto;
    }
  }

  &__menu-icon {
    align-self: center;
  }

  &__links {
    @include flex(row, center, center, 3rem);

    &--mobile {
      width: 100%;
      height: 100vh;
      @include flex(column, flex-start, flex-end);
      position: absolute;
      top: 12.5rem;
      background-color: $white;
      z-index: 100;
      padding: 2.5rem;
    }
  }

  &__link {
    text-decoration: none;
    color: $black;
    font-family: $lato;
    font-weight: 500;
    font-size: 2rem;
    padding: 1rem;

    &--active {
      border-bottom: 2px solid $navy;
    }
  }

  &__cover {
    width: 100%;
    opacity: 0.98;
    background-color: rgba(249, 249, 249, 0.98);
    position: sticky;
    height: 7.2rem;
    top: 125px;
    z-index: 2;

    @include tablet {
      height: 9.6rem;
      top: 189px;
    }

    @include tablet-landscape {
      height: 12.8rem;
      top: 139px;
    }
  }
}

.open {
  display: flex;
}

.closed {
  display: none;
}
</style>
