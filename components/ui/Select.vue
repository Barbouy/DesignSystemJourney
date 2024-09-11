<template>
  <div
    ref="select"
    class="flex items-center w-full gap-2 px-3 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer h-9 hover:shadow"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    @click="isOpen = !isOpen"
  >
    <span
      class="flex-1"
      :class="selectedOption ? 'text-neutral-900' : 'text-neutral-400'"
    >
      {{ selectedOption || 'Select an option' }}
    </span>
    <i
      v-if="selectedOption"
      :class="isHover ? 'opacity-100' : 'opacity-0'"
      class="transition-all duration-150 i-mdi-close-circle shrink-0 text-neutral-400 hover:text-neutral-900"
      @click.stop="selectedOption = null"
    />
    <i class="i-mdi-chevron-down shrink-0" />
  </div>

  <Teleport
    v-if="isOpen"
    to="body"
  >
    <div
      class="absolute flex flex-col py-2 bg-white border border-gray-200 rounded-lg top-10"
      :style="optionsPosition"
    >
      <div class="w-full">
        <input
          v-model="search"
          class="w-full"
        >
      </div>
      <div
        v-for="option in formattedOptions"
        :key="option.value"
        class="flex items-center h-8 px-4 bg-white cursor-pointer hover:bg-gray-50"
        @click="handleSelect(option.value)"
      >
        <span>
          {{ option.label }}
        </span>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const isOpen = ref(false)
const select = ref<HTMLDivElement | null>(null)
const selectedOption = ref<string | null>(null)
const isHover = ref(false)
const search = ref("")

const position = ref({ left: 0, top: 0, width: 0 })

function updatePosition() {
  if (select.value) {
    const rect = select.value.getBoundingClientRect()
    position.value = {
      left: rect.left,
      top: rect.bottom,
      width: rect.width,
    }
  }
}

onMounted(() => {
  window.addEventListener("resize", updatePosition)
  window.addEventListener("scroll", updatePosition)
  updatePosition()
})

const optionsPosition = computed(() => {
  return {
    left: position.value.left.toString() + "px",
    top: (position.value.top + 4).toString() + "px",
    width: position.value.width.toString() + "px",
  }
})

function handleSelect(i: number) {
  selectedOption.value = `Option ${i}`
  isOpen.value = false
}

const formattedOptions = computed(() => {
  const options = [
    {
      label: "John Doe",
      value: "123",
    },
    {
      label: "Jane Doe",
      value: "456",
    },
    {
      label: "John Smith",
      value: "789",
    },
    {
      label: "Jane Smith",
      value: "101",
    },
  ]

  return options.filter(option => option.label.toLowerCase().includes(search.value.toLowerCase()))
})
</script>
