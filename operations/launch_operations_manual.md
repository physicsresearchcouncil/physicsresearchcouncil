# Physics Championship: Launch & Operations Manual
**Physics Research Council | Operational Guide for the Host**

As the autonomous host of **The Physics Championship**, this manual outlines the timeline, cloud-based tools, and automation systems to run the event from volunteer recruitment to award distribution without human intervention or budget.

---

## 1. Operational Timeline

```
+------------------+     +------------------+     +------------------+
|    Weeks 1-2     |     |    Weeks 3-4     |     |    Weeks 5-7     |
|  Recruit Team &  | --> | Sponsor Pitch &  | --> | Open Registration|
|  Onboard Staff   |     | Academic Board   |     | & School Invite  |
+------------------+     +------------------+     +------------------+
                                                                   |
                                                                   v
+------------------+     +------------------+     +------------------+
|     Week 11      |     |    Weeks 9-10    |     |      Week 8      |
| Certificates &   | <-- |   Evaluation &   | <-- |     Round 1:     |
| Hall of Fame     |     |  Advisory Review |     |  Conceptual Quiz |
+------------------+     +------------------+     +------------------+
```

### Phase 1: Onboarding the Volunteer Team (Weeks 1-2)
*   **Action:** Distribute the volunteer intake form across Discord, Reddit, and school boards.
*   **System:** Use the `volunteer_onboarding_system.js` Apps Script in Google Sheets to automatically process applications, assign roles, and email onboarding kits.
*   **Goal:** Build a team of 10-15 student volunteers to manage communications and web updates.

### Phase 2: Sponsor & Advisory Board Onboarding (Weeks 3-4)
*   **Action:** Task the volunteer outreach team with sending cold email proposals to EdTech platforms and scientific publishers, and invitation letters to physics professors.
*   **Goal:** Secure 2-3 in-kind prize sponsors (e.g., e-books, course keys) and 5-6 academic board members to validate exam papers.

### Phase 3: Registration & Promotion (Weeks 5-7)
*   **Action:** Publish the website on GitHub Pages. Open registrations using an automated registration form. Volunteers send invitations to high school and college science departments.
*   **Goal:** Register 500+ participants across Divisions A, B, and C.

### Phase 4: Round 1 Examination (Week 8)
*   **Action:** Open the timed Conceptual Quiz (Round 1) via a Google Form or ClassMarker portal.
*   **Grading:** Automatically graded via Google Sheets. High scorers (top 40%) qualify for the next stage.

### Phase 5: Round 2 & 3 Submissions (Weeks 9-10)
*   **Action:** Deliver the Round 3 Olympiad Theory exam sheets via email. Qualified candidates have 180 minutes to solve and upload a scanned PDF. Simultaneously, candidates can upload their optional Round 2 portfolios.
*   **Grading:** Volunteers sort submissions, and the Scientific Advisory Board grades Round 3 papers and reviews Round 2 portfolios using the grading rubric.

### Phase 6: Awards and Hall of Fame (Week 11)
*   **Action:** Run the `certificate_generator.js` Apps Script to instantly generate and email personalized PDF certificates to medallists and volunteers.
*   **Portal Update:** Update the repository landing page with the names and schools of our division winners.

---

## 2. Cloud Automation Frameworks
To run the event asynchronously with zero budget, we implement two core Google Apps Script automations:

1.  **Volunteer Onboarding Script (`operations/volunteer_onboarding_system.js`):** Process volunteer applications, assign folders, and email a tailored welcome packet based on their selected role.
2.  **Certificate Generator (`operations/certificate_generator.js`):** Link a Google Sheet containing participant scores/medals to a Google Slides certificate template. Automatically exports and emails the signed PDF certificate to each student.
