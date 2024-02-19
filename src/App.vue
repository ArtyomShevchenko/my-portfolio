<template>
  <HeaderComp />
  <RouterView></RouterView>
  <FooterComp />
</template>

<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
</script>

<style>
#app {
  min-height: 100Vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
}
</style>
