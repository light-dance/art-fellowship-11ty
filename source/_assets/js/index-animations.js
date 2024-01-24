gsap.registerPlugin(ScrollTrigger)

/* Animate ARTICLE text on scroll
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
let paragraph1 = new SplitText(document.querySelector('#article-p1'), {type: "chars,words"})
let paragraphHighlight = gsap.timeline({
	scrollTrigger: {
		trigger: '#article-p1',
		start: 'top 60%',
		end: 'bottom 60%',
		scrub: 1.5,
	}
})
paragraphHighlight.fromTo(paragraph1.chars, {
	opacity: 0.5
},
{
	opacity: 1,
	color: 'hsl(0, 0%, 0%)',
	duration: 1,
	ease: 'power3',
	stagger: 0.05
})

let paragraph2 = new SplitText(document.querySelector('#article-p2'), {type: "chars,words"})
gsap.fromTo(paragraph2.chars, {
	opacity: 0.5
},
{
	opacity: 1,
	color: 'hsl(0, 0%, 0%)',
	duration: 1,
	ease: 'power3',
	stagger: 0.05,
	scrollTrigger: {
		trigger: '#article-p2',
		start: 'top 60%',
		end: 'bottom 60%',
		scrub: 1.5
	}
})
let paragraph3 = new SplitText(document.querySelector('#article-p3'), {type: "chars,words"})
gsap.fromTo(paragraph3.chars, {
	opacity: 0.5
},
{
	opacity: 1,
	color: 'hsl(0, 0%, 0%)',
	duration: 1,
	ease: 'power3',
	stagger: 0.05,
	scrollTrigger: {
		trigger: '#article-p3',
		start: 'top 60%',
		end: 'bottom 60%',
		scrub: 1.5
	}
})