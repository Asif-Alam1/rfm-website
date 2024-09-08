import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request) {
	try {
		const { name, email, subject, message } = await request.json()

		// Create a transporter using Gmail
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		})

		// Define email options
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: 'rfmbusinessbd@gmail.com',
			subject: 'New Contact Form Submission',
			text: `You have a new contact form submission from:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}`,
			html: `<h1>New Contact Form Submission</h1>
        <p>You have a new contact form submission from:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>`
		}

		// Send mail
		const info = await transporter.sendMail(mailOptions)
		console.log('Email sent: ' + info.response)

		return NextResponse.json({ message: 'Email sent successfully' })
	} catch (error) {
		console.error('Error sending email:', error)
		return NextResponse.json(
			{ error: 'Error sending email', details: error.message },
			{ status: 500 }
		)
	}
}
