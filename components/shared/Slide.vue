<template>
  <div class="slide">
    <v-carousel
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
      cycle
    >
      <v-carousel-item v-for="(slide, index) in slides" :key="index">
        <v-sheet height="100%">
          <v-row class="w-100 h-100 ma-0 position-relative">
            <img
              :src="require('@/assets/home/' + slide)"
              class="slide-img"
              alt=""
            />
            <div class="slide-box position-absolute pa-12">
              <div class="slide-box--title">Công Ty TNHH Xây Lắp và Dịch Vụ Năng Lượng Quốc Tuấn</div>
              <div class="slide-box--description">
                Luôn Đồng Hành Cùng Bạn!!!
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    slides() {
      return this.$store.getters['slides/getSlides']
    },
  },
}
</script>
<style lang="scss" scoped>
.slide {
  @media (max-width: 520px) { 
    display: none;
  }
  
  &-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &-box {
    width: 520px;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    background-color: rgb(0 0 0 / 65%);
    border-radius: 15px;
    border: 2px solid white;
    box-shadow: 5px 0 40px white;
    @media (max-width: 978px) { 
      left: 50%;
    }
    &--title {
      font-size: 30px;
    }
    &-description {
      font-size: 24px;
    }
    @media (max-width: 600px) { 
      &--title {
        font-size: 20px;
      }
      &-description {
        font-size: 16px;
      }
    }
  }
}
</style>
