<template>
  <div>
    <h1>Chinese</h1>
  </div>
</template>

<script>
import Music_list from "./Music_list.vue";
import music_items_list from "./music_items_list.vue";

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
    music_items_list,
  },
};
</script>

<style lang="less" scoped></style>