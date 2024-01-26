gsap.registerPlugin(ScrollTrigger)

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