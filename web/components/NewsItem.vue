<template>
  <li class="newsItem">
    <div class="meta">
      <div class="title">
        <h2>{{ newsItem.headline }}</h2>
      </div>
      <SanityImage
        width="256"
        height="256"
        :image="newsItem.image"
        class="avatar"
      />
      <h3 class="name">{{ newsItem.summary || 'Secret news item' }}</h3>
    </div>
  </li>
</template>
<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: {
    SanityImage
  },
  props: {
    newsItem: {
      type: Object,
      default() {},
      title: {
        type: String,
        default: 'Missing Tile'
      }
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

li.newsItem {
  display: block;
  margin-bottom: 4rem;
}

li.newsItem .meta {
  margin-left: auto;
  margin-right: auto;
}

li.newsItem h2 {
  font-size: 3rem;
}

li.newsItem .title {
  text-align: center;
}

@media (--media-min-medium) {
  li.newsItem {
    display: flex;
    align-items: baseline;
  }
}

li.newsItem .meta img {
  height: 100%;
  width: 100%;
}

li.newsItem .meta {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin-bottom: 0.5rem;
  color: var(--color-gray);
}

li.newsItem .meta .sessiontype {
  text-align: right;
}

@media screen and (min-width: 768px) {
  li.newsItem .meta {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    width: 700px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0;
    margin-right: 1rem;
    padding-right: 1rem;
    font-size: 1em;
    text-align: right;
  }

  li.newsItem .content {
    flex-grow: 1;
  }

  li.newsItem .meta .time {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
    margin-bottom: 0.5rem;
  }
}

li.newsItem h3 {
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  font-weight: 600;
  margin: 0 0 0.5rem;
}

li.newsItem h3 {
  text-align: justify;
}

li.newsItem h3 a {
  color: inherit;
  text-decoration: inherit;
}

li.newsItem h3 + p {
  margin: 0;
}
</style>
