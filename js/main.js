$(document).ready(function(){


	$('.hotel-item').show();
	$('.ticket-item').hide();
	$('.price-item').hide();


	$('#hotel span').addClass('line');

	$('#hotel').click(function(){


		$('.hotel-item').show();
		$('.ticket-item').hide();
		$('.price-item').hide();


		$('#hotel span').addClass('line');
		$('#ticket span').removeClass('line');
		$('#price span').removeClass('line');
	})

	$('#ticket').click(function(){


		$('.hotel-item').hide();
		$('.ticket-item').show();
		$('.price-item').hide();


		$('#hotel span').removeClass('line');
		$('#ticket span').addClass('line');
		$('#price span').removeClass('line');
	})


	$("#price").click(function(){


		$('.hotel-item').hide();
		$('.ticket-item').hide();
		$('.price-item').show();


		$('#hotel span').removeClass('line');
		$('#ticket span').removeClass('line');
		$('#price span').addClass('line');
	})



})



//   Owl Carousel Code start

$('#event .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#users .owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})