var Bmob = require('bmob.js')
var Toast = require('common.js')
function addData(table,data){
  var Table = Bmob.Object.extend(table);
  var tab = new Table();
  for(let key in data){
    tab.set(key,data[key]);
  }
  tab.save(null,{
    success:function(res){
      //创建成功
      console.log(res);
    },
    error:function(res,error){
      //添加失败
      console.log(error);
      //弹出提示
      // Toast.showTip("添加失败","cancel","")
    }
  })
}
module.exports = {
  addData: addData
}