<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <MusicList></MusicList>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="music-items-container">
          <MusicItemsList></MusicItemsList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicList from "../MusicRanking/MusicListViewer.vue";
import MusicItemsList from "../MusicRanking/MusicCommunityOverview.vue";

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

<style lang="less" scoped>
#music-items-container {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  #music-items-container {
    order: -1;
  }
}
</style>
