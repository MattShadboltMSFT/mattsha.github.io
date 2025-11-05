# Test Data Specification

## Purpose
Define the test data import feature for development, testing, and demonstration purposes using real fixture data from the 2025 season.

---

## Source Data: 2025 Season Fixture

### Team
**Mordi-Brae U12 Mixed WILLIAMS**  
**League:** South Metro Junior Football League (SMJFL)  
**Season:** 2025  
**Total Matches:** 17 (15 home & away + 2 finals)

### Match Schedule

| Round | Date | Time | Opponent | Venue | Score | Result |
|-------|------|------|----------|-------|-------|--------|
| 1 | Sun, 27 Apr 25 | 01:00 PM | Hampton Rovers U12 Mixed GREEN | Castlefield Reserve 1 | 53-15 (7.11-2.3) | Won by 38 |
| 2 | Sun, 04 May 25 | 09:30 AM | Ormond U12 Mixed MORRISSEY | Walter Galt Reserve 1 | 69-9 (0.0-1.3) | Won by 60 |
| 3 | Sun, 11 May 25 | 10:00 AM | Bentleigh U12 Mixed PARKINSON | King George Reserve 1 | 80-20 (0.0-3.2) | Won by 60 |
| 4 | Sun, 18 May 25 | 09:30 AM | E Brighton Vampires U12 Mixed BULL | Walter Galt Reserve 1 | 43-63 (6.7-10.3) | Lost by 20 |
| 5 | Sun, 25 May 25 | 12:20 PM | East Malvern U12 Mixed HIGGINS | Basil Reserve (Darling Park) 1 | 45-18 (7.3-3.0) | Won by 27 |
| 6 | Sun, 01 Jun 25 | 08:00 AM | East Sandringham Zebbies U12 Mixed BRUSHFIELD | Walter Galt Reserve 1 | 34-42 (5.4-6.6) | Lost by 8 |
| 7 | Sun, 15 Jun 25 | 08:30 AM | SMDJFC U12 Mixed EARL | Lindsay Hasset Oval 1 | 60-0 (0.0-0.0) | Won by 60 |
| 8 | Sun, 22 Jun 25 | 09:30 AM | Hampton Rovers U12 Mixed GREEN | Walter Galt Reserve 1 | 54-19 (8.6-3.1) | Won by 35 |
| 9 | Sun, 29 Jun 25 | 08:30 AM | Ormond U12 Mixed MORRISSEY | E.E. Gunn Reserve 1 | 60-0 (0.0-0.0) | Won by 60 |
| 10 | Sun, 20 Jul 25 | 09:30 AM | Beaumaris U12 Mixed SHARKS | Walter Galt Reserve 1 | 81-29 (12.9-4.5) | Won by 52 |
| 11 | Sun, 27 Jul 25 | 09:30 AM | E Brighton Vampires U12 Mixed BULL | Walter Galt Reserve 1 | 13-33 (1.7-4.9) | Lost by 20 |
| 12 | Sun, 03 Aug 25 | 09:30 AM | East Malvern U12 Mixed HIGGINS | Walter Galt Reserve 1 | 46-41 (7.4-6.5) | Won by 5 |
| 13 | Sun, 10 Aug 25 | 12:30 PM | East Sandringham Zebbies U12 Mixed BRUSHFIELD | RG Chisholm Reserve | 44-18 (6.8-2.6) | Won by 26 |
| 14 | Sun, 17 Aug 25 | 02:00 PM | SMDJFC U12 Mixed EARL | Warwick Armstrong Oval 1 | 70-21 (10.10-3.3) | Won by 49 |
| 15 | Sun, 24 Aug 25 | 08:30 AM | Hampton Rovers U12 Mixed GREEN | Castlefield Reserve 1 | 68-8 (0.0-0.0) | Won by 60 |
| SF | Sun, 31 Aug 25 | 08:30 AM | East Sandringham Zebbies U12 Mixed BRUSHFIELD | RG Chisholm Reserve | 77-25 (12.5-4.1) | Won by 52 |
| GF | Sun, 07 Sep 25 | 12:10 PM | E Brighton Vampires U12 Mixed BULL | King George Reserve 1 | 36-20 (5.6-2.8) | Won by 16 |

**Season Record:** 14 wins, 3 losses

---

## Test Data Generation Requirements

### Match Data Structure
Each imported match should include:

**Match Details:**
- Date (from fixture)
- Opponent (from fixture)
- Venue (from fixture)
- Result (Win/Loss/Draw - from fixture)
- Team score (from fixture)
- Opposition score (from fixture)

**Generated Player Statistics (Randomized but Realistic):**
- Kicks: 5-15 per match
- Handballs: 3-10 per match
- Marks: 2-8 per match
- Goals: 0-4 per match (correlate with team score)
- Behinds: 0-3 per match
- Tackles: 3-8 per match
- Spoils: 0-5 per match
- Smothers: 0-2 per match
- Interceptions: 1-5 per match
- Free kicks for: 0-3 per match
- Free kicks against: 0-2 per match

**Additional Fields (Optional):**
- Position: Rotate between "Forward", "Midfield", "Back", "Ruck"
- Quarters played: Usually 4 (full game)
- Notes: Can leave empty or add "Test data" marker

---

## Implementation Approach

### Option 1: JSON Import
Create a JSON file with match data that can be imported:

```json
{
  "season": 2025,
  "team": "Mordi-Brae U12 Mixed WILLIAMS",
  "player": "Jay",
  "matches": [
    {
      "date": "2025-04-27",
      "opponent": "Hampton Rovers U12 Mixed GREEN",
      "venue": "Castlefield Reserve",
      "result": "Win",
      "teamScore": 53,
      "opponentScore": 15,
      "position": "Midfield",
      "quartersPlayed": 4,
      "stats": {
        "kicks": 12,
        "handballs": 8,
        "marks": 5,
        "goals": 2,
        "behinds": 1,
        "tackles": 6,
        "spoils": 3,
        "smothers": 1,
        "interceptions": 4,
        "freesFor": 2,
        "freesAgainst": 1
      }
    }
  ]
}
```

### Option 2: CSV Import
Simple CSV format:

```csv
Date,Opponent,Venue,Result,TeamScore,OpponentScore,Position,Kicks,Handballs,Marks,Goals,Behinds,Tackles
2025-04-27,Hampton Rovers GREEN,Castlefield Reserve,Win,53,15,Midfield,12,8,5,2,1,6
```

### Option 3: Built-in Test Data Generator
- Pre-populate button in settings
- Select "2025 Season Fixture"
- Automatically generates 17 matches with randomized stats
- Can regenerate with different random stats

---

## UI/UX for Test Data

### Import Screen
- Accessible from Settings or Development menu
- Clear warning: "This will add test data to your matches"
- Options:
  - Load 2025 season fixture (17 matches)
  - Clear all test data
  - Generate with random stats

### Visual Indicators
- Test matches marked with icon/badge
- Option to hide/show test data
- Easy way to delete all test data at once

### Safety Features
- Confirmation dialog before import
- Separate test data from real data (flag in database)
- Cannot accidentally export test data without warning
- Clear all test data with one action

---

## Use Cases

### 1. Development Testing
Developer loads fixture data to test dashboard visualizations with realistic match count and variety of results.

### 2. Demo/Presentation
Product manager shows stakeholders a fully populated app with season trends, win/loss record, and statistical averages.

### 3. User Acceptance Testing
Parents/coaches can explore the app with data before the season starts to understand features.

### 4. Pre-Season Setup
User imports upcoming fixture dates/opponents as placeholders, then fills in stats after each match.

---

## Technical Implementation Notes

### Data Storage
- Add `isTestData: boolean` flag to match records
- Filter test data in exports unless explicitly included
- Provide API/function to clear all test data

### Stat Generation Algorithm
```javascript
// Example: Generate stats that correlate with match result
function generateStats(matchResult, teamScore) {
  const baseKicks = matchResult === 'Win' ? 10-15 : 5-10;
  const goalsScored = Math.floor(teamScore / 18); // Estimate player contribution
  // ... generate other stats with realistic ranges
}
```

### Performance Considerations
- Bulk insert for efficiency
- Don't block UI during import
- Show progress indicator for large imports

---

## Acceptance Criteria

- ✅ Can import all 17 matches from 2025 fixture
- ✅ Each match has realistic player statistics
- ✅ Dashboard displays trends correctly with test data
- ✅ Test data is clearly marked/identifiable
- ✅ Can clear all test data with single action
- ✅ Test data doesn't interfere with real match entry
- ✅ Export functions handle test data appropriately

---

## Future Enhancements
- Import from PlayHQ URL directly
- Import previous seasons
- Custom stat ranges for generation
- Multiple players/teams
- Share test data configurations

---

**Note:** This feature is intended for development and testing. Production app should make it easy for users to remove test data before entering real match statistics.
