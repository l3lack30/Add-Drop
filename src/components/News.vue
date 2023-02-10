<script setup>
import { useImage } from "../stores/News";
const { image } = useImage();
</script>
<template>
  <div class="container w-100 mt-3 mb-5">
    <div class="row justify-content-center gap-4">
      <div
        class="card h-card pt-3"
        style="width: 16rem"
        v-for="n in image.length"
      >
        <div class="d-flex justify-content">
          <div v-if="image && image[n - 1]">
            <img :src="image[n - 1].src" :alt="image[n - 1].alt" width="260" />
          </div>
        </div>

        <div class="card-body">
          <p class="card-text" v-if="image && image[n - 1]">
            {{ image[n - 1].detail }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.h-card:hover {
  box-shadow: rgb(255, 255, 255)) 0px 5px 10px;
}
</style>
