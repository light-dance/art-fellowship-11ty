gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

function startHeroCardScroll () {
	
	const cardScroller = document.querySelector('#hero div.body div.cards')
	
	const speed = 40 // Set the horiz. scroll speed for marquee
	const scrollEnd = cardScroller.offsetWidth
	let scrollDuration = scrollEnd / speed
	
	
	/* On Load: Start scroll
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// On load: start scrolling to end, after 2s delay
	cardScrollTimelineDefault = gsap.timeline()
	cardScrollTimelineDefault.to(cardScroller, {
		scrollTo: {y:0, x: 20, autoKill: true},
		duration: 1.3,
		delay: 1.2,
		ease: 'power3.in'
	})
	cardScrollTimelineDefault.to(cardScroller, {
		scrollTo: {y: 0, x: scrollEnd, autoKill: true},
		duration: scrollDuration,
		ease: 'linear'
	})
	cardScrollTimelineDefault.play()
	
	let cardScrollControl = gsap.timeline() // Used by mouse enter/leave to reset the animation
	
	/* Hover: stop scrolling with ease-out
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	cardScroller.addEventListener('mouseenter', () => {		
		cardScrollTimelineDefault.kill()
		
		cardScrollControl.kill()
		cardScrollControl.clear()
		
		let scrollEase = cardScroller.scrollLeft + 10
		cardScrollControl.to(cardScroller, {
				scrollTo: {x: scrollEase, y: 0, autoKill: true},
				duration: 0.8,
				ease: 'power3.out'
			})
		cardScrollControl.play()
	})
	/* Hover-Out: start up new scroller
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	cardScroller.addEventListener('mouseleave', () => {		
		cardScrollControl.kill()
		cardScrollControl.clear()
		
		let scrollDistanceToEnd = scrollEnd - cardScroller.scrollLeft
		scrollDuration = scrollDistanceToEnd / speed
		
		cardScrollControl.to(cardScroller, {
			scrollTo: {x: scrollEnd, y: 0, autoKill: true},
			duration: scrollDuration,
			ease: 'linear'
		})
		cardScrollControl.play()
	})
	/* Finger-Up: when touch event ends, start up new scroller
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	cardScroller.addEventListener('touchend', () => {
		let scrollDistanceToEnd = scrollEnd - cardScroller.scrollLeft
		scrollDuration = scrollDistanceToEnd / speed
		
		gsap.delayedCall(0.5, () => {
			gsap.to(cardScroller, {
				scrollTo: {x: scrollEnd, y: 0, autoKill: true},
				duration: scrollDuration,
				ease: 'linear'
			})
		})
	})
}

setTimeout( () => {
	startHeroCardScroll()
}, 1500)

/* Nav, Marquee [End] */



/* Animate ARTICLE text on scroll
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
let article = new SplitText(document.querySelector('#problem-statement'), {type: "chars,words"})
gsap.fromTo(article.chars, 
{
	opacity: 0.5
},
{
	opacity: 1,
	color: 'hsl(0, 0%, 0%)',
	duration: 1,
	ease: 'power3',
	stagger: 0.05,
	scrollTrigger: {
		trigger: '#problem-statement',
		start: 'top 60%',
		end: 'bottom 60%',
		scrub: 2
	}
}
)


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Horizontal Scrolling Behavior ==> Round Structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const roundStructureScroller = document.querySelector('#round-structure-scroller')
const roundSrollPos = () => { return roundStructureScroller.scrollLeft }
const roundStructureViewSize = () => { return document.querySelector('section.round-structure').offsetWidth }

function setIndicatorPercent () {
	let left = roundStructureScroller.scrollLeft
	let view = roundStructureViewSize()
	let width = document.querySelector('#round-structure-scroller div.wrapper').offsetWidth
	
	let scrollPercent = Math.round( ( ( left + view ) / width ) * 100 )
	
	document.querySelector('section.round-structure div.canvas div.scroll-indicator span.progress').style.width = `${scrollPercent}%`
	
	// console.log(`Left: ${left} View: ${view} Width: ${width} Perc: ${scrollPercent}`)
}
setIndicatorPercent()

roundStructureScroller.addEventListener('scroll', () => {
	let left = roundStructureScroller.scrollLeft
	let view = roundStructureViewSize()
	let width = document.querySelector('#round-structure-scroller div.wrapper').offsetWidth
	
	setIndicatorPercent()
	
	const view1 = document.querySelector('#round-structure-scroller p.section-1').offsetLeft
	const view2 = document.querySelector('#round-structure-scroller p.section-2').offsetLeft
	const view3 = document.querySelector('#round-structure-scroller p.section-3').offsetLeft
	
	// console.log(`Left: ${left} View: ${view} 1:${view1} 2:${view2} 3:${view3}`)
	
	let position = left + (view * 0.4)
	
	document.querySelectorAll('section.round-structure div.explain-text p').forEach( i => {
		i.classList.remove('active')
	})
	document.querySelectorAll('#round-structure-scroller div.labels p').forEach( i => {
		i.classList.remove('active')
	})
	if (position >= view3) {
		document.querySelector('#round-details-3').classList.add('active')
		document.querySelectorAll('#round-structure-scroller div.labels p.section-3').forEach( i => {
			i.classList.add('active')
		})
	}
	else if (position >= view2) {
		document.querySelector('#round-details-2').classList.add('active')
		document.querySelectorAll('#round-structure-scroller div.labels p.section-2').forEach( i => {
			i.classList.add('active')
		})
	}
	else {
		document.querySelector('#round-details-1').classList.add('active')
		document.querySelectorAll('#round-structure-scroller div.labels p.section-1').forEach( i => {
			i.classList.add('active')
		})
	}
	
	// look for each section's first element
	// look at it in comparison to scroll position
	// apply class to current explain text to show/hide
})
onresize = () => {
	setIndicatorPercent()
}

document.querySelector('section.round-structure div.forward.btn').addEventListener('click', () => {
	roundStructureScroller.scrollTo({
		left: roundStructureScroller.scrollLeft + (document.querySelector('#round-structure-scroller div.wrapper').offsetWidth * .3),
		behavior: "smooth"
	})
})
document.querySelector('section.round-structure div.back.btn').addEventListener('click', () => {
	roundStructureScroller.scrollTo({
		left: roundStructureScroller.scrollLeft - (document.querySelector('#round-structure-scroller div.wrapper').offsetWidth * .3),
		behavior: "smooth"
	})
})
/* [END] Round Structure Scrolling */