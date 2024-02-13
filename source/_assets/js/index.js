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


/* Scroll Indicators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const roundStructureWidth = document.querySelector('#round-structure-scroller').offsetWidth
console.log(roundStructureWidth)

const roundStructureScrollField = document.querySelector('#round-structure-scroller')
roundStructureScrollField.addEventListener('scroll', e => {
	let scrollProgress = roundStructureScrollField.scrollLeft
	let scrollProgressPercent = scrollProgress / roundStructureWidth
	console.log(scrollProgressPercent)
})

/* [END] Scroll Indicators */

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