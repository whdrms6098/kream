fetch('../assets/data/bannerData.json')
  .then((res) => res.json())
  .then((json) => {
    data = json.items;
    let html = ``;
    data.forEach((el) => {
      html += `<div class="swiper-slide swiper-slide--${el.theme}">
                <div class="banner">
                  <picture>
                    <img src="${el.thumb}" alt="${el.desc}" />
                  </picture>
                </div>
            </div>`;
    });

    $('#bannerList').html(html);

    const banner = new Swiper('.sc-banner .swiper-container', {
      loop: true,

      autoplay: {
        delay: 5000,
      },

      navigation: {
        nextEl: '.sc-banner .btn--next',
        prevEl: '.sc-banner .btn--prev',
      },

      pagination: {
        el: '.sc-banner .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      touchEventsTarget: 'container',
      allowTouchMove: true,
    });
  });

fetch('../assets/data/shortcutData.json')
  .then((res) => res.json())
  .then((json) => {
    let html = '';
    data = json.slides;

    data.forEach((slide) => {
      let slideHtml = '<div class="swiper-slide">';
      slide.items.forEach((el) => {
        slideHtml += `
          <div class="menu__item">
            <a href="#">
              <figure>
                <img src="${el.thumb}" alt="${el.name}" />
                <figcaption>${el.name}</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure>
                <img src="${el.thumb2}" alt="${el.name2}" />
                <figcaption>${el.name2}</figcaption>
              </figure>
            </a>
          </div>
        `;
      });
      slideHtml += '</div>';
      html += slideHtml;
    });
    $('#shortCut').html(html);
  });

const menuWrap = new Swiper('.sc-menus .swiper-container', {
  allowTouchMove: false,
  pagination: {
    el: '.sc-menus .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.sc-menus .btn--next',
    prevEl: '.sc-menus .btn--prev',
  },

  on: {
    slideChange: function () {
      const currnt = this.activeIndex;
      if (currnt == 1) {
        $('.sc-menus .btn').removeClass('btn--active');
        $('.sc-menus .btn--next').addClass('btn--active');
      } else {
        $('.sc-menus .btn').removeClass('btn--active');
        $('.sc-menus .btn--prev').addClass('btn--active');
      }
    },
  },
});

fetch('../assets/data/shortcutData.json')
  .then((res) => res.json())
  .then((json) => {
    let html = '';
    data = json.slides;

    data.forEach((slide) => {
      slide.items.forEach((el) => {
        html += `
          <div class="menu__item">
            <a href="#">
              <figure>
                <img src="${el.thumb}" alt="${el.name}" />
                <figcaption>${el.name}</figcaption>
              </figure>
            </a>
            <a href="#">
              <figure>
                <img src="${el.thumb2}" alt="${el.name2}" />
                <figcaption>${el.name2}</figcaption>
              </figure>
            </a>
          </div>
        `;
      });
    });
    $('#m-shortCut').html(html);
  });

fetch('../assets/data/productData.json')
  .then((res) => res.json())
  .then((json) => {
    data = json.droppedList;
    let html = '';

    data.forEach((el) => {
      html += `
         <div class="product__item">
            <div class="product__thumb">
              <img src="${el.thumb}" alt />

              <span class="product--number">${el.order.check ? `거래 ${el.order.value}` : ''
        }
              </span>
              <span class="product--wish">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <use
                    href="#i-ico-wish-off"
                    xlink:href="#i-ico-wish-off"
                  ></use>
                </svg>
              </span>
            </div>

            <div class="product__info">
              <div class="info__desc">
                <em>
                  <span>${el.brand.name}</span>
                  ${el.brand.auth
          ? `<svg xmlns="http://www.w3.org/2000/svg">
                    <use href="#i-ico-brand-official" xlink:href="#i-ico-brand-official"></use>
                  </svg>`
          : ''
        }
                </em>
                <p>
                  ${el.title}
                </p>
                <div class="tags">
                  ${el.coupon ? `<span>적립</span>` : ''}
                  ${el.delivery.free ? `<span>무료배송</span>` : ''}
                </div>

                ${el.delivery.fast
          ? `<div class="tags tags--rocket">
                        <span>
                          <i class="ico--rocket"></i>
                            빠른배송
                         </span>
                        </div>`
          : ''
        }
              </div>

              <div class="info__price">
                <span>
                ${el.price.salePercent
          ? `<span class="point--red">${el.price.salePercent + '%'
          }</span>`
          : ''
        }
                  
                  ${el.price.directlPrice
          ? el.price.directlPrice.toLocaleString()
          : ''
        }
                  ${el.price.salePrice
          ? el.price.salePrice.toLocaleString() + '원'
          : el.price.normalPrice
            ? el.price.normalPrice.toLocaleString() + '원'
            : ''
        }
                </span>
                <p>
                ${el.price.directCheck ? `<p>즉시 구매가</p>` : '<p>구매가</p>'}
                </p>
              </div>
            </div>
            <a href="#" class="link"></a>
          </div>
      `;
    });
    $('#dropped').html(html);
  });

fetch('../assets/data/shortcutData.json')
  .then((res) => res.json())
  .then((json) => {
    let html = '';
    data = json.topBrand
    data.forEach((el) => {
      html += `
          <div class="menu__item">
          <a href="#">
            <figure>
              <picture>
                <source
                  srcset="${el.thumbM}"
                  media="(max-width:750px)"
                />
                <img src="${el.thumb}" alt />
              </picture>
              <figcaption>${el.name}</figcaption>
            </figure>
          </a>
        </div>
        `;
    });
    $('#topBrand').html(html);
  });

fetch('../assets/data/productData.json')
  .then((res) => res.json())
  .then((json) => {
    data = json.PopularList;
    let html = '';

    data.forEach((el) => {
      html += `
         <div class="product__item">
            <div class="product__thumb">
              <img src="${el.thumb}" alt />

              <span class="product--number">${el.order.check ? `거래 ${el.order.value}` : ''
        }
              </span>
              <span class="product--wish">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <use
                    href="#i-ico-wish-off"
                    xlink:href="#i-ico-wish-off"
                  ></use>
                </svg>
              </span>
            </div>

            <div class="product__info">
              <div class="info__desc">
                <em>
                  <span>${el.brand.name}</span>
                  ${el.brand.auth
          ? `<svg xmlns="http://www.w3.org/2000/svg">
                    <use href="#i-ico-brand-official" xlink:href="#i-ico-brand-official"></use>
                  </svg>`
          : ''
        }
                </em>
                <p>
                  ${el.title}
                </p>
                <div class="tags">
                  ${el.coupon ? `<span>적립</span>` : ''}
                  ${el.delivery.free ? `<span>무료배송</span>` : ''}
                </div>

                ${el.delivery.fast
          ? `<div class="tags tags--rocket">
                        <span>
                          <i class="ico--rocket"></i>
                            빠른배송
                         </span>
                        </div>`
          : ''
        }
              </div>

              <div class="info__price">
                <span>
                ${el.price.salePercent
          ? `<span class="point--red">${el.price.salePercent + '%'
          }</span>`
          : ''
        }
                  
                  ${el.price.directlPrice
          ? el.price.directlPrice.toLocaleString()
          : ''
        }
                  ${el.price.salePrice
          ? el.price.salePrice.toLocaleString() + '원'
          : el.price.normalPrice
            ? el.price.normalPrice.toLocaleString() + '원'
            : ''
        }
                </span>
                <p>
                ${el.price.directCheck ? `<p>즉시 구매가</p>` : '<p>구매가</p>'}
                </p>
              </div>
            </div>
            <a href="#" class="link"></a>
          </div>
      `;
    });
    $('#popular').html(html);
  });

const stylist = new Swiper('.sc-stylist .swiper-container', {
  spaceBetween: 4,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.sc-stylist .btn--next',
    prevEl: '.sc-stylist .btn--prev',
  },
});

fetch('../assets/data/productData.json')
  .then((res) => res.json())
  .then((json) => {
    data = json.newList;
    let html = '';

    data.forEach((el) => {
      html += `
         <div class="product__item">
            <div class="product__thumb">
              <img src="${el.thumb}" alt />

              <span class="product--number">${el.order.check ? `거래 ${el.order.value}` : ''
        }
              </span>
              <span class="product--wish">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <use
                    href="#i-ico-wish-off"
                    xlink:href="#i-ico-wish-off"
                  ></use>
                </svg>
              </span>
            </div>

            <div class="product__info">
              <div class="info__desc">
                <em>
                  <span>${el.brand.name}</span>
                  ${el.brand.auth
          ? `<svg xmlns="http://www.w3.org/2000/svg">
                    <use href="#i-ico-brand-official" xlink:href="#i-ico-brand-official"></use>
                  </svg>`
          : ''
        }
                </em>
                <p>
                  ${el.title}
                </p>
                <div class="tags">
                  ${el.coupon ? `<span>적립</span>` : ''}
                  ${el.delivery.free ? `<span>무료배송</span>` : ''}
                </div>

                ${el.delivery.fast
          ? `<div class="tags tags--rocket">
                        <span>
                          <i class="ico--rocket"></i>
                            빠른배송
                         </span>
                        </div>`
          : ''
        }
              </div>

              <div class="info__price">
                <span>
                ${el.price.salePercent
          ? `<span class="point--red">${el.price.salePercent + '%'
          }</span>`
          : ''
        }
                  
                  ${el.price.directlPrice
          ? el.price.directlPrice.toLocaleString()
          : ''
        }
                  ${el.price.salePrice
          ? el.price.salePrice.toLocaleString() + '원'
          : el.price.normalPrice
            ? el.price.normalPrice.toLocaleString() + '원'
            : ''
        }
                </span>
                <p>
                ${el.price.directCheck ? `<p>즉시 구매가</p>` : '<p>구매가</p>'}
                </p>
              </div>
            </div>
            <a href="#" class="link"></a>
          </div>
      `;
    });
    $('#newIn').html(html);
  });

fetch('../assets/data/productData.json')
  .then((res) => res.json())
  .then((json) => {
    data = json.release;
    let html = '';

    data.forEach((el) => {
      html += `
         <div class="product__item">
              <div class="product__thumb">
                <img src="${el.thumb}" alt />

                <div class="product--date">
                  <span class="month">${el.date.month}</span>

                  <span class="day">${el.date.day}</span>
                </div>
              </div>
              <div class="product__info">
                <div class="info__desc">
                  <em>
                  <span>${el.brand.name}</span>
                  ${el.brand.auth
          ? `<svg xmlns="http://www.w3.org/2000/svg">
                    <use href="#i-ico-brand-official" xlink:href="#i-ico-brand-official"></use>
                  </svg>`
          : ''
        }
                </em>
                  <p>${el.title}</p>
                </div>
              </div>
              <a href="#"></a>
            </div>
      `;
    });
    $('#release').html(html);
  });
$('.btn--top').click(function () {
  gsap.to(window, { duration: 0.5, scrollTo: 0 });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('.btn--top').addClass('active');
  } else {
    $('.btn--top').removeClass('active');
  }
});

$('#footer .btn--more').click(function () {
  $('.btn--more').toggleClass('active');
  $('.info__area').toggleClass('active');
});
