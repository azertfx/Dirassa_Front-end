$(document).ready(function(){
	/***************	show navbar in right		***************/
	$('.button-collapse').sideNav({
      edge: 'right',
    });
    /***************	dropdown button hover		***************/
	$(".dropdown-button").dropdown({
		"hover": true,
	});
	/***************	slider image		***************/
	$('.slider').slider({
		full_width: true
	});
	/***************	owl carousel slide touch for post content		***************/
	$("#owl-example").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		autoPlay : true,
		stopOnHover : true
	});
	$("#partenaire").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		autoPlay : true,
		stopOnHover : true
	});
	/***************	show and hide fixed navbar		***************/
	var win_height = $(document).height();
	if (win_height == 3100) {
		$(".fix_nav").css({
			'top' : 0,
			'display' : 'block'
		});
	};
	$('.fix_nav').addClass('hide_nav');
	$(window).bind('scroll', function() {
		var bg_height = $('.fix_nav').height();
		if ($(window).scrollTop() < bg_height) {
			$('.fix_nav').addClass('hide_nav');
		}
		else {
			$('.fix_nav').removeClass('hide_nav');
		}
	});
	/***************	animation effect in first load page for body and register box		***************/
	$(".animsition").animsition({
		inClass               :   'zoom-in-sm',
		outClass              :   'zoom-out-sm',
		inDuration            :    1500,
		outDuration           :    800,
		linkElement           :   '.animsition-link',
		loading               :    true,
		loadingParentElement  :   'body',
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
		                          '-webkit-animation-duration',
		                          '-o-animation-duration'
		                        ],
		overlay               :   false,
		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	});

	$(".reg_effect").animsition({

		inClass               :   'fade-in-up-lg',
		outClass              :   'fade-out-up-lg',
		inDuration            :    1500,
		outDuration           :    800,
		linkElement           :   '.animsition-link',
		loading               :    true,
		loadingParentElement  :   'body',
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
		                          '-webkit-animation-duration',
		                          '-o-animation-duration'
		                        ],
		overlay               :   false,
		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	});
	/***************	scroll effect show div		***************/
	eee = $("body.animsition #eee").fadeTo(0, 0);
	$(window).scroll(function(d,h) {
	    eee.each(function(i) {
	        a = $(this).offset().top +200;
	        b = $(window).scrollTop() + $(window).height() + 100;
	        if (a < b) $(this).fadeTo(500,1);
	    });
	});
    /***************	start quiz button   	***************/
    $(".result_platform").fadeOut(500);
    $(".result_quiz").fadeOut(500);
    $(".time_up").fadeOut(500);
    $("#quiz").fadeOut(500);
    $("#start_btn").click(function(){
    	$("#quiz").fadeIn(500);
    	$(".start_quiz").fadeOut(500);
    	/***************	start time up  	***************/
        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        var timer = setInterval(setTime, 1000);
        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }
        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
        /***************	validation quiz form	***************/
	    var form = $("#quiz");
	    $("#quiz").validate({
	        errorPlacement: function errorPlacement(error, element) { element.before(error); },
	        rules: {
	            qst1: {
	                required: true
	            },
	            qst2: {
	                required: true
	            },
	            qst3: {
	                required: true
	            },
	            qst4: {
	                required: true
	            },
	            qst5: {
	                required: true
	            },
	            qst6: {
	                required: true
	            },
	            qst7: {
	                required: true
	            },
	            qst8: {
	                required: true
	            },
	            qst9: {
	                required: true
	            },
	            qst10: {
	                required: true
	            }
	        }
	    });
	    $("#quiz").steps({
	        headerTag: "h3",
	        bodyTag: "section",
	        transitionEffect: "slideLeft",
	        onStepChanging: function (event, currentIndex, newIndex)
	        {
	            form.validate().settings.ignore = ":disabled,:hidden";
	            return form.valid();
	        },
	        onFinishing: function (event, currentIndex)
	        {
	            form.validate().settings.ignore = ":disabled";
	            return form.valid();
	        },
	        onFinished: function (event, currentIndex)
	        {
	   			$(".time_up").fadeOut(500);
				clearInterval(timer);
				$(".result_quiz").fadeIn(500).addClass("start_quiz_w");
				$("#result_btn").click(function(){
    				$(".result_quiz").fadeOut(500);
    				$(".result_platform").fadeIn(500);
					var mns;
					var scds;
					if (totalSeconds > 59) {
						mns = parseInt(totalSeconds / 60);
						scds = totalSeconds - mns*60;
						if (mns == 1 || mns >= 11) {
							if (scds == 1 || scds >= 11) {
								$( ".result_platform span.span4" ).text(mns);
								$( ".result_platform span.span3" ).text(" دقيقة و ");
								$( ".result_platform span.span2" ).text(scds);
								$( ".result_platform span.span1" ).text(" ثانية ");
							}else if (scds > 1 && scds <= 10) {
								$( ".result_platform span.span4" ).text(mns);
								$( ".result_platform span.span3" ).text(" دقيقة و ");
								$( ".result_platform span.span2" ).text(scds);
								$( ".result_platform span.span1" ).text(" ثواني ");
							};
						}else if (mns > 1 && mns <= 10) {
							if (scds == 1 || scds >= 11) {
								$( ".result_platform span.span4" ).text(mns);
								$( ".result_platform span.span3" ).text(" دقائق و ");
								$( ".result_platform span.span2" ).text(scds);
								$( ".result_platform span.span1" ).text(" ثانية ");
							}else if (scds > 1 && scds <= 10) {
								$( ".result_platform span.span4" ).text(mns);
								$( ".result_platform span.span3" ).text(" دقائق و ");
								$( ".result_platform span.span2" ).text(scds);
								$( ".result_platform span.span1" ).text(" ثواني ");
							};
						};
					}else{
						if (totalSeconds == 1 || totalSeconds >= 11) {
							$( ".result_platform span.span2" ).text(totalSeconds);
							$( ".result_platform span.span1" ).text(" ثانية ");
						}else if (totalSeconds > 1 && totalSeconds <= 10) {
							$( ".result_platform span.span2" ).text(totalSeconds);
							$( ".result_platform span.span1" ).text(" ثواني ");
						};
						
					};
					var true_rep = 0;
		        	for (var i = 1; i < 11; i++) {
		        		true_rep += parseInt($("input[name=qst"+i+"]:checked", '#quiz').val());
		        	};
					var false_rep = 10 - true_rep;
					var level = ['ضعيف جدا','ضعيف جدا','ضعيف جدا','ضعيف جدا','ضعيف','متوسط','لابأس به','لابأس به','جيد','جيد جدا','ممتاز'];
					$( ".result_platform .row .col span.false_rep" ).text(false_rep+" / 10");
					$( ".result_platform .row .col span.true_rep" ).text(true_rep+" / 10");
					$( ".result_platform .row .col span.result_fin" ).text(level[true_rep]);
		    	});
				$("#again_btn").click(function(){
					location.reload(true);
				})
	        }
	    });
    });
	





});