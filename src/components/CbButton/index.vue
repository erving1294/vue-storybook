<script setup lang="ts">
import { ButtonType } from './types'

defineProps({
  currentClass: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: ButtonType.Primary
  }
})
</script>
<template>
  <button
    :class="[
      currentClass,
      type === ButtonType.Secondary &&
        'text-green border-[1px] border-solid border-green hover:border-green-hover hover:text-green-hover focus:text-green-focus focus:border-green-focus disabled:text-gray-400 disabled:border-gray-400',
      type === ButtonType.Primary &&
        'bg-green-chip text-white hover:bg-green-hover focus:bg-green-focus active:bg-green-focus disabled:bg-disabled disabled:text-gray-400',
      'min-w-[157px] uppercase rounded-full py-3.5 px-4 text-sm cursor-pointer'
    ]"
    :disabled="disabled"
  >
    <i class=""></i>
    <slot />
  </button>
</template>
