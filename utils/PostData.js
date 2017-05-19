
var PostData = function(options,callback){
    var url = options.url || 'https://gank.io/api/add2gank';
    var data = options.data || {};
    wx.request({
        url : url,
        data :json2Form(data),
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },    
        method : 'POST',
        success : function(res){
            callback(res)
        }
    })
}

function json2Form(json) {
    var str = [];
    for(var p in json){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
    }
    return str.join("&");
}

module.exports = PostData;