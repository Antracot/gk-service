// JavaScript Document

$(document).ready(function()
{
	$('.bkg1_and_new_har').css('overflow-x','hidden');
	
	$('.next').click(function()
	{
		var wi=$('.onesrc').width()+15;
		var tekmarg=parseInt($('.bigcont').css('margin-left'));
		tekmarg=tekmarg-wi;
	//	alert(tekmarg)
		$('.bigcont').css('margin-left',tekmarg+'px');
		return false;
	});
	
	$('.pok').click(function()
	{
		$('.hid').css('display','block');
		return false;
	});
	
	// $('.opnf').change(function()
	// {
	// 	var wi=($('.onesrc').width()+15)*7;
	// 	var tekmarg=parseInt($('.bigcont').css('margin-left'));
	// 	tekmarg=tekmarg-wi;
	// //	alert(tekmarg)
	// 	$('.bigcont').css('margin-left',tekmarg+'px');
	// 	return false;
	// });


var files;
 
$('input[type=file]').change(function(){
    files = this.files;
});

 
$('.submit.button').click(function( event ){
    event.stopPropagation(); 
    event.preventDefault();  
 
    var data = new FormData();
    $.each( files, function( key, value ){
        data.append( key, value );
    });
 
    $.ajax({
        url: './submit.php?uploadfiles',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, 
        contentType: false, 
        success: function( respond, textStatus, jqXHR ){
 			// alert("все ОК");
 
            if( typeof respond.error === 'undefined' ){
 
                var files_path = respond.files;
                var masyv = files_path[0].split("/");
                var lenght_mas = masyv.length;
                var path_string =  "http://" + window.location.hostname + '/user_projects/' + masyv[lenght_mas-1];
                // console.log(path_string);
                // console.log(path_string);
				console.log(masyv);





                var input_path = document.getElementById("path_to_file");
                $("#path_to_file").val(path_string);
                var html = '<a></a>';
                $.each( files_path, function( key, val ){ html += val +'<br>'; } )
                $('.ajax-respond').html( html );

           // FUNC Jimp to last inputs in form    
        	var wi=($('.onesrc').width()+15)*7;
			var tekmarg=parseInt($('.bigcont').css('margin-left'));
			tekmarg=tekmarg-wi;
				// console.log(files_path)
			$('.bigcont').css('margin-left',tekmarg+'px');
			return false;
            }
            else{
                console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error );


            }
        },
        error: function( jqXHR, textStatus, errorThrown ){
            console.log('ОШИБКИ AJAX запроса: ' + textStatus );
        }
    });
 
});



	
});