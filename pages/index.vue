<template>
  <div>
    <home-banner></home-banner>
    <home-customize></home-customize>
    <home-website></home-website>
    <home-app></home-app>
    <home-wechat></home-wechat>
    <home-mall></home-mall>
    <home-it></home-it>

    <div class="common-bottom common-padding common-tb-120">
      <div class="common-bottom-content">
        <request-form></request-form>
        
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
import HomeBanner from './home/HomeBanner.vue'
import HomeCustomize from './home/HomeCustomize.vue'
import HomeWebsite from './home/HomeWebsite.vue'
import HomeApp from './home/HomeApp.vue'
import HomeWechat from './home/HomeWechat.vue'
import HomeMall from './home/HomeMall.vue'
import HomeIt from './home/HomeIt.vue'
import RequestForm from './home/RequestForm.vue'
//const appConfig = useAppConfig()
</script>