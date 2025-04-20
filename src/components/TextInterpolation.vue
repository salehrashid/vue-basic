<script setup>
    const textTester = '<p style="color: red;">Red Color of Text</p>'

    // Untuk pemakaian ini ketika datanya diambil dari API / kamu butuh id atau class yang dinamis
    const textId = "text-id"
    const textClass = "fs-4"
</script>

<template>
    <div class="text-center">
        <!-- Text interpolation adalah cara menyisipkan nilai dari data ke dalam template HTML di Vue. Biasanya digunakan untuk menampilkan data secara langsung ke tampilan (UI). -->
        <p>using text interpolation {{ textTester }}</p> <!-- {{ }} digunakan untuk menampilkan data ke dalam template HTML. -->

        <!-- v-html directive digunakan untuk menampilkan HTML yang diambil dari data ke dalam template HTML. Ini berguna ketika kamu ingin menampilkan HTML yang diambil dari data API atau sumber lainnya. -->
        <p>using v-html directive: 
            <span v-html="textTester"></span>
        </p>

        <!-- :id shorthand of v-bind:id -->
        <div v-bind:id="textId">v-bind text id</div>
        <div v-bind:class="textClass">v-bind text class</div>
        <div v-bind:id="textId" :class="textClass">v-bind text id and class</div>

        <router-link to="/" class="btn btn-success mt-4 mx-2">
            Home
        </router-link>
    </div>
</template>