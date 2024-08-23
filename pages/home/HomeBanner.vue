<template>
    <div class="common-padding">
        <div class="home-banner">
            <div class="home-video">
                <div id="subtitle" data-aos="fade-right">
                    <div class="welcome">
                        <h1><span>{{ $t("index.welcome") }}</span>{{ $t("index.come") }}</h1>
                        <h1>{{ $t("index.name") }}</h1>
                    </div>
                    <span v-for="(subtitle, index) in displaySubtitles" :key="index" :class="{ 'subtitle': true }">{{
                        subtitle.text }}</span>
                    <div class="in-banner-more">
                        <router-link :to="{ path: `/${$i18n.locale}/about` }">
                            {{ $t("project.JiaZaiGD") }}
                        </router-link>
                    </div>
                </div>


                
                <banner-swiper></banner-swiper>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import BannerSwiper from './BannerSwiper.vue'
const { t, locale } = useI18n({ useScope: "global" });

const chineseSubtitles = [
    { startTime: 0, endTime: 13, text: t('video.subtitles1') },
    { startTime: 14, endTime: 23, text: t('video.subtitles2') },
    { startTime: 24, endTime: 37, text: t('video.subtitles3') },

]
const chineseSimpleSubtitles = [
    { startTime: 0, endTime: 8, text: t('video.subtitles1') },
    { startTime: 9, endTime: 15, text: t('video.subtitles2') },
    { startTime: 16, endTime: 24, text: t('video.subtitles3') },
]
const englishSubtitles = [
    { startTime: 0, endTime: 10, text: t('video.subtitles1') },
    { startTime: 12, endTime: 19, text: t('video.subtitles2') },
    { startTime: 19.5, endTime: 30.8, text: t('video.subtitles3') },
]
const currentSubtitles = []
const currentTime = 0


const displaySubtitles = computed(() => {
    switch (locale.value) {
        case 'en':
            return englishSubtitles;
        case 'hk':
            return chineseSubtitles;
        case 'zh':
            return chineseSimpleSubtitles;
        default:
            return chineseSubtitles;
    }
})
</script>

<style scoped>
.welcome {
    padding-bottom: 20px;
}

.welcome h1 {
    font-size: 50px;
}

.welcome h1 span {
    font-size: 60px;
    color: var(--background);
}


.home-video {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
}


#subtitle {
    color: #000;
    padding-right: 100px;
}

.subtitle {
    width: 100%;
    display: block;
    padding: 3px 0;
    font-size: 18px;
}

.active {
    color: var(--background);
    font-weight: bold;
}

.en .home-video {
    padding-left: 100px;
    padding-right: 100px;
}

.en .welcome h1 {
    font-size: 40px;
}

.en .welcome h1 span {
    padding-right: 10px;
    font-size: 48px;
}

.en .subtitle {
    font-size: 16px;
}

@media only screen and (min-width:1200px) and (max-width:1600px) {

    .welcome h1,
    .en .welcome h1 {
        font-size: 36px;
    }

    .welcome h1 span {
        font-size: 48px;
    }

    #subtitle {
        padding-right: 50px;
    }

}

@media only screen and (min-width:0px) and (max-width:1200px) {

    .home-video {
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }

    .welcome h1 {
        font-size: 24px;

    }

    .welcome h1 span,
    .en .welcome h1 {
        font-size: 30px;
    }

    #subtitle {
        width: 100%;
        padding-right: 0;
    }

    #player {
        margin-bottom: 20px;
    }

    .en .home-video {
        padding-left: 0;
        padding-right: 0;
    }

}

@media only screen and (min-width:0px) and (max-width:768px) {
    #player {
        width: 100%;
        height: inherit;
    }

    .welcome {
        padding-bottom: 5px;
    }

    .welcome h1 span,
    .en .welcome h1 span {
        font-size: 24px;
    }

    .welcome h1,
    .en .welcome h1 {
        font-size: 20px
    }


    #subtitle {
        padding-top: 15px;
    }

    .swiper-wrap {
        display: none;
    }
}
</style>