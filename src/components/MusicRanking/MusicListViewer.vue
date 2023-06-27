<template>
  <div class="card mt-3">
    <div class="card-header">
      <MusicTabNav @update:comName="updateComName"></MusicTabNav>
    </div>
    <div class="card-body">
      <keep-alive>
        <component :is="comName" :key="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MusicTabNav from "./MusicTabNav.vue";
import New from "./New.vue";
import Hot from "./Hot.vue";
import Month from "./Month.vue";
import Week from "./Week.vue";
import Day from "./Day.vue";

export default {
  name: "MusicList",
  components: {
    MusicTabNav,
    New,
    Hot,
    Month,
    Week,
    Day,
  },
  data() {
    return {
      comName: "New",
    };
  },
  methods: {
    updateComName(name) {
      this.comName = name; // 更新组件名称
    },
  },
};
</script>

<style lang="less" scoped></style>
