<script setup>
import CompositionComponent from './components/CompositionComponent.vue';
import OptionsComponent from './components/OptionsComponent.vue';
import TextInterpolation from './components/TextInterpolation.vue';
</script>

<template>
  <!-- Perbedaan kedua component tersebut ialah hanya pada versi nya -->
  <OptionsComponent/> <!-- Digunakan di Vue 2, tapi masih bisa dipakai di Vue 3. -->
  <CompositionComponent/> <!-- Diperkenalkan di Vue 3. -->

  <TextInterpolation/>
</template>
