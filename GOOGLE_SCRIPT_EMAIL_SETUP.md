# Google Apps Script Email Setup

To enable email notifications when contact forms are submitted, update your Google Apps Script with the following code:

## Instructions

1. Go to [Google Apps Script](https://script.google.com)
2. Open your existing script (the one with URL: `AKfycbxDfpcrv-0DBTVq5ADupKAAo4mDX65gChMt37GiQh-wnZZBaXIuEDmI-o8Y1m1jgaRM`)
3. Replace the existing `doPost` function with the code below
4. Save and deploy

## Updated Script Code

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if they don't exist
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Reason', 'Message', 'Status']);
    }
    
    // Add the form data to the sheet
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.reason || '',
      data.message || '',
      'New'
    ]);
    
    // Send email notification
    const recipientEmail = 'yusufsahs14@gmail.com';
    const subject = `New Contact Form Submission: ${data.reason || 'General Inquiry'}`;
    const emailBody = `
New contact form submission received:

Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}
Reason: ${data.reason || 'Not provided'}

Message:
${data.message || 'No message provided'}

---
Submitted: ${timestamp.toLocaleString()}
    `.trim();
    
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: emailBody
    });
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error and return error response
    console.error('Error processing form:', error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Notes

- **Free**: Google Apps Script includes 100 emails per day for free, which should be more than enough
- **Email Format**: The email will include all form fields in a clean format
- **Spreadsheet**: The data will still be saved to your Google Sheet as before
- **No Additional Setup**: No API keys or external services needed - it's all within Google Workspace

## Testing

After updating the script:
1. Save and deploy the updated version
2. Submit a test form on your website
3. Check your email (yusufsahs14@gmail.com) for the notification
4. Verify the data appears in your Google Sheet

