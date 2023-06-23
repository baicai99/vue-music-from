<template>
    <div>
        <div>
            <div class="card mt-3">
                <div class="card-header">

                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <button type="button" class="post btn btn-primary w-100 mb-2">发帖</button>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <button type="button" class="post btn btn-primary w-100">签到</button>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Music_items_list',
    props: {
        msg: String
    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    }
}
</script>

<style lang="less" scoped></style>