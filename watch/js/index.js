// Мобильное меню

const menu = $('.mobile-menu');
const bg = $('.background-mobile');
const body = $('body');
const burger = $('.burger');
const closeMobileMenu = $('.mobile-menu-exit');

const handleCloseMobileMenu = () => {
    body.css('overflow', 'visible');
    bg.css('display', 'none');
    menu.removeClass("active");
    burger.removeClass("active");
}

bg.on('click', handleCloseMobileMenu);

closeMobileMenu.on('click', handleCloseMobileMenu);

burger.on('click', () => {
    if (menu.hasClass('active')) {
        handleCloseMobileMenu();
    } else {
        body.css('overflow', 'hidden');
        bg.css('display', 'block');
        menu.addClass("active");
        burger.addClass("active");
    }
});

const bm = $('.background-modal');
const modalCloseButton = $('.modal-exit-button');

const modalFavoriteButton = $('.btn-favorite-tariff');
const modalFutureButton = $('.btn-future-tariff');
const modalTryEverythingButton = $('.btn-try-everything');

const modalTariffPay = $('.modal-tariffs');

const favoriteGamesModal = $('.favorite-games-modal');
const futureTariffModal = $('.future-tariff-modal');
const tryEverythingModal = $('.try-everything-modal');

const linkToConfirmModal = $('.link-to-confirm-modal');

const handleCloseModal = () => {
    body.css('overflow', 'visible');
    bm.css('display', 'none');
    modalTariffPay.css('display', 'none');

    favoriteGamesModal.css('display', 'none');
    futureTariffModal.css('display', 'none');
    tryEverythingModal.css('display', 'none');
    linkToConfirmModal.css('display', 'none');
};

const handleOpenModal = () => {
    body.css('overflow', 'hidden');
    bm.css('display', 'block');
    modalTariffPay.css('display', 'block');
}

bm.on('click', handleCloseModal);
modalCloseButton.on('click', handleCloseModal);

$('.modal-btn-favorite').on('click', () => {
    favoriteGamesModal.css('display', 'none');
    futureTariffModal.css('display', 'none');
    tryEverythingModal.css('display', 'none');

    linkToConfirmModal.css('display', 'block');
});

modalFavoriteButton.on('click', () => {
    handleOpenModal();
    favoriteGamesModal.css('display', 'block');
});

modalFutureButton.on('click', () => {
    handleOpenModal();
    futureTariffModal.css('display', 'block');
});

modalTryEverythingButton.on('click', () => {
    handleOpenModal();
    tryEverythingModal.css('display', 'block');
});



// Скрыть или показать пароль

const openedEye = $('#toggle-visibility .opened-eye');
const closedEye = $('#toggle-visibility .closed-eye');
const inputPassword = $('#userPassword');
$('#toggle-visibility').on('click', () => {
    if(inputPassword.attr('type') === 'password') {
        inputPassword.attr('type', 'text');
        closedEye.css('display', 'none');
        openedEye.css('display', 'block');
    } else {
        inputPassword.attr('type', 'password');
        closedEye.css('display', 'block');
        openedEye.css('display', 'none');
    }
});

const repeatOpenedEye = $('#toggle-repeat-visibility .opened-eye');
const repeatClosedEye = $('#toggle-repeat-visibility .closed-eye');
const repeatInputPassword = $('#repeatPassword');
$('#toggle-repeat-visibility').on('click', () => {
    if(repeatInputPassword.attr('type') === 'password') {
        repeatInputPassword.attr('type', 'text');
        repeatClosedEye.css('display', 'none');
        repeatOpenedEye.css('display', 'block');
    } else {
        repeatInputPassword.attr('type', 'password');
        repeatClosedEye.css('display', 'block');
        repeatOpenedEye.css('display', 'none');
    }
});

if($('.progress-content').offset()) {
    const offset = $('.progress-content').offset().top
    const progress = $('.progress-content .progress');
    const widthProgress = progress.css('width');
    progress.css('width', 0);
    let isShowAnim = false;

    $(window).on('load scroll', function () {
        if (($(this).scrollTop() >= offset - window.innerHeight + 300) && !isShowAnim) {
            progress.animate({
                width: widthProgress,
                duration: 1000,
            });
            isShowAnim = true;
        }
    });
}
