/* swiper */
// sec1 : main visual slide
const mainVisual = new Swiper('.sc-visual .swiper', {
    loop: true,
    speed: 800,
    touchRatio: 0,
    autoplay: {
        delay: 5000,
    },
});

// sec2 : naver people
const peopleSlide = new Swiper('.sc-people .swiper', {
    navigation: {
        nextEl: '.btn.next',
        prevEl: '.btn.prev',
    },
    breakpoints: {
        // 화면의 넓이가 320px 이상일 때
        320: {
            slidesPerView: 1,
            spaceBetween: 22,
        },
        // 화면의 넓이가 769px 이상일 때
        769: {
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
    },
});

// sec3 : naver benefits
const benefitSlide = new Swiper('.sc-benefits .swiper', {
    navigation: {
        nextEl: '.btn.next',
        prevEl: '.btn.prev',
    },
    breakpoints: {
        // 화면의 넓이가 320px 이상일 때
        320: {
            slidesPerView: 1,
            spaceBetween: 22,
        },
        // 화면의 넓이가 769px 이상일 때
        769: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

/* index */
// m-gnb메뉴 열기,닫기
const gnbBox = document.querySelector('.gnb-box-m');
const gnbBtn = document.querySelector('.header .btn-area button');
gnbBtn.addEventListener('click', function () {
    gnbBox.classList.toggle('open');
    this.classList.toggle('close');
    document.querySelector('body').classList.toggle('hidden');
});

// gnb메뉴 item클릭시 : sub메뉴 열기,닫기
const gnbItem = document.querySelector('.header-gnb .gnb-item.menu a');
gnbItem.addEventListener('click', function () {
    this.parentNode.classList.toggle('active');
});

//gnb Teams 호버시 submenu
const header = document.querySelector('.header');
gnbItem.parentElement.addEventListener('mouseover', function () {
    header.style.setProperty('--height', '182px');
});
gnbItem.parentElement.addEventListener('mouseleave', function () {
    header.style.setProperty('--height', '0');
});

// 한글,영문 고르기
const langs = document.querySelector('.header-util .lang');
let langClick = 0;
langs.addEventListener('click', function () {
    langClick++;
    if (langClick % 2 == 0) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

const langChange = document.querySelectorAll('.header-util .lang a');
langChange.forEach((a, i) => {
    a.addEventListener('click', function () {
        langChange[0].classList.remove('active');
        langChange[1].classList.remove('active');
        this.classList.add('active');
    });
});

// select 선택시 color변경
const searchSelect = document.querySelectorAll('.sc-search .select-box select');
searchSelect.forEach(sel => {
    sel.addEventListener('change', function () {
        sel.style.color = '#000';
    });
});

// search-jobs 검색input 클릭시 활성화
const jobBoxBtn = document.querySelector('.btn-search-box');
const searchJobs = document.querySelector('.search-jobs');
jobBoxBtn.addEventListener('click', function () {
    searchJobs.classList.add('open');
    document.querySelector('body').classList.add('hidden');
});
// search-jobs 닫기
searchJobs.querySelector('.btn-close').addEventListener('click', function () {
    searchJobs.classList.remove('open');
    document.querySelector('body').classList.remove('hidden');
});
// filter list toggle
const filterMainBtn = searchJobs.querySelectorAll('.main-item > .btn-item-title');
filterMainBtn.forEach(main => {
    main.addEventListener('click', function () {
        this.classList.toggle('on');
    });
});
const filterSubBtn = searchJobs.querySelectorAll('.sub-item > .btn-item-title');
filterSubBtn.forEach(sub => {
    sub.addEventListener('click', function () {
        this.classList.toggle('on');
    });
});
// 전체 클릭시 서브 체크박스 체크 및 해제
const allCheck = searchJobs.querySelectorAll('.all input');
allCheck.forEach((all, index) => {
    all.addEventListener('change', function () {
        const subList = this.closest('.sub-list');
        const childCheck = subList.querySelectorAll('.item input');

        childCheck.forEach(function (child) {
            if (child !== all) {
                child.checked = all.checked;
            }
        });
    });
});
// clear filters 클릭시 모든 checkbox 해제
const checkClearBtn = searchJobs.querySelector('.btn-clear');
checkClearBtn.addEventListener('click', function () {
    allInput = searchJobs.querySelectorAll('input');
    allInput.forEach(input => {
        input.checked = false;
    });
});

// 패밀리사이트 열기,닫기
const familyBtn = document.querySelector('.family-area .btn-family');
familyBtn.addEventListener('click', function () {
    this.parentNode.classList.toggle('active');
});
