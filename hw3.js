$("#lottery_box").click(function()){
  var img_num=Math.floor(Math.random()*6);
  var imgurl=[
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/1_red.png",
    "https://luffy.ee.nclu.edu.tw/~E24056899/hw3pic/2_orange.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/3_yellow.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/4_green.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/5_blue.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/6_gray.png",];
  $("#stick").animate({top:"-200px",left:"450px",opacity:"5.0"},1000,$.fn.showresult);
  $.fn.showresult=function(){
    $("#result").html('<img src="'+imgurl[img_num]+'">');
    $("#result").css("left","100px");
    $("#result").css("top","-280px");
  };
}
};
