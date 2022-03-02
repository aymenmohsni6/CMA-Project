//  preload
$(window).load(function() {

    setTimeout(function() {
        var bar1 = new ldBar("#myItem1");
        var bar2 = document.getElementById("myItem1").ldBar;
        bar1.set(100);
    }, 500);

    setTimeout(function() {
        $(".loading-part").css("display","none");
    }, 2500);
});



// menu dropDown
$( ".dropdown" ).hover(function() {
    $( this ).toggleClass( "open");
    $(".dropdown-menu").animate({top: "22px"}, function(){$(".dropdown-menu").animate({top: "15px"});});
    });
// menu responsive
$(function() {
    var $menu = $('nav#menu'),
        $html = $('html, body');
        $menu.mmenu({
            dragOpen: true
        });

        $menu.find( 'li > a' ).on(
            'click',
            function( e )
            {
                var href = $(this).attr( 'href' );
                if ( href.slice( 0, 1 ) == '#' )
                {
                    $menu.one(
                        'closed.mm',
                        function()
                        {
                            setTimeout(
                                function()
                                {
                                        $html.animate({
                                        scrollTop: $( href ).offset().top
                                    }); 
                            }, 10
                        );  
                    }
                );
            }
        }
    );
});
// smooth scroll
$(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
// animation button contact
document.getElementById("button_contact").addEventListener("mouseover",f1);
function f1(){
    document.getElementById("button_contact").style.animation="btn 1s";
    document.getElementById("button_contact").style.animationFillMode="forwards";
    document.getElementById("i-button").style.animation="btn-i 1s";
    document.getElementById("i-button").style.animationFillMode="forwards";
}
document.getElementById("button_contact").addEventListener("mouseout",f2);
function f2(){
    document.getElementById("button_contact").style.animation="btn-back 1s";
    document.getElementById("button_contact").style.animationFillMode="forwards";
    document.getElementById("i-button").style.animation="btn-i-back 1s";
    document.getElementById("i-button").style.animationFillMode="forwards";
}






/////   
//// Tunisia map by rebai adnen 
///  flow me on twitter https://twitter.com/adnen_rebai
//



$(document).ready(function(){
    var town="";
    $('.town').hide();
    $('.region').mouseover(function(){
         var town =$(this).attr('data-name');
      $('.info').text(town);
      if (town == "Bizert"){
        $('#1').css("opacity","1");
        $('#2').css("opacity","0.2");
        $('#3').css("opacity","0.2");
        $('#4').css("opacity","1");
        $('#5').css("opacity","1");
        $('#6').css("opacity","1");
        $('#7').css("opacity","0.2");
        $('#8').css("opacity","1");
        $('#9').css("opacity","0.2");
        $('#10').css("opacity","0.2");
        $('#11').css("opacity","0.2");
        $('#12').css("opacity","0.2");
      }
        // $('.1').text("chetoui");
        // $('.2').text("meski");
        // $('.3').text("besbesi");
        // $('.4').text("chemali du nord");
        // $('.5').text("R'Khami");
      // }
      else if (town == "Ariana"){
        $('#1').css("opacity","0.2");
        $('#2').css("opacity","0.2");
        $('#3').css("opacity","0.2");
        $('#4').css("opacity","1");
        $('#5').css("opacity","0.2");
        $('#6').css("opacity","0.2");
        $('#7').css("opacity","0.2");
        $('#8').css("opacity","1");
        $('#9').css("opacity","1");
        $('#10').css("opacity","0.2");
        $('#11').css("opacity","1");
        $('#12').css("opacity","0.2");
        // $('.1').text("Barouni du nord");
        // $('.2').text("Neb J'mel");
        // $('.3').text("Marsaline");
        // $('.4').text("Chemali du nord");
        // $('.5').text("");
      }
      else if (town == "Beja"){
        $('#1').css("opacity","0.2");
        $('#2').css("opacity","1");
        $('#3').css("opacity","0.2");
        $('#4').css("opacity","0.2");
        $('#5').css("opacity","1");
        $('#6').css("opacity","0.2");
        $('#7').css("opacity","1");
        $('#8').css("opacity","1");
        $('#9').css("opacity","0.2");
        $('#10').css("opacity","0.2");
        $('#11').css("opacity","1");
        $('#12').css("opacity","0.2");
      //   $('.1').text("Gerboui du Nord");
      //   $('.2').text("");
      //   $('.3').text("");
      //   $('.4').text("");
      //   $('.5').text("");
      }
      // else if (town == "Jandouba"){
      //   $('.1').text("Gerboui du Nord");
      //   $('.2').text("");
      //   $('.3').text("");
      //   $('.4').text("");
      //   $('.5').text("");
      // }
      // else if (town == "Kairouan"){
      //   $('.1').text("Oueslati");
      //   $('.2').text("");
      //   $('.3').text("");
      //   $('.4').text("");
      //   $('.5').text("");
      // }
      // else if (town == "Kasserine"){
      //   $('.1').text("Mengar Erragma");
      //   $('.2').text("Bidh Hmam");
      //   $('.3').text("Souabaa aljia");
      //   $('.4').text("");
      //   $('.5').text("");
      // }
      // else if (town == "Gafsa"){
      //   $('.1').text("Chemchali Gafsa");
      //   $('.2').text("Fougi Asli");
      //   $('.3').text("Baldi Gtar");
      //   $('.4').text("Sahli Gafsa");
      //   $('.5').text("Tounsi Gafsa");
      // }
      // else if (town == "Mednin"){
      //   $('.1').text("Chemlali Zarzis");
      //   $('.2').text("Chemlali Chouamekh");
      //   $('.3').text("Dhokar Ben Gardène");
      //   $('.4').text("Zalmati Zarzis");
      //   $('.5').text("Zarrazi Zarzis");
      // }
      // else if (town == "Tataouin"){
      //   $('.1').text("Chemlali tataouin");
      //   $('.2').text("fakhari douiat");
      //   $('.3').text("Chemlali Ontha");
      //   $('.4').text("Toffahi");
      //   $('.5').text("Zarrazi injassi");
      // }
      // else if (town == "Djerba"){
      //   $('.1').text("Indouri jerba");
      //   $('.2').text("");
      //   $('.3').text("");
      //   $('.4').text("");
      //   $('.5').text("");
      // }
      // else if (town == "Sfax"){
      //   $('.1').text("Injassi Hchichina");
      //   $('.2').text("Chemlali Ghraiba");
      //   $('.3').text("Kbiret Louzir");
      //   $('.4').text("Chemlali bent Louzir");
      //   $('.5').text("Zarbout louzir");
      // }
      // else if (town == "Nabeul"){
      //   $('.1').text("Sayali");
      //   $('.2').text("Chaibi Antha");
      //   $('.3').text("Zalmati du Nord");
      //   $('.4').text("Zarrazi du Nord");
      //   $('.5').text("");
      // }
      // else if (town == "Zaghouan"){
      //   $('.1').text("Beldi Zaghouan");
      //   $('.2').text("Tounsi du Nord");
      //   $('.3').text("");
      //   $('.4').text("");
      //   $('.5').text("");
      // }
      // else {
      //   $('.1').text("");
      //   $('.2').text("");
      //   $('.3').text("");
      //   $('.4').text("");
      //   $('.5').text("");
      // }
      $('.town_name h5').text(town);
      $('.town').show(300);
    }); 
  
    $('.region').mouseout(function(){
      $('.town').hide();
    });
     $(document).mousemove(function (event){
       var win_width = $(document).width();
       if(event.pageX<win_width/2){
         $('.town').removeClass('right');
          $('.town').addClass('left');
       $('.town').css({top:event.pageY-65,left:event.pageX-202});
         
       }else{
         $('.town').addClass('right');
         $('.town').removeClass('left');
       $('.town').css({top:event.pageY-65,left:event.pageX+100});
       }
     }); 
  })