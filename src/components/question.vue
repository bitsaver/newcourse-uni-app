<template>
	<view class="content">
		<view class="question">{{qtype}}{{content}}</view>
		<button class="choice" v-for="(choice,index) in choices" @click="handleChoose($event)" :key="index" :data-index="index">{{choice}}</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				content:"这里显示题干信息",
				price:1000,
				isGood:true,
				color:"cadetblue",
				type:1,
				choices:["红楼梦","西游记","三国演义","水浒传"]
			}
		},
		computed:{
			qtype(){
				switch(this.type){
					case 0: return "[单选题] ";
					case 1: return "[多选题] ";
					case 2: return "[填空题] ";
				}
			},
			filterList(){
				return this.choices.filter(v=>v.id);
			}
		},
		methods:{
			handleChoose(event){
				console.log(event.currentTarget.dataset.index)
				this.type = event.currentTarget.dataset.index;
			}
		}
	}
</script>

<style lang="scss">

	.question{
		width:80vw;
		height: 25vh;
		margin: 5vh 5vw;
		padding: 1vh 1vw;
		background-color:powderblue;
	}
	.choice{
		width:80vw;
		height: 10vh;
		margin: 5vh 5vw;
		padding: 2vh 2vw;
		font-size: 5vw;
		background-color:pink;
	}
	.content{
		background-color:palegoldenrod;
		.sass{
			width:50vw;
			height: 20vh;
			background-color: $uni-bg-color-mask;
			color:black
		}
	}
</style>