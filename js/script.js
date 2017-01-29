// JavaScript Document

function  changeCss() {
            var w =  window.innerWidth;
            
			//alert (w);
            if (w >  '1200')
                {
                         document.getElementById("stylesheet").href="css/style.css";
                }
            else
                  {
                         if (w < '1199'&& w > '992')
                                {
                                         //alert('992');
										 document.getElementById("stylesheet").href="css/style992.css";
                                }
                            else
                                  {
                                           if (w < '991'&& w > '767')
                                                 {
                                                         document.getElementById("stylesheet").href="css/style767.css";
                                                 }
                                           else
                                                  {
                                                         if (w < '767')
                                                              {
                                                                    //alert('320');
																	document.getElementById("stylesheet").href="css/style320.css";
                                                             }
                                                 };
                                 };
                };
           }; 

$(document).ready(function(e) {
	$(window).load(function(e) {
        changeCss();
    });
    $(window).resize(function(e) {
        changeCss();
    });


$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.left_fix_btn').css('position', 'fixed').css('top', '0');
    } 
    else {
        $('.left_fix_btn').css('position', 'absolute').css('top', '700px');
    }
    });



// Mask for input Phone
$('input[name="Телефон"]').mask('+7 (999) 999-99-99');


// Popup window for success step 
$(".popup_success, #close_shit").click(function(){
        $(".popup_success").hide();
    }); 


$("#close_que").click(function(){
        $(".question").hide();
    }); 



$("#tel_right").on("click", function(e) {
        e.preventDefault();
        // $().show();
         $(".mf2").trigger("click");
    });

$("#que_right").on("click", function(e) {
        e.preventDefault();
        $(".question").show();
    });

});