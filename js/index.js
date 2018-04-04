$(document).ready(function(){
  $('#btn').click(function(){
    $("#display").empty();
    var searchText = $("input").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchText +"&format=json";
    $.ajax({
      type: 'GET',
      url: url,  //规定把请求发送到哪个url
      async: false,  //发送同步请求
      dataType: 'jsonp',  //规定预期的服务器响应的数据类型
      success: function(data){    //请求成功时执行的回调函数
        console.log(data);
        for(var i=0;i<data[1].length;i++)    //这里的data是服务器返回的数据
        {
          var wikiTerm = '<div class="items">'+'<div class="title">'+"<a href="+ data[3][i]+">"+ data[1][i] +'</a></div>' +'<div class="snippet">' + data[2][i] + '</div></div>';
          $('#display').append(wikiTerm);
        }
        $("#search").val('');  //搜索之后，输入框设为空
      }
    });
});
  $("#search").keypress(function(e){
    if(e.which == 13){
      $("#btn").trigger("click");
    }
  });

});