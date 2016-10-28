
// 监听下载事件
$('.open-down-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_download', 'click', '0']);
});

// 监听分享事件
$('.share-btn').on('click', function() {
  _hmt.push(['_trackEvent', '120_complex_share', 'click', '0']);
});

$('.img-btn').on('click',function () {
  var imgId = $(this).attr('index');
  $('.vedio-play').attr('poster','images/tripe_'+imgId+'.jpg');
  if(imgId ==1){
    $('.vedio-play').attr('src','http://video.lalocal.cn/video/mp4/201610281233.mp4');
  }else if (imgId ==2) {
    $('.vedio-play').attr('src','http://video.lalocal.cn/video/mp4/201610281232.mp4');
  }else if(imgId ==3){
    $('.vedio-play').attr('src','http://video.lalocal.cn/video/mp4/201610281224.mp4');
  }else if(imgId == 4){
    $('.vedio-play').attr('src','http://video.lalocal.cn/video/mp4/201610281226.mp4');
  }else if(imgId == 5){
    $('.vedio-play').attr('src','http://video.lalocal.cn/video/mp4/201610281257.mp4');
  }else if(imgId == 6){
    $('.vedio-play').attr('src','http://video.lalocal.cn/video/mp4/201610281230.mp4');
  }else if(imgId == 7){
    $('.vedio-play').attr('src','http://video.lalocal.cn/video/mp4/201610281229.mp4');
  }
  $('.intro-img').attr('src','images/intro_'+imgId+'.png');
  console.log(imgId);
  $('.show-vedio').show();
  $('.container').hide();
  $(this).attr('src','images/hide_'+imgId+'.png');
})

$('.open-down-btn').on('click',function () {
  console.log(flag);
  if(flag == true){
    window.location.href='lalocal://app?{"targetType": "20","targetId": "35","targetUrl": "https://dev.lalocal.cn/wechat/app_theme?id=35"}';
  }else{
    window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.lalocal.lalocal';
  }
})

$('.share-btn').on('click',function () {
  $('.show-vedio').hide();
  $('.share-box').show();
})

$('.close-btn').on('click',function () {
  $('.show-vedio').hide();
  $('.container').show();
})

$('.share-box').on('click',function () {
  $('.show-vedio').show();
  $('.share-box').hide();
});
