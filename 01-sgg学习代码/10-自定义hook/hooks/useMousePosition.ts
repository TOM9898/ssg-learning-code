import {onMounted, ref, onUnmounted } from "vue";
export default function useMousePosition() {
    const x = ref(1);
    const y = ref(1);

    const zuobiao = (event:MouseEvent) => {
        x.value = event.pageX;
        y.value = event.pageY;
    };

    // 页面加载完毕了的点击事件
    onMounted(() => {
        document.addEventListener("click", zuobiao);
    });
    // 卸载前解绑点击监听
    onUnmounted(() => {
        document.removeEventListener("click", zuobiao);
    });
    return{
        x,y
    }
}