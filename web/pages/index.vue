<template>
  <section class="container">
    <header class="header">
      <h1 class="title">{{ info.name }}</h1>
      <p class="subtitle">{{ info.description }}</p>
      <div class="dates">
        {{ new Date(info.schedule.from) | dateFilter('DD MMMM ha') }}
        &ndash;
        {{ new Date(info.schedule.to) | dateFilter('ha') }}
      </div>
      <div class="venue">{{ info.venue.name }}, {{ info.venue.city }}</div>
    </header>

    <figure :v-if="info.image">
      <SanityImage
        :image="info.image"
        :width="1800"
        :height="500"
        class="mainImage"
      />
      <figcaption>{{ info.image.caption }}</figcaption>
    </figure>

    <Carousel :perPage="1">
      <Slide>
        Slide 1 Content
      </Slide>
      <Slide>
        Slide 2 Content
      </Slide>
      <Slide>
        Slide 3 Content
      </Slide>
      <Slide>
        Slide 5 Content
      </Slide>
      <Slide>
        Slide 5 Content
      </Slide>
    </Carousel>

    <div class="newsListContainer">
      <h2 class="newsListTitle">News</h2>
      <NewsList :news="news" />
    </div>
  </section>
</template>

<script>
import { dateFilter } from 'vue-date-fns'

import { Carousel, Slide } from 'vue-carousel'

import sanityClient from '../sanityClient'
import SanityImage from '~/components/SanityImage'

import NewsList from '~/components/NewsList'

const query = `
  {
    "info": *[_id == "eventInformation"] {
      ..., image { ..., asset->}
    }[0],
    "news": *[_type == "news"]
  }
`

export default {
  components: {
    SanityImage,
    NewsList,
    Carousel,
    Slide
  },
  filters: {
    dateFilter
  },
  data() {
    return {
      news: this.$store.getters.getNews
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: this.info.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.keywords.join(',')
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.header {
  padding: 0 1.5rem;
  text-align: center;
}

.title + p + .dates {
  margin-bottom: 0;
  font-weight: 600;
}

.title + p + .dates + .venue {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin-bottom: 5rem;
}

figure {
  margin: 0 0 3em;
}

figcaption {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  padding: 0.25rem 1.5rem;
}

.mainImage {
  width: 100%;
  vertical-align: top;
}

.newsListTitle {
  text-align: center;
  font-weight: 600;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 0 0 3rem;

  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}

.newsListContainer {
  max-width: var(--width-medium);
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
}
</style>
