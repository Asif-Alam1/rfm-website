'use client'

import { useState, useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
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
	ShieldCheck,
	Truck,
	Package,
	CheckCircle,
	ShoppingBag,
	Briefcase
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function ImportExport() {
	const [isVisible, setIsVisible] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

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

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...formData, subject: 'Import-Export Inquiry' })
			})
			if (response.ok) {
				toast.success('Message sent successfully')
				setFormData({ name: '', email: '', message: '' })
			} else {
				toast.error('Message failed to send')
			}
		} catch (error) {
			console.error('Error sending message:', error)
			toast.error('Message failed to send')
		}
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({ ...prevState, [name]: value }))
	}

	const services = [
		{
			icon: Truck,
			title: 'Logistics Support',
			description: 'Efficient transportation and delivery solutions'
		},
		{
			icon: Package,
			title: 'Custom Clearance',
			description: 'Streamlined customs processes and documentation with expert C&F Agent'
		},
		{
			icon: ShieldCheck,
			title: 'Door to Door Service',
			description: 'You can order from anywhere in the world and receive it at your home'
		},
		{
			icon: Briefcase,
			title: 'Sourcing',
			description: 'We will source the products for you from anywhere in the world'
		}
		,
		{
			icon: ShoppingBag,
			title: 'Dropshipping & Sourcing',
			description: 'Sourcing and dropshipping from India & China with quality checks and fulfilment.'
		}
	]

	const products = [
		{ 
			name: 'Handicrafts', 
			image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop',
			description: 'Traditional & artisanal crafts'
		},
		{ 
			name: 'Fishes', 
			image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&h=400&fit=crop',
			description: 'Fresh & frozen seafood'
		},
		{ 
			name: 'Vegetables', 
			image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop',
			description: 'Farm-fresh produce'
		},
		{ 
			name: 'Clothing', 
			image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop',
			description: 'Fashion & apparel'
		},
		{ 
			name: 'Plastic Products', 
			image: 'https://images.unsplash.com/photo-1536939459926-301728717817?w=600&h=400&fit=crop',
			description: 'Industrial plastic goods'
		},
		{ 
			name: 'Wigs', 
			image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop',
			description: 'Hair extensions & wigs'
		},
		{ 
			name: 'Leather Goods', 
			image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=400&fit=crop',
			description: 'Premium leather products'
		},
		{ 
			name: 'Garments', 
			image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
			description: 'Textile & ready-made garments'
		},
		{ 
			name: 'Machinery', 
			image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
			description: 'Industrial equipment'
		},
		{ 
			name: 'Chemicals', 
			image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop',
			description: 'Industrial chemicals'
		},
		{ 
			name: 'Automobiles', 
			image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop',
			description: 'Vehicles & auto parts'
		}
	]
	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-700'>
			<main className='flex-1 pt-16'>
				<section
					className={`w-full py-24 md:py-32 transition-all duration-1000 ease-in-out ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300'>
									Import-Export Solutions
								</h1>
								<p className='mx-auto max-w-[700px] text-blue-100 md:text-xl lg:text-2xl'>
									Unlock global opportunities with our expert import-export
									services
								</p>
							</div>
							<Link href='#contact'>
								<Button className='bg-blue-500 text-white hover:bg-blue-600 text-lg px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
									Get Started
								</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-800'>
							Our Services
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{services.map((service, index) => (
								<Card
									key={index}
									className='scroll-animate bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group'>
									<CardHeader className='relative'>
										<div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
										<service.icon className='h-12 w-12 mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300' />
										<CardTitle className='group-hover:text-blue-700 transition-colors duration-300'>
											{service.title}
										</CardTitle>
										<CardDescription>{service.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-800'>
							Our Product Categories
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
							{products.map((product, index) => (
								<Card
									key={index}
									className='scroll-animate bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer border-none'>
									<div className='relative h-48 overflow-hidden'>
										<Image
											src={product.image}
											alt={product.name}
											fill
											className='object-cover group-hover:scale-110 transition-transform duration-500'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
									</div>
									<CardContent className='p-5'>
										<CardTitle className='text-lg mb-2 text-blue-900 group-hover:text-blue-600 transition-colors duration-300'>
											{product.name}
										</CardTitle>
										<p className='text-sm text-gray-600'>{product.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-100'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-800'>
							Import-Export Process
						</h2>
						<Tabs
							defaultValue='import'
							className='w-full max-w-4xl mx-auto bg-yellow-white'>
							<TabsList className='grid w-full grid-cols-2 mb-8 bg-white h-full gap-x-4'>
								<TabsTrigger
									value='import'
									className='text-lg py-3 bg-white hover:bg-blue-300 data-[state=active]:bg-blue-400 '>
									Import Process
								</TabsTrigger>
								<TabsTrigger
									value='export'
									className='text-lg py-3 bg-white hover:bg-blue-200 data-[state=active]:bg-blue-400'>
									Export Process
								</TabsTrigger>
							</TabsList>
							<TabsContent value='import'>
								<div className='bg-white p-6 rounded-lg shadow-lg'>
									<ol className='relative border-l border-blue-200 ml-3 space-y-8'>
										{[
											{
												title: 'Supplier Selection',
												description:
													'Evaluate and choose reliable suppliers based on quality, price, and reliability.'
											},
											{
												title: 'Negotiation',
												description:
													'Discuss terms, prices, and conditions with selected suppliers.'
											},
											{
												title: 'Order Placement',
												description:
													'Finalize and place orders with chosen suppliers.'
											},
											{
												title: 'Shipping & Logistics',
												description:
													'Arrange transportation, insurance, and track shipments.'
											},
											{
												title: 'Customs Clearance',
												description:
													'Handle documentation and pay necessary duties and taxes.'
											}
										].map((step, index) => (
											<li key={index} className='mb-10 ml-6'>
												<span className='absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white'>
													{index + 1}
												</span>
												<h3 className='font-medium text-lg mb-1 text-blue-800'>
													{step.title}
												</h3>
												<p className='text-gray-700'>{step.description}</p>
											</li>
										))}
									</ol>
								</div>
							</TabsContent>
							<TabsContent value='export'>
								<div className='bg-white p-6 rounded-lg shadow-lg'>
									<ol className='relative border-l border-blue-200 ml-3 space-y-8'>
										{[
											
											{
												title: 'Product Adaptation',
												description:
													'Modify products to meet international standards and preferences.'
											},
											{
												title: 'Export Documentation',
												description:
													'Prepare necessary paperwork including certificates of origin and commercial invoices.'
											},
											{
												title: 'Logistics Planning',
												description:
													'Determine the most efficient shipping methods and routes.'
											},
											{
												title: 'Customs Procedures',
												description:
													'Comply with export regulations and obtain required licenses.'
											},
											{
												title: 'Payment Collection',
												description:
													'Establish secure payment methods and terms with international buyers.'
											}
										].map((step, index) => (
											<li key={index} className='mb-10 ml-6'>
												<span className='absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white'>
													{index + 1}
												</span>
												<h3 className='font-medium text-lg mb-1 text-blue-800'>
													{step.title}
												</h3>
												<p className='text-gray-700'>{step.description}</p>
											</li>
										))}
									</ol>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
									Why Choose Us?
								</h2>
								<ul className='space-y-4'>
									{[
										'Global Network',
										'Expert Team',
										'Customized Solutions',
										'24/7 Support',
										'Competitive Pricing',
			                            'Trustworthy'
									].map((item, index) => (
										<li key={index} className='flex items-center'>
											<CheckCircle className='h-6 w-6 mr-2 text-blue-300' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<Image
									src='/world.svg'
									alt='Global Trade'
									className='object-cover'
									fill
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50'
					id='contact'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  text-center mb-12 text-blue-800'>
							Get a Quote
						</h2>
						<div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<Input
									name='name'
									placeholder='Your Name'
									value={formData.name}
									onChange={handleChange}
									className='border-blue-300 focus:border-blue-500 transition-all duration-300'
									required
								/>
								<Input
									name='email'
									type='email'
									placeholder='Your Email'
									value={formData.email}
									onChange={handleChange}
									className='border-blue-300 focus:border-blue-500 transition-all duration-300'
									required
								/>
								<Textarea
									name='message'
									placeholder='Your Message'
									value={formData.message}
									onChange={handleChange}
									className='border-blue-300 focus:border-blue-500 transition-all duration-300'
									required
								/>
								<Button
									type='submit'
									className='w-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-lg'>
									Send Message
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
