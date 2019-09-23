<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/3ff47fa622d07edad492c2859a5ad32f.jpg_750x200_3df30168.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/0fa39f9f5e66189e85b5c6e54278587d.jpg_750x200_86c8f2d8.jpg" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    height 0
    width 100%
    padding-bottom 26.67%
    background #ccc
    .swiper-img
      width 100%
</style>
