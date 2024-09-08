'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../../components/ui/card'

import { Users, Target, TrendingUp, Award } from 'lucide-react'

export default function About() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(true)
		const handleScroll = () => {
			const elements = document.querySelectorAll('.scroll-animate')
			elements.forEach(el => {
				if (el.getBoundingClientRect().top < window.innerHeight - 100) {
					el.classList.add('animate-in')
				}
			})
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const teamMembers = [
		{
			name: 'Asif',
			role: 'CEO',
			image: '/asif.jpeg'
		},
		{
			name: 'Asif',
			role: 'COO',
			image: '/asif.jpeg'
		},
		{
			name: 'Asif',
			role: 'CFO',
			image: '/asif.jpeg'
		},
		{
			name: 'Asif',
			role: 'Head of Marketing',
			image: '/asif.jpeg'
		}
	]

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700'>
			<main className='flex-1 pt-16'>
				<section
					className={`w-full py-24 md:py-32 transition-all duration-1000 ease-in-out ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
									About RFM Inc
								</h1>
								<p className='mx-auto max-w-[700px] text-gray-100 md:text-xl lg:text-2xl'>
									Discover our story, meet our team, and learn about our mission
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800'>
									Our Story
								</h2>
								<p className='text-gray-600 mb-6'>
									RFM Inc was founded in 2005 with a vision to revolutionize the
									way businesses approach global trade and education. Our
									journey began with a small team of passionate experts who
									believed in the power of connecting people across borders.
								</p>
								<p className='text-gray-600 mb-6'>
									Over the years, we've grown into a multifaceted organization,
									expanding our services to include import-export facilitation,
									student consultancy, and real estate solutions. Our commitment
									to excellence and customer satisfaction has remained
									unwavering throughout our growth.
								</p>
								<Button className='bg-gray-800 text-white hover:bg-gray-700'>
									Learn More
								</Button>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<img
									src='/company.svg'
									alt='RFM Inc History'
									className='object-cover'
									fill
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800'>
							Our Values
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
							{[
								{
									icon: Users,
									title: 'Customer-Centric',
									description:
										"We put our clients' needs at the heart of everything we do"
								},
								{
									icon: Target,
									title: 'Integrity',
									description:
										'We operate with honesty and transparency in all our dealings'
								},
								{
									icon: TrendingUp,
									title: 'Innovation',
									description:
										'We constantly seek new ways to improve and adapt to change'
								},
								{
									icon: Award,
									title: 'Excellence',
									description:
										'We strive for the highest standards in all our services'
								}
							].map((value, index) => (
								<Card
									key={index}
									className='scroll-animate bg-white hover:shadow-lg transition-all duration-300'>
									<CardHeader>
										<value.icon className='h-12 w-12 mb-4 text-gray-600' />
										<CardTitle>{value.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{value.description}</CardDescription>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800'>
							Meet Our Team
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
							{teamMembers.map((member, index) => (
								<Card
									key={index}
									className='scroll-animate bg-gray-50 hover:shadow-lg transition-all duration-300'>
									<CardHeader>
										<div className='relative w-full h-48 mb-4'>
											<Image
												src={member.image}
												alt={member.name}
												className='object-cover rounded-lg'
												fill
											/>
										</div>
										<CardTitle>{member.name}</CardTitle>
										<CardDescription>{member.role}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
									Join Our Team
								</h2>
								<p className='text-gray-300 mb-6'>
									We're always looking for talented individuals to join our
									growing team. If you're passionate about making a difference
									in global trade, education, or real estate, we'd love to hear
									from you.
								</p>
								<a href='mailto:test@test.com'>
									<Button className='bg-white text-gray-900 hover:bg-gray-100'>
										Send us your resume
									</Button>
								</a>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<Image
									src='/team.svg'
									alt='Team Collaboration'
									className='object-cover'
									fill
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
