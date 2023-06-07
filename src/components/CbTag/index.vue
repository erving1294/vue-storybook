<script setup lang="ts">
import { TagType } from './types'

defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: TagType.Primary
  }
})
</script>
<script lang="ts">
export default {
  name: 'CibertecTag'
}
</script>

<template>
  <div>
    <span
      :class="[
        'py-[6px] px-2 rounded-lg text-white uppercase inline-block text-sm',
        type === TagType.Primary && 'bg-green-chip',
        type === TagType.Secondary && 'bg-secondary'
      ]"
    >
      {{ text }}
    </span>
  </div>
</template>
