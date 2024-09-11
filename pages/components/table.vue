<template>
  <UiTable
    :columns="columns"
    :rows="rows"
  >
    <template #name="scope">
      <strong class="text-red-600">{{ scope.row.name }}</strong>
    </template>

    <template #city="scope">
      <div class="flex items-center gap-2">
        <i
          :class="scope.row.city === 'Chicago' ? 'text-amber-600' : ''"
          class=" i-mdi-map-marker"
        />
        <span>{{ scope.row.city }}</span>
      </div>
    </template>
  </UiTable>
</template>

<script lang="ts" setup>
import { reactive } from "vue"

const rows = reactive([
  { name: "John Doe", age: 21, email: "john.doe@gmail.com", city: "New York" },
  { name: "Elisabeth Smith", age: 31, email: "e.smith@gmail.com", city: "Los Angeles" },
  { name: "Michael Johnson-Dubrovniks", age: 33, email: null, city: "Chicago" },
  { name: "Jessica Brown", age: 40, email: "jejeje@outlook.com", city: "Chicago" },
])

const columns = reactive([
  {
    label: "Name",
    key: "name",
    icon: "i-mdi-account",
    sortable: true,
    width: 200,
  },
  {
    label: "Age",
    key: "age",
    icon: "i-mdi-calendar-month",
    sortable: true,
    width: 100,
  },
  {
    label: "Email",
    key: "email",
    icon: "i-mdi-email",
    sortable: false,
    minWidth: 300,
  },
  {
    label: "City",
    key: "city",
    icon: "i-mdi-map-marker",
    sortable: false,
    minWidth: 200,
  },
])
</script>
