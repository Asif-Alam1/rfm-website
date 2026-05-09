'use client'

import { ArrowRight, Loader2 } from 'lucide-react'

const SubmitButton = ({ pending, children = 'Send inquiry', className = '' }) => {
	return (
		<button
			type='submit'
			disabled={pending}
			className={`group relative inline-flex items-center gap-2 px-6 py-3 bg-clay text-bone hover:bg-clay-soft transition-colors text-sm font-medium tracking-tight focus-ring disabled:opacity-70 disabled:cursor-wait overflow-hidden ${className}`}>
			<span className={`inline-flex items-center gap-2 transition-opacity duration-200 ${pending ? 'opacity-0' : 'opacity-100'}`}>
				{children}
				<ArrowRight className='cta-arrow h-4 w-4' strokeWidth={1.75} />
			</span>
			{pending && (
				<span className='absolute inset-0 flex items-center justify-center'>
					<Loader2 className='h-4 w-4 animate-spin' strokeWidth={1.75} />
				</span>
			)}
		</button>
	)
}

export default SubmitButton
