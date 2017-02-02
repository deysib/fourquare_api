/*global$*/
$(document).ready(function(){
    $("#Search").click(function() {
        var type=  $("input").val();
        var near= $("input").val();
        var url= "https://api.foursquare.com/v2/venues/search?client_id=GJP350DH3G2PX544RXXXML0B22PC32D4XYDTN5OGIH2X0HTE&client_secret=H0MTUBOXYGXFS1OJHRRAT23MCDL5KZKGJGHXK15X1BZZR4UC&v=20130815&";
        var url1="&ll=";
        var url2="&query=";
   var url11 = url +url1 +near +url2+ type;;

        $.getJSON(url11, function(response){
             $("#Results").append("Here are your results"+"<br>" + response.response.venues[0].name + "<br>"); 
             $("#Results").append("Here are your results"+"<br>" + response.response.venues[0].phone + "<br>"); 
             $("#Results").append("Here are your results"+"<br>" + response.response.venues[0].location.address + "<br>"); 
      
            
        
        });
    });
});
