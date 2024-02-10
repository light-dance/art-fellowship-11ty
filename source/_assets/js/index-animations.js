gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

function startHeroCardScroll () {
	
	const cardScroller = document.querySelector('#hero div.body div.cards-group')
	
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