# JusticeBox

JusticeBox is a platform designed to simplify the consumer complaint process. It helps users quickly convert their everyday grievances into formal legal notices and guides them on the next steps, including finding the appropriate consumer forum.

## How it Works

The workflow of the application is straightforward:

1. Input the Complaint: The user describes what happened in plain language (for example, a delayed delivery, a faulty product, or poor customer service).
2. AI Analysis: Once submitted, the application uses AI to analyze the situation from a consumer rights perspective.
3. Generate Notice: The system automatically drafts a formal legal notice that the user can copy and use directly.
4. Find Jurisdiction: Using the integrated map, users can enter their city or pincode to locate their nearest consumer forum for filing the official complaint.

**Note:** The workflow of the project is fixed and cannot be edited.

## Tech Stack

This project is built using modern web development tools:

* Frontend Framework: React
* Build Tool: Vite
* Styling: Tailwind CSS
* Map Integration: Leaflet and React-Leaflet
* Geocoding: OpenStreetMap Nominatim API
* AI Integration: Groq API 

## Setup Instructions

To run this project locally on your machine, follow these steps.

1. Clone the repository and navigate into the project folder.

2. Install the required dependencies by running:
   npm install

3. You will need a Groq API key for the AI generation to work. Create a file named .env.local in the root directory of the project.

4. Add your API key to this file in the following format:
   VITE_AI_API_KEY=your_api_key_here

5. Start the development server:
   npm run dev

6. Open the local URL provided in your terminal (usually http://localhost:5173 or 5174) to view and use the application.

## Project Structure

The codebase is organized to keep things maintainable:

* src/components: Contains all the modular UI pieces like the Header, Footer, Map, and Results sections.
* src/api: Contains the logic for communicating with external services, primarily the API call for generating the legal notices.
* src/App.jsx: The main application file that ties the components together, manages state, and handles the search logic.
* src/index.css: Contains the base styles and custom configurations.
