Page({
  mixins: [require('../../mixin/themeChanged')],
  data: {
    userName: '',Surpluus:''
    },
userNameInput:function(e)
{
this.setData({
    userName: e.detail.value
})
},
  myclick:function(e){
    //console.log("用户名："+this.data.userName);
    var network = [require('../../common')];
    const url="https://localhost:44356/api/GetDrvLunch?name="+this.data.userName;
    const header="";
    const params="";
    network.SEND(url,'GET',res=>{
      console.log("用户名："+res.data);
    },res=>{
      console.log("用户名："+res.data);
    });
  }
});
