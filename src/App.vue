<script lang="ts" setup>
import Menu from './views/Menu.vue'
import EndScreen from './views/EndScreen.vue'
import Practice from './views/practice/Practice.vue'
import { useStateStore } from './stores/state'
import WrongAnswers from '@/views/WrongAnswers.vue'
</script>

<template>
  <Menu v-if="useStateStore().state === 'menu'" />
  <EndScreen v-if="useStateStore().state === 'endScreen'" />
  <Practice v-if="useStateStore().state === 'practice'" />
  <WrongAnswers v-if="useStateStore().state === 'wrongAnswers'" />
</template>

<style lang="scss"></style>
