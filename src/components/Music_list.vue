<template>
    <div>
        <div class="card mt-3">
            <div class="card-header">
                <Nav_pills></Nav_pills>
            </div>
            <div class="card-body">
                <div class="content-container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav_pills from './Nav_pills.vue'
import music_tab from './music_tab.vue';
import hot from './hot.vue';

export default {
    name: 'Music_list',
    props: {

    },
    components: {
        Nav_pills, music_tab, hot
    },
}
</script>

<style lang="less" scoped></style>