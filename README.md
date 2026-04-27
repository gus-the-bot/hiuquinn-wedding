# Wedding Invite (Vite + React)

A single-page Vietnamese wedding invitation, rebuilt from [cinelove.me/template/thiep-cuoi-39](https://cinelove.me/template/thiep-cuoi-39) as a generic template.

All content (couple names, dates, families, venue, timeline, RSVP endpoint, background music) is driven by a single config file so you can adapt the site to any wedding without touching component code.

## Stack

- [Vite](https://vitejs.dev) + React 19 + TypeScript
- Plain CSS (no CSS-in-JS / Tailwind) — see `src/styles/`
- Google Fonts used as stand-ins for Cinelove's licensed display fonts

## Structure

```
public/assets/
  photos/    cover, bride, groom, hero photos
  icons/     heart, play, flowchart icons
  elements/  timeline bullet glyphs
  audio/     background music

src/
  App.tsx                  Main layout (vertical stack of sections)
  main.tsx                 Entry point
  config/site.config.ts    All editable content
  components/
    AudioToggle.tsx        Sticky play/pause button
    sections/
      Cover.tsx            "Save The Date" hero with bride/groom names
      Calendar.tsx         Month grid with wedding day highlighted
      Person.tsx           Bride / groom portrait + name + birthday
      LoveStory.tsx        Paper-note love story
      Families.tsx         Nhà Trai / Nhà Gái columns
      InviteHero.tsx       Big script names above date
      InviteDetails.tsx    Day number / month / year / venue / hero photo
      Timeline.tsx         Time-of-day schedule
      Rsvp.tsx             Attend yes/no form (optional POST endpoint)
      LoveBox.tsx          Send a wish
      Countdown.tsx        Live countdown to the wedding
  styles/
    global.css             Fonts, resets, CSS variables
    sections.css           Per-section styles
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Customize

Edit `src/config/site.config.ts` — every piece of text, date, photo path, and the optional RSVP POST endpoint is defined there. Drop your own photos into `public/assets/photos/` and point the config at them.

Background music: replace `public/assets/audio/music.mp3` and update `audio.src` in the config.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Credits

- Design inspired by [CineLove](https://cinelove.me) — thiệp cưới template #39.
- Script / display fonts replaced with close Google Fonts equivalents (Parisienne, Great Vibes, Italianno, Dancing Script, Marcellus, Cormorant Garamond, Playfair Display, Open Sans).
