# Jays Footy Stats

An AFL statistics tracking Progressive Web App (PWA) for junior Under 13's players. Track performance, view trends, and export season reports.

## Features

- ✅ **Match Recording** - Quick stat entry with +/- counters
- ✅ **Season Dashboard** - Visual performance trends with charts
- ✅ **Match History** - Complete match list with edit/delete
- ✅ **Personal Bests** - Track career highs across all stats
- ✅ **Data Export** - CSV and PDF season reports
- ✅ **Test Data** - Load 2025 fixture data for testing
- ✅ **Offline Support** - Works without internet (PWA)
- ✅ **Mobile First** - Optimized for phone use at games

## Stats Tracked

- Kicks & Handballs
- Marks & Tackles
- Goals & Behinds
- Spoils, Smothers & Interceptions
- Free Kicks (For/Against)

## Tech Stack

- **Framework:** React 18 with Vite
- **Routing:** React Router DOM v6
- **Storage:** IndexedDB via Dexie.js
- **Charts:** Chart.js with react-chartjs-2
- **Styling:** Tailwind CSS v4
- **PWA:** vite-plugin-pwa with Workbox
- **Export:** jsPDF + jspdf-autotable
- **Date Handling:** date-fns

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/      # Reusable UI components
├── context/         # React Context (AppContext)
├── data/           # Test fixture data
├── db/             # Database schema and models
├── pages/          # Page components (Home, Dashboard, etc.)
├── services/       # Business logic (matchService, exportService)
└── App.jsx         # Main app with routing
```

## Usage

### Adding a Match

1. Click "New Match" button
2. Enter match details (opponent, date, venue)
3. Use +/- buttons to record stats
4. Save match

### Test Data

Load test data to see the app with sample matches:

1. On home page, click "Load Test Data"
2. 17 matches from 2025 fixture will be added
3. View dashboard and reports with realistic data
4. Clear test data anytime without affecting real matches

### Exporting Data

From the Dashboard:
- Click "Export CSV" for spreadsheet
- Click "Export PDF" for printable report

## Deployment

The app is a Progressive Web App (PWA) and can be deployed to:

- **Vercel** - `vercel deploy`
- **Netlify** - Connect GitHub repo
- **GitHub Pages** - Build and deploy dist folder

## Offline Support

The app uses a service worker to cache assets and work offline:
- All pages work without internet
- Data stored locally in IndexedDB
- PWA can be installed on mobile devices

## Browser Support

- Chrome/Edge (latest)
- Safari (iOS 14+)
- Firefox (latest)
- Android Chrome (latest 2 versions)

## License

This project is for personal use.

## Season Timeline

- **Development:** 6-8 weeks
- **Target Completion:** Late March
- **Season Start:** April 2025

---

Built with ❤️ for junior AFL players and their families.
