import { ref } from "vue";
import { defineStore } from "pinia";

export const useImage = defineStore("Image", () => {
  const image = ref([
    {
      src: `https://erp.mju.ac.th/picture/information/f5e9607b21d74d22a7d6e3d2cc33a017.jpg`,
      alt: "01",
      detail:
        "คณะศิลปศาสตร์ จัดโครงการอบรมจริยธรรมการวิจัยในคนและพัฒนาศักยภาพนักวิจัย",
    },
    {
      src: `https://erp.mju.ac.th/picture/information/fe9c96387c0843cf97df89d5515bea80.jpg`,
      alt: "02",
      detail:
        "คณะสัตวแพทยศาสตร์ ม.แม่โจ้ ออกพื้นที่ปฏิบัติงานในหน่วยสัตวแพทย์อาสาจุฬาภรณ์",
    },
    {
      src: `https://erp.mju.ac.th/picture/information/97ca821fb0cf4db2862e557a450bebaa.jpg`,
      alt: "03",
      detail:
        "คณะศิลปศาสตร์ จัดโครงการอบรมจริยธรรมการวิจัยในคนและพัฒนาศักยภาพนักวิจัย",
    },
    {
      src: `https://erp.mju.ac.th/picture/information/847a5514f7cd44129b924d159bf9cd94.JPG`,
      alt: "04",
      detail:
        "อพ.สธ.-มจ. จัด workshop งานฐานทรัพยากรท้องถิ่น หลักสูตร 6 งาน ฐานทรัพยากรท้องถิ่น รุ่นที่ 1/2566",
    },
    {
      src: `https://erp.mju.ac.th/picture/information/58653679c9e64f0aa25f44cced75060e.jpg`,
      alt: "05",
      detail:
        "ม.แม่โจ้ ร่วมเป็นเจ้าภาพสวดพระอภิธรรม เจ้าดวงเดือน ณ เชียงใหม่",
    },
    {
      src: `https://erp.mju.ac.th/picture/information/df57477acbf64454b82d1f6f7720d4c6.jpg`,
      alt: "06",
      detail:
        "บริหารธุรกิจ ม.แม่โจ้ จัด โตยฮีตตามฮอย คณะบริหารธุรกิจ ครั้งที่ 8 “สืบจารีตพื้นถิ่น แผ่นดิน 4 ภาค",
    },
    {
      src: `https://erp.mju.ac.th/picture/information/160b250af8104bcc9fb7c1866793410e.jpg`,
      alt: "07",
      detail:
        "ม.แม่โจ้ เดินหน้าความร่วมมือกับเอกชน วิจัยด้านเทคโนโลยีนวัตกรรมการเกษตร และ หลักสูตรผู้จัดการฟาร์ม",
    },
    {
      src: `https://erp.mju.ac.th/picture/information/8eed863f1f854a6494270633c689e00a.jpg`,
      alt: "08",
      detail:
        "รองประธานสภานิติบัญญัติไต้หวัน เยือน ม.แม่โจ้ หารือความร่วมมือสนับสนุนการศึกษาต่อต่างประเทศให้นักศึกษา",
    },
    
  ]);
  return { image };
});
