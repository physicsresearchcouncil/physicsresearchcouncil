/**
 * Google Apps Script for On Form Submit Trigger
 * 
 * HOW TO ATTACH TO YOUR FORM:
 * 1. Open your Volunteer Intake Form in Google Forms.
 * 2. Click the three dots -> "Script editor".
 * 3. Replace all default code with this script.
 * 4. Save and click the "Triggers" (alarm clock icon) in the left panel.
 * 5. Click "+ Add Trigger". Select:
 *    - Choose which function to run: "onVolunteerSubmit"
 *    - Choose which deployment should run: "Head"
 *    - Select event source: "From form"
 *    - Select event type: "On form submit"
 * 6. Save and authorize permissions. Now, every submission triggers this script!
 */

function onVolunteerSubmit(e) {
  try {
    // 1. Get respondent answers
    var responses = e.response.getItemResponses();
    var email = e.response.getRespondentEmail();
    
    var name = "";
    var academicLevel = "";
    var selectedRole = "";
    
    // Loop through answers to match question titles
    for (var i = 0; i < responses.length; i++) {
      var itemResponse = responses[i];
      var question = itemResponse.getItem().getTitle();
      var answer = itemResponse.getResponse();
      
      if (question.indexOf("Full Name") !== -1) {
        name = answer;
      } else if (question.indexOf("Academic Level") !== -1) {
        academicLevel = answer;
      } else if (question.indexOf("Preferred Volunteering Roles") !== -1) {
        // Since it's a checkbox, it can be an array or comma-separated string
        selectedRole = Array.isArray(answer) ? answer.join(", ") : answer;
      }
    }
    
    // Fallback if email collection is disabled (recommended to keep enabled)
    if (!email) {
      email = e.response.getRespondentEmail();
    }
    
    // 2. Draft the role-specific onboarding content
    var roleKit = getRoleWelcomeKit(selectedRole);
    
    // 3. Compose Email
    var subject = "Welcome to the Physics Research Council, " + name + "! (Volunteer Onboarding)";
    
    var body = "Dear " + name + ",\n\n" +
               "Thank you for volunteering with the Physics Research Council! We are thrilled to welcome you to our international team. " +
               "Our mission is to make advanced physics resources and competitions open to students everywhere, and your contribution will directly make this possible.\n\n" +
               "Based on your application, you selected the following volunteering interest(s):\n" +
               ">> " + selectedRole + "\n\n" +
               "------------------------------------------------------------------------\n" +
               "YOUR ONBOARDING & DEPLOYMENT KIT\n" +
               "------------------------------------------------------------------------\n" +
               roleKit.instructions + "\n\n" +
               "------------------------------------------------------------------------\n" +
               "NEXT STEPS\n" +
               "------------------------------------------------------------------------\n" +
               "1. Read the Official Repository and Landing Page assets: \n" +
               "   https://github.com/physicsresearchcouncil/physicsresearchcouncil\n" +
               "2. Reply to this email (physicsresearchcouncil@gmail.com) confirming that you have received your welcome kit.\n" +
               "3. Look out for a calendar invite for our monthly operations review.\n\n" +
               "Welcome aboard! Let's build an amazing championship.\n\n" +
               "Warm regards,\n\n" +
               "The Host & Operations System\n" +
               "Physics Research Council\n" +
               "physicsresearchcouncil@gmail.com";
               
    // 4. Send Email
    if (email) {
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: body
      });
      Logger.log("Onboarding email successfully sent to: " + email);
    } else {
      Logger.log("Error: Respondent email not captured.");
    }
    
  } catch (err) {
    Logger.log("Error executing onVolunteerSubmit: " + err.toString());
  }
}

/**
 * Returns customized onboarding instructions based on the user's selected role.
 */
function getRoleWelcomeKit(roleString) {
  var instructions = "";
  
  if (roleString.indexOf("Outreach") !== -1) {
    instructions = "ROLE: Outreach & Communications Officer\n" +
                   "- Your focus is to reach out to schools, physics clubs, and corporate sponsors.\n" +
                   "- Action Item: Open the 'outreach_templates' directory in our GitHub repository.\n" +
                   "- Task 1: Compile a spreadsheet of 20 high school and college physics departments in your region.\n" +
                   "- Task 2: Review the 'sponsor_proposals.md' template. We will start sending these out next week.";
  } 
  else if (roleString.indexOf("Social Media") !== -1 || roleString.indexOf("Graphic Design") !== -1) {
    instructions = "ROLE: Public Relations & Design Lead\n" +
                   "- Your focus is to create high-quality graphics and manage social media announcements.\n" +
                   "- Action Item: Review the color palette and aesthetics detailed in 'styles.css'.\n" +
                   "- Task 1: Draft three promotional graphics (square format) for the launch of the Physics Championship.\n" +
                   "- Task 2: Create a Figma or Canva template for our digital Certificates of Participation.";
  }
  else if (roleString.indexOf("Web Development") !== -1) {
    instructions = "ROLE: Web & Systems Administrator\n" +
                   "- Your focus is to maintain our landing page and set up database/registration pipelines.\n" +
                   "- Action Item: Review 'index.html', 'styles.css', and 'app.js' in our codebase.\n" +
                   "- Task 1: Set up a local test environment for the landing page.\n" +
                   "- Task 2: Integrate our newly created Google Form link into the 'Apply Instantly' buttons on the homepage.";
  }
  else if (roleString.indexOf("Grading") !== -1 || roleString.indexOf("Problem Design") !== -1) {
    instructions = "ROLE: Physics Scorer & Academic Committee\n" +
                   "- Your focus is to review answers for the Round 3 Olympiad and help format sample question sheets.\n" +
                   "- Action Item: Open the 'sample_problems' folder in our repository.\n" +
                   "- Task 1: Review the detailed derivations in 'round3_olympiad_problems.md' for accuracy.\n" +
                   "- Task 2: Draft one original physics question (with solution) matching the Round 3 syllabus.";
  }
  else {
    instructions = "ROLE: General Operations Associate\n" +
                   "- Your focus is to support event logistics, manage Q&A boards, and help coordinate files.\n" +
                   "- Task 1: Read 'competition_syllabus_and_rules.md' to thoroughly understand the structure of the competition.\n" +
                   "- Task 2: Monitor our general mailbox (physicsresearchcouncil@gmail.com) for inquiries from schools and students.";
  }
  
  return {
    instructions: instructions
  };
}
