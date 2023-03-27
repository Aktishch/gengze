import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'

const init = () => {

  const advantagesSlider = new Swiper('.advantages-slider .swiper', {

    pagination: {

      el: '.advantages-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.2,
    spaceBetween: 20,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 2,
        spaceBetween: 0

      },

      [media.md]: {

        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false

      }

    },

  })

  window.Swiper = Swiper

}

export default { init }