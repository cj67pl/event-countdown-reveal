# Event Countdown Envelope 

An interactive event countdown page where users select a date and watch a live countdown.  
When the countdown reaches zero, an animated envelope opens to reveal a message.

---

## Project Overview
This project demonstrates real-time date calculations, DOM updates, and animation-based state changes using vanilla JavaScript and CSS.

The interface guides users from setting an event date to experiencing a visual reveal when the countdown ends.

---

## Core Mechanism
1. User selects or sets an event date
2. Countdown begins immediately
3. Countdown updates live every second
4. When the countdown reaches zero:
   - The envelope animation plays
   - A message is revealed
5. User can reset the countdown or enter a new date

---

## How the Countdown Works (Logic Flow)
1. User opens the page
2. User inputs a future event date
3. JavaScript captures the selected date
4. Current time is compared with the event date using `Date()`
5. Time difference is converted into:
   - Days
   - Hours
   - Minutes
   - Seconds
6. DOM updates every second using `setInterval()`
7. When time difference reaches zero:
   - Countdown stops
   - Envelope opens via CSS animation
   - Message becomes visible

---

## Features
- Event date input (calendar-based)
- Live countdown display (days, hours, minutes, seconds)
- Animated envelope reveal on completion
- Dynamic DOM updates
- Reset or re-input functionality
- Responsive layout

---

## Technologies Used
| Technology | Purpose |
|---------|--------|
| HTML | Structure and semantic layout |
| CSS | Styling and envelope animations |
| JavaScript | Date calculations, timers, DOM updates |

---

## Key Technical Concepts
- JavaScript `Date` object
- Time difference calculations
- `setInterval()` for live updates
- Conditional logic for state changes
- CSS keyframe animations
- Class-based animation triggers

---

## Setup & Usage
```bash
git clone https://github.com/yourusername/event-countdown-envelope.git
