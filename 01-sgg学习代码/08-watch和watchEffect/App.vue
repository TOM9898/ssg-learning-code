<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓氏名字</legend>
    姓氏：<input
      type="text"
      placeholder="姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input type="text" placeholder="名字" v-model="user.lastName" />
  </fieldset>
  <fieldset>
    <legend>姓名</legend>
    姓名:
    <input type="text" placeholder="名字" v-model="fullName1" /><br />
    姓名: <input type="text" placeholder="名字" v-model="fullName2" /><br />
    姓名: <input type="text" placeholder="名字" v-model="fullName3" />
  </fieldset>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  ref,
  watchEffect,
  watch,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: "张",
      lastName: "三",
    });
    // 只有getter的计算属性
    const fullName1 = computed(() => {
      console.log("fullName1");
      return user.firstName + "-" + user.lastName;
    });
    // 有getter与setter的计算属性
    const fullName2 = computed({
      get() {
        return user.firstName + "-" + user.lastName;
      },
      set(value: string) {
        const names = value.split("-");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    //
    const fullName3 = ref("");
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "-" + user.lastName;
    // });
    //
    /* 
    使用watch的2个特性:
      深度监视
      初始化立即执行
    */
    watch(
      user,
      () => {
        fullName3.value = user.firstName + "-" + user.lastName;
      },
      {
        immediate: true, // 是否初始化立即执行一次, 默认是false
        deep: true, // 是否是深度监视, 默认是false
      }
    );
    /* 
    watch一个数据
      默认在数据发生改变时执行回调
    */
    watch(fullName3, (value) => {
      console.log("watch");
      const names = value.split("-");
      user.firstName = names[0];
      user.lastName = names[1];
    });

    /* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
    watch([() => user.firstName, () => user.lastName, fullName3], (values) => {
      console.log("监视多个数据", values);
    });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>