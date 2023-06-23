<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item" v-for="(lable, index) in hot" :key="lable.text" @click="goToPage(index)">
                <a class="nav-link" :class="{ active: lable.isActive }" @click="setActive(lable)" href="#">{{
                    lable.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nav_pills',
    props: {
        msg: String
    },
    data() {
        return {
            hot: [
                { text: '最新', isActive: true },
                { text: '热门', isActive: false },
                { text: '月榜', isActive: false },
                { text: '周榜', isActive: false },
                { text: '日榜', isActive: false },
            ]
        };
    },
    methods: {
        setActive(label) {
            this.hot.forEach(item => {
                item.isActive = false; // 先将所有项的 isActive 属性设置为 false
            });
            label.isActive = true; // 将点击的项的 isActive 属性设置为 true
        },
        goToPage(index) {
            // const routeName = this.hot[index].text
            const router = ["New", "Hot", "Navbar", "Navbar", "Navbar"]
            this.$router.push({ name: router[index] }); // 跳转到指定的路由
            console.log(router[index]);
        }, 
    }
}
</script>

<style lang="less" scoped></style>