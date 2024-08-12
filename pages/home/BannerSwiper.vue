<script setup>

</script>

<template>
    <div class="swiper-wrap" data-aos="fade-left" data-aos-delay="300">
        <Swiper class="mySwiper" :width="375" :modules="[SwiperAutoplay, SwiperEffectCards, SwiperPagination]"
            :slides-per-view="1" :loop="true" :grabCursor="true" :effect="'cards'" :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }">
            <swiper-slide>
                <router-link :to="{ path: `/${$i18n.locale}/development` }">
                    {{ $t("menu.customize") }}
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{ path: `/${$i18n.locale}/website` }">
                    {{ $t("menu.store") }}
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{ path: `/${$i18n.locale}/it` }">
                    {{ $t("menu.it") }}
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{ path: `/${$i18n.locale}/wechat` }">
                    {{ $t("menu.tvp") }}
                </router-link>
            </swiper-slide>
        </Swiper>
    </div>
</template>

<style>
.swiper {
    width: 375px;
    height: 500px
}

.swiper-slide {
    border-radius: 18px;
    font-size: 24px;
    font-weight: 700
}

.swiper-slide a {
    height: calc(100% - 60px);
    color: #333;
    display: flex;
    align-items: flex-end;
    justify-content: center
}

.swiper-slide:nth-child(1n) {
    background: url('~/assets/img/banner/2023-54.jpg') no-repeat;
}

.swiper-slide:nth-child(2n) {
    background: url('~/assets/img/banner/2023-53.jpg') no-repeat;
}

.swiper-slide:nth-child(3n) {
    background: url('~/assets/img/banner/2023-51.jpg') no-repeat;
}

.swiper-slide:nth-child(4n) {
    background: url('~/assets/img/banner/2023-52.jpg') no-repeat;
}

</style>
