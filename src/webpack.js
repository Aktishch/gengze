// Libraries
import yandexMap from './lib/yandex-map'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import progressLine from './ts/progress-line'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import formSubmit from './ts/form-submit'
import inputs from './ts/inputs'
import maskTel from './ts/mask-tel'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  yandexMap.init()
  fancybox.init()
  sliderSwiper.init()
  scrollHeader.init()
  mobileMenu.init()
  progressLine.init()
  scrollTo.init()
  animation.init()
  waved.init()
  formSubmit.init()
  inputs.init()
  maskTel.init()

})