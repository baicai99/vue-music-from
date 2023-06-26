<template>
  <div class="mt-3">
    <!-- 选项卡 -->
    <div class="mb-3 col-2">
      <select class="form-select form-select-sm" name="" id="">
        <option>华语</option>
        <option v-for="item in musicType" :value="item.text" :key="item.text">
          {{ item.text }}
        </option>
      </select>
    </div>

    <!-- 输入框 -->
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="标题"
        aria-label="标题"
        aria-describedby="basic-addon1"
      />
    </div>

    <!-- 插入音乐MV -->
    <div class="mb-3">
      <span
        class="badge text-bg-primary me-2"
        v-for="item in setting"
        :key="item.text"
      >
        <a href="#">{{ item.text }}</a>
      </span>
    </div>

    <!-- 文本框 -->
    <div class="mb-3">
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="15"
        placeholder="内容"
        style="resize: none"
      ></textarea>
    </div>

    <div class="d-flex justify-content-between align-items-end">
      <div>
        <span>是否悬赏：</span>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> 是 </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked"> 否 </label>
        </div>
      </div>
      <div class="text-end">
        <button type="button" class="btn btn-primary">发布</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      musicType: [
        { text: "日韩" },
        { text: "欧美" },
        { text: "Remix" },
        { text: "纯音乐" },
        { text: "异次元" },
        { text: "特供" },
        { text: "茶馆" },
        { text: "百科" },
        { text: "充值" },
        { text: "站务" },
      ],
      setting: [
        { text: "插入音乐/MV播放" },
        { text: "插入下载地址" },
        { text: "插入隐藏内容" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
a {
  color: #fff;
  text-decoration: none;
  font-weight: 300;
}
</style>
