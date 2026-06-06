import os
import csv
import base64
import pickle
from email.mime.text import MIMEText
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/gmail.compose']

def get_gmail_service():
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
            
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                print("\n[ERROR] 'credentials.json' not found!")
                print("To run this script, please do the following:")
                print("1. Go to Google Cloud Console (https://console.cloud.google.com/).")
                print("2. Create a project and enable the Gmail API.")
                print("3. Configure the OAuth Consent Screen (set publishing status to Testing and add your email as a test user).")
                print("4. Go to Credentials -> Create Credentials -> OAuth client ID (choose Desktop App).")
                print("5. Download the JSON file, rename it to 'credentials.json', and place it in the same directory as this script.")
                return None
            
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
            
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return build('gmail', 'v1', credentials=creds)

def create_draft(service, to_email, subject, body):
    try:
        message = MIMEText(body)
        message['to'] = to_email
        message['subject'] = subject
        raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode('utf-8')
        
        draft = {
            'message': {
                'raw': raw_message
            }
        }
        
        draft_res = service.users().drafts().create(userId='me', body=draft).execute()
        print(f"Created draft for {to_email} (Draft ID: {draft_res['id']})")
        return draft_res
    except Exception as error:
        print(f"An error occurred while creating draft for {to_email}: {error}")
        return None

def main():
    csv_file = os.path.join(os.path.dirname(__file__), 'physics_contacts.csv')
    if not os.path.exists(csv_file):
        print(f"[ERROR] Contacts file not found at {csv_file}")
        return

    service = get_gmail_service()
    if not service:
        return

    print("\nReading contacts and creating drafts...")
    with open(csv_file, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row.get('Name', '').strip()
            inst = row.get('Institution', '').strip()
            email = row.get('Email', '').strip()
            dept = row.get('Department', '').strip()

            # Skip general support/outreach lines
            if 'irisnationalfair' in email or not name or not email:
                continue

            # Personalize subject and body
            subject = f"Academic Advisory Invitation: Physics Research Council - {inst}"
            body = (
                f"Dear Prof. {name},\n\n"
                f"I hope this email finds you well.\n\n"
                f"I am reaching out on behalf of the Physics Research Council, a youth-led scientific "
                f"outreach and education initiative. We are currently organizing our upcoming national competitive "
                f"examinations and student research pipelines.\n\n"
                f"Given your prominent work in physics/physical sciences at {inst}, we would be deeply honored to "
                f"invite you to join our honorary Scientific Advisory Committee. As a committee fellow, you would assist "
                f"us with periodic quality reviews of physics competition papers or student research portfolio entries. "
                f"The commitment is entirely remote and requires under 2-4 hours per semester.\n\n"
                f"You can learn more about our goals and initiatives on our website: "
                f"https://physicsresearchcouncil.github.io/physicsresearchcouncil\n\n"
                f"If you would be open to advising us or have any questions, please let us know. We would be happy to "
                f"share our detailed operational syllabus and program guide.\n\n"
                f"Thank you for your time and your continued dedication to physics education.\n\n"
                f"Warm regards,\n\n"
                f"Physics Research Council Office\n"
                f"physicsresearchcouncil@gmail.com\n"
            )

            create_draft(service, email, subject, body)

    print("\nDone creating all drafts. Check your Gmail Drafts folder!")

if __name__ == '__main__':
    main()
