// JavaScript Document

$(document).ready(function()
{
	$('.onequest a').click(function()
	{
		var sss='#'+$(this).attr('rel');
		if ($(this).hasClass('op'))
			{
				$(this).removeClass('op'); 
				$(this).addClass('cl');
				$(sss).removeClass('openotv');
				return false;				
			}
			
		if ($(this).hasClass('cl'))
			{
				$(this).removeClass('cl'); 
				$(this).addClass('op');
				$(sss).addClass('openotv');
				return false;				
			}
	});
});

