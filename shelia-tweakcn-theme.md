# Shelia Theme — tweakcn / shadcn direction

## Intent

This theme is built from Shelia's locked identity:
- calm strategic operator
- premium, high-trust, readable
- stealth-luxury ops console energy
- cyan signal, navy structure, violet phase accent

It should feel:
- sharp but not loud
- futuristic but not gamer-neon
- elegant but not delicate
- branded without sacrificing usability

---

## Locked palette anchors

- **Signal Cyan:** `#39D0D8`
- **Command Navy:** `#18263A`
- **Phase Violet:** `#7A5CFF`

Supporting neutrals:
- `#0D1420`
- `#152235`
- `#223754`
- `#9CB1CB`
- `#EAF2FF`

---

## Recommended theme posture

### Dark mode = primary expression
Dark mode should be the canonical Shelia environment.
It should feel like a composed command surface with luminous signal accents.

### Light mode = secondary expression
Light mode should stay clean and premium, but not become generic SaaS blue.
It should preserve the cyan/navy intelligence and avoid harsh high-contrast white.

---

## shadcn-style CSS variables

Use this as a starting point in a globals.css/theme editor workflow.

```css
:root {
  --background: 210 28% 95%;
  --foreground: 216 28% 17%;

  --card: 210 24% 97%;
  --card-foreground: 216 28% 17%;

  --popover: 210 24% 97%;
  --popover-foreground: 216 28% 17%;

  --primary: 185 67% 54%;
  --primary-foreground: 216 39% 16%;

  --secondary: 210 24% 90%;
  --secondary-foreground: 216 28% 17%;

  --muted: 212 22% 89%;
  --muted-foreground: 214 22% 45%;

  --accent: 185 67% 54%;
  --accent-foreground: 216 39% 16%;

  --destructive: 0 72% 51%;
  --destructive-foreground: 210 40% 98%;

  --border: 214 24% 82%;
  --input: 214 24% 82%;
  --ring: 185 67% 54%;

  --radius: 1rem;

  --chart-1: 185 67% 54%;
  --chart-2: 252 100% 68%;
  --chart-3: 216 39% 16%;
  --chart-4: 200 45% 55%;
  --chart-5: 222 22% 35%;
}

.dark {
  --background: 216 39% 9%;
  --foreground: 210 100% 96%;

  --card: 212 43% 15%;
  --card-foreground: 210 100% 96%;

  --popover: 212 43% 15%;
  --popover-foreground: 210 100% 96%;

  --primary: 185 67% 54%;
  --primary-foreground: 216 39% 16%;

  --secondary: 214 36% 20%;
  --secondary-foreground: 210 100% 96%;

  --muted: 214 36% 20%;
  --muted-foreground: 213 31% 70%;

  --accent: 252 100% 68%;
  --accent-foreground: 210 100% 98%;

  --destructive: 0 63% 48%;
  --destructive-foreground: 210 100% 98%;

  --border: 214 34% 23%;
  --input: 214 34% 23%;
  --ring: 185 67% 54%;

  --chart-1: 185 67% 54%;
  --chart-2: 252 100% 68%;
  --chart-3: 210 100% 96%;
  --chart-4: 198 55% 50%;
  --chart-5: 214 28% 58%;
}
```

---

## Hex role mapping

### Dark mode
- background: `#0D1420`
- foreground: `#EAF2FF`
- card: `#152235`
- border: `#223754`
- primary: `#39D0D8`
- primary-foreground: `#18263A`
- accent: `#7A5CFF`
- muted-foreground: `#9CB1CB`

### Light mode
- background: `#EEF3F7`
- foreground: `#1E2D42`
- card: `#F6F9FC`
- border: `#CBD6E2`
- primary: `#39D0D8`
- primary-foreground: `#18263A`
- accent: `#7A5CFF`
- muted-foreground: `#64758B`

---

## Interaction rules

### Buttons
- primary buttons = signal cyan
- secondary buttons = navy/slate
- violet should be used sparingly for elevated accents, special states, or intelligence/phase moments

### Panels
- panels should feel layered and architectural, not flat
- mild translucency or depth is okay
- avoid excessive glow

### Glow usage
- cyan glow should be subtle and intentional
- use for focus, active state, selected state, or key signal moments only
- avoid full-screen neon wash

### Typography feel
- modern, clean, decisive
- avoid overly playful rounded aesthetic
- aim for executive-tech polish

---

## Theme recommendation

If tweakcn asks for a single strongest expression, choose:
- **dark theme first**
- cyan as primary
- violet as accent only
- medium-to-large radius
- crisp contrast with muted supporting surfaces

This will feel the most like Shelia.

---

## Suggested next move

Use this theme as the visual bridge between:
1. Shelia's avatar/identity
2. the current control UI
3. the upcoming company/logo system

That way the brand starts feeling like one organism instead of disconnected pieces.
