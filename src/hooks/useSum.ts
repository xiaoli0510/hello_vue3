import { onMounted, onUpdated, ref } from "vue";
export default function () {
  const sum = ref(0);
  const addSum = () => {
    sum.value += 1;
  };
  onMounted(() => {
    addSum()
  })
  onUpdated(() => {
    console.log('更新后了');
  })
  return {
    sum,
    addSum,
  };
}
