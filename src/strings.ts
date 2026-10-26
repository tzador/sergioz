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
