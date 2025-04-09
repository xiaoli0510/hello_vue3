import axios from "axios";
import { onMounted, reactive } from "vue";
export default function () {
  const dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_5295.jpg",
  ]);

  const baseUrl = "https://dog.ceo/api/breeds/image/random";

  const addDog = async () => {
    try {
      const res = await axios.get(baseUrl);
      const { message } = res.data;
      dogList.push(message);
    } catch (err) {
      console.log(err);
    }
  };

  onMounted(() => {
    console.log("那个人好像一条狗");
  });
  return {
    dogList,
    addDog,
  }
}
