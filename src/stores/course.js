import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourse = defineStore("Course", () => {
  const course = ref([
    {
      code: "คพ232",
      nameTh: "สถาปัตยกรรมคอมพิวเตอร์",
      nameEng: "Computer Architecture",
      credit: "3 (2-3-5)"
    },
    {
      code: "คพ252",
      nameTh: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
      nameEng: "Mathematics for Computer Science",
      credit: "3 (3-0-6)"
    },
    {
      code: "คพ313",
      nameTh: "การพัฒนาโปรแกรมประยุกต์บนเว็บ",
      nameEng: "Computer Architecture",
      credit: "3 (2-3-5)"
    },
    {
      code: "คพ343",
      nameTh: "การวิเคราะห์และออกแบบเชิงวัตถุ",
      nameEng: "Object Oriented Analysisand Design",
      credit: "	3 (2-3-5)"
    },
    {
      code: "ศท013",
      nameTh: "การวิเคราะห์และออกแบบเชิงวัตถุ",
      nameEng: "Health for Life",
      credit: "3 (2-2-5)"
    },
    {
      code: "ศท242",
      nameTh: "ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 1",
      nameEng: "English for Science and Technology 1",
      credit: "	3 (2-2-5))"
    },
    {
      code: "ศท242",
      nameTh: "ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 2",
      nameEng: "English for Science and Technology 2",
      credit: "	3 (2-2-5))"
    },
    {
      code: "สต301",
      nameTh: "หลักสถิติ",
      nameEng: "Principles of Statistics",
      credit: "3 (3-0-6)"
    },
    
    
  ]);
  return { course };
});