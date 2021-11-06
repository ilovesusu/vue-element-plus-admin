<template>
  <info-write @success="success" />
</template>

<script setup lang="ts" name="ExampleAdd">
import InfoWrite from './components/InfoWrite.vue'
import { useBus } from '@/hooks/web/useBus'
const { bus } = useBus()

function success(type: string) {
  bus.emit('success', type)
}
</script>
