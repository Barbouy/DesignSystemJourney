<template>
  <div class="flex flex-col items-center justify-center w-full h-screen text-base bg-stone-800">
    <div class="flex items-center justify-between w-full gap-2 p-4">
      <div class="flex items-center gap-2">
        <img
          src="~/assets/images/LogoLight.svg"
          alt="Journey UI"
          class="size-6"
        >
        <span class="text-lg font-bold text-stone-100">
          JourneyUI
        </span>
      </div>

      <span class="transition-opacity opacity-50 select-none text-stone-100 hover:opacity-100">
        Work in progress, be kind! 🌼
      </span>
    </div>
    <div class="flex items-center justify-center flex-1">
      <div class="bg-white rounded-lg p-4 shadow max-w-[740px] flex flex-col gap-4 overflow-hidden">
        <div class="flex items-center gap-2">
          <NuxtLink
            v-if="!isHome"
            class="leading-none"
            to="/"
          >
            <i class="text-lg transition-colors duration-150 i-mdi-arrow-left hover:text-rose-500" />
          </NuxtLink>

          <strong>
            DS Journey
          </strong>
        </div>

        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const isHome = computed(() => route.path === "/")
</script>
