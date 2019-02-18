'use strict';

$(document).ready(function(){
	
	$('.tab').click(function(){
		var tab_id = $(this).attr('data-tab');//в кликнутом табе(объекте) находим номер по атрибуту

		$('.tab').removeClass('active');//всем табам удаляем класс актив
		$('.tabContent').addClass('hide');//скрываем весь контент добавляя класс hide
		$(this).addClass('active');//кликнутой табке добавили актив
		$("#"+tab_id).removeClass('hide');//вкладку для кликнутой табки открываем на просмотр удалив hide
	})
});