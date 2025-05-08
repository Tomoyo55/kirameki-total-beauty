

$('.animate__animated').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素にfadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element).addClass('animate__fadeInUp');

      /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});







/* globals $ */
// PuppyとKittenにある写真をフェードインさせる
$('.pets_imgs_l').waypoint({  /* .pets_imgs_l の写真を左からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});
$('.pets_imgs_r').waypoint({  /* .pets_imgs_r の写真を右からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});



/* globals Swiper */
// swiperの設定
var swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 0.1,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

    //formatFraction は01でなく1の表示でよければいらなければなくていい
    formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    }
  },
  navigation: {
    //ここに書くことでクリックしたら動くようになる
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});





$('.carousel').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 4000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効
  // dots: true, // ドットを表示
  fade: true, // フェードで切り替え
});


//ハンバーガーメニューの操作


var hamburger = $('.menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function() {
  // console.log('click');

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function() {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('menu-active');
});




$(function () {
  $('.question-letter').click(function () {
    $(this).next('div').next('div').slideToggle();
    $(this).find(".icon").toggleClass('open');
  });
});