// ナビゲーションの開閉
$(function () {
  // on = addEventListener
  $('#header-btn').on('click', () => {
    // toggleClass(指定したクラスを追加・削除)
    $('body').toggleClass('is-openMenu')
  })
});

(function () {
  'use strict'

  new Swiper('#kv', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
    }
  })
})()


