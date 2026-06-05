/**
 * Google Apps Script to automatically generate the Physics Research Council Volunteer Intake Form.
 * 
 * HOW TO USE:
 * 1. Go to Google Drive (drive.google.com) or Google Apps Script (script.google.com).
 * 2. Create a new project.
 * 3. Delete any code in the editor, and paste this entire script.
 * 4. Click the "Save" (disk icon) and then click "Run" (play icon).
 * 5. Grant the necessary permissions when prompted (it requires permission to create Forms in your Drive).
 * 6. View the Executions Log at the bottom to find the Edit URL and Live URL of your new form!
 */

function createVolunteerIntakeForm() {
  // 1. Create a new Google Form
  var form = FormApp.create('Physics Research Council - Student Volunteer Intake Form');
  
  // 2. Set Form Title and Description
  form.setTitle('Physics Research Council - Student Volunteer Intake Form');
  form.setDescription(
    'Thank you for your interest in joining the Physics Research Council! ' +
    'We are a global, student-led youth STEM initiative dedicated to making high-level physics learning and research opportunities open to everyone.\n\n' +
    'ELIGIBILITY: Classes 9-12, Gap Year students, and all College majors. No prior experience or physics background is required! We will provide training.\n\n' +
    'BENEFITS: In return for your service, you will receive an official Certificate of Appreciation and recognition on our website portal contributors wall.\n\n' +
    'Contact: physicsresearchcouncil@gmail.com'
  );

  // 3. Configure Basic Form Settings
  form.setCollectEmail(true); // Automatically collect email addresses
  form.setLimitOneResponsePerUser(false); // Let students submit multiple times if they need to update
  form.setAllowResponseEdit(true); // Let them edit their answers later
  
  // 4. Add Questions
  
  // Q1: Full Name
  var nameItem = form.addTextItem();
  nameItem.setTitle('Full Name')
          .setHelpText('Please enter your full name as you would like it to appear on certificates.')
          .setRequired(true);

  // Q2: Contact Number
  var phoneItem = form.addTextItem();
  phoneItem.setTitle('WhatsApp / Contact Number')
           .setHelpText('Please include your country code (e.g., +1 for USA, +91 for India).')
           .setRequired(true);

  // Q3: Academic Level
  var eduItem = form.addMultipleChoiceItem();
  eduItem.setTitle('Current Academic Level')
         .setHelpText('Select your current grade or division.')
         .setChoices([
           eduItem.createChoice('High School Student (Class 9 - 10)'),
           eduItem.createChoice('Senior High School Student (Class 11 - 12)'),
           eduItem.createChoice('Gap Year Student (Pre-College)'),
           eduItem.createChoice('Undergraduate Student (1st or 2nd Year College)'),
           eduItem.createChoice('Undergraduate Student (3rd or 4th Year College)'),
           eduItem.createChoice('Postgraduate / Master\'s Student'),
           eduItem.createChoice('Other / Professional')
         ])
         .setRequired(true);

  // Q4: Field of Study / School Major
  var majorItem = form.addTextItem();
  majorItem.setTitle('Field of Study / Intended Major')
           .setHelpText('e.g., High School Science, Physics, Computer Science, Literature, Engineering, etc.')
           .setRequired(true);

  // Q5: Educational Institution
  var schoolItem = form.addTextItem();
  schoolItem.setTitle('Name of School / College / University')
            .setHelpText('Enter the full name of your current or most recent educational institution.')
            .setRequired(true);

  // Q6: Preferred Volunteering Roles (Checkboxes)
  var roleItem = form.addCheckboxItem();
  roleItem.setTitle('Preferred Volunteering Roles')
          .setHelpText('Select all the areas you would like to help with. (Check as many as apply. No prior experience is required!)')
          .setChoices([
            roleItem.createChoice('Outreach & Email Communications (Inviting schools, sponsors, and advisors)'),
            roleItem.createChoice('Social Media Management & Public Relations (Instagram, LinkedIn, X, Discord)'),
            roleItem.createChoice('Graphic Design & Content Creation (Designing event flyers and certificate templates)'),
            roleItem.createChoice('Web Development & Portal Admin (Updating our HTML/CSS portal and managing databases)'),
            roleItem.createChoice('Event Operations & Logistics (Managing timelines, scheduling, and Q&A boards)'),
            roleItem.createChoice('Physics Grading & Problem Design (Reviewing submissions/quizzes - Recommended for Physics Majors/Olympiad alumni)'),
            roleItem.createChoice('General Operational Support (Willing to help wherever needed!)')
          ])
          .setRequired(true);

  // Q7: Weekly Commitment
  var timeItem = form.addMultipleChoiceItem();
  timeItem.setTitle('Weekly Time Commitment')
          .setHelpText('How many hours per week can you dedicate to Council operations?')
          .setChoices([
            timeItem.createChoice('1 - 3 hours per week'),
            timeItem.createChoice('3 - 5 hours per week'),
            timeItem.createChoice('5 - 8 hours per week'),
            timeItem.createChoice('8+ hours per week (Leadership potential)')
          ])
          .setRequired(true);

  // Q8: Motivation Statement
  var motiveItem = form.addParagraphTextItem();
  motiveItem.setTitle('Why are you interested in volunteering with the Physics Research Council?')
            .setHelpText('Briefly share what you hope to gain or contribute. (A paragraph is fine!)')
            .setRequired(false);

  // Q9: Prior Experience / Skills (Optional)
  var expItem = form.addParagraphTextItem();
  expItem.setTitle('Do you have any past volunteering, design, coding, or physics experience? (Optional)')
         .setHelpText('No experience is required, but mentioning any tools you know (e.g., Canva, Git, Sheets, Python) helps us assign you roles.')
         .setRequired(false);

  // 5. Output links to logs
  var formUrl = form.getEditUrl();
  var publishedUrl = form.getPublishedUrl();
  
  Logger.log('========================================================================');
  Logger.log('SUCCESS: Your Physics Research Council Volunteer Intake Form has been created!');
  Logger.log('========================================================================');
  Logger.log('1. EDIT LINK (Keep this private - use to manage questions/settings):');
  Logger.log(formUrl);
  Logger.log('------------------------------------------------------------------------');
  Logger.log('2. PUBLIC LIVE LINK (Share this link with students to apply):');
  Logger.log(publishedUrl);
  Logger.log('========================================================================');
  
  // Set confirmation message for respondents
  form.setConfirmationMessage('Your application has been received successfully! The Physics Research Council team will review your application and reach out to you via email shortly (physicsresearchcouncil@gmail.com).');
}
