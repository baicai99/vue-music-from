<template>
  <div>
    <music-tab
      v-for="(song, index) in songs"
      :key="index"
      :song="song"
      :index="index"
    ></music-tab>
  </div>
</template>

<script>
import MusicTab from "./MusicCard.vue";

export default {
  name: "Hot",
  data() {
    return {
      songs: [
        {
          name: "张学友《只想一生跟你走》[FLAC / MP3 - 320K]",
          type: "华语",
          read: "2138123",
        },
        {
          name: "南征北战NZBZ《最美的期待》[FLAC/MP3-320K]",
          type: "华语",
          read: "1212312",
        },
        {
          name: "周杰伦《2000-2022专辑合集》[FLAC/MP3-320K]",
          type: "华语",
          read: "14123123",
        },
        {
          name: "[专辑合集]SEVENTEEN-音源合集[MP3-320K]",
          type: "华语",
          read: "134144",
        },
        {
          name: "林志炫《烟花易冷(Live)》[FLAC/MP3-320K]",
          type: "华语",
          read: "14234",
        },
        {
          name: "张学友《吻别》[FLAC/MP3-320K]",
          type: "华语",
          read: "25000",
        },
        {
          name: "Taylor Swift《Love Story》[FLAC/MP3-320K]",
          type: "Pop",
          read: "1200000",
        },
        {
          name: "Ed Sheeran《Shape of You》[FLAC/MP3-320K]",
          type: "Pop",
          read: "5000000",
        },
        {
          name: "Beyoncé《Halo》[FLAC/MP3-320K]",
          type: "R&B",
          read: "800000",
        },
        {
          name: "Coldplay《Viva La Vida》[FLAC/MP3-320K]",
          type: "Rock",
          read: "300000",
        },
        {
          name: "Adele《Rolling in the Deep》[FLAC/MP3-320K]",
          type: "Pop",
          read: "2000000",
        },
        {
          name: "Rihanna《Diamonds》[FLAC/MP3-320K]",
          type: "Pop",
          read: "1500000",
        },
        {
          name: "Bruno Mars《Just the Way You Are》[FLAC/MP3-320K]",
          type: "Pop",
          read: "900000",
        },
        {
          name: "Drake《One Dance》[FLAC/MP3-320K]",
          type: "Hip-Hop",
          read: "700000",
        },
      ],
    };
  },
  components: {
    MusicTab,
  },
};
</script>

<style lang="less" scoped></style>
