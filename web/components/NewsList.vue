<template>
  <ul class="newsList">
    <NewsItem
      v-for="(newsItem, index) in news"
      :key="newsItem._key"
      :index="index"
      :news-item="newsItem"
    />
  </ul>
</template>
<script>
import NewsItem from '~/components/NewsItem'

export default {
  components: {
    NewsItem
  },
  props: {
    news: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.sessionList {
  margin: 0;
  padding: 0;
}
</style>
