window.onload = function () {
    const $personalPage = document.querySelector('.personal-page');
    const $userPanel = document.querySelector('.user-panel');
    const $filterBtn = document.querySelector('.search__btn--filt');
    const $filtersPanel = document.querySelector('.filters-panel');
    const $filterBtnSubmited = document.querySelector('.filters-panel__btn--submit');
    const $filtersValuesPanel = document.querySelector('.filters-panel__body');
    const $filterValueBtn = document.querySelectorAll('.filters-panel__btn');
    const $menuHeaderCtrl = document.querySelector('.menu-ctrl');
    const $headerMobile = document.querySelector('.header-mob');
    const $selectShowOptions = document.querySelector('.select-header');
    const $optionsWrapper = document.querySelector('.select-body');
    const $ctrlsSearch = document.querySelector('.ctrls');
    const $ctrlsBtnSearch = document.querySelectorAll('.ctrls__btn');


    function removeFilterActiveClass(){
        $filterValueBtn.forEach(btn => {
            btn.classList.remove('filters-panel__btn--active')
        })
    }

    function removeSearchFilterActiveClass(){
        $ctrlsBtnSearch.forEach(btn => {
            btn.classList.remove('ctrls__btn--active')
        })
    }


    //mobile menu
    $personalPage.addEventListener('click', function () {
        $userPanel.classList.toggle('user-panel--active');
    });

    $menuHeaderCtrl.addEventListener('click', function () {
        $menuHeaderCtrl.classList.toggle('menu-ctrl--open');
        $headerMobile.classList.toggle('header-mob--active');
    });

    //select
    $selectShowOptions.addEventListener('click', function () {
        $optionsWrapper.classList.toggle('select-body--active');
    });
    $optionsWrapper.addEventListener('click', function (e) {
        if(e.target.className === 'item-text'){
            document.querySelector('.select-header__default-value').innerHTML = e.target.textContent;
        }
    });

    //filters
    $ctrlsSearch.addEventListener('click', function (e) {
        const targetElement = e.target;
        const targetClass = targetElement.className.split(' ')[0];
        if(targetClass === 'ctrls__btn'){
            removeSearchFilterActiveClass();
            targetElement.classList.add('ctrls__btn--active')
        }
    });


    $filterBtn.addEventListener('click', function () {
        $filtersPanel.classList.toggle('filters-panel--active');
    });
    $filterBtnSubmited.addEventListener('click', function () {
        $filtersPanel.classList.remove('filters-panel--active');
    });
    $filtersValuesPanel.addEventListener('click', function (e) {
        const targetClass = e.target.className.split(' ')[0];
        if(targetClass === 'filters-panel__btn'){
            removeFilterActiveClass();
            e.target.classList.add('filters-panel__btn--active');
        }
    })
};