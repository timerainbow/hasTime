<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>

        <div class="area">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="item of hotCities"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>

        <div
          class="area"
          v-for="(item,key) of cities"
          :key="key"
          :ref="key"
        >
          <div class="title">{{key}}</div>
          <div class="item-list">
            <div
              class="item"
              v-for="innerItem of item"
              :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varible.styl'
  .list
    position absolute
    left 0
    right 0
    bottom 0
    top 1.6rem
    overflow hidden
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          margin .1rem
          border .02rem solid #ccc
          padding .1rem 0
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
        border-bottom 1px solid #eee
</style>
