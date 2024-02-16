<script setup>
import { RouterView } from 'vue-router';

import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
// import CanvasComp from './components/CanvasComp.vue';
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
  <!-- <CanvasComp /> -->
</template>

<style></style>
