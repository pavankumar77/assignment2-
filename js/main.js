
$( document ).ready(function() {

    //Bootstrap Carousel
$('#carousel-main').carousel();

 $("#inputName").blur(function(){
var name = $('#inputName'):


var  name1 = name.val();

if (name1 == ''|| name1.length > 30){

      $('.name-required').css('visibility','visible'); 
    }
   
});




$('#inputEmail').blur(function{

var emailId=$('#inputEmail')

function validateEmail0() {

    var x = emailId.val(),

    	 atpos = x.indexOf('@'),
    	 dotpos = x.lastIndexOf('.');
 
    if (x =='' || atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        
 
     } 
  }

});


function validateEmail1() {
						var email = document.getElementById("inputEmail").value,
							atpos = email.indexOf("@"),
							 dotpos = email.lastIndexOf(".");
						if (atpos < 1 || dotpos < atpos + 2
								|| dotpos + 2 >= email.length) {
							$('validButton').remove();

							$("#txtEmail")
									.append(
											"<img class='validButton' src='./img/redTick.png' alt='Valid' />");
						} else {
							$('validButton').remove();
							$("#txtEmail")
									.append(
											"<img class='validButton' src='./img/greenTick.png' alt='Valid' />");
						}
					}





});