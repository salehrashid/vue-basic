<script>
export default {
    data(){
        return {
            name: "Saleh",
            umur: 20,
            alamat: "Bogor"
        }
    }
}
</script>

<template>
    <div class="text-center">
        <h1>halo, perkenalkan nama saya {{ name }}, umur saya {{ umur }}, saya tinggal di {{ alamat }}. (Options API)</h1>
        <router-link to="/" class="btn btn-success mt-4 mx-2">
            Home
        </router-link>
    </div>
</template>