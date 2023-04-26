window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#reviewsSwiper', {

        // If we need pagination
        pagination: {
            el: '.reviews-swiper-pagination',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            bulletClass: 'reviews-swiper-bullet',
            bulletActiveClass: 'reviews-swiper-bullet--active',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-swiper-next',
            prevEl: '.reviews-swiper-prev',
        },
        spaceBetween: 20,
        breakpoints: {
            1023: {
                slidesPerView: 2,
                grid: null,
            },
            320: {
                grid: {
                    slidesPerView: 1,
                    rows: 2,
                    fill: 'row'
                }
            }
        }
    });
});