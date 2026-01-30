export interface FAQAnswers {
    name: string;
    questions: { q: string; a: string }[];
}

export const allQuestions: FAQAnswers[] = [
    {
        name: "General",
        questions: [
            {
                q: "What is The House App and what does it do?",
                a: "The House App is a platform that helps organizations implement and manage a house system, allowing members to join houses, participate in events, track points, and engage in friendly competition.",
            },
            {
                q: "Who is The House App for?",
                a: "The House App is designed for schools, organizations, and communities that want to foster engagement, competition, and camaraderie among their members through a house system.",
            },
            {
                q: "How can I start using the app?",
                a: "To start using The House App, you need to contact us using the contact form on our website. We will help you set up your organization and get started.",
            },
        ],
    },
    {
        name: "House System",
        questions: [
            {
                q: "What is a house system?",
                a: "A house system is a way to divide members of an organization into smaller groups, or 'houses,' to encourage friendly competition and community spirit.",
            },
        ],
    },
    {
        name: "Authentication / Accounts",
        questions: [
            {
                q: "I can’t log in, what should I do?",
                a: "Contact your organization admin to ensure you have an account set up and that your credentials are correct. Or ask them to reset or password.",
            },
            {
                q: "How do I reset my password?",
                a: "You can reset your password on the account page under the 'Manage Account Security' page. If you are locked out of your account, or contact your admin to have your password reset.",
            },
            {
                q: "Can I use the same account for multiple organizations?",
                a: "No, you cannot use the same account for multiple organizations. Each organization requires a separate account.",
            },
        ],
    },
    {
        name: "Announcements / Notifications",
        questions: [
            {
                q: "How do announcements work?",
                a: "Announcements are messages sent by organization admins to all members of the organization. They appear in the announcements section of the app. Deans or Leaders are able to send House announcements that go just to a specific house.",
            },
            {
                q: "Why am I not receiving notifications?",
                a: "You may have notifications disabled in your account settings or on your device. Please check both to ensure notifications are enabled.",
            },
            {
                q: "How do I enable or disable notifications?",
                a: "You can enable or disable notifications in the account settings under the Notifications section.",
            },
        ],
    },
    {
        name: "Calendar",
        questions: [
            {
                q: "How do I add an event to the calendar?",
                a: "You can add an event to the calendar by clicking the 'Add Event' button on the calendar page and filling out the event details.",
            },
        ],
    },
    {
        name: "Games / Live Updates",
        questions: [
            {
                q: "How do games work in the app?",
                a: "Games allow admins to award points to houses in real time. They are best used on a game where Houses are competing each other. Users can watch the game page to see scores update instantly.",
            },
            {
                q: "Who can start a game?",
                a: "Only admins can start a game.",
            },
            {
                q: "I'm having issues with the live updating, what should I do?",
                a: "Try refreshing or using another browser. Any Chromium browser work best and are more reliable.",
            },
            {
                q: "What is the recommended way to use a game?",
                a: "An admin could have two devices, a computer connected to a screen or Jumbotron for all to see, and a phone to add points to the houses. The computer would be on the View Game page. Every student can be on the View Game page too. Any points added will be updated live.",
            },
            {
                q: "How do live updates show up for users?",
                a: "Live updates appear in real-time during a game, providing players with instant feedback and information about the game's progress.",
            },
            {
                q: "Why can’t I start a game?",
                a: "You might have a game already in progress. Only one game can be active at a time.",
            },
            {
                q: "What happens when a game ends?",
                a: "All users watching the game will see a podium with the top three points. Then the points added to each house.",
            },
        ],
    },
    {
        name: "Year Management",
        questions: [
            {
                q: "What is year management?",
                a: "Year management allows organization admins to create and manage different academic or calendar years within the app, organizing events, points, and activities specific to each year.",
            },
            {
                q: "How do I create a new year?",
                a: "Organization admins can create a new year by navigating to the Year Management section in the admin page and clicking on 'Create New Year' under the 'Year Management' section.",
            },
            {
                q: "Can I archive previous years?",
                a: "The app will automatically archive previous years when a new year is created. Archived years can be viewed but not modified.",
            },
            {
                q: "How do I switch between years?",
                // a: "You can not switch between years. Admins can only view previous years in an archived state."
                a: "You can not switch between years.",
            },
            {
                q: "What happens to points and events from previous years?",
                a: "Points and events from previous years are archived and can be viewed in a read-only format. They do not affect the current year's standings.",
            },
            {
                q: "Can I delete a year?",
                a: "If you need a year deleted, please contact support.",
            },
            {
                q: "Can I undo creating a new year?",
                a: "If this is absolutely necessary, please contact support.",
            },
        ],
    },
    {
        name: "Technical",
        questions: [
            {
                q: "Is my data secure?",
                a: "Yes, your data is secure. We use industry-standard security practices to protect your information.",
            },
            {
                q: "Does the app require an internet connection?",
                a: "Yes, the App requires an internet connection to function properly.",
            },
            {
                q: "What devices does the app support?",
                a: "The House App supports any device with a web browser and internet connection.",
            },
            {
                q: "How do I report a bug or request a feature?",
                a: "You can report bugs or feature requests in the account page under the Support area. If you do not have an account, you can report bugs on the example organization.",
            },
            {
                q: "How often is the app updated?",
                a: "The app is updated regularly to fix bugs, improve performance, and add new features.",
            },
            {
                q: "What should I do if the app isn’t loading?",
                a: "Try refreshing the page or clearing your browser cache. If the problem persists, check the status page, or contact support.",
            },
            {
                q: "Does the app support dark mode?",
                a: "Yes, the app supports dark mode. You can enable it in your account settings.",
            },
            {
                q: "Does the app work offline?",
                a: "No, the app does not work offline. An internet connection is required to access all features and data.",
            },
        ],
    },
    {
        name: "Support",
        questions: [
            {
                q: "How can I contact support?",
                a: "Email support@origamisystems.org",
            },
            {
                q: "How long does support typically take to respond?",
                a: "Support typically responds within 24-48 hours on business days.",
            },
        ],
    },
];
