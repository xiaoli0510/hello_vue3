import { computed, onMounted, onUpdated, ref } from "vue";
export default function () {
  const sum = ref(0);
  const addSum = () => {
    sum.value += 1;
  };
  onMounted(() => {
    addSum();
  });

  const bigSum = computed({
    get() {
      return sum.value * 100;
    },
    set(val) {
      sum.value = val
    },
  });

  onUpdated(() => {
    console.log("更新后了");
  });
  return {
    sum,
    addSum,
    bigSum,
  };
}
