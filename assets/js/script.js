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

  // メインビジュアル
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


  // ===============================
  // 商品詳細スライダー
  // サムネイル
  const galleryThumbs = new Swiper('#gallery-thumbs', {
    // slidesPerView: 3.5 //端数を入れてもOK
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  })

  // メインスライド
  new Swiper('#detail-slide', {
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  })

})()


