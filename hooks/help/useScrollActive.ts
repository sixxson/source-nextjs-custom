'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to track scroll position and determine if the page has scrolled past a dynamic threshold
 * Used primarily for toggling header active states.
 */
export function useScrollActive() {
	const [isHeaderActive, setIsHeaderActive] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			const vw = window.innerWidth
			const homeBanner = document.querySelector('.section-home-1') as HTMLElement
			const header = document.querySelector('header') as HTMLElement

			let threshold = 0

			if (homeBanner) {
				// If home banner exists, use its height as threshold
				threshold = homeBanner.offsetHeight
			} else if (vw < 1024) {
				// For inner pages on mobile/tablet, activate after header height
				threshold = header?.offsetHeight || 100
			} else {
				// Default threshold for pages without banners
				threshold = 50
			}

			if (scrollY > threshold) {
				setIsHeaderActive(true)
			} else {
				setIsHeaderActive(false)
			}
		}

		// Initial check
		handleScroll()

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleScroll) // Re-calculate threshold on resize

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)
		}
	}, [])

	return isHeaderActive
}
