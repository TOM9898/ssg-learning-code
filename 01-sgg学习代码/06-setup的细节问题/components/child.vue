<template>
  <h2>子级组件</h2>
  <h3>msg:{{ msg }}</h3>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "child",
  props: ["msg"],
  //   生命周期回调
  //   beforeCreate() {
  //     console.log("beforecreate被执行了");
  //   },
  //   setup的返回值
  // 一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
  // 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
  // 返回对象中的方法会与methods中的方法合并成功组件对象的方法
  // 如果有重名, setup优先
  // 注意:
  // 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
  // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
  //setup的参数
  //   setup(props, context) / setup(props, {attrs, slots, emit})
  setup(props, context) {
    //   props: 包含props配置声明且传入了的所有属性的对象
    console.log(props);
    console.log(props.msg);
    console.log(context);
    // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    console.log(context.attrs.msg1);
    // emit: 用来分发自定义事件的函数, 相当于 this.$emit
    console.log(context.emit);
    // slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    console.log(context.slots);

    //setup先执行，this是undefined，因为setup执行时vue实例并没有创建出来
    // console.log("setup被执行了", this);
    return {
      //   setup返回一个对象，可以直接在html模板中使用
    };
  },
});
</script>