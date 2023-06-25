<template>
  <div>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item">
          <a href="#" class="page-link">&lt;&lt;</a>
        </li>
        <li class="page-item" v-for="(item, index) in items" :key="item">
          <a
            class="page-link"
            :class="{ active: index === activeIndex }"
            href="#"
            @click="setActive(index)"
            >{{ item }}</a
          >
        </li>
        <li class="page-item">
          <a href="#" class="page-link">&gt;&gt;</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      items: Array.from({ length: 10 }, (_, index) => index + 1),
      activeIndex: 0,
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.active {
  /* 根据你的需要定义活动状态下的样式 */
  /* 例如： */
  font-weight: bold;
}
</style>
