$(document).ready(function(){
	
	$('body').get(0).addEventListener('touchmove', function (event) {
    	event.preventDefault();
	});

	var loadingNum = 0;
	var speed = 8;
	var scroll_left = 0;

	var onOff = false;
	var audio = document.getElementById('music');

	$('#bg_music').on('click',function(e){
		audio.play();
		if(onOff){
			audio.pause();
			onOff = false;
			$('#stop_music').show()
		}else{
			audio.play();
			onOff = true;
			$('#stop_music').hide();
		}
	}).trigger('click');

	/*$('#bg_music').get(0).addEventListener('touchend', function(){
		if(onOff){
			audio.pause();
			onOff = false;
			$('#stop_music').show()
		}else{
			audio.play();
			onOff = true;
			$('#stop_music').hide();
		}
	});*/

	var loadingTimer = setInterval(function(){
		loadingNum++;
		if(loadingNum == 30){
			clearInterval(loadingTimer);
			$('#flower').addClass('pageShow');
			$('#flower').animate({opacity:1},500);
			$('#loading').animate({opacity:0},500,function(){
				$('#loading').removeClass('pageShow');
				$('#cover').show();
				$('#flower_wrap img').addClass('flowerRotate');
				setTimeout(function(){
					$('#flower_wrap img').css({'transform':'scale(1)'});
					$('#flower_wrap img').css({'-webkit-transform':'scale(1)'});
				},4000);
				$('#text1').addClass('text1Move');
				$('#text2').addClass('text2Move');
				setTimeout(function(){
					$('#text2').css({'opacity':1});
					$('#text2_arrow').addClass('textArrowMove');
				},4000);

			});
		}
	},30);

	$('#flower').get(0).addEventListener('touchend',function(){
		$('#hand_1').addClass('pageShow');
		$('#hand_1').animate({'opacity':1}, 500);
		$('.btn_alert').addClass('btnAlertMove');
		$('#flower').animate({'opacity':0}, 500, function(){
			$(this).removeClass('pageShow');
		});
	});

	$('#hand_1 .btn').get(0).addEventListener('touchend',function(){
		$(this).addClass('btnMove');
		$('#circle1_wrap img').addClass('circleRotate');
		setTimeout(function(){
			//$('#hand_1 .btn').css({'left':'13.45rem','top':'9.6rem'});
			$('#hand_2').addClass('pageShow');
			$('#hand_2').animate({'opacity':1}, 1000);
			$('#hand_1').animate({'opacity':0}, 1000,function(){
				$(this).removeClass('pageShow');
			});
			$()
		},1000);
	});

	$('#hand_2 .btn').get(0).addEventListener('touchend', function(){
		$(this).addClass('btnMove');
		$('#circle2_wrap img').addClass('circleRotate');
		setTimeout(function(){
			//$('#hand_2 .btn').css({'left':'13.45rem','top':'9.6rem'});
			$('#hand_3').addClass('pageShow');
			$('#hand_3').animate({'opacity':1}, 1000);
			$('#hand_2').animate({'opacity':0}, 1000,function(){
				$(this).removeClass('pageShow');
			});
			$()
		},1000);
	})

	$('#hand_3 .btn').get(0).addEventListener('touchend', function(){
		$(this).addClass('btnMove');
		$('#circle3_wrap img').addClass('circleRotate');
		setTimeout(function(){
			//$('#hand_3 .btn').css({'left':'13.45rem','top':'9.6rem'});
			$('#hand_4').addClass('pageShow');
			$('#hand_4').animate({'opacity':1}, 1000);
			$('#hand_3').animate({'opacity':0}, 1000,function(){
				$(this).removeClass('pageShow');
			});
			$()
		},1000);
	})

	$('#hand_4 .btn').get(0).addEventListener('touchend', function(){
		$(this).addClass('btnMove');
		$('#circle4_wrap img').addClass('circleRotate');
		setTimeout(function(){
			//$('#hand_4 .btn').css({'left':'13.45rem','top':'9.6rem'});
			$('#invitation').addClass('pageShow');
			$('#invitation').animate({'opacity':1}, 500);
			$('#hand_4').animate({'opacity':0}, 500,function(){
				$(this).removeClass('pageShow');
			});

			$('#roll_pic_clone').html($('#roll_pic').html());
				setInterval(function(){
					if($('#roll_pic_clone').width() - $('#roll').scrollLeft() <= 0){
						$('#roll').scrollLeft($('#roll').scrollLeft() - $('#roll_pic').width());
					}else{
						
						$('#roll').scrollLeft($('#roll').scrollLeft()+2);
					}
				},speed);
		
		},1000);
	});

	$('#join').get(0).addEventListener('touchend', function(){
		$('#flow').addClass('pageShow');
		$('#flow').animate({'opacity':1}, 500);
		$('#invitation').animate({'opacity':0},500,function(){
			$(this).removeClass('pageShow');
		});
	});
	
	$('#share').get(0).addEventListener('touchend', function(){
		$('#mask').show().animate({'opacity':0.9},300);
		$('#mask img').addClass('shareAlertMove');
	});

	$('#mask').get(0).addEventListener('touchend', function(){
		$(this).animate({'opacity':0},300, function(){
			$('#mask').hide();
		});

	})

})