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

// Handle get-started buttons
document.querySelectorAll('.get-started-btn').forEach( i => {
	i.addEventListener('click', (e) => {
		e.preventDefault()
		document.querySelector('#signup').classList.remove('hide')
		document.querySelector('#signup').classList.add('show')
	})
})

// handle hiding the overlay
document.querySelector('#signup div.overlay').addEventListener('click', () => {
	const m = document.querySelector('#signup')
	if (! m.classList.contains('hide')) {
		m.classList.add('close')
		setTimeout( () => {
			m.classList.remove('show')
			m.classList.remove('close')
			m.classList.add('hide')
		}, 500)
	}
})

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