# Nester Automation Website Clone

A modern React.js website inspired by Nester Automation, showcasing industrial automation services and solutions.

## Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Component-Based**: Built with reusable React components
- **Interactive**: Smooth animations and hover effects
- **Professional**: Matches the original website's professional appearance

## Sections

- **Header**: Navigation bar with mobile-friendly menu
- **Hero**: Eye-catching banner with call-to-action buttons
- **About Us**: Company information with impressive statistics
- **Services**: Showcase of key competencies and services
- **Core Values**: Company values with engaging visuals
- **Clients**: Client showcase and team joining section
- **Footer**: Contact information and quick links

## Technologies Used

- React 18
- Vite (Build tool)
- TailwindCSS (Styling)
- Unsplash Images (Sample images)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── CoreValues.jsx
│   ├── Clients.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Images
Replace the placeholder images from Unsplash with your own:
- Update image URLs in component files
- Add your own images to the `public` folder

### Content
Update the content in each component file:
- Company information in `About.jsx`
- Services in `Services.jsx`
- Core values in `CoreValues.jsx`
- Client logos in `Clients.jsx`

### Styling
The project uses TailwindCSS with custom colors:
- Primary: Red (#dc2626)
- Secondary: Dark gray (#1f2937)
- Accent: Orange (#f97316)

Modify `tailwind.config.js` to change the color scheme.

## License

This project is for demonstration purposes. Replace with appropriate content for production use.
