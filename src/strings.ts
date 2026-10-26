import type { Translated } from './pictures'

export const languageNames: Translated = { en: 'Eng', el: 'Ελλ', ua: 'Укр' }

export const strings = {
  painter: { en: 'painter', el: 'ζωγράφος', ua: 'художник' },
  works: { en: 'Works', el: 'Έργα', ua: 'Роботи' },
  biography: { en: 'Biography', el: 'Βιογραφία', ua: 'Біографія' },
  exhibitions: { en: 'Exhibitions', el: 'Εκθέσεις', ua: 'Виставки' },
  backToGallery: { en: 'Back to gallery', el: 'Πίσω στη συλλογή', ua: 'До галереї' },
  previous: { en: 'Previous', el: 'Προηγούμενο', ua: 'Попередня' },
  next: { en: 'Next', el: 'Επόμενο', ua: 'Наступна' },
  notFound: { en: 'Page not found', el: 'Η σελίδα δεν βρέθηκε', ua: 'Сторінку не знайдено' },
} satisfies Record<string, Translated>

/** Interface text for the walk-through 3D gallery (public/gallery.html) */
export const galleryStrings = {
  title: { en: '3D gallery', el: 'Τρισδιάστατη γκαλερί', ua: '3D-галерея' },
  controls: {
    en: 'Walk: ↑ ↓ · Turn: ← → · Look closer: Enter · Step back: Esc · Map: M',
    el: 'Περπάτημα: ↑ ↓ · Στροφή: ← → · Πιο κοντά: Enter · Πίσω: Esc · Χάρτης: M',
    ua: 'Рух: ↑ ↓ · Поворот: ← → · Ближче: Enter · Назад: Esc · Мапа: M',
  },
  controlsTouch: {
    en: 'Drag up or down to walk · Drag left or right to turn · Tap a painting to look closer',
    el: 'Σύρετε πάνω ή κάτω για περπάτημα · Σύρετε αριστερά ή δεξιά για στροφή · Πατήστε ένα έργο για να το δείτε από κοντά',
    ua: 'Тягніть вгору чи вниз, щоб іти · Вліво чи вправо, щоб повернутися · Торкніться картини, щоб роздивитися',
  },
  lookCloser: { en: 'Enter — look closer', el: 'Enter — πιο κοντά', ua: 'Enter — роздивитися' },
  lookCloserTouch: { en: 'Tap to look closer', el: 'Πατήστε για πιο κοντά', ua: 'Торкніться, щоб роздивитися' },
  stepBack: { en: 'Esc — step back · ↑ ↓ — zoom', el: 'Esc — πίσω · ↑ ↓ — ζουμ', ua: 'Esc — назад · ↑ ↓ — масштаб' },
  stepBackTouch: { en: 'Tap to step back', el: 'Πατήστε για να απομακρυνθείτε', ua: 'Торкніться, щоб відійти' },
  loading: { en: 'Loading', el: 'Φόρτωση', ua: 'Завантаження' },
  noWebgl: {
    en: 'This browser cannot show the 3D gallery (WebGL 2 is not available).',
    el: 'Αυτό το πρόγραμμα περιήγησης δεν μπορεί να δείξει την τρισδιάστατη γκαλερί (δεν υπάρχει WebGL 2).',
    ua: 'Цей браузер не може показати 3D-галерею (WebGL 2 недоступний).',
  },
} satisfies Record<string, Translated>
