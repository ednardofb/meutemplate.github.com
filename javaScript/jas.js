$(document).ready(function(){
	/* banner ****************************************************/
	$('#banner ul').cycle({
		fx: 'all',
		speed: 2000,
		timeout: 5000,
		next: '#prox',
		prev:'#ant',
	});
	/* Ocultar e apresentar menu do Header ***********************/
	$('.hidden').hide();
	$('.submenu').click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});
	/* Ocultar e apresentar menu da IMG 1 ***********************/
	/*Mostrar */
	$('#mostrar').click(function(event){
		event.preventDefault();
		$('#capaefeito').show(1000);
		$('#capaefeito').css({
			'background-color': 'rgba(138, 43, 226, 0.8)',
		});
	});
	/*Ocultar */
	$('#ocultar').click(function(event){
		event.preventDefault();
		$('#capaefeito').hide("show");
		$('#capaefeito').css({
			'background-color': 'rgba(138, 43, 226, 0.8)',
		});
	});
});
