// Configuration for your website
const CONFIG = {
    ADMIN_PASSWORD: 'tomfix123', // Change this to your preferred password
    WHATSAPP_NUMBER: '+254790782862',
    IMAGE_SERVICE: 'imgbb' // Options: 'imgbb', 'cloudinary'
};

// Sample posters data - this is where all posters are stored
let posters = [
    {
        id: 1,
        title: "Business Conference",
        category: "professional",
        image: "https://i.ibb.co/0jZy6kR/business-poster.jpg",
        description: "Professional poster for corporate events and business conferences.",
        tags: ["business", "corporate", "event"],
        downloadUrl: "https://example.com/download1.pdf",
        size: "A2",
        format: "PDF",
        dateAdded: "2025-01-15"
    },
    {
        id: 2,
        title: "Birthday Celebration", 
        category: "private",
        image: "https://i.ibb.co/8XqkQ6T/birthday-poster.jpg",
        description: "Colorful birthday poster perfect for personal celebrations.",
        tags: ["birthday", "celebration", "personal"],
        downloadUrl: "https://example.com/download2.pdf",
        size: "A3", 
        format: "JPG",
        dateAdded: "2025-01-10"
    }
];
