'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 800)
		window.addEventListener('scroll', onScroll, { passive: true })
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<button
			type='button'
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label='Back to top'
			className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-ink text-bone rounded-full shadow-lg hover:bg-clay focus-ring transition-all duration-500 ease-soft ${
				show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
			}`}>
			<ArrowUp className='h-4 w-4' strokeWidth={1.75} />
		</button>
	)
}

export default BackToTop
