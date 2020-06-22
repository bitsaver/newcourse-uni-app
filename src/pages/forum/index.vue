<template>
  <view class="forum_tab">
    <view class="forum_tab_title">
      <view class="title_inner">
        <uni-segmented-control 
          :current="current" 
          :values="items.map(v=>v.title)"
          @clickItem="onClickItem"
          style-type="text" 
          active-color="#1296db"
        ></uni-segmented-control>
      </view>
      <view class="iconfont iconsearch"></view>
    </view>
    <view class="forum_content">
        <view v-if="current === 0">
          <forum-mine></forum-mine>
        </view>
        <view v-if="current === 1">
          <forum-recommend></forum-recommend>
        </view>
        <view v-if="current === 2">
          <forum-rank></forum-rank>
        </view>
    </view>
  </view>
</template>

<script>
import forumMine from "./forum-mine"
import forumRecommend from "./forum-recommend"
import forumRank from "./forum-rank"
import {uniSegmentedControl} from '@dcloudio/uni-ui'
export default {
  
  components:{
    forumRecommend,
    forumMine,
    forumRank,
    uniSegmentedControl
  },
  data(){
    return {
       items: [
         {title:"我的"},
         {title:"推荐"},
         {title:"排行"}
       ],
       current: 0
    }
  },
  methods: {
        onClickItem(e) {
            if (this.current !== e.currentIndex) {
                this.current = e.currentIndex;
            }
        }
  },
  onLoad(){
    this.request({
      method:"POST",
      url:"http://localhost/login",
      header:{'content-type':'application/json'},
      data:{"username":"123456","password":"123456"}
    }).then(res=>{
        console.log(res)
      }
    )}
}
</script>

<style lang="scss">
.forum_tab{
  .forum_tab_title{
    position: relative;
    .title_inner{
      width:60%;
      margin:0 auto;
    }
    .iconsearch{
      position:absolute;
      top:50%;
      transform: translateY(-50%);
      right:5%;
    }
  }
  .forum_tab_content{

  }
}
</style>