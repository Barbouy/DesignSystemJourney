<template>
  <div class="flex items-center justify-center w-full h-screen bg-neutral-100">
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
</template>

<script lang="ts" setup>
const route = useRoute()
const isHome = computed(() => route.path === "/")
</script>
