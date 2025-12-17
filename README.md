# CDO Jeepney Guide (Frontend)

_"Wag ka mawala sa sariling bayan."_

A modern, user-friendly web application designed to help commuters navigate Cagayan de Oro City's jeepney routes. This frontend application provides an intuitive search interface to find routes based on landmarks, streets, or barangays.

## 🌟 Features

- **Smart Search**: Instantly filter jeepney routes by typing a location (e.g., "Centrio", "Bulua", "Divisoria").
- **Popular Destinations**: Quick access buttons for common destinations.
- **Visual Route Cards**: Clear display of jeepney codes (e.g., R1, C2) and their key stops.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **CDO Themed UI**: A premium aesthetic utilizing the colors of the city (Gold, Green, and White).

## 🛠️ Tech Stack

- **React** (Vite)
- **Tailwind CSS** (v4) for styling
- **SWR** for data fetching
- **Lucide React** for icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- The backend service must be running (usually on port 3000).

### Installation

1.  Navigate to the frontend directory:


    ```bash
    cd frontend
    ```

2.  Install dependencies:


    ```bash
    npm install
    ```

3.  Start the development server:


    ```bash
    npm run dev
    ```

4.  Open your browser and visit `http://localhost:5173`.

## 📂 Project Structure

- `src/components`: Reusable UI components (RouteCard, SearchSection, etc.)
- `src/Homepage`: Main page layout and logic.
- `src/utils`: API configuration and helper functions.
- `src/index.css`: Tailwind configuration and custom theme variables.
