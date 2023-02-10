<script setup>
import slideNews from "../components/slideNews.vue";
import groupNews from "../components/News.vue";
</script>

<template>
  <main>
    <div>
      <slideNews />
    </div>
    <div class="mt-5">
      <div>ข่าวสารและกิจกรรม</div>
      <div>
        <groupNews/>
      </div>
    </div>
  </main>
</template>