//es6
export default (param)=>{
    uni.showLoading({
        title:"加载中"
    })
    return new Promise((resolve,reject)=>{
        wx.request({
            ...param,
            success(res){
                resolve(res)
            },
            fail(err){
                reject(err)
            },
            complete(){
                uni.hideLoading();
            }
        })
    })
}