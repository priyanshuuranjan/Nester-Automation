# EmailJS Setup Guide for Nester Automation Contact Form

## Overview
The contact form is now configured to send emails directly to Info@nesterautomation.com using EmailJS service. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account that will send the emails
5. Note down the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent through the Nester Automation website contact form.
```

4. Set the template variables:
   - `from_name`
   - `from_email` 
   - `phone`
   - `company`
   - `subject`
   - `message`
   - `to_email`

5. Note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## Step 5: Update ContactUs.jsx
Replace these values in `/src/components/ContactUs.jsx`:

```javascript
const SERVICE_ID = 'your_service_id' // Replace with your actual Service ID
const TEMPLATE_ID = 'your_template_id' // Replace with your actual Template ID  
const PUBLIC_KEY = 'your_public_key' // Replace with your actual Public Key
```

## Step 6: Test the Form
1. Fill out the contact form on your website
2. Check if the email arrives at Info@nesterautomation.com
3. Verify all form fields are included in the email

## Email Template Example
The email will look like this:

**Subject:** New Contact Form Submission - Request a Quote

**Body:**
```
From: John Doe
Email: john@example.com
Phone: +91 9876543210
Company: ABC Manufacturing

Subject: Request a Quote

Message:
We are interested in your industrial automation solutions for our new manufacturing facility. Please send us a detailed quote.

---
This message was sent through the Nester Automation website contact form.
```

## Security Notes
- EmailJS handles email sending securely
- No sensitive credentials are exposed in frontend code
- Form submissions are validated before sending
- Rate limiting is built into EmailJS to prevent spam

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all EmailJS credentials are correct
- Check your email service connection in EmailJS dashboard
- Ensure the receiving email (Info@nesterautomation.com) is not blocking emails

## Support
For EmailJS support, visit: https://www.emailjs.com/docs/
