<template>
  <view>
    <uni-badge text="1"></uni-badge>
    <uni-badge text="2" type="success"></uni-badge>
    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
  </view>
  
</template>

<script>
import {uniBadge} from '@dcloudio/uni-ui'
//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
export default {
  components:{
    uniBadge
  }
}
</script>

<style>

</style>