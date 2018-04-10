$("#left").click(function(){
  var img_num=Math.floor(Math.random()*6);
  var imgurl=[
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/1_red.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/2_orange.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/3_yellow.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/4_green.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/5_blue.png",
    "https://luffy.ee.ncku.edu.tw/~E24056899/hw3pic/6_gray.png"
  ];
  $("#stick").animate({top:"-500px",left:"160px"},1000,function(){
    $("#paper").html('<img src="'+imgurl[img_num]+'">');
    $("#paper").css("left","480px");
    $("#paper").css("top","200px");
  }
  );
}
);
