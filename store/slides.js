export const state = () => ({
  slides: [
    'slide_1.jpg',
    'slide_2.jpg',
    'slide_3.jpg',
    'slide_4.jpg',
    'slide_5.jpg',
  ],
})

export const getters = {
  getSlides(state) {
    return state.slides
  },
}

export const mutations = {}

export const actions = {}
