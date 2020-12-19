/*JS way for setting height: 100vh to slides' height*/
/*const $slides = $(".owl-carousel .owl-slide");
$slides.css("height", $(window).height());
$(window).resize(() => {
  $slides.css("height", $(window).height());
});*/

$(".owl-carousel").on("initialized.owl.carousel", () => {
    setTimeout(() => {
        $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
        $("section").show();
    }, 200);
});

const $owlCarousel = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
        '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
        '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
    ]
});

$owlCarousel.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");

    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

    const $target = $currentOwlItem.find(".owl-slide-text");
    doDotsCalculations($target);
});

$owlCarousel.on("resize.owl.carousel", () => {
    setTimeout(() => {
        setOwlDotsPosition();
    }, 50);
});

/*if there isn't content underneath the carousel*/
//$owlCarousel.trigger("refresh.owl.carousel");

setOwlDotsPosition();

function setOwlDotsPosition() {
    const $target = $(".owl-item.active .owl-slide-text");
    doDotsCalculations($target);
}

function doDotsCalculations(el) {
    const height = el.height();
    const {
        top,
        left
    } = el.position();
    const res = height + top + 20;

    $(".owl-carousel .owl-dots").css({
        top: `${res}px`,
        left: `${left}px`
    });
}

.owl - theme.owl - dots,
    .owl - theme.owl - nav {
        text - align: center; -
        webkit - tap - highlight - color: transparent
    }

    .owl - theme.owl - nav {
        margin - top: 20 % ;
    }

    .owl - theme.owl - nav[class *= owl - ] {
        color: #FFF;
        font - size: 14 px;
        margin: 5 px;
        padding: 4 px 7 px;
        background: #D6D6D6;
        display: inline - block;
        cursor: pointer;
        border - radius: 3 px
    }