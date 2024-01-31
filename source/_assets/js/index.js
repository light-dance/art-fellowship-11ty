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

// switch between testimonials
const responsesSet = document.querySelectorAll('ul.responses li')

responsesSet.forEach( i => {
	i.addEventListener('mouseover', () => {
		// removes active state from all responses
		responsesSet.forEach( n => {
			n.classList.remove('active')
		})
		// adds active state to hover'ed response
		i.classList.add('active')
	})
})