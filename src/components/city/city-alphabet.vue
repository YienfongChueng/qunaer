<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            timmer: null,
            startY: 0,
        };
    },
    computed: {
        letters () {
            const letters = [];
            for (const i in this.cities) {
                letters.push(i);
            }
            return letters; // 获取字母的数组
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText);
        },
        handleTouchStart () {
            this.touchStatus = true;
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                // 防抖：触发事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
                // 节流：节流就是保证一段时间内只执行一次核心代码。事件触发时，在n秒内只会执行一次，所以节流会稀释函数的执行频率。
                if (this.timmer) {
                    clearTimeout(this.timmer);
                }
                // 防抖
                // 当持续触发scroll事件时，事件处理函数只在停止滚动16毫秒之后才调用一次，在持续触发scroll事件过程中，handle一直没执行。
                this.timmer = setTimeout(() => {
                    // const startY = this.$refs.A[0].offsetTop; // 字母A到parent到高度
                    // 手指的位置到顶部窗口到位置
                    const touchY = e.touches[0].clientY - 79; // 79 = 43 + 36 (顶部的距离)
                    const index = Math.floor((touchY - this.startY) / 20); // 手指的位置到字母A的距离 除以每个字母的高度
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index]);
                    }
                }, 16);
            }
        },
        handleTouchEnd () {
            this.touchStatus = false;
        }
    },
    updated () {
        // 当city接口请求到了数据后，传值到该子组件时，页面才开始渲染，所以，在updated钩子进行获取值
        this.startY = this.$refs.A[0].offsetTop;
    },
};
</script>
<style lang="scss" scoped>
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
    }
    .item {
        text-align: center;
        line-height: .4rem;
        color: $bgColor;
    }
</style>
