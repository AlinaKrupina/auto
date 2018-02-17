$(document).ready(function() {

    $(".js-filter-tab").click(function() {
        $(this).parent().toggleClass('active');
    });

    $(".js-forgot-button").click(function(){
        $('.forgot.step-first').hide();
        $('.forgot.step-second').show();
    });

    $(".exchange").click(function() {
        $('body, .wrapper').toggleClass('overflow');
        $('.user-panel .result').toggleClass('show');
    });

    $('.document-tabs .close').click(function(){
        $('#instructions input:checked').prop('checked', false);
    });

    $(".main-slider.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    var sync1 = $("#slider1");
    var sync2 = $("#slider2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({items: 1, loop: true, responsiveRefreshRate: 200}).on('changed.owl.carousel', syncPosition);

    sync2.on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
    }).owlCarousel({
        items: slidesPerPage,
        dots: true,
        nav: true,
        margin: 15,
        smartSpeed: 200,
        slideSpeed: 500,
        navText: ["<img src='/assets/img/prev.svg'>", "<img src='/assets/img/next.svg'>"],
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    $('.js-number').inputmask({mask: "+38 (999) 999-99-99"});
});
function initMap() {
    var uluru = {
        lat: 48.46770022,
        lng: 35.02321001
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            }, {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            }, {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            }, {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    var icon = {
        url: "/assets/img/placeholder_pin.svg",
        scaledSize: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    var marker = new google.maps.Marker({position: uluru, map: map, draggable: true, animation: google.maps.Animation.DROP, icon: icon});
}
