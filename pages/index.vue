<template>
  <div class="flex gap-2">
    <NuxtLink
      v-for="page in pages"
      :key="page.name"
      :to="page.path"
    >
      <div class="flex items-center justify-center transition-all duration-300 ease-out border rounded-lg shadow-sm size-24 border-neutral-200 hover:shadow hover:border-indigo-500 hover:text-indigo-500 hover:scale-105">
        <span>
          {{ page.name }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const pages = reactive([
  { name: "Table", path: "/components/table" },
  { name: "Select", path: "/components/select" },
])
</script>
