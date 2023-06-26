<template>
  <div class="card mt-3">
    <div class="card-header">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button
            type="button"
            class="post btn btn-primary w-100 mb-2"
            @click="post"
          >
            发帖
          </button>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button
            type="button"
            class="post btn btn-primary w-100"
            @click="checkIn"
          >
            {{ checkInText }}
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">
        音乐帮帮忙是一个由音乐爱好者维护的分享平台，旨在解决问题互帮互助。如果您有需求，请注册账号并发布信息，详细描述歌曲信息等，我们会尽力帮您寻找。欢迎访问音乐帮帮忙音乐论坛
        - MusicHelp.com。
      </p>
      <div class="CommunityOverview row">
        <div
          class="col-lg-4 text-center"
          v-for="item in items"
          :key="item.text"
        >
          <div class="tittle">{{ item.text }}</div>
          <div>{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicItemList",
  data() {
    return {
      items: [
        { text: "主题数", count: 203529 },
        { text: "帖子数", count: 32320738 },
        { text: "用户数", count: 3723927 },
      ],
      checkInText: "签到",
    };
  },
  mounted() {
    this.restoreCheckInStatus();
  },
  methods: {
    post() {
      // 处理发帖逻辑
      this.$router.push("/Post");
    },
    checkIn() {
      const email = localStorage.getItem("email");
      if (email) {
        // 已登录
        this.checkInText = "签到成功";
        this.saveCheckInStatus(true);
      } else {
        // 未登录
        this.checkInText = "请先登录";
        alert("请先登录");
        // push to login page
        this.$router.push("/login");
      }
    },
    saveCheckInStatus(status) {
      localStorage.setItem("isCheckIn", status.toString());
    },
    restoreCheckInStatus() {
      const isCheckIn = localStorage.getItem("isCheckIn");
      if (isCheckIn === "true") {
        this.checkInText = "签到成功";
      } else if (isCheckIn === "false") {
        this.checkInText = "签到";
      }
    },
  },
};
</script>

<style scoped>
.tittle {
  font-size: 15px;
  color: gray;
}
</style>
