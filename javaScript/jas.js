$(document).ready(function(){
	/* banner *******************************************/
	$('#banner ul').cycle({
		fx: 'all',
		speed: 2000,
		timeout: 5000,
		next: '#prox',
		prev:'#ant',
	});
	/* Ocultar e apresentar menu ***********************/
	$('.hidden').hide();
	$('.submenu').click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});
});
