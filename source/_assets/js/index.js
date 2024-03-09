/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Nav Button (expand/collapse)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
document.querySelector('#nav-btn').addEventListener('click', () => {
	const nav = document.querySelector('nav')
	if (nav.classList.contains('collapse')) {
		nav.classList.remove('collapse')
	}
	else {
		nav.classList.add('collapse')
	}
})
/* [END] Nav Button */


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



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Community Section
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const communityPics = document.querySelectorAll('ul.community li')
const communityBios = document.querySelectorAll('div.community-bios p')

let communityAutoScrollInterval = setInterval(communityAutoScroll, 4000)

let profileIndex = 1
function communityAutoScroll () {
	profileIndex++
	if (profileIndex > communityPics.length) {
		profileIndex = 1
	}
	setCommunityActive(communityPics[profileIndex - 1])
}

function setCommunityActive (profile) {
	// removes active state from all responses
	communityPics.forEach( n => {
		n.classList.remove('active')
	})
	communityBios.forEach( n => {
		n.classList.remove('active')
	})
	// adds active state to hover'ed response
	profile.classList.add('active')
	let target = profile.dataset.bio
	document.querySelector(`div.community-bios [data-bio='${target}']`).classList.add('active')
}

communityPics.forEach( i => {
	i.addEventListener('mouseover', () => {
		clearInterval(communityAutoScrollInterval) // stop the auto-scrolling
		setCommunityActive(i) // show the profile
	})
})
/* [END] Community Section */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Horizontal Scrolling Behavior ==> Overall Structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const overallStructureScroller = document.querySelector('#overall-structure-scroller')
const overallSrollPos = () => { return overallStructureScroller.scrollLeft }

const view1 = document.querySelector('#overall-structure-scroller div.round-one')
const view2 = document.querySelector('#overall-structure-scroller div.week')
const view3 = document.querySelector('#overall-structure-scroller div.round-two')

// Automatically scroll to next section every 5 seconds
const scrollAdvanceTimer = 4300
let autoScrollInterval = setInterval(autoScroll, scrollAdvanceTimer)

function autoScroll () {
	let scrollToX = 0	
	if (overallSrollPos() > view2.offsetLeft) {
		scrollToX = view1.offsetLeft
	}
	else if (overallSrollPos() >= view2.offsetLeft) {
		scrollToX = view3.offsetLeft
	}
	else if (overallSrollPos() >= view1.offsetLeft) {
		scrollToX = view2.offsetLeft
	}
	else {
		console.log('Issue Automatically Scrolling')
	}
	overallStructureScroller.scrollTo({
		left: scrollToX,
		behavior: "smooth"
	})
}

// Click on indicators to scroll
document.querySelector('#overall-structure-indicator-1').addEventListener('click', () => {
	overallStructureScroller.scrollTo({ left: view1.offsetLeft, behavior: "smooth" })
})
document.querySelector('#overall-structure-indicator-2').addEventListener('click', () => {
	overallStructureScroller.scrollTo({ left: view2.offsetLeft, behavior: "smooth" })
})
document.querySelector('#overall-structure-indicator-3').addEventListener('click', () => {
	overallStructureScroller.scrollTo({ left: view3.offsetLeft, behavior: "smooth" })
})

// Scroll Indicators
overallStructureScroller.addEventListener('scroll', () => {
	clearInterval(autoScrollInterval)
	autoScrollInterval = setInterval(autoScroll, scrollAdvanceTimer)
	
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
/* [END] Overall Structure Scrolling */


