<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <MusicList></MusicList>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <MusicItemsList></MusicItemsList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicList from "../MusicRanking/MusicList.vue";
import MusicItemsList from "../MusicRanking/MusicItemsList.vue";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    MusicList,
    MusicItemsList,
  },
};
</script>

<style lang="less" scoped></style>
