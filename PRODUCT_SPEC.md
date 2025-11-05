# Jays Footy Stats - Product Specification

## Product Overview
**Product Name:** Jays Footy Stats  
**Target User:** Parents/coaches of junior AFL players (Under 13's)  
**Season Start:** April  
**Version:** 1.0  

## Purpose
AFL stat tracking application for individual junior players to monitor performance, improvement, and development throughout the season.

---

## User Personas

### Primary User: Parent/Coach
- Non-technical user who wants simple stat entry
- Watches games and can record stats during or after matches
- Wants to track player development over time
- Needs visual representation of progress

### Secondary User: Young Player (U13)
- Wants to see their own stats and improvement
- Motivated by visual progress indicators
- Limited attention span - needs simple, engaging interface

---

## Core Features

### 1. Match Recording
- **Quick stat entry during/after games**
  - Date, opponent, venue
  - Playing position(s)
  - Time on ground (quarters played)
  - Weather conditions (optional)

### 2. Performance Statistics
**Offensive Stats:**
- Kicks
- Handballs
- Marks
- Goals
- Behinds
- Tackles

**Defensive Stats:**
- Spoils
- Smothers
- Interceptions

**Additional Stats:**
- Free kicks for
- Free kicks against
- 1%ers (team-first actions)

### 3. Season Dashboard
- Total games played
- Aggregate statistics across season
- Averages per game
- Trend charts showing improvement
- Personal bests highlighted

### 4. Match History
- Chronological list of all games
- Quick view of key stats per match
- Ability to edit past match data
- Compare performance across matches

### 5. Data Export
- Export season data as CSV/PDF
- Shareable summary reports
- End-of-season report card

### 6. Test Data Import
- **Import dummy data for testing and development**
  - Load 2025 season fixture data (17 matches)
  - Includes match dates, opponents, venues, and results
  - Auto-generate realistic player statistics for each match
  - Based on actual Mordi-Brae U12 Mixed WILLIAMS fixture
  - Useful for testing UI/dashboard before season starts
  - Clear/reset test data functionality
  - Test data clearly marked/separated from real matches
  - See [TEST_DATA_SPEC.md](TEST_DATA_SPEC.md) for complete specification

---

## UI/UX Requirements

### Design Principles
- **Simple First:** Minimal clicks to record stats
- **Mobile Optimized:** Primary use case is on phone at games
- **Kid Friendly:** Visual, colorful, encouraging
- **Fast Entry:** Can record full match in under 3 minutes

### Key Screens

#### Home Screen
- Quick "New Match" button (primary action)
- Current season summary card
- Recent matches list (last 3)
- Navigation to full history

#### Match Entry Screen
- Top section: Match details (opponent, date, position)
- Main section: Stat counters with +/- buttons
- Bottom: Save/Cancel buttons
- Auto-save draft functionality

#### Player Dashboard
- Hero stats (games, goals, total kicks)
- Performance trends (line/bar charts)
- Achievement badges (milestones reached)
- Season progress indicator

#### Match History
- Scrollable list of matches
- Card format showing: date, opponent, key stats
- Tap to view full match details
- Swipe actions: edit, delete

### Color Scheme
- Primary: AFL red (#E21837) or team colors option
- Secondary: Grass green (#2C7A3D)
- Accent: Gold/yellow for achievements (#FFB81C)
- Background: Light gray (#F5F5F5)
- Text: Dark gray/black for readability

### Typography
- Headers: Bold, large, easy to read
- Stats: Extra large numbers for quick scanning
- Labels: Clear, concise

---

## Data Model

### Player Profile
- Player name
- Team name
- Season (year)
- Jersey number (optional)
- Photo (optional)

### Match Record
- Match ID (unique)
- Date
- Opponent
- Venue
- Position(s) played
- Quarters played (1-4)
- Weather (optional)
- Result (Win/Loss/Draw)
- Score
- Individual stats (all categories)
- Notes (free text)
- Created/modified timestamps

### Season
- Season ID
- Year
- Start date
- End date
- Team name
- Total matches

---

## Technical Considerations

### Platform Priority
1. **Web App (PWA)** - Works on all devices, installable
2. Mobile responsive design
3. Offline capability for stat entry at grounds with poor reception

### Data Storage
- Local storage with cloud backup option
- No login required for MVP (single player mode)
- Future: Multi-player/team accounts

### Performance
- Instant stat counter updates
- Page load under 2 seconds
- Works on older devices (3+ year old phones)

### Accessibility
- Large touch targets (minimum 44x44px)
- High contrast for outdoor visibility
- Screen reader compatible

---

## Non-Functional Requirements

### Usability
- No training required for basic stat entry
- Intuitive navigation
- Error prevention (confirm before deleting)

### Reliability
- No data loss (auto-save)
- Graceful handling of offline mode
- Data validation on entry

### Privacy
- Data stored locally by default
- No personal data shared without consent
- GDPR compliant (if cloud features added)

---

## Future Enhancements (Out of Scope v1.0)
- Multiple player profiles
- Team-wide stat tracking
- Photo/video attachment per match
- Social sharing features
- Comparison with team/league averages
- Coach feedback/notes system
- Integration with official AFL stats
- Gamification/achievement system expanded

---

## Success Metrics
- Complete season tracking for at least 12 matches
- Average stat entry time under 3 minutes per match
- Zero data loss reports
- Parent/player satisfaction with visual progress tracking

---

## Timeline Considerations
- Season starts in April
- Need MVP ready by late March for pre-season practice matches
- Development timeline: 6-8 weeks recommended

---

## Open Questions for Engineering
1. Preferred tech stack (React, Vue, etc.)?
2. Cloud provider preference for backup features?
3. Analytics integration needed?
4. Testing strategy for mobile devices?
5. Deployment approach (hosting)?

---

**Document Version:** 1.0  
**Created:** November 2025  
**Owner:** Product Manager
