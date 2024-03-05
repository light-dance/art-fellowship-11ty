// Handle nav button
document.querySelector('#nav-btn').addEventListener('click', () => {
	const nav = document.querySelector('nav')
	if (nav.classList.contains('collapse')) {
		nav.classList.remove('collapse')
	}
	else {
		nav.classList.add('collapse')
	}
})

/* Splash Animation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
setTimeout( () => {
	document.querySelector('#splash').classList.add('hide')
}, 3900)


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Sign-up Modal Interactions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function showSignup () {
	const m = document.querySelector('#signup')
	m.classList.remove('hide')
	m.classList.add('show')
}
function hideSignup () {
	const m = document.querySelector('#signup')
	if (! m.classList.contains('hide')) {
		m.classList.add('close')
		setTimeout( () => {
			m.classList.remove('show')
			m.classList.remove('close')
			m.classList.add('hide')
		}, 500)
	}
}

// Hide signup when ESC key
document.addEventListener('keydown', ( e ) => {
	if ( e.key === 'Escape' && !document.querySelector('#signup').classList.contains('hide') ) {
		hideSignup()
	}
})

// Show Signup when link is clicked
document.querySelectorAll('.get-started-btn').forEach( i => {
	i.addEventListener('click', (e) => {
		e.preventDefault()
		showSignup()
	})
})

// Hide signup when you click elsewhere
document.querySelector('#signup div.overlay').addEventListener('click', () => {
	hideSignup()
})
/* [END] Sign-up Modal Interactions */


// switch between community members
const communityPics = document.querySelectorAll('ul.community li')
const communityBios = document.querySelectorAll('div.community-bios p')

communityPics.forEach( i => {
	i.addEventListener('mouseover', () => {
		// removes active state from all responses
		communityPics.forEach( n => {
			n.classList.remove('active')
		})
		communityBios.forEach( n => {
			n.classList.remove('active')
		})
		// adds active state to hover'ed response
		i.classList.add('active')
		let target = i.dataset.bio
		document.querySelector(`div.community-bios [data-bio='${target}']`).classList.add('active')
	})
})

/* Scroll Indicators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// For the overall structure (first)
const overallStructureScroller = document.querySelector('#overall-structure-scroller')
overallStructureScroller.addEventListener('scroll', () => {
	let viewOne = document.querySelector('#overall-structure-scroller div.round-one').offsetWidth
	let viewTwo = document.querySelector('#overall-structure-scroller div.week').offsetWidth

	let scrollPosition = overallStructureScroller.scrollLeft
	let currentView = ''

	if (scrollPosition <= viewOne ) {
		currentView = '1'
	}
	else if (scrollPosition <= (viewOne + viewTwo)) {
		currentView = '2'
	}
	else if (scrollPosition > (viewOne + viewTwo)) {
		currentView = '3'
	}
	else {
		console.log('Problem')
	}
	
	document.querySelectorAll('section.overall-structure div.scroll-indicator span').forEach( i => {
		i.classList.remove('active')
	})
	document.querySelector(`#overall-structure-indicator-${currentView}`).classList.add('active')	
})



// For the round structure (last)
const sessionStructureScroller = document.querySelector('#round-structure-scroller')
sessionStructureScroller.addEventListener('scroll', () => {
	
	let scrollPercent = Math.max(10, Math.round((sessionStructureScroller.scrollLeft / sessionStructureScroller.offsetWidth) * 100))
	
	console.log(scrollPercent)
	
	document.querySelector('section.round-structure div.canvas div.scroll-indicator span.progress').style.width = `${scrollPercent}%`
})
/* [END] Scroll Indicators */