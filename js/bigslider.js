// JavaScript Document

$(document).ready(function()
{
	$('.ls_slide ul li a').click(function()
	{
		var src=$(this).find('img').attr('src');
		$('.bigfoto').attr('src',src);
		$('.ls_slide ul li a').removeClass('act_foto');
		$(this).addClass('act_foto');
		//alert(src);
		return false;
	})
	
	$('.ringring li a').click(function()
	{
		var slideid=$(this).attr('rel');
		var num=$(this).closest('li').index();
		//alert(num);
		$('.slide').css('display','none');
		$(slideid).css('display','block');
		$('.ringring li a').removeClass('active');
		$(slideid+' .ringring li').eq(num).find('a').addClass('active');
		return false;
	});
})