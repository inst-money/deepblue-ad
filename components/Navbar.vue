<template>
  <div class="nav"  @click="subClick">

    <div class="index-nav">
      <div class="index-nav-frame clearfix">
        <div class="nav-small" tabindex="-1" v-on:click="open">
          <div class="nav-small-focus" tabindex="-1">
          </div>
          <img src="@/assets/img/menu.svg" />
        </div>
        <div v-if="show" class="mobile-nav-only">



          <div class="index-nav-frame-line index-nav-fu" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/about` }" :class="{'active': $route.path === '/about'}">
              {{ $t("menu.about") }}
            </router-link>
          </div>

          <div class="index-nav-frame-line add-menu" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/development` }">
              {{ $t("menu.customize") }}
            </router-link>
            <div class="d-menu">
              <ul>
                <li>
                  <router-link :to="{ path: `/${$i18n.locale}/customize` }"  >
                    {{ $t("page.customizeName0") }}
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ path: `/${$i18n.locale}/website` }">
                    {{ $t("menu.website") }}
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ path: `/${$i18n.locale}/app` }">
                    {{ $t("menu.app") }}
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ path: `/${$i18n.locale}/wechat` }">
                    {{ $t("menu.wechat") }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>


          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/it` }" :class="{'active': $route.path === '/it'}">
              {{ $t("menu.it") }}
            </router-link>
          </div>




        </div>
      </div>
    </div>
 </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
const isShow = ref(true)

const mobileClick = () => {
  if(window.innerWidth < 768){
    show.value = false
  }
  else{
    show.value = true
  }
}
const subClick = () => {
  // show.value = false
}

const open = (e: Event) => {
  e.preventDefault();
  show.value = !show.value
}
onMounted(() => {
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
      show.value = true
    }
    else{
      show.value = false
    }
  })
})
</script>

<style scoped>
/***导航***/

.index-nav{
  height: 40px;
  box-sizing: border-box;

}

.index-nav-frame-line{
  color: #000;
  float: left;
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;
  line-height: 40px;
  text-align: left;
  font-size: 20px;
  margin: 0 20px;

}

.index-nav-frame-line a{
  display: block;
}

.index-nav-frame-line:hover a{
  color: #000;
}
.index-nav-frame-line:hover a span{
  background: #fff;
}


.index-nav-frame-line:hover {
  height:auto;
  opacity: 1;
}

/*.router-link-active{*/
/*  color: var(--background);*/
/*}*/
.router-link-exact-active{
  color: var(--background);
}


.add-menu .router-link-exact-active{
  color:#000
}

.index-nav-frame-line a.active:after {
  content: '';
  display: block;
  width:100%;
  height: 1px;
  background-color: #fff;
  /*border-bottom: 2px solid var(--background);*/
  border-radius: 3px;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}


.nav-small{
  display: none;
}


/************ 2023.12.7  ************************/
.add-menu{
  position: relative;
}

.d-menu{
  position: absolute;
  top:40px;
  left: 0;
  z-index: 9;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
  padding: 5px 10px;
  width: 180px;
  display: none;
}

.d-menu ul li{
  list-style-type:none;
  text-align: center;
  font-size: 14px;
}

.add-menu:hover .d-menu{
  display: block;
}

.d-menu .router-link-active{
  color:var(--background)!important;
}

@media only screen and (max-width:767px) {

  .d-menu{
    display: block;
    position: relative;
    top: 0;
    box-shadow: none;
    width: 100%;
  }
  .d-menu ul{
    padding: 0;
    width: 100%
  }

  .d-menu ul li{
    line-height: 38px;
    width: 100%;
    text-align: left;
  }


  .index-nav-frame-line{
    line-height: 32px;
  }
  .index-nav-frame-line-li a{
    display: block;
    color: white;
  }
  .nav-small{
    display: block;
  }
  .nav-small:focus~.index-nav-frame-line{
    height: auto;

    border-bottom: 1px solid var(--background);
  }
  .nav-small:focus .nav-small-focus{
    display: block;
  }
  .index-nav-frame{
    width: 100%;
    padding: 10px 0;
  }
  .index-nav-frame-line{
    width: 100%;
    overflow: hidden;
  }


  .index-nav-frame-line:focus{
    height: auto;
    border-bottom: 1px solid #ccc;
  }
  .index-nav-frame-line:focus{
    height:auto;
    opacity: 1;
  }
  .index-nav-frame-line:focus {
    color: #B63B4D;
  }

  .index-nav-frame-line:focus{
    display: block;
  }
  .index-nav{
    height: 0;
  }
  .index-nav-frame-line{
    padding: 5px 10px;
    background: #fff;
    border-bottom: 1px solid var(--background);
  }
  .nav-small{
    display: block;
  }

  .nav-small{
    width: 36px;
    height: 36px;
    z-index: 2;
  }
  .nav-small img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-left: 10px;
  }
  .nav-small-focus{
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
  }
  .nav-small-focus:focus{
    display: none;
  }
  .mobile-nav-only{
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 100;
  }

  .nav-small-focus img{
    background: #fff;
  }

  .index-nav-frame-line{
    margin: 0;
    width: 100vw;
    
  }

}


@media only screen and (max-width:767px) {
  .index-nav{
    /*width: 100%;*/
    position: absolute;
    left:0px;
    top: 45px;
    z-index: 1;
  }

}

/**/

@media only screen and (min-width:1161px) and (max-width:1365px){
  .index-nav-frame-line {
    font-size: 18px;
    margin: 0 7px;
  }
}

@media only screen and (min-width:992px) and (max-width:1160px){
  .index-nav-frame-line {
    margin: 0 5px;
    font-size: 16px;
  }
}

@media only screen and (min-width:768px) and (max-width:991px){

  .index-nav-frame-line {
    margin: 0 5px;
    font-size: 14px;
    
  }


}

.tmp-placeholder{
  margin-right: 30px;
}

</style>