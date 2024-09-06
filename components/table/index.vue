<template>
  <div class="w-full overflow-x-scroll">
    <table class="w-full">
      <thead>
        <tr class="h-12 border-b border-neutral-100">
          <th
            v-for="column in formattedColumns"
            :key="column.key"
            class="px-4 py-0"
            :style="{ minWidth: column.minWidth, width: column.width, maxWidth: column.maxWidth }">
            <div class="flex items-center gap-2 font-medium">
              <i
                v-if="column.icon"
                :class="column.icon"
                class="text-lg shrink-0 text-neutral-400"
              />
              <span class="text-neutral-600">{{ column.label }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.name"
          class="h-16 transition-colors bg-white border-b border-neutral-100 hover:bg-neutral-50"
        >
          <td
            v-for="column in formattedColumns"
            :key="column.key"
            class="px-4 py-0 truncate"
            :style="{ minWidth: column.minWidth, width: column.width, maxWidth: column.maxWidth }">
            <slot
              :name="column.key"
              :row="row">
              {{ row[column.key] || '-' }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
})

const formattedColumns = computed(() => {
  return props.columns.map((column) => {
    return {
      label: column.label || null,
      key: column.key || null,
      icon: column.icon || null,
      sortable: column.sortable || false,
      minWidth: column.minWidth ? column.minWidth.toString() + "px" : column.width ? column.width.toString() + "px" : "auto",
      width: column.width ? column.width.toString() + "px" : "auto",
      maxWidth: column.maxWidth ? column.maxWidth.toString() + "px" : column.width ? column.width.toString() + "px" : "auto",
    }
  })
})
</script>
