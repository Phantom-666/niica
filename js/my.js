$(document).ready(function () {
  $('#menudesc').flexMenu()
})

$(document).ready(function () {
  $('.parallax').parallax()
})

$(document).ready(function () {
  $('.owl-carousel3').owlCarousel({
    stagePadding: 35,
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      414: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      960: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1280: {
        items: 3,
      },
      1300: {
        items: 3,
      },

      1600: {
        items: 3,
      },
      1900: {
        items: 3,
      },
    },
  })
})

$(document).ready(function () {
  $('.logo').sticky({ topSpacing: 0, className: 'menuhey' })
})
$(document).ready(function () {
  $('.mmn').sticky({ topSpacing: 0, className: 'menuhey' })
})

$(document).ready(function () {
  //Chrome Smooth Scroll
  try {
    $.browserSelector()
    if ($('html').hasClass('chrome')) {
      $.smoothScroll()
    }
  } catch (err) {}
})

$(document).ready(function () {
  ymaps.ready(init)

  function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.637703, 51.818936],
        zoom: 16,
      }),
      // Создаем геообъект с типом геометрии "Точка".
      myGeoObject = new ymaps.GeoObject(
        {
          // Описание геометрии.
        },
        {}
      )

    myMap.geoObjects.add(myGeoObject).add(
      new ymaps.Placemark(
        [55.63643, 51.811],
        {
          balloonContent: 'проспект Химиков, д.53 г. Нижнекамск,',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'images/map_logo.png',
          iconImageSize: [60, 71],
          iconImageOffset: [-30, -71],
        }
      )
    )
    myMap.behaviors.disable('scrollZoom')
  }
})

$(document).ready(function () {
  $('#modal1').modal()
})
;(function ($) {
  $(window).on('load', function () {
    var $preloader = $('#p_prldr'),
      $svg_anm = $preloader.find('.svg_anm')
    $svg_anm.fadeOut()
    $preloader.delay(500).fadeOut('slow')
  })
})(jQuery)
