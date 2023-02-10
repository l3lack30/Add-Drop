import { ref } from "vue";
import { defineStore } from "pinia";

export const useSelect = defineStore("Select", () => {
  const select = ref([]);

  const add_subject = (codes, nameThs, nameEgs) => {
    const subject = {
      code: codes,
      nameTh: nameThs,
      nameEg: nameEgs,
    };
    select.value.push(subject);
  };

  const remove_subject = (n) => {
    select.value.splice(n, 1);
  };

  const restart = () => {
    select.value.length = 0;
  };

  return { select, add_subject, remove_subject, restart };
});
