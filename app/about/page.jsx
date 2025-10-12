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
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '../../components/ui/tabs'
import {
	Users,
	Target,
	TrendingUp,
	Award,
	ChevronDown,
	ChevronUp
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function About() {
	const [isVisible, setIsVisible] = useState(false)
	const [expandedMember, setExpandedMember] = useState(null)

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
			name: 'Omar Faruk Tarek',
			role: 'Chairman',
			image: '/omar.jpg',
			description:
				'RFM International thrives under the guidance of our esteemed Chairman, Omar Faruk Tarek. With vast experience and a forward-thinking approach, Mr. Faruk plays a pivotal role in shaping the strategic direction of the company. His leadership has been instrumental in establishing RFM International as a trusted name in export, import, manpower consultancy, student abroad consultancy, real estate, and tourism. Committed to excellence and innovation, Omar Faruk Tarek ensures that the company consistently delivers superior services to meet the evolving needs of our clients globally.'
		},
		{
			name: 'Ferdouse Begum',
			role: 'Co-Chairman',
			image: '/ferdouse.jpg',
			description:
				'Ferdouse Begum serves as the Co-Chairman of RFM International, playing a key role in the leadership and strategic direction of the company. Her dedication and expertise help drive the growth and success of RFM International. As Co-Chairman, Ferdouse Begum is committed to ensuring that the company continues to deliver excellence in all its endeavors.'
		},
		{
			name: 'Redwanul Farabi Muttaki',
			role: 'Managing Director',
			image: '/muttaki.jpg',
			description:
				"RFM International, under the leadership of Managing Director Redwanul Farabi Muttaki, is a versatile company providing services in Export-Import, Manpower consultancy, Student abroad consultancy, Real estate, and Tourism. With a BBA in Management and an MBA in Strategic and International Management from the University of Dhaka, Mr. Farabi brings deep expertise and strategic vision to the company. His leadership has driven RFM International's growth across diverse sectors, ensuring high-quality, client-focused solutions while contributing to Bangladesh's economic progress and expanding our global presence."
		},
		{
			name: 'Kofil Chowdhury',
			role: 'Financial Advisor',
			image: '/kofil.jpg',
			description:
				"Our financial strategy is guided by Kofil Chowdhury, Assistant Vice President (AVP) at IFIC Bank Ltd. As the Financial Advisor for RFM International, Mr. Chowdhury brings a wealth of experience in banking and financial management. His expertise ensures that RFM International's financial planning and operations are robust, supporting growth across our diverse sectors, including export, import, manpower consultancy, student abroad consultancy, real estate, and tourism. With his sound financial guidance, Kofil Chowdhury plays a crucial role in maintaining the company's fiscal health and success."
		},
		{
			name: 'Mahfujul Anam Jisan',
			role: 'Patron',
			image: '/jisan.jpg',
			description:
				"Mahfuz Anam Jisan, the esteemed patron of RFM International, plays a vital role in supporting the company's vision and growth. His unwavering commitment and guidance have been instrumental in helping RFM International thrive across various sectors, including export, import, manpower consultancy, student abroad consultancy, real estate, and tourism. Mr. Jisan's patronage continues to inspire innovation and excellence, contributing to the company's success in both local and international markets."
		},
		{
			name: 'Mohsina Sharmin Nishat',
			role: 'Advisor, Student Consultancy',
			image: '/nishat.jpg',
			description:
				'Mohsina Sharmin Nishat serves as an advisor to RFM Student Consultancy, bringing her vast expertise in the education sector to guide our consultancy services. As the Vice Principal of Daffodil International School and College, her deep knowledge and experience in academic management ensure that RFM Student Consultancy provides students with the best guidance for pursuing education abroad. Her role is crucial in helping students make informed decisions about their educational pathways.'
		},
		{
			name: 'Mukcitin Faruki Mughda',
			role: 'Director of Digital Marketing',
			image: '/mughdo.jpg',
			description:
				"Mukcitin Faruki Mugdha serves as the Director of Digital Marketing at RFM International. With expertise in digital marketing and social media monetization, he leads the company's online presence and marketing strategies. His deep understanding of the digital landscape ensures that RFM International stays ahead in engaging with clients and expanding its reach through innovative and effective marketing campaigns."
		}
		
	]

	const toggleMemberExpansion = name => {
		setExpandedMember(expandedMember === name ? null : name)
	}

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
									RFM Inc was founded with a vision to revolutionize the way
									businesses approach global trade and education. Our journey
									began with a small team of passionate experts who believed in
									the power of connecting people across borders.
								</p>
								<p className='text-gray-600 mb-6'>
									Over the years, we have grown into a multifaceted
									organization, expanding our services to include import-export
									facilitation, student consultancy, and real estate solutions.
									Our commitment to excellence and customer satisfaction has
									remained unwavering throughout our growth.
								</p>
								<Button className='bg-gray-800 text-white hover:bg-gray-700'>
									Learn More
								</Button>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<Image
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
										'We put our clients needs at the heart of everything we do'
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
						<Tabs defaultValue='leadership' className='w-full mb-8'>
							<TabsList className='grid w-full grid-cols-2 lg:max-w-[400px] mx-auto'>
								<TabsTrigger value='leadership'>Leadership</TabsTrigger>
								<TabsTrigger value='advisors'>Advisors</TabsTrigger>
							</TabsList>
							<TabsContent value='leadership'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
									{teamMembers
										.filter(member =>
											[
												'Managing Director',
												'Chairman',
												'Co-Chairman',
												'Director of Digital Marketing'
											].includes(member.role)
										)
										.map((member, index) => (
											<Card
												key={index}
												className='scroll-animate bg-gray-50 hover:shadow-lg transition-all duration-300'>
												<CardHeader className='relative overflow-hidden'>
													<div className='relative w-full h-64 mb-4 bg-gray-200'>
														<Image
															src={member.image}
															alt={member.name}
															className='object-contain rounded-lg'
															fill
														/>
													</div>
													<CardTitle>{member.name}</CardTitle>
													<CardDescription>{member.role}</CardDescription>
												</CardHeader>
												<CardContent>
													<AnimatePresence>
														{expandedMember === member.name && (
															<motion.div
																initial={{ opacity: 0, height: 0 }}
																animate={{ opacity: 1, height: 'auto' }}
																exit={{ opacity: 0, height: 0 }}
																transition={{ duration: 0.3 }}>
																<p className='text-sm text-gray-600 mt-2'>
																	{member.description}
																</p>
															</motion.div>
														)}
													</AnimatePresence>
													<Button
														variant='ghost'
														className='w-full mt-4'
														onClick={() => toggleMemberExpansion(member.name)}>
														{expandedMember === member.name ? (
															<>
																<ChevronUp className='mr-2 h-4 w-4' /> Read Less
															</>
														) : (
															<>
																<ChevronDown className='mr-2 h-4 w-4' /> Read
																More
															</>
														)}
													</Button>
												</CardContent>
											</Card>
										))}
								</div>
							</TabsContent>
							<TabsContent value='advisors'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
									{teamMembers
										.filter(member =>
											[
												'Financial Advisor',
												'Advisor, Student Consultancy',
												'Patron'
											].includes(member.role)
										)
										.map((member, index) => (
											<Card
												key={index}
												className='scroll-animate bg-gray-50 hover:shadow-lg transition-all duration-300'>
												<CardHeader className='relative overflow-hidden'>
													<div className='relative w-full h-64 mb-4 bg-gray-200'>
														<Image
															src={member.image}
															alt={member.name}
															className='object-contain rounded-lg'
															fill
														/>
													</div>
													<CardTitle>{member.name}</CardTitle>
													<CardDescription>{member.role}</CardDescription>
												</CardHeader>
												<CardContent>
													<AnimatePresence>
														{expandedMember === member.name && (
															<motion.div
																initial={{ opacity: 0, height: 0 }}
																animate={{ opacity: 1, height: 'auto' }}
																exit={{ opacity: 0, height: 0 }}
																transition={{ duration: 0.3 }}>
																<p className='text-sm text-gray-600 mt-2'>
																	{member.description}
																</p>
															</motion.div>
														)}
													</AnimatePresence>
													<Button
														variant='ghost'
														className='w-full mt-4'
														onClick={() => toggleMemberExpansion(member.name)}>
														{expandedMember === member.name ? (
															<>
																<ChevronUp className='mr-2 h-4 w-4' /> Read Less
															</>
														) : (
															<>
																<ChevronDown className='mr-2 h-4 w-4' /> Read
																More
															</>
														)}
													</Button>
												</CardContent>
											</Card>
										))}
								</div>
							</TabsContent>
						</Tabs>
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
									We are always looking for talented individuals to join our
									growing team. If you are passionate about making a difference
									in global trade, education, or real estate, we would love to
									hear from you.
								</p>
								<a href='mailto:rfmbusinessbd@gmail.com'>
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
