<template>

  <div id="header">
    <div class="header-content" id="test">
      <div class="logo">
        <nuxt-link to="/">
          <img src="@/assets/img/logo.png">
        </nuxt-link>
      </div>

      <div class="right-content">
        <Navbar/>

        <div class="top-right">

          <div class="top-whatsapp">

            <!-- TODO: 联系 -->
            <a href="#">
              <img src="@/assets/img/nav_whatsapp.png">
            </a>

          </div>
          <div class="language">
            <div class="language-default" v-on:click="show = !show">
              <img src="@/assets/img/nav_lan.png">
            </div>
            <Transition name="slide-fade">
          
              <div class="language-list" v-if="show">
                <ul>
                  <li>
                    <a @click="changeLanguage('hk')" :class="{ active: language === 'hk' }">繁體</a>
                  </li>
                  <li>
                    <a @click="changeLanguage('zh')" :class="{ active: language === 'zh' }">简体</a>
                  </li>
                  <li>
                    <a @click="changeLanguage('en')" :class="{ active: language === 'en' }">ENG</a>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="top-padding">

  </div>
</template>


<script setup>
const { locale, setLocale } = useI18n()

// 监听 locale 变化 给body添加class
watch(locale, (val) => {
  initHTMLClass()
})

const initHTMLClass = () => {
  document.querySelector('html').classList = [locale.value]
}

// mouted 执行 initHTMLClass

onMounted(() => {
  initHTMLClass()
})

const show = ref(false)
const language = ref(locale)
const mShow = ref(false)
const showModal = ref(false)


const changeLocale = (locale) => {
  setLocale(locale)
}

const navClick = () => {
  mShow.value = false
}

const changeLanguage = (lang) => {
  language.value = lang
  setLocale(lang)
  show.value = false
}


</script>

<style lang="css" scoped>
#header {
  height: 126px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
}

.header-content {
  width: 100%;
  height: 126px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
}

.logo img {
  width: 180px;
}

.top-right {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-content{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100% ;
}

.top-whatsapp img {
  width: 45px;
}

.language {
  position: relative;
  cursor: pointer;
}

.language-default {
  display: flex;
  font-size: 14px;
  align-items: center;
}

.language-default img {
  width: 45px;
}

.language-list {
  width: 45px;
  position: absolute;
  top: 50px;
  left: 0;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
  z-index: 9999;
}

.language-list ul {
  display: block;
  background: #fff;
}

.language-list ul li {
  text-align: center;
  list-style: none;
}

.language-list ul li a {
  display: block;
  padding: 15px 0;
  color: #000;
  text-align: center
}

.language-list ul li a.active {
  border-bottom: 1px solid var(--background);
  color: var(--background);
}

@media (min-width: 1921px) {
  .header-content {
    padding: 10px 0;
  }
}


@media only screen and (min-width:0px) and (max-width:1250px) {
  .header-content {
    padding: 10px 10px;
  }
}

@media only screen and (min-width:768px) and (max-width:1067px) {
  .top-right {
    /* position: absolute;
    top: 10px;
    right: 20px;
    width: 100px; */
    margin-right: 20px;
  }

  .top-whatsapp img,
  .language-default img {
    width: 36px;
  }

  .nav {
    margin-right: 10px;
  }

}
.top-padding {
    padding-top: 126px;
  }

@media only screen and (min-width:0px) and (max-width:767px) {

  #header {
    height: 106px;
  }

  .top-padding {
    padding-top: 106px;
  }

  .header-content {
    flex-wrap: wrap;
  }

  .top-right {
    width: 100%;
    justify-content: flex-end;
    margin-right: 20px;
    /* z-index: 1000; */
  }

  .top-whatsapp {
    margin-right: 20px;

  }

  .top-whatsapp img,
  .language-default img {
    width: 36px;
    position: relative;
  }

  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    /* position: absolute;
    top: 50%;
    transform: translate(0, -50%); */
  }

  .logo img {
    width: 120px;
    /* height: 40px; */
    z-index: 9;
    position: static;
  }


  .header-content {
    height: inherit;
  }

  .language-list {
    left: -5px;
  }

}

</style>