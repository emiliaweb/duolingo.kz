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
        paginationClickable: true,

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-swiper-next',
            prevEl: '.reviews-swiper-prev',
        },
        slidesPerView: 2,
        spaceBetween: 20
    });
});