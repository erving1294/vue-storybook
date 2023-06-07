<script setup lang="ts">
interface CardProps {
  textLink: string
  textTag: string
}

defineProps<CardProps>()
</script>
<script lang="ts">
import CbLinkCard from '../CbLinkCard/index.vue'
import CbTag from '../CbTag/index.vue'

export default {
  components: {
    CbLinkCard,
    CbTag
  }
}
</script>
<template>
  <div
    class="w-[384px] h-[240px] flex flex-col justify-between rounded-lg border-solid border-[1px] border-[#CCD9EC] p-4"
  >
    <CbTag :text="textTag" />
    <CbLinkCard :text="textLink" />
  </div>
</template>
