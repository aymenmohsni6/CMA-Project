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




// produc and stat 
// window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Répartition dela production mondiale d'huile d'olive (2011/12-2015-16)"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 68, label: "UE" },
                { y: 8, label: "tunisie" },
                { y: 4, label: "maroc" },
                { y: 6, label: "turquie" },
                { y: 6, label: "syrie" },
                { y: 1, label: "jordanie" },
                { y: 1, label: "argentine" },
                { y: 2, label: "algerie" },
                { y: 1, label: "autre" }
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        title: {
            text: "Répartition regionnal de la capacite de trituration journaliere"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 18, label: "Le centre" },
                { y: 25, label: "Sfax" },
                { y: 23, label: "Le Nord" },
                { y: 8, label: "Le sud" },
                { y: 26, label: "Le sahel" }
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light2",
        axisY: {
            includeZero: false,
            suffix: " mille ha",
        },
        data: [{
            type: "line",
            dataPoints: [
                { x: new Date(2004, 0), y: 58.4 },
                { x: new Date(2005, 0), y: 80 },
                { x: new Date(2006, 0), y: 89.3 },
                { x: new Date(2007, 0), y: 105 },
                { x: new Date(2008, 0), y: 115 },
                { x: new Date(2009, 0), y: 120 },
                { x: new Date(2010, 0), y: 119.4 },
                { x: new Date(2011, 0), y: 111.7 },
                { x: new Date(2012, 0), y: 100.5 },
                { x: new Date(2013, 0), y: 124.1 },
                { x: new Date(2014, 0), y: 128 },
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        exportEnabled: true,

        axisX: {

            valueFormatString: "YYYY"
        },
        axisY: {
            includeZero: false,
            suffix: " mille tonne"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "rangeColumn",
            name: "Bio",
            showInLegend: true,
            xValueFormatString: "YYYY",
            dataPoints: [
                { x: new Date(2003, 00), y: [0, 0.67] },
                { x: new Date(2004, 00), y: [0, 3.7] },
                { x: new Date(2005, 00), y: [0, 12] },
                { x: new Date(2006, 00), y: [0, 10] },
                { x: new Date(2007, 00), y: [0, 20] },
                { x: new Date(2008, 00), y: [0, 25] },
                { x: new Date(2009, 00), y: [0, 20] },
                { x: new Date(2010, 00), y: [0, 16] },
                { x: new Date(2011, 00), y: [0, 24] },
                { x: new Date(2012, 00), y: [0, 33] },
                { x: new Date(2013, 00), y: [0, 18.5] },
                { x: new Date(2014, 00), y: [0, 60] }
            ]
        },
        {
            type: "rangeColumn",
            name: "conventionnel",
            showInLegend: true,
            xValueFormatString: "YYYY",
            dataPoints: [
                { x: new Date(2003, 00), y: [0, 280] },
                { x: new Date(2004, 00), y: [0, 130] },
                { x: new Date(2005, 00), y: [0, 220] },
                { x: new Date(2006, 00), y: [0, 180] },
                { x: new Date(2007, 00), y: [0, 200] },
                { x: new Date(2008, 00), y: [0, 160] },
                { x: new Date(2009, 00), y: [0, 150] },
                { x: new Date(2010, 00), y: [0, 120] },
                { x: new Date(2011, 00), y: [0, 180] },
                { x: new Date(2012, 00), y: [0, 220] },
                { x: new Date(2013, 00), y: [0, 70] },
                { x: new Date(2014, 00), y: [0, 280] }
            ]
        }]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    var chart = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        theme: "light2",
        axisY: {
            includeZero: false,
            suffix: " Mille Tonne",
        },
        data: [{
            type: "line",
            dataPoints: [
                { x: new Date(2004, 00), y: 2100 },
                { x: new Date(2005, 00), y: 1200 },
                { x: new Date(2006, 00), y: 1000 },
                { x: new Date(2007, 00), y: 6061 },
                { x: new Date(2008, 00), y: 9656 },
                { x: new Date(2009, 00), y: 8000 },
                { x: new Date(2010, 00), y: 9935 },
                { x: new Date(2011, 00), y: 11889 },
                { x: new Date(2012, 00), y: 13545 },
                { x: new Date(2013, 00), y: 13164 },
                { x: new Date(2014, 00), y: 10694 },
                { x: new Date(2014, 00), y: 13500 }
            ]
        }]
    });
    chart.render();

// }

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



