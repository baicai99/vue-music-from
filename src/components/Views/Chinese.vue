<template>
  <div>
    <h1>Chinese</h1>
  </div>
</template>

<script>
import Music_list from "../MusicRanking/MusicList.vue";
import MusicItemList from "../MusicRanking/MusicItemsList.vue";

export default {
  name: "Chinese",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    Music_list,
    MusicItemList,
  },
};
</script>

<style lang="less" scoped></style>