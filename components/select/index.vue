<template>
  <div
    ref="select"
    class="flex items-center w-full gap-2 px-3 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer h-9 hover:shadow"
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
      class="i-mdi-close-circle shrink-0"
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
      <div
        v-for="i in 4"
        :key="i"
        class="flex items-center h-8 px-4 bg-white cursor-pointer hover:bg-gray-50"
        @click="handleSelect(i)"
      >
        <span>
          Option {{ i }}
        </span>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const isOpen = ref(false)
const select = ref<HTMLDivElement | null>(null)
const selectedOption = ref<string | null>(null)

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
</script>
