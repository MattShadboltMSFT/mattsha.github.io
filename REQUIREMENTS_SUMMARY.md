# Jays Footy Stats - Requirements Summary

Quick reference for engineering team. See [PRODUCT_SPEC.md](PRODUCT_SPEC.md) for full details.

## Must Have (MVP)

### Data Capture
- Record match details (date, opponent, venue, position)
- Track 11 core statistics per match
- Auto-save functionality
- Edit historical matches

### Core Stats to Track
1. Kicks
2. Handballs  
3. Marks
4. Goals
5. Behinds
6. Tackles
7. Spoils
8. Smothers
9. Interceptions
10. Free kicks for
11. Free kicks against

### Dashboard Views
- Season summary with totals and averages
- Match history list
- Performance trends (visual charts)
- Personal bests highlighted

### Technical Must-Haves
- Mobile responsive (phone primary)
- PWA (installable web app)
- Offline mode support
- Local data storage
- Data export (CSV/PDF)

## UI Requirements

### Match Entry Flow
1. Tap "New Match" button
2. Enter match details (4 fields)
3. Use +/- counters for stats
4. Save (auto-save drafts)

**Target:** Complete entry in under 3 minutes

### Key UI Elements
- Large touch targets (44x44px minimum)
- High contrast for outdoor use
- Stat counters with big numbers
- Visual trend charts
- Card-based match history

### Colors
- Primary: Red (#E21837)
- Secondary: Green (#2C7A3D)
- Accent: Gold (#FFB81C)
- Background: Light gray (#F5F5F5)

## Data Model

### Player
```
{
  name: string
  teamName: string
  season: number
  jerseyNumber: number (optional)
}
```

### Match
```
{
  id: string
  date: date
  opponent: string
  venue: string
  position: string
  quartersPlayed: number (1-4)
  result: 'Win' | 'Loss' | 'Draw'
  stats: {
    kicks: number
    handballs: number
    marks: number
    goals: number
    behinds: number
    tackles: number
    spoils: number
    smothers: number
    interceptions: number
    freesFor: number
    freesAgainst: number
  }
  notes: string (optional)
}
```

## Nice to Have (Future)
- Multiple player profiles
- Team tracking
- Photo attachments
- Social sharing
- Achievement badges
- Cloud backup
- Coach notes

## Constraints
- Season starts April (6-8 week dev timeline)
- Single player mode only (MVP)
- No login required (MVP)
- Works on 3+ year old phones
- No internet required for core functionality

## Success Criteria
- ✅ Track 12+ matches per season
- ✅ Average entry time < 3 minutes
- ✅ Zero data loss
- ✅ High parent/player satisfaction

## Next Steps for Engineering
1. Choose tech stack (React/Vue/etc.)
2. Design database schema
3. Create wireframes/mockups
4. Set up development environment
5. Define sprint plan
6. Establish testing strategy

---

**Questions?** Refer to [PRODUCT_SPEC.md](PRODUCT_SPEC.md) or contact Product Manager.
