<script setup>
const name = "Saleh", umur = 20, alamat = "Bogor"
</script>

<template>
    <div class="text-center">
        <h1>Halo nama saya {{ name }}, umur saya {{ umur }} dan saya tinggal di {{ alamat }}. (Composition API)</h1>
        <router-link to="/" class="btn btn-success mt-4 mx-2">
            Home
        </router-link>
    </div>
</template>