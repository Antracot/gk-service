// JavaScript Document
function resize(objname)
{
	var real_width=$(objname).width();
	//alert('начальная ширина - '+real_width);
	var max_width=$(window).width();
	var mod_width=$('.cont').width()+140;
	if (real_width<mod_width){mod_width=real_width}
	else
	{
		if (mod_width>max_width){mod_width=max_width-140;}	
	}
	var mod_top=($(window).height()/2)-($(objname).height()/2);
	var mod_left=(max_width-mod_width)/2;
	//alert('ширина блока - '+mod_width+' px; отступ слева - '+mod_left+' px;');
	$(objname).css('top',mod_top+'px');
	$(objname).css('left',mod_left+'px');
	$(objname).css('width',mod_width+'px');
}

$(document).ready(function()
{
	
//	
	var idname;
	$('.closemod').click(function()
	{
		$('.modal').css('display','none');
		$('.fade-bkg').css('display','none');
		return false;
	});
	
	$('.mod11').click(function()
	{
		idname=$(this).attr('rel');
		resize(idname);
		$(idname).css('display','block');
		$('.fade-bkg').css('display','block');
		return false;
	});
	
//	
	$(window).resize(function()
	{
		resize(idname);
	});		
});