'use client'

import { useEffect, useRef } from 'react'

const ScrollProgress = () => {
	const barRef = useRef(null)

	useEffect(() => {
		let raf = 0
		const update = () => {
			const h = document.documentElement
			const max = h.scrollHeight - h.clientHeight
			const ratio = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0
			if (barRef.current) {
				barRef.current.style.setProperty('--scroll', String(ratio))
			}
			raf = 0
		}
		const onScroll = () => {
			if (raf) return
			raf = requestAnimationFrame(update)
		}
		update()
		window.addEventListener('scroll', onScroll, { passive: true })
		window.addEventListener('resize', onScroll)
		return () => {
			window.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', onScroll)
			if (raf) cancelAnimationFrame(raf)
		}
	}, [])

	return <div ref={barRef} className='scroll-progress' aria-hidden='true' />
}

export default ScrollProgress
