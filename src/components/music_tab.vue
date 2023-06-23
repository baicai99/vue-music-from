<template>
    <div>
        <a href="#">
            <div class="row">
                <div class="d-flex justify-content-center align-items-center col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <img :src="getProfilePictureUrl(index)" class="User_profile_picture img-responsive"
                        alt="User_profile_picture">
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                    <div class="song_name col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {{ song.name }}
                    </div>

                    <div class="song_type col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {{ song.type }}
                    </div>

                </div>
                <div class="d-flex justify-content-center align-items-center col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <span class="badge rounded-pill text-bg-primary">
                        {{ song.read }}
                    </span>
                </div>

            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Music_tab',
    props: {
        song: Object,
        index: Number,
    },
    data() {
        return {

        };
    },
    methods: {
        getProfilePictureUrl(index) {
            return `https://picsum.photos/28?= ${index + 1}`;
        }
    },
    components: {

    }
}
</script>

<style lang="less" scoped>
a {
    text-decoration: none;
    color: black;
}

a:hover {
    .row {
        background-color: whitesmoke
        /* 设置悬停时的背景色 */
    }
}
.row {
    margin: 0px 10px;
    padding: 10px 0px;
    border-bottom: 1px solid #ccc;
}
.song_name {
    font-size: 15px;
    color: black;
}

.song_type {
    font-size: 13px;
    color: green;
}

.User_profile_picture {
    width: 28px;
    height: 28px;
    background-color: pink;
    border-radius: 50%;
}

</style>