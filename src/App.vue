<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="container">
      <header class="row mt-5" style="height: 50px;">
        <div class="col">
          <nav class="container text-center" style="background-color: #000000;">
            <div class="row align-items-center" style="height: 50px;">
              <div class="col">
                <div >
                  <RouterLink to="/" class="text-light mu">หน้าหลัก</RouterLink>
                </div>
              </div>
              <div class="col">
                <RouterLink to="/course" class="text-light mu">รายวิชา</RouterLink>
              </div>
              <div class="col">
                <RouterLink to="/AddDrop" class="text-light mu">ลงทะเบียน</RouterLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      <RouterView />
    </div>
  </div>
</template>
<style scoped>

.mu{
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}
</style>