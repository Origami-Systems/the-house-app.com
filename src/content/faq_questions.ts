export type FAQAnswers = {
    name: string;
    questions: { q: string; a: string }[];
};

export const allQuestions: FAQAnswers[] = [
    {
        name: "General",
        questions: [
            {
                q: "What is The House App and what does it do?",
                a: "The House App helps organizations manage houses, events, points, announcements, and friendly competitions in one place.",
            },
            {
                q: "Who is The House App for?",
                a: "The House App is for schools and other organizations that divide members into houses for community activities and friendly competition.",
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
        name: "Authentication & Accounts",
        questions: [
            {
                q: "I can't log in. What should I do?",
                a: "Ask your organization admin to confirm that your account exists and reset your password if needed.",
            },
            {
                q: "How do I reset my password?",
                a: "Open Account, then Manage Account Security to change your password. If you cannot sign in, ask your organization admin to reset it.",
            },
            {
                q: "Can I use the same account for multiple organizations?",
                a: "No, you cannot use the same account for multiple organizations. Each organization requires a separate account.",
            },
        ],
    },
    {
        name: "Announcements & Notifications",
        questions: [
            {
                q: "How do announcements work?",
                a: "Organization admins can send announcements to everyone. Deans and leaders can send house announcements to members of a specific house.",
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
        name: "Guest Users",
        questions: [
            {
                q: "What is a guest user?",
                a: "A guest user is a temporary account that can access your organization without creating a permanent account. Guests have their own account, can receive notifications, participate in games, comment on house points, and sign back in on the same device.",
            },
            {
                q: "How do guests join?",
                a: "Guests join by scanning an invitation QR code or opening an invitation link. Depending on the Guest Group settings, they can either choose a randomly generated name or enter their own name before joining.",
            },
            {
                q: "What is a Guest Group?",
                a: "A Guest Group is a collection of guest users that share the same settings. You can assign a Guest Group to a house, control whether guests can choose their own names, and manage all guests in the group together.",
            },
            {
                q: "Can I limit who joins?",
                a: "Yes. Invitations can have a maximum number of guests, an expiration date, and an optional expiration period for guest accounts after they join.",
            },
            {
                q: "What are Guest Generations?",
                a: "Guest Generations let you invalidate every guest account in a Guest Group at once. Rotating the generation immediately signs out all existing guests and requires them to rejoin using a current invitation.",
            },
            {
                q: "Can guests be assigned to a house?",
                a: "Yes. Guest Groups can be assigned to a house so guests can access house-specific announcements and other house features. If no house is assigned, guests behave like any other user without a house.",
            },
            {
                q: "Can guests sign in again later?",
                a: "Yes. Guests stay signed in on that device until the account expires, the Guest Group's generation changes, or they sign out. After signing out, they need a current invitation to join again.",
            },
            {
                q: "What happens to Group Users?",
                a: "Group Users have been deprecated and will be disabled on November 28, 2026. Existing Group Users continue to work until then, but organizations should move to Guest Groups.",
            },
        ],
    },
    {
        name: "Games & Live Updates",
        questions: [
            {
                q: "How do games work in the app?",
                a: "Games let admins award points while houses compete. Anyone viewing the game page can follow the scores as they change.",
            },
            {
                q: "Who can start a game?",
                a: "Only admins can start a game.",
            },
            {
                q: "I'm having issues with the live updating, what should I do?",
                a: "Refresh the page first. If updates still do not appear, check your connection and try the latest version of another supported browser.",
            },
            {
                q: "What is the recommended way to use a game?",
                a: "Open View Game on a computer connected to the main display. Use a second device to award points. Students can also open View Game on their own devices to follow the score.",
            },
            {
                q: "How do live updates show up for users?",
                a: "The game page updates its scores as admins award points.",
            },
            {
                q: "Why can't I start a game?",
                a: "You might have a game already in progress. Only one game can be active at a time.",
            },
            {
                q: "What happens when a game ends?",
                a: "Everyone watching the game sees a podium with the top three houses. The game points are then added to each house's total.",
            },
        ],
    },
    {
        name: "Year Management",
        questions: [
            {
                q: "What is year management?",
                a: "Year management keeps each academic or calendar year's points and events separate.",
            },
            {
                q: "How do I create a new year?",
                a: "Open Admin, go to Year Management, then select Create New Year.",
            },
            {
                q: "Can I archive previous years?",
                a: "Yes. Creating a new year automatically archives the previous year. Archived years are read-only.",
            },
            {
                q: "How do I switch between years?",
                a: "You cannot switch the active year. Admins can view previous years in the archive.",
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
                a: "The House App uses authenticated accounts and encrypted connections. See our Privacy Policy for details about the data we collect and how we use it.",
            },
            {
                q: "Does the app require an internet connection?",
                a: "Yes. The app needs an internet connection to load and update organization data.",
            },
            {
                q: "What devices does the app support?",
                a: "The House App works in current desktop and mobile web browsers.",
            },
            {
                q: "How do I report a bug or request a feature?",
                a: "You can report bugs or feature requests in the account page under the Support area. If you do not have an account, you can report bugs on the example organization.",
            },
            {
                q: "How often is the app updated?",
                a: "We publish release notes on the Blog when an update changes the user experience.",
            },
            {
                q: "What should I do if the app isn't loading?",
                a: "Refresh the page and check the service status. If the problem continues, contact support with the page you were opening and what happened.",
            },
            {
                q: "Does the app support dark mode?",
                a: "Yes. Use the theme control in the app to switch between light and dark mode.",
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
                a: "Email support@origamisystems.org.",
            },
            {
                q: "How long does support typically take to respond?",
                a: "Response times vary. Include your organization name and a clear description of the problem so we can help faster.",
            },
        ],
    },
];
