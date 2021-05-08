<template>
  <h3>reactive的使用</h3>
  <h4>name==={{user.name}}</h4>
  <h4>age==={{user.age}}</h4>
  <h4>gender==={{user.gender}}</h4>
  <h4>others==={{user.friend.name}}</h4>
  <hr>
  <button @click="dianji">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'App',
  // 显示用户的相关信息，点击按钮，可以更新用户的相关信息数据


  // 作用: 定义多个数据的响应式
  // const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
  // 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
  // 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

  setup(){
    // const obj:any={//any是为了防止obj.gender="man"出现错误提示
    const obj={
       name:'andy',
       age:23,
      friend:{
        name:'lucy',
        age:22,
        scores:[98,'88',77]
      }
    }
    // 把数据变成响应式数据
    // 返回的是proxy的代理对象，被代理者就是reactive中的传入的对象
    // user----->代理对象
    // obj----->目标对象
    
    const user=reactive<any>(obj)
    console.log(user);
    
    // 方法
    // function dianji(){}
    const dianji=()=>{
      // user.name="jack"
      // user.name+='111'
      // user.age+=10
      // obj.gender="man"//界面没有更新
      // user.gender='man'//界面发生了更新，界面更新要使用代理对象
      // delete obj.age//报错。界面没有更新，但是obj数据中确实删除了age属性 
      delete user.age//界面更新了

      // 总结
      //    想要操作数据，同时界面跟着重新渲染，直接使用代理对象

    }
    return{
      user,
      dianji
    }
  }
 });
</script>


