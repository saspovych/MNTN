const animItems = document.querySelectorAll('._anim-items')
const verticalNav = document.querySelectorAll('.vertical_nav')
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]
			const verticalNavLi = verticalNav[index]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				if (!animItem.classList.contains('_anim_no_use')) {
					animItem.classList.add('_active')
				}
				verticalNavLi.classList.add('active')
			} else {
				if (!animItem.classList.contains('_anim_no_hide')) {
					animItem.classList.remove('_active')
				}
				verticalNavLi.classList.remove('active')
			}
		}
	}
	function offset(e1) {
		const rect = e1.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}

(function () {
	const burger = document.querySelector('.burger')
	const navig = document.querySelector('.burger_navigation')
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active')
		navig.classList.toggle('navigation_active')
	})
} ())
