<template>
  <div class="navbar" :class="{ hidden: !isNavVisible }">
    <div class="navbar__content">
      <div class="navbar__header">
        <div class="navbar__logo">
          <NuxtLink to="/"><img src="/img/home/logo.svg" alt="EK logo" /></NuxtLink>
        </div>
        <IconButton
          v-show="isScreenMobile"
          class="navbar__menu-icon"
          type="menu"
          :is-nav-open="isNavOpen"
          @click="toggleMobileNav"
        />
      </div>
      <ClientOnly>
        <template v-if="!isScreenMobile">
          <div class="navbar__links">
            <NuxtLink
              class="navbar__link"
              :class="{ 'navbar__link--active': currentRoute.includes('/projects') }"
              to="/projects"
            >
              projects
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/about' }" to="/about">
              about me
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/resume' }" to="/resume">
              resume
            </NuxtLink>
            <NuxtLink
              class="navbar__link"
              :class="{ 'navbar__link--active': currentRoute === '/graphic' }"
              to="/graphic"
            >
              graphic design
            </NuxtLink>
          </div>
        </template>
        <template v-if="isScreenMobile">
          <div class="navbar__links--mobile" :class="isNavOpen ? 'open' : 'closed'">
            <NuxtLink
              class="navbar__link"
              :class="{ 'navbar__link--active': currentRoute === '/projects' }"
              to="/projects"
            >
              projects
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/about' }" to="/about">
              about me
            </NuxtLink>
            <NuxtLink class="navbar__link" :class="{ 'navbar__link--active': currentRoute === '/resume' }" to="/resume">
              resume
            </NuxtLink>
            <NuxtLink
              class="navbar__link"
              :class="{ 'navbar__link--active': currentRoute === '/graphic' }"
              to="/graphic"
            >
              graphic design
            </NuxtLink>
          </div>
        </template>
      </ClientOnly>
    </div>
    <div v-if="!isNavOpen" class="navbar__cover"></div>
  </div>
</template>

<script setup lang="ts">
import breakpoints from '@/api/data/constants/mediaQueries';

const isNavOpen = ref(false);
const isScreenMobile = useMediaQuery(breakpoints.xs);
const route = useRoute();
const currentRoute = ref();

const isNavVisible = ref(true);
const lastScrollPosition = ref(0);

function toggleMobileNav() {
  isNavOpen.value = !isNavOpen.value;
}

function onScroll() {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return;
  }

  isNavVisible.value = currentScrollPosition < lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
}

watch(
  route,
  () => {
    currentRoute.value = route.path;
  },
  { immediate: true },
);

watch(currentRoute, () => {
  isNavOpen.value = false;
});

watch(isScreenMobile, () => {
  !isScreenMobile && isNavOpen.value === true ? (isNavOpen.value = false) : (isNavOpen.value = false);
});

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  z-index: 2;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;

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
      top: 12.4rem;
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
    transition: all 0.4s ease-out;

    &--active {
      border-bottom: 2px solid $navy;
    }

    @media (hover: hover) {
      &:hover {
        color: $dark-gray;
      }
    }
  }

  &__cover {
    width: 100%;
    opacity: 0.98;
    background-color: rgba(249, 249, 249, 0.98);
    position: fixed;
    height: 6rem;
    top: 124px;
    left: 0;
    right: 0;
    z-index: 2;

    @include tablet {
      top: 188px;
    }

    @include tablet-landscape {
      top: 138px;
    }
  }
}

.navbar.hidden {
  transform: translate3d(0, -100%, 0);
}

.open {
  display: flex;
}

.closed {
  display: none;
}
</style>
