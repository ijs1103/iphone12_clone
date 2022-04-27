/* global-nav 토글 버튼 관련 */
const globalNavEl = document.querySelector('.global-nav');
const mobileMenuEl = document.querySelector('.mobile-icon.menu');
const toggleMenuSpanEl = mobileMenuEl.querySelector('span');
let isGlobalNavActive = false;
mobileMenuEl.addEventListener('click', () => {
	if (!isGlobalNavActive) {
		toggleMenuSpanEl.textContent = 'close';
		isGlobalNavActive = true;
	} else {
		toggleMenuSpanEl.textContent = 'menu';
		isGlobalNavActive = false;
	}
	globalNavEl.classList.toggle('active');
});

/* local-nav 토글 버튼 관련 */
const localNavEl = document.querySelector('.local-nav');
const localNavToggleEl = document.querySelector('.local-nav__toggle');
const toggleSpanEl = localNavToggleEl.querySelector('span');
const localNavMenuTrayEl = document.querySelector('.local-nav__links__menu__tray');
const curtainEl = document.querySelector('.local-nav-curtain');
let isLocalNavActive = false;
const toggleLocalNav = () => {
	if (!isLocalNavActive) {
		gsap.fromTo(localNavMenuTrayEl, {
			display: 'none',
			transform: 'translate3d(0,-100px,0)',
			opacity: 0,
		}, {
			display: 'block',
			transform: 'translate3d(0,0,0)',
			opacity: 1
		});
		isLocalNavActive = true;
	} else {
		gsap.fromTo(localNavMenuTrayEl, .3, {
			display: 'block',
			transform: 'translate3d(0,0,0)',
			opacity: 1
		}, {
			display: 'none',
			transform: 'translate3d(0,-100px,0)',
			opacity: 0
		});
		isLocalNavActive = false;
	}
	toggleSpanEl.classList.toggle('active');
	curtainEl.classList.toggle('active');
	localNavEl.classList.toggle('active');
	localNavMenuTrayEl.classList.toggle('active');
};
localNavToggleEl.addEventListener('click', () => toggleLocalNav());
curtainEl.addEventListener('click', () => toggleLocalNav());
/* global-nav 숨기고 local-nav 투명 효과 관련  */
const checkMenu = () => {
	if (window.scrollY > 48) {
		document.body.classList.add('local-nav-sticky');
	} else {
		document.body.classList.remove('local-nav-sticky');
	}
}

/*  sticky-content__image-content 이미지 슬라이드 */
new Swiper(".swiper-container", {
	allowTouchMove: false,
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (_, className) {
			return '<span class="' + className + '">' + "</span>";
		},
	},
});
/* swiper bullet css 커스터마이징 및 처리 */
const colors = ['purple', 'blue', 'green', 'red', 'white', 'black'];
const bulletsEl = document.querySelectorAll('.swiper-pagination-bullet');
colors.forEach((color, idx) => {
	bulletsEl[idx].classList.add(`${color}`);
	const span = document.createElement('span');
	span.textContent = color;
	span.className = "bullet-color-label";
	bulletsEl[idx].appendChild(span);
});
/* speed section 스크롤시 애니메이션 */
const typoContentEl = document.querySelector('.sticky-content__typo-content');
const imageContentEl = document.querySelector('.sticky-content__image-content');
const gridItemEls = document.querySelectorAll('.grid-item');
const sectionFeaturesEl = document.querySelector('#features');
const featureHeadlineEls = document.querySelectorAll('.feature-headline');
const compareHeadlineEl = document.querySelector('.compare-headline');
const compareIconEls = document.querySelectorAll('.compare-icon');
const compareSubHeadlineEls = document.querySelectorAll('.compare-subHeadline');
const compareParagraphEls = document.querySelectorAll('.compare-paragraph');
const whichHeadlineEl = document.querySelector('.which-headline');
const reasonHeadlineEl = document.querySelector('.reason-headline');
const reasonCtaEl = document.querySelector('.reason-header .cta');

const ani_options = (number) => [{
	opacity: 0,
	transform: `translate3d(0,${number}px,0)`,
}, {
	opacity: 1,
	transform: 'translate3d(0,0,0)'
}];

function scrollAnimation() {
	gsap.registerPlugin(ScrollTrigger);
	/* SECTION SPEED */
	gsap.to(typoContentEl, {
		scrollTrigger: {
			trigger: sectionFeaturesEl,
			scrub: true
		},
		opacity: 0,
		transform: 'translate3d(0,-20px,0)',
	});
	gsap.to(imageContentEl, {
		scrollTrigger: {
			trigger: sectionFeaturesEl,
			scrub: true
		},
		transform: 'scale(.95)',
	});
	/* SECTION FEATURES */
	/* TWO_SIZES */
	gsap.timeline({
		pause: true,
		scrollTrigger: {
			trigger: gridItemEls[0],
			scrub: true,
			start: '100 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[0], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[0],
			scrub: true,
			start: 'bottom-=100px bottom',
			end: '+=100',
		},
	}).fromTo(featureHeadlineEls[0], ...ani_options(50));
	/* FAST_STRONG_CHIP */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[1],
			scrub: true,
			start: '100 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[1], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[1],
			scrub: true,
			start: 'bottom+=50px bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[1], ...ani_options(30));
	/* Battery */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[2],
			scrub: true,
			start: '200 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[2], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[2],
			scrub: true,
			start: 'bottom+=100px bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[2], ...ani_options(30));
	/* design_endframe */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[3],
			scrub: true,
			start: '100 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[3], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[3],
			scrub: true,
			start: 'bottom-=100px bottom',
			end: '+=70',
		},
	}).fromTo(featureHeadlineEls[3], ...ani_options(50));
	/* night_mode */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[4],
			scrub: true,
			start: '100 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[4], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[4],
			scrub: true,
			start: 'bottom+=50px bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[4], ...ani_options(30));
	/* fiveg */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[5],
			scrub: true,
			start: '200 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[5], ...ani_options(40));
	/* ceramic_shield */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[6],
			scrub: true,
			start: '100 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[6], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[6],
			scrub: true,
			start: 'bottom+=50px bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[5], ...ani_options(30));
	/* oled_display */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[7],
			scrub: true,
			start: '200 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[7], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[7],
			scrub: true,
			start: 'bottom+=100px bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[6], ...ani_options(30));
	/* magsafe */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[8],
			scrub: true,
			start: '100 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[8], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[8],
			scrub: true,
			start: 'bottom+=50px bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[7], ...ani_options(30));
	/* dolby_vision */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[9],
			scrub: true,
			start: '200 bottom',
			end: '+=300',
		},
	}).fromTo(gridItemEls[9], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[9],
			scrub: true,
			start: 'bottom+=100px bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[8], ...ani_options(30));
	/* wet_ok */
	gsap.timeline({
		pause: true,
		scrollTrigger: {
			trigger: gridItemEls[10],
			scrub: true,
			start: '100 bottom',
			end: '+=150',
		},
	}).fromTo(gridItemEls[10], ...ani_options(40));
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: gridItemEls[10],
			scrub: true,
			start: 'bottom bottom',
			end: '+=50',
		},
	}).fromTo(featureHeadlineEls[9], ...ani_options(50));
	/* SECTION COMPARE */
	/* compare-headline */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: compareHeadlineEl,
			scrub: true,
			start: 'bottom+=100px bottom',
			end: '+=70',
		},
	}).fromTo(compareHeadlineEl, ...ani_options(50));
	/* compare-icon[0] */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: compareIconEls[0],
			scrub: true,
			start: 'bottom+=100px bottom',
			end: '+=70',
		},
	}).fromTo(compareIconEls[0], ...ani_options(30));
	/* compare-subheadline[0], compare-icon[1] */
	gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: compareSubHeadlineEls[0],
				scrub: true,
				start: 'bottom+=100px bottom',
				end: '+=70',
			},
		}).fromTo(compareSubHeadlineEls[0], ...ani_options(30), 'sameTime')
		.fromTo(compareIconEls[1], ...ani_options(30), 'sameTime');
	/* compare-paragraph[0], compare-subheadline[1] */
	gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: compareParagraphEls[0],
				scrub: true,
				start: 'bottom+=100px bottom',
				end: '+=70',
			},
		}).fromTo(compareParagraphEls[0], ...ani_options(30), 'sameTime')
		.fromTo(compareSubHeadlineEls[1], ...ani_options(30), 'sameTime');
	/* compare-paragraph[2] */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: compareParagraphEls[2],
			scrub: true,
			start: 'bottom+=170px bottom',
			end: '+=70',
		},
	}).fromTo(compareParagraphEls[2], ...ani_options(30));
	/* compare-paragraph[1] active의 첫번째 */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: compareParagraphEls[1],
			scrub: true,
			start: 'bottom+=170px bottom',
			end: '+=70',
		},
	}).fromTo(compareParagraphEls[1], ...ani_options(30));
	/* compare-icon[2] */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: compareIconEls[2],
			scrub: true,
			start: 'bottom+=170px bottom',
			end: '+=70',
		},
	}).fromTo(compareIconEls[2], ...ani_options(30));
	/* compare-subheadline[2], compare-icon[3] */
	gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: compareSubHeadlineEls[2],
				scrub: true,
				start: 'bottom+=170px bottom',
				end: '+=70',
			},
		}).fromTo(compareSubHeadlineEls[2], ...ani_options(30), 'sameTime')
		.fromTo(compareIconEls[3], ...ani_options(30), 'sameTime');
	/* compare-paragraph[3], compare-subheadline[3] */
	gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: compareParagraphEls[3],
				scrub: true,
				start: 'bottom+=170px bottom',
				end: '+=70',
			},
		}).fromTo(compareParagraphEls[3], ...ani_options(30), 'sameTime')
		.fromTo(compareSubHeadlineEls[3], ...ani_options(30), 'sameTime');
	/* compare-paragraph[4] */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: compareParagraphEls[4],
			scrub: true,
			start: 'bottom+=240px bottom',
			end: '+=70',
		},
	}).fromTo(compareParagraphEls[4], ...ani_options(30));
	/* compare-paragraph[5] active의 두번째 */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: compareParagraphEls[5],
			scrub: true,
			start: 'bottom+=240px bottom',
			end: '+=70',
		},
	}).fromTo(compareParagraphEls[5], ...ani_options(30));
	/* which-headline */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: whichHeadlineEl,
			scrub: true,
			start: 'bottom+=100px bottom',
			end: '+=150',
		},
	}).fromTo(whichHeadlineEl, ...ani_options(50));
	/* reason-headline */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: reasonHeadlineEl,
			scrub: true,
			start: 'bottom+=100px bottom',
			end: '+=150',
		},
	}).fromTo(reasonHeadlineEl, ...ani_options(50));
	/* reason-headline */
	gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: reasonCtaEl,
			scrub: true,
			start: 'bottom+=200px bottom',
			end: '+=50',
		},
	}).fromTo(reasonCtaEl, ...ani_options(50));
}

window.addEventListener('scroll', _.throttle(() => {
	if (!isGlobalNavActive) {
		checkMenu();
		scrollAnimation();
	}
}, 300));

/* footer 토글 버튼 관련 */
const linkItemTitleEls = document.querySelectorAll('.link-item-title');
const linkItemContentEls = document.querySelectorAll('.link-item-content');
const linkTitleEls = document.querySelectorAll('.link-item-title');
/* 모바일 크기일때에만 토글 관련 함수 실행 */
const handleFooterToggle = () => linkItemTitleEls.forEach((linkItemTitleEl, idx) =>
	linkItemTitleEl.addEventListener('click', () => {
		linkItemContentEls[idx].classList.toggle('active');
		linkTitleEls[idx].classList.toggle('active');
	})
);

if (window.matchMedia("(max-width: 768px)").matches) handleFooterToggle();

window.addEventListener('resize', () => {
	if (window.matchMedia("(max-width: 768px)").matches) handleFooterToggle();
});