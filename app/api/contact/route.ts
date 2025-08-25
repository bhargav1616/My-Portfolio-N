import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, budget, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create transporter (Gmail example) - FIXED: createTransport instead of createTransporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('Email transporter is ready')
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError)
      return NextResponse.json(
        { success: false, message: 'Email configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // Email to you (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New Contact Form Submission</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px;">
            <p style="margin: 0; color: #065f46;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email to user
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Bhargav Jadav',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #10b981, #06b6d4); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Thank you for reaching out! I've received your message and will get back to you within 24 hours.
            </p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Subject:</strong> New Project Inquiry</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
            </div>
            
            <p style="color: #6b7280;">
              In the meantime, feel free to check out my latest projects or connect with me on social media.
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="http://localhost:3000/projects" 
                 style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #10b981, #06b6d4); color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
                View My Projects
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>Best regards,<br><strong>Bhargav Jadav</strong><br>Full Stack Web Developer</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send both emails
    console.log('Sending emails...')
    await transporter.sendMail(mailToYou)
    console.log('Notification email sent')
    
    await transporter.sendMail(autoReply)
    console.log('Auto-reply email sent')

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
