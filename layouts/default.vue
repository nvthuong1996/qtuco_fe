<template>
  <v-app id="app">
    <Header />
    <Slide />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/shared/Header'
import Slide from '@/components/shared/Slide'
import Footer from '@/components/shared/Footer'

export default {
  components: {
    Header,
    Slide,
    Footer,
  },
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

.w {
  &-100 {
    width: 100%;
  }
}
.h {
  &-100 {
    height: 100%;
  }
}
.position {
  &-relative {
    position: relative;
  }
  &-absolute {
    position: absolute;
  }
}

p {
  padding: 0 !important;
  margin: 0 !important;
}

.cursor {
  &-pointer {
    cursor: pointer;
  }
}
</style>
