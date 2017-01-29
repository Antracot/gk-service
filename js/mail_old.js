// JavaScript Document

$(document).ready(function()
{
	$('.sndd').click(function()
	{
		var $parent=$(this).closest('.rsfb');
		var zagl=$parent.text();
		var name=$parent.find('.name1').val();
		var emal=$parent.find('.mail1').val();
		var tel=$parent.find('.tel1').val();
		var text=$parent.find('.text1').val();
		var question=$parent.find('.quest1').val();
		var doc=$parent.find('.doc1').val();
		//alert(name);
		$(this).load('send.php',{zagl: zagl, name: name, mail: emal, tel: tel, text: text, question: question, doc: doc, files: files});
	});
})