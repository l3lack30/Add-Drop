<script setup>
import { useCourse } from "../stores/course";
const { course } = useCourse();
</script>
<template>
  <div class="container mt text-center">
    <div class="row mt" style="font-size: 22px; color: white">
      <div class="col text-start">รายวิชา</div>
    </div>
    <div class="row mt-4" style="font-size: 22px; color: white">
      <div class="col">
        <div>รหัสวิชา</div>
      </div>
      <div class="col">
        <div>ชื่อวิชา</div>
      </div>
      <div class="col">
        <div>หน่วยกิต</div>
      </div>
    </div>
    <div class="row mt-3" v-for="n in course.length">
      <div class="col" v-if="course && course[n - 1]">
        {{ course[n - 1].code }}
      </div>
      <div class="col" v-if="course && course[n - 1]">
        {{ course[n - 1].nameTh }}<br />
        {{ course[n - 1].nameEng }}
      </div>
      <div class="col" v-if="course && course[n - 1]">
        {{ course[n - 1].credit }}
      </div>
      
    </div>
  </div>
</template>
