<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <NavPills @update:comName="updateComName"></NavPills>
      </div>
      <div class="card-body">
        <keep-alive>
          <component :is="ComName"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import NavPills from "./NavPills.vue";
import New from "./New.vue";
import Hot from "./Hot.vue";
import Month from "./Month.vue";
import Week from "./Week.vue";
import Day from "./Day.vue";

export default {
  name: "MusicList",
  props: {},
  components: {
    NavPills,
    New,
    Hot,
    Month,
    Week,
    Day,
  },
  data() {
    return {
      ComName: "New",
    };
  },
  methods: {
    updateComName(name) {
      this.ComName = name; // 更新组件名称
    },
  },
};
</script>

<style lang="less" scoped></style>