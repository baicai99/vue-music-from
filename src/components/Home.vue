<template>
    <div>
        <div class="container">

            <div class="row">
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <Music_list></Music_list>
                </div>

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <music_items_list></music_items_list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Music_list from './Music_list.vue';
import music_items_list from './music_items_list.vue';

export default {
    name: "Home",
    props: {
        msg: String
    },
    data() {
        return {};
    },
    methods: {},
    components: {
        Music_list,
        music_items_list,
    },
}
</script>

<style lang="less" scoped></style>