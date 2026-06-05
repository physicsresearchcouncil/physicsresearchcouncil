/**
 * Google Apps Script to automate the generation and emailing of certificates.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a certificate template in Google Slides. Use placeholders:
 *    - {{NAME}} for student name
 *    - {{DIVISION}} for the Division (e.g., High School Division)
 *    - {{AWARD}} for the result (e.g., Gold Medallist, Honorable Mention, Participant)
 * 2. Note the ID of your Google Slides template from its URL.
 * 3. Create a Google Sheet. Label the headers in Row 1:
 *    - Column A: Name
 *    - Column B: Email
 *    - Column C: Division
 *    - Column D: Award
 *    - Column E: Status (Leave empty, the script will write "Sent" here)
 * 4. Open the sheet, click Extension -> "Apps Script", paste this code.
 * 5. Replace TEMPLATE_SLIDE_ID with your actual Google Slides template ID.
 * 6. Run the "generateCertificates" function!
 */

// REPLACE THIS with your actual Google Slides template file ID
var TEMPLATE_SLIDE_ID = "YOUR_GOOGLE_SLIDE_TEMPLATE_ID_HERE";

function generateCertificates() {
  try {
    if (TEMPLATE_SLIDE_ID === "YOUR_GOOGLE_SLIDE_TEMPLATE_ID_HERE") {
      Logger.log("ERROR: Please replace TEMPLATE_SLIDE_ID with a valid Google Slide ID before running.");
      return;
    }
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    
    // Check if there is data in the sheet (excluding headers)
    if (lastRow < 2) {
      Logger.log("No student data found in the spreadsheet.");
      return;
    }
    
    var dataRange = sheet.getRange(2, 1, lastRow - 1, 5); // A2:E[lastRow]
    var data = dataRange.getValues();
    
    var templateFile = DriveApp.getFileById(TEMPLATE_SLIDE_ID);
    
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      var name = row[0];
      var email = row[1];
      var division = row[2];
      var award = row[3];
      var status = row[4];
      
      // Skip if certificate is already sent or if essential fields are empty
      if (status === "Sent" || !name || !email || !award) {
        continue;
      }
      
      Logger.log("Generating certificate for: " + name + " (" + email + ")");
      
      // 1. Duplicate the template Slide to make a temporary certificate slide
      var tempFile = templateFile.makeCopy("Cert_" + name);
      var tempSlideId = tempFile.getId();
      var presentation = SlidesApp.openById(tempSlideId);
      var slide = presentation.getSlides()[0];
      
      // 2. Replace placeholders in the temporary slide
      slide.replaceAllText("{{NAME}}", name);
      slide.replaceAllText("{{DIVISION}}", division);
      slide.replaceAllText("{{AWARD}}", award);
      
      // Save and close the presentation to apply changes
      presentation.saveAndClose();
      
      // 3. Export the temporary slide as a PDF
      var pdfBlob = tempFile.getAs(MimeType.PDF);
      pdfBlob.setName("Physics_Championship_Certificate_" + name.replace(/\s+/g, "_") + ".pdf");
      
      // 4. Send email with the certificate attached
      var subject = "Your Physics Championship Certificate - " + name;
      var body = "Dear " + name + ",\n\n" +
                 "Congratulations on participating in the annual Physics Championship, hosted by the Physics Research Council!\n\n" +
                 "In recognition of your performance, we are pleased to award you the certificate of " + award + " in the " + division + ".\n\n" +
                 "Please find your official digital certificate attached to this email as a PDF. We encourage you to share your achievements with your school department and on your professional networks (e.g., LinkedIn).\n\n" +
                 "Thank you for showing exceptional dedication to scientific inquiry, and we wish you the very best in your academic journey!\n\n" +
                 "Sincerely,\n\n" +
                 "The Scientific Advisory Committee\n" +
                 "Physics Research Council\n" +
                 "physicsresearchcouncil@gmail.com\n" +
                 "Portal: https://github.com/physicsresearchcouncil/physicsresearchcouncil";
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: body,
        attachments: [pdfBlob]
      });
      
      // 5. Clean up: delete the temporary slide file in Drive to avoid clutter
      tempFile.setTrashed(true);
      
      // 6. Update spreadsheet row status to "Sent" to prevent duplicate emails
      sheet.getRange(i + 2, 5).setValue("Sent"); // Column E
      
      // Add a slight delay to avoid hitting rate limits
      Utilities.sleep(1000);
    }
    
    Logger.log("Completed certificate generation process.");
    
  } catch (err) {
    Logger.log("Error during certificate generation: " + err.toString());
  }
}
