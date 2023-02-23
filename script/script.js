$(document).ready(function() {

	const $mainMenu = $(".main-menu>li"),
				$subMenu = $mainMenu.find(".subMenu"),
			  $header = $('header'),
				$headerHeight = $header.outerHeight(),
				$basket = $(".basket-starter") 
	
		
	$mainMenu.mouseenter(function(){
		let   $subHeight = $(this).find("ul").outerHeight()
		$(this).find($subMenu).stop()
		.css({visibility:"visible",opacity:1})
		$header.stop().animate({height:$headerHeight+$subHeight +"px"},300)
	})
	.mouseleave(function(){
		$(this).find($subMenu).stop()
		.css({visibility:"hidden",opacity:0})
		$header.stop().animate({height:$headerHeight},55)
	})

	


	$basket.mouseenter(function(){
		$header.stop().animate({height:$headerHeight},55)
	})
  
	/* A.height()      알맹이
	A.innerHeight() 패딩까지
	A.outerHeight() 보더까지
	A.outerHeight(true) 마진까지 */

	//장바구니
	const basketStarterEl =$("header .basket-starter")
	const basketEl = basketStarterEl.find(".basket")
	
	basketStarterEl.click(function(event){
		event.stopPropagation()
		if(basketEl.hasClass("show")){			
			basketEl.removeClass("show")
		}else{
			basketEl.addClass("show")
		}
	}) //장바구니 클릭시 보여지고 보여짐
	basketEl.click(function(event){
		event.stopPropagation() //상위요소에 전달되지 않도록 취소하는 함수
	})
	$(window).click(function(){
		basketEl.removeClass("show")
	})
	
	//검색
	const headerEl =$("header")
	const headerMenuEls = headerEl.find("ul.main-menu > li")
	const searchWrapEl = headerEl.find(".search-wrap")
	const searchStarterEl = headerEl.find(".search-starter")
	const searchCloserEl = searchWrapEl.find(".search-closer")
	const searchShadowEl = searchWrapEl.find(".shadow")
	const searchInputEl = searchWrapEl.find("input")
	const searchDelayEls = searchWrapEl.find("li")

	searchStarterEl.click(showSearch)
	searchCloserEl.click(hideSearch)
	searchShadowEl.click(hideSearch)

	
	function showSearch(){
		headerEl.addClass('searching')
		playScroll()
		
			// headerMenuEls.each().fadeOut().delay(i*.4 / headerMenuEls.length)
			// headerMenuEls.each().fadeOut().delay(i*.4 / headerMenuEls.length)
		
		// searchDelayEls.each..

		setTimeout(function(){
			searchInputEl.focus()
		},600)
	}
	
	function hideSearch(){
		headerEl.removeClass('searching')
		stopScroll()
		
		if( i < headerMenuEls.length){
			headerMenuEls.each(function(){
				$(this).fadeIn().Delay(i*.9 / headerMenuEls.length)
				i++
			})		
		}
		// searchDelayEls.each..

		searchInputEl.val("") // input값 초기화
	}

	function playScroll(){
		$("html").addClass('fixed')
	}
	function stopScroll(){
		$("html").removeClass('fixed')
	}
	
	// 헤더 메뉴 토글
	const menuStarterEl = headerEl.find(".menu-starter")
	menuStarterEl.click(function(){
		if(headerEl.hasClass("menuing")){
			headerEl.removeClass("menuing")
			stopScroll()
		}
		else{
			headerEl.addClass("menuing")
			playScroll()
		}
	})


	//hero 슬라이드
	const container = $(".slideshow"),
				slideGroup = container.find(".hero-slider"),
				slides = slideGroup.find("a"),
				nav = container.find(".slideshow_nav"),				
				slideCount = slides.length,
				duration = 500,
				easing = "easeInOutExpo",
				interval = 3500
	let   indicatorHtml ="",
				currentIndex = 0,
				indicator = container.find(".indicator"),
				timer;
				
	
	/* //슬라이드를 가로로 배열
	//slides 마다 할일 left 0%, 100%, 200%, 300%
	// console.log(slides)

	slides.each(function(i){
		let newLeft = i* 100 +"%"
		$(this).css({left:newLeft})
	 
		//<a href="javascript:void(0)">1</a>
		// indicatorHtml += 00 //00값을 계속 저장
		indicatorHtml += '<a href="javascript:void(0)"></a>'
		// console.log(indicatorHtml)
	}) //slides.each */

	/* // A.text(B) a요소에 b의 내용을 글씨 형태로 추가(내용이 없으면 추가, 있으면 교체됨)
	// A.html(B) a요소에 b의 내용을 html 형태로 추가
	// indicatior.text(indicatorHtml)
	indicator.html(indicatorHtml)


	// 슬라이드 이동 함수
	function goToSlide(index){
		//index 0 left??,i 1 left:-100% i 2 left:-200%
		slideGroup.animate({
			left:-1920 * index + "px"
		},duration)
		currentIndex = index;
		// console.log(currentIndex)

		updateNav(); //처음인지 마지막인지 검사,active추가
	} */
	
	/* function updateNav(){
		let navPrev = nav.find('.prev'),
				navNext = nav.find('.next')
		// 처음  currentIndex 0 ,이전버튼 안보이게
		if(currentIndex == 0){
			navPrev.addClass("disabled")
		}else{
			navPrev.removeClass("disabled")
		}
		if(currentIndex == slideCount-1){
			navNext.addClass("disabled")
		}else{
			navNext.removeClass("disabled")
		}
		// 마지막  currentIndex length , 다음버튼 안보이게
		
		indicator.find("a").removeClass("active")
		//요소를 순번에 맞게 선택 .eq(숫자)
		indicator.find("a").eq(currentIndex).addClass("active")
		//->모든 요소에서 active빼고, 원하는 요소에만 active추가 

		indicator.find("a").eq(currentIndex).addClass("active").siblings().removeClass("active")
		// active보이고 안보이게
	}//updateNav()

	updateNav()//열자마자 실행해서 처음부터 이전버튼이 보이지않도록 하기 위함
 */


	/* //자동 슬라이드 함수
	function startTimer(){
		//일정시간마다 할일
		// setInterval(할일,시간), 멈추게 clearInterval(이름)
		//할일(함수) function(){실제로 할일}
		timer = setInterval(function(){
			//nextIndex c0 n1,c1 n2... c3 n0
			let nextIndex = (currentIndex + 1) % slideCount
			goToSlide(nextIndex)
			// 실제로 할일
		},interval)
	}
	startTimer() 
	// 들어오자마자 자동재생 

	function stopTimer(){
		clearInterval(timer)
	}

	container.mouseenter(function(){
		stopTimer()
	})
	.mouseleave(function(){
		startTimer()
	})
 */


	/* //인디케이터로 이동하기
	indicator.find("a").click(function(e){
		e.preventDefault(); //고유의 링크를 막음.
		let idx = $(this).index()
		// console.log(idx)
		goToSlide(idx)
	}) */

	/* //좌우버튼으로 이동하기 (나누어서)
	nav.find(".prev").click(function(e){
		e.preventDefault()
		goToSlide(currentIndex-1)
	})
	nav.find(".next").click(function(e){
		e.preventDefault()
		goToSlide(currentIndex+1)
	}) */

/* 	//좌우버튼으로 이동하기 (동시에)
	nav.find("a").click(function(e){
		e.preventDefault()
		if($(this).hasClass("prev")){
			goToSlide(currentIndex - 1)
		}else{
			goToSlide(currentIndex + 1)
		}
	});	 */

	
	// $(".tcl-call ul").bxSlider({
		
  // });	
	$(".hero-slider").bxSlider({
    auto:true,
    pause:2000,
		controls:true,
    pager:true,
		mode:'fade'
  }); 


	$('.tcl-call ul').bxSlider({
    maxSlides:3,
    minSlides:1,
    moveSlides:1,
    slideWidth:500,
    slideMargin:25,
    auto:true,
    pause:3000,
    pager:false,
		controls:false,
		autoHover:true,
  }); 


	


	//Hero main menu에 추가설정
	const $window = $(window),
				$heroMenu = $(".heroMenu"),
				$heroClone = $heroMenu.clone(),
				$heroCloneContainer = $("<div class='heroMenu-clone'></div>"),
				$threshold  = $heroMenu.offset().top + $heroMenu.outerHeight();
	
	// A.append(B) - A뒤에 B추가
	$heroCloneContainer.append($heroClone)

	//A.appendTo(B) -B뒤에 A추가
	$heroCloneContainer.prependTo("body .hero")

	$window.scroll(function(){
		if($(this).scrollTop() >= $threshold){
			$heroCloneContainer.addClass("visible")
		}else{
			$heroCloneContainer.removeClass("visible")
		}
	})


	$('.flex-container').waitForImages(function() {
		$('.spinner').fadeOut();
	}, $.noop, true);
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});


	//footer Menu
	const fWrap = $("#footerWrap"),
				fButton = $(".f-Button")
	 			

	fButton.click(function(){
		fWrap.toggleClass("open")
		if(fWrap.hasClass("open")){
			fButton.find("i").attr("class","xi-angle-down")
		}else{
			fButton.find("i").attr("class","xi-angle-up")
		}		
	})	


});

	// video제어
	function vclick(seq){
	let videoz = $(".video"+seq)
	let	listz = $(".video-dest"+seq)

	videoz.css({zIndex:"5"}).siblings().css({zIndex:"1"})
	listz.css({opacity:"1"}).siblings().css({opacity:".5"})
	
	listz.find(".line").css({borderTop:"5px solid",boderBottom:"none"})
	listz.siblings().find(".line").css({borderTop:"1px solid",boderBottom:"4px solid transparent"})
	}

	