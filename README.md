# Photo Map Pins

An interactive web application that allows users to create location pins on a map and link them to photos from their Google Drive. Perfect for travel logging, photo location tracking, or creating visual location-based stories.

## Features

- Interactive map interface using Leaflet
- Click-to-add pin functionality
- Google Drive integration for photo selection
- Local storage for saving pin data
- Responsive design with Tailwind CSS
- Photo preview and management for each pin
- Real-time pin selection and highlighting

## Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn
- A Google Cloud account
- Git installed on your machine

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/cwilcox0916/photo-map-pins.git

# Navigate to project directory
cd photo-map-pins

# Install dependencies
npm install
```

### 2. Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable the Google Drive API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"

4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized JavaScript origins (e.g., http://localhost:5173 for development)
   - Save your Client ID and API Key

5. Update the credentials in your code:
   - Open `src/components/PhotoPicker.jsx`
   - Replace 'YOUR_API_KEY' with your Google API Key
   - Replace 'YOUR_CLIENT_ID' with your OAuth Client ID

### 3. Environment Setup

1. Create a `.env` file in the root directory:
```env
VITE_GOOGLE_API_KEY=your_api_key
VITE_GOOGLE_CLIENT_ID=your_client_id
```

### 4. Run the Application

```bash
# Start development server
npm run dev

# Navigate to http://localhost:5173 in your browser
```

## Usage Guide

1. Map Navigation:
   - Pan the map by dragging
   - Zoom in/out using scroll wheel or buttons
   - Click anywhere on the map to create a new pin

2. Adding Photos:
   - Click on a pin to select it
   - Sign in with your Google account
   - Click "Pick Photo" to choose from your Google Drive
   - Select photos to attach to the pin

3. Managing Pins:
   - Click on existing pins to view attached photos
   - Photos are saved automatically
   - All data is stored locally in your browser

## Project Structure

```
photo-map-pins/
├── src/
│   ├── components/
│   │   ├── MapComponent.jsx    # Map rendering and pin management
│   │   └── PhotoPicker.jsx     # Google Drive photo integration
│   ├── App.jsx                 # Main application component
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
└── index.html                # HTML template
```

## Troubleshooting

Common issues and solutions:

1. Google Sign-in Issues:
   - Ensure your OAuth credentials are correct
   - Check that your authorized origins match your development URL
   - Clear browser cache and try again

2. Map Display Problems:
   - Make sure Leaflet CSS is properly imported
   - Check console for any JavaScript errors
   - Verify internet connection for map tile loading

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.