// ナビゲーションの開閉
$(function () {
  // on = addEventListener
  $('#header-btn').on('click', () => {
    // toggleClass(指定したクラスを追加・削除)
    $('body').toggleClass('is-openMenu')
  })
})
