import dimensions from './dimensions.json'

export const languages = ['en', 'el', 'ua'] as const
export type Language = (typeof languages)[number]
export type Translated<T = string> = Record<Language, T>

/** BCP 47 locale for each language, for `<html lang>` and number formatting */
export const locales: Translated = { en: 'en', el: 'el', ua: 'uk' }

export const defaultLanguage: Language = 'en'

export function isLanguage(value: unknown): value is Language {
  return languages.includes(value as Language)
}

export type Medium = 'oil-canvas' | 'oil-cardboard' | 'watercolor-paper' | 'acrylic-paper' | 'pencil-paper' | 'sepia-paper'

export const mediums: Record<Medium, Translated> = {
  'oil-canvas': { en: 'oil on canvas', el: 'λάδι σε καμβά', ua: 'полотно, олія' },
  'oil-cardboard': { en: 'oil on cardboard', el: 'λάδι σε χαρτόνι', ua: 'картон, олія' },
  'watercolor-paper': { en: 'watercolor on paper', el: 'ακουαρέλα σε χαρτί', ua: 'папір, акварель' },
  'acrylic-paper': { en: 'acrylic on paper', el: 'ακρυλικό σε χαρτί', ua: 'папір, акрил' },
  'pencil-paper': { en: 'pencil on paper', el: 'μολύβι σε χαρτί', ua: 'папір, олівець' },
  'sepia-paper': { en: 'sepia on paper', el: 'σέπια σε χαρτί', ua: 'папір, сепія' },
}

export type Picture = {
  id: string
  title: Translated
  year?: number
  medium: Medium
  /** width × height in cm */
  size: [number, number]
  /** not shown in the gallery, but still has a detail page */
  hidden?: true
}

export const bio: { name: Translated; born: Translated; text: Translated<string[]> } = {
  name: {
    en: 'SERHIY ZADOROZHNY',
    el: 'ΣΕΡΓΚΙΪ ΖΑΝΤΟΡΟΖΝΙ',
    ua: 'СЕРГІЙ ЗАДОРОЖНИЙ',
  },
  born: {
    en: 'Born on 30.03.1945 in Kyiv.',
    el: 'Γεννήθηκε στις 30.03.1945 στο Κίεβο.',
    ua: 'Народився 30.03.1945 року в Києві.',
  },
  text: {
    en: [
      'His childhood was spent in the village of Ilnytsia in Zakarpattia, and later in Lviv and Stanislav (now Ivano-Frankivsk).',
      'He graduated from the Stanislav Children’s Art School.',
      'In 1969 he received his diploma in architecture from Lviv Polytechnic.',
      'He also completed the full course of study at the “Senezh” Design Studio of the Union of Artists of the USSR (Moscow).',
      'His creative work was mainly connected with architecture and design.',
      'He worked as an architect in Chișinău (Moldova), as chief specialist architect on the construction of the KAMAZ plants (Tatarstan),',
      'as a design artist at the Art Fund of Ukraine in Lviv and Kyiv, as chief artist of the Exhibition of Achievements of the National Economy of Ukraine,',
      'as chief artist of the National Museum in Lviv, and was chief artist of the “Chervona Ruta – 89” festival in Chernivtsi.',
      'From 1994 to 2012 he lived on the island of Crete in Greece, where he worked as an architect and artist.',
      'He never gave up fine art throughout his conscious life.',
      'After returning from Greece to Lviv, he concentrated on painting.',
      'He died on 21.12.2020 in Lviv.',
    ],
    el: [
      'Τα παιδικά του χρόνια πέρασαν στο χωριό Ίλνιτσια της Υπερκαρπαθίας και αργότερα στο Λβιβ και στο Στανισλάβ (σήμερα Ιβάνο-Φρανκίβσκ).',
      'Αποφοίτησε από την Παιδική Σχολή Καλών Τεχνών του Στανισλάβ.',
      'Το 1969 πήρε το δίπλωμα αρχιτέκτονα από το Πολυτεχνείο του Λβιβ.',
      'Επιπλέον ολοκλήρωσε τον πλήρη κύκλο σπουδών στο Στούντιο Σχεδιασμού «Σενέζ» της Ένωσης Καλλιτεχνών της ΕΣΣΔ (Μόσχα).',
      'Η δημιουργική του δραστηριότητα συνδέθηκε κυρίως με την αρχιτεκτονική και τον σχεδιασμό.',
      'Εργάστηκε ως αρχιτέκτονας στο Κισινάου (Μολδαβία), ως κύριος αρχιτέκτονας στην κατασκευή των εργοστασίων KAMAZ (Ταταρστάν),',
      'ως καλλιτέχνης-σχεδιαστής στο Καλλιτεχνικό Ταμείο της Ουκρανίας στο Λβιβ και στο Κίεβο, ως επικεφαλής καλλιτέχνης της Έκθεσης Επιτευγμάτων της Εθνικής Οικονομίας της Ουκρανίας,',
      'ως επικεφαλής καλλιτέχνης του Εθνικού Μουσείου του Λβιβ, και υπήρξε επικεφαλής καλλιτέχνης του φεστιβάλ «Τσερβόνα Ρούτα – 89» στο Τσερνίβτσι.',
      'Από το 1994 έως το 2012 έζησε στην Κρήτη, όπου εργάστηκε ως αρχιτέκτονας και ζωγράφος.',
      'Δεν εγκατέλειψε ποτέ τις εικαστικές τέχνες σε όλη τη συνειδητή του ζωή.',
      'Μετά την επιστροφή του από την Ελλάδα στο Λβιβ, αφοσιώθηκε στη ζωγραφική.',
      'Πέθανε στις 21.12.2020 στο Λβιβ.',
    ],
    ua: [
      'Дитинство минало в селі Ільниці на Закарпатті, згодом у Львові та Станіславі (нині Івано-Франківськ).',
      'Закінчив Станіславську дитячу художню школу.',
      'У Львівській політехніці в 1969-му отримав диплом архітектора.',
      'Крім того пройшов повний курс навчання в Дизайн-студії “СЄНЄЖ” Спілки Художників СРСР (м.Москва).',
      'Творча діяльність була пов’язана переважно з архітектурою та дизайном.',
      'Працював архітектором в м. Кишиневі (Молдова), головним спеціалістом-архітектором на будівництві заводів КАМАЗ (Татарстан),',
      'художником-проектантом Художнього Фонду України у Львові та в Києві, головним художником ВДНГ України,',
      'головним художником Національного музею у Львові, був головним художником фестивалю “ЧЕРВОНА РУТА - 89” в Чернівцях.',
      'В 1994 - 2012 р.р. перебував в Греції на острові Крит, де працював архітектором і художником.',
      'Занять образотворчим мистецтвом не полишав всі свідомі роки.',
      'Після повернення з Греції до Львова зосередився на праці в галузі живопису.',
      'Помер 21.12.2020 у Львові.',
    ],
  },
}

const autumnSalon: Translated = {
  en: '“Vysokyi Zamok” Autumn Salon, Palace of Arts, Lviv.',
  el: 'Φθινοπωρινό Σαλόνι «Βισόκι Ζάμοκ», Μέγαρο Τεχνών, Λβιβ.',
  ua: 'Осінній салон “Високий Замок” в Палаці Мистецтв, м.Львів.',
}

export const exhibitions: { year: number; text: Translated }[] = [
  {
    year: 1965,
    text: {
      en: 'Exhibition of young artists of Lviv. Lviv Art Gallery.',
      el: 'Έκθεση νέων καλλιτεχνών του Λβιβ. Πινακοθήκη του Λβιβ.',
      ua: 'Виставка молодих художників Львова. Львівська картинна галерея.',
    },
  },
  {
    year: 2012,
    text: {
      en: 'Exhibition of Ternopil artists (as an invited participant).',
      el: 'Έκθεση καλλιτεχνών της Τερνόπιλ (ως προσκεκλημένος συμμετέχων).',
      ua: 'Виставка художників Тернополя (як запрошений учасник).',
    },
  },
  { year: 2012, text: autumnSalon },
  { year: 2013, text: autumnSalon },
  { year: 2014, text: autumnSalon },
  { year: 2015, text: autumnSalon },
  { year: 2017, text: autumnSalon },
  { year: 2018, text: autumnSalon },
  { year: 2019, text: autumnSalon },
]

const monstersOfTheMelonPatch: Translated = {
  en: 'From the series “MONSTERS OF THE MELON PATCH”',
  el: 'Από τη σειρά «ΤΑ ΤΕΡΑΤΑ ΤΟΥ ΜΠΟΣΤΑΝΙΟΥ»',
  ua: 'З серії “МОНСТРИ БАШТАНУ”',
}

// In gallery order.
export const pictures: Picture[] = [
  { id: '01', title: monstersOfTheMelonPatch, year: 2019, medium: 'oil-canvas', size: [60, 60] },
  { id: '02', title: monstersOfTheMelonPatch, year: 2019, medium: 'oil-canvas', size: [60, 60] },
  { id: '03', title: monstersOfTheMelonPatch, year: 2019, medium: 'oil-canvas', size: [60, 60] },
  { id: '04', title: monstersOfTheMelonPatch, year: 2019, medium: 'oil-canvas', size: [60, 60] },
  { id: '05', title: monstersOfTheMelonPatch, year: 2019, medium: 'oil-canvas', size: [60, 60] },
  {
    id: '08',
    title: {
      en: 'A DISTANT BEACH, A DISTANT SUMMER',
      el: 'ΜΑΚΡΙΝΗ ΠΑΡΑΛΙΑ, ΜΑΚΡΙΝΟ ΚΑΛΟΚΑΙΡΙ',
      ua: 'ДАЛЕКИЙ ПЛЯЖ, ДАЛЕКЕ ЛІТО',
    },
    year: 2018,
    medium: 'oil-canvas',
    size: [149, 84],
  },
  {
    id: '06',
    title: {
      en: 'BY THE BANK OF THE DNIPRO',
      el: 'ΣΤΗΝ ΟΧΘΗ ΤΟΥ ΔΝΙΠΡΟΥ',
      ua: 'ПРИ БЕРЕЗІ ДНІПРА',
    },
    year: 1972,
    medium: 'watercolor-paper',
    size: [29, 23],
  },
  {
    id: '07',
    title: {
      en: 'AT THE LANDING STAGE. KYIV',
      el: 'ΣΤΗΝ ΑΠΟΒΑΘΡΑ. ΚΙΕΒΟ',
      ua: 'НА ДЕБАРКАДЕРІ. КИЇВ',
    },
    year: 1972,
    medium: 'watercolor-paper',
    size: [29, 23],
  },
  {
    id: '09',
    title: {
      en: 'AUGUST IN THE KYIV REGION',
      el: 'ΑΥΓΟΥΣΤΟΣ ΣΤΗΝ ΠΕΡΙΟΧΗ ΤΟΥ ΚΙΕΒΟΥ',
      ua: 'СЕРПЕНЬ НА КИЇВЩИНІ',
    },
    year: 1988,
    medium: 'watercolor-paper',
    size: [46, 34],
  },
  {
    id: '10',
    title: {
      en: 'FORTRESS RUINS. Stare Selo',
      el: 'ΕΡΕΙΠΙΑ ΦΡΟΥΡΙΟΥ. Στάρε Σέλο',
      ua: 'РУЇНИ ФОРТЕЦІ. Старе Село',
    },
    year: 2012,
    medium: 'watercolor-paper',
    size: [46, 34],
  },
  {
    id: '11',
    title: {
      en: 'GIFTS OF SEPTEMBER – 1',
      el: 'ΔΩΡΑ ΤΟΥ ΣΕΠΤΕΜΒΡΗ – 1',
      ua: 'ДАРИ ВЕРЕСНЯ – 1',
    },
    year: 2018,
    medium: 'watercolor-paper',
    size: [49, 56],
  },
  {
    id: '12',
    title: {
      en: 'GIFTS OF SEPTEMBER – 2',
      el: 'ΔΩΡΑ ΤΟΥ ΣΕΠΤΕΜΒΡΗ – 2',
      ua: 'ДАРИ ВЕРЕСНЯ – 2',
    },
    year: 2018,
    medium: 'watercolor-paper',
    size: [49, 56],
  },
  {
    id: '13',
    title: {
      en: 'STILL LIFE WITH A SAMOVAR',
      el: 'ΝΕΚΡΗ ΦΥΣΗ ΜΕ ΣΑΜΟΒΑΡΙ',
      ua: 'НАТЮРМОРТ З САМОВАРОМ',
    },
    year: 2013,
    medium: 'oil-canvas',
    size: [60, 60],
  },
  {
    id: '14',
    title: {
      en: 'KYIV LILAC',
      el: 'ΠΑΣΧΑΛΙΑ ΤΟΥ ΚΙΕΒΟΥ',
      ua: 'КИЇВСЬКИЙ БУЗОК',
    },
    year: 1981,
    medium: 'watercolor-paper',
    size: [45.5, 33.5],
  },
  {
    id: '60',
    title: {
      en: 'TYMISH. Portrait of my son',
      el: 'ΤΙΜΙΣ. Πορτρέτο του γιου μου',
      ua: 'ТИМІШ. Портрет сина',
    },
    year: 1994,
    medium: 'pencil-paper',
    size: [30, 40],
  },
  {
    id: '16',
    title: {
      en: 'NATURE MORTE (HEN)',
      el: 'ΝΑΤΟΥΡ ΜΟΡΤ (ΚΟΤΑ)',
      ua: 'МЕРТВА НАТУРА (КУРКА)',
    },
    year: 2017,
    medium: 'watercolor-paper',
    size: [60, 40],
  },
  {
    id: '17',
    title: {
      en: 'PROMENADE (DEMOBBED SOLDIER)',
      el: 'ΠΕΡΙΠΑΤΟΣ (ΑΠΟΛΥΜΕΝΟΣ ΦΑΝΤΑΡΟΣ)',
      ua: 'ПРОМЕНАД (ДЕМБЕЛЬ)',
    },
    year: 2015,
    medium: 'oil-canvas',
    size: [120, 90],
  },
  {
    id: '18',
    title: {
      en: 'COLLISION (RIDE OF THE VALKYRIES)',
      el: 'ΣΥΓΚΡΟΥΣΗ (Η ΙΠΠΑΣΙΑ ΤΩΝ ΒΑΛΚΥΡΙΩΝ)',
      ua: 'ЗІТКНЕННЯ (ПОЛІТ ВАЛЬКІРІЙ)',
    },
    year: 2017,
    medium: 'oil-canvas',
    size: [150, 150],
  },
  {
    id: '19',
    title: {
      en: 'DRIZZLE IN THE CARPATHIANS',
      el: 'ΨΙΧΑΛΑ ΣΤΑ ΚΑΡΠΑΘΙΑ',
      ua: 'ДОЩИК В КАРПАТАХ',
    },
    year: 1990,
    medium: 'watercolor-paper',
    size: [30, 27],
  },
  {
    id: '20',
    title: {
      en: 'PEACHES ON MARBLE',
      el: 'ΡΟΔΑΚΙΝΑ ΣΕ ΜΑΡΜΑΡΟ',
      ua: 'ПЕРСИКИ НА МАРМУРІ',
    },
    year: 1995,
    medium: 'oil-canvas',
    size: [50, 60],
  },
  {
    id: '21',
    title: {
      en: 'RED PUMPKIN',
      el: 'ΚΟΚΚΙΝΗ ΚΟΛΟΚΥΘΑ',
      ua: 'ЧЕРВОНИЙ ГАРБУЗ',
    },
    year: 2012,
    medium: 'oil-canvas',
    size: [61, 70],
  },
  {
    id: '22',
    title: {
      en: 'LILAC ON TREE STUMPS',
      el: 'ΠΑΣΧΑΛΙΑ ΣΕ ΚΟΡΜΟΥΣ',
      ua: 'БУЗОК НА ПНЯХ',
    },
    year: 2013,
    medium: 'oil-canvas',
    size: [65, 70],
  },
  {
    id: '23',
    title: {
      en: 'CERAMICS, BRONZE, VEGETABLES',
      el: 'ΚΕΡΑΜΙΚΑ, ΜΠΡΟΥΤΖΟΣ, ΛΑΧΑΝΙΚΑ',
      ua: 'КЕРАМІКА, БРОНЗА, ОВОЧІ',
    },
    year: 2014,
    medium: 'oil-canvas',
    size: [60, 80],
  },
  {
    id: '24',
    title: {
      en: 'SUNFLOWERS ON OLD BRICKS',
      el: 'ΗΛΙΟΤΡΟΠΙΑ ΣΕ ΠΑΛΙΑ ΤΟΥΒΛΑ',
      ua: 'СОНЯШНИКИ НА СТАРИХ ЦЕГЛАХ',
    },
    year: 2008,
    medium: 'oil-canvas',
    size: [60, 60],
  },
  {
    id: '25',
    title: {
      en: 'LVIV LILAC',
      el: 'ΠΑΣΧΑΛΙΑ ΤΟΥ ΛΒΙΒ',
      ua: 'ЛЬВІВСЬКИЙ БУЗОК',
    },
    year: 2015,
    medium: 'oil-canvas',
    size: [70, 50],
  },
  {
    id: '26',
    title: {
      en: 'DELICIOUS GREEN MELONS',
      el: 'ΝΟΣΤΙΜΑ ΠΡΑΣΙΝΑ ΠΕΠΟΝΙΑ',
      ua: 'СМАЧНІ ЗЕЛЕНІ ДИНІ',
    },
    year: 2017,
    medium: 'watercolor-paper',
    size: [45, 50],
  },
  {
    id: '27',
    title: {
      en: 'AUTUMN STUDY',
      el: 'ΦΘΙΝΟΠΩΡΙΝΗ ΣΠΟΥΔΗ',
      ua: 'ОСІННІЙ ЕТЮД',
    },
    year: 1991,
    medium: 'watercolor-paper',
    size: [20, 36],
  },
  {
    id: '59',
    title: {
      en: 'NATALKA AGAINST THE LIGHT',
      el: 'Η ΝΑΤΑΛΚΑ ΚΟΝΤΡΑ ΣΤΟ ΦΩΣ',
      ua: 'НАТАЛКА В КОНТРАЖУРІ',
    },
    year: 1981,
    medium: 'oil-cardboard',
    size: [19, 28],
  },
  {
    id: '15',
    title: {
      en: 'STILL LIFE WITH A MILK JUG',
      el: 'ΝΕΚΡΗ ΦΥΣΗ ΜΕ ΓΑΛΑΤΙΕΡΑ',
      ua: 'НАТЮРМОРТ З МОЛОЧНИКОМ',
    },
    year: 1981,
    medium: 'watercolor-paper',
    size: [32.3, 42],
  },
  {
    id: '28',
    title: {
      en: 'OLD PRIMUS STOVES',
      el: 'ΠΑΛΙΕΣ ΓΚΑΖΙΕΡΕΣ',
      ua: 'СТАРІ ПРИМУСИ',
    },
    year: 2016,
    medium: 'oil-canvas',
    size: [70, 70],
  },
  {
    id: '29',
    title: {
      en: 'FISH AMONG BOTTLES',
      el: 'ΨΑΡΙΑ ΑΝΑΜΕΣΑ ΣΕ ΜΠΟΥΚΑΛΙΑ',
      ua: 'РИБИ ПОМІЖ ПЛЯШОК',
    },
    year: 2016,
    medium: 'oil-canvas',
    size: [50, 50],
  },
  {
    id: '30',
    title: {
      en: 'A CORNER OF A VILLAGE YARD',
      el: 'ΓΩΝΙΑ ΧΩΡΙΑΤΙΚΗΣ ΑΥΛΗΣ',
      ua: 'КУТОЧОК СІЛЬСЬКОГО ПОДВІР’Я',
    },
    year: 2017,
    medium: 'watercolor-paper',
    size: [39, 29],
  },
  {
    id: '31',
    title: {
      en: 'PREMONITION',
      el: 'ΠΡΟΑΙΣΘΗΜΑ',
      ua: 'ПЕРЕДЧУТТЯ',
    },
    year: 2013,
    medium: 'oil-canvas',
    size: [240, 150],
  },
  {
    id: '34',
    title: {
      en: 'THE ISLAND OF CRETE. MORNING',
      el: 'ΤΟ ΝΗΣΙ ΤΗΣ ΚΡΗΤΗΣ. ΠΡΩΙ',
      ua: 'ОСТРІВ КРИТ. РАНОК',
    },
    year: 1996,
    medium: 'watercolor-paper',
    size: [40, 30],
  },
  {
    id: '35',
    title: {
      en: 'RUINED WINDMILL. Crete',
      el: 'ΕΡΕΙΠΩΜΕΝΟΣ ΑΝΕΜΟΜΥΛΟΣ. Κρήτη',
      ua: 'РУЇНА ВІТРЯКА. Острів Крит',
    },
    year: 1996,
    medium: 'watercolor-paper',
    size: [40, 30],
  },
  {
    id: '36',
    title: {
      en: 'MY MOTHER’S SHOES AND MINE',
      el: 'ΤΑ ΠΑΠΟΥΤΣΙΑ ΤΗΣ ΜΑΝΑΣ ΜΟΥ ΚΑΙ ΤΑ ΔΙΚΑ ΜΟΥ',
      ua: 'ВЗУТТЯ МАМИНЕ І МОЄ',
    },
    year: 2017,
    medium: 'acrylic-paper',
    size: [60, 60],
  },
  {
    id: '37',
    title: {
      en: 'VIEW OF PSEIRA ISLAND. Crete',
      el: 'ΘΕΑ ΣΤΗ ΝΗΣΟ ΨΕΙΡΑ. Κρήτη',
      ua: 'ВИД НА о.ПСІРА. Крит',
    },
    year: 1998,
    medium: 'watercolor-paper',
    size: [40, 30],
  },
  {
    id: '38',
    title: {
      en: 'THE TOWN OF AGIOS NIKOLAOS. Crete',
      el: 'Η ΠΟΛΗ ΤΟΥ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ. Κρήτη',
      ua: 'МІСТО АГІОС НІКОЛАОС. Крит',
    },
    year: 1999,
    medium: 'watercolor-paper',
    size: [40, 30],
  },
  {
    id: '39',
    title: {
      en: 'CRETAN LANDSCAPE',
      el: 'ΚΡΗΤΙΚΟ ΤΟΠΙΟ',
      ua: 'КРИТСЬКИЙ КРАЄВИД',
    },
    year: 2012,
    medium: 'oil-canvas',
    size: [120, 90],
  },
  {
    id: '40',
    title: {
      en: 'WILD BEACH. Crete',
      el: 'ΑΓΡΙΑ ΠΑΡΑΛΙΑ. Κρήτη',
      ua: 'ДИКИЙ ПЛЯЖ. Крит',
    },
    year: 2001,
    medium: 'watercolor-paper',
    size: [30, 20],
  },
  {
    id: '41',
    title: {
      en: 'ON THE RUG',
      el: 'ΣΤΟ ΧΑΛΑΚΙ',
      ua: 'НА КОЦИКУ',
    },
    year: 2018,
    medium: 'oil-canvas',
    size: [150, 150],
  },
  {
    id: '42',
    title: {
      en: 'MELON, PUMPKIN, APPLES',
      el: 'ΠΕΠΟΝΙ, ΚΟΛΟΚΥΘΑ, ΜΗΛΑ',
      ua: 'ДИНЯ, ГАРБУЗ, ЯБЛУКА',
    },
    year: 2016,
    medium: 'oil-canvas',
    size: [60, 50],
  },
  {
    id: '43',
    title: {
      en: 'CARPATHIAN FOOTHILLS',
      el: 'ΠΡΟΠΟΔΕΣ ΤΩΝ ΚΑΡΠΑΘΙΩΝ',
      ua: 'ПЕРЕДГІР’Я КАРПАТ',
    },
    year: 1990,
    medium: 'watercolor-paper',
    size: [30, 20],
  },
  {
    id: '44',
    title: {
      en: 'THE PARTHENON ON THE ACROPOLIS. Athens',
      el: 'Ο ΠΑΡΘΕΝΩΝΑΣ ΣΤΗΝ ΑΚΡΟΠΟΛΗ. Αθήνα',
      ua: 'ПАРТЕНОН НА АКРОПОЛІ. Атени',
    },
    year: 1998,
    medium: 'watercolor-paper',
    size: [45, 35],
  },
  {
    id: '45',
    title: {
      en: 'OLD BOATS. Kyiv',
      el: 'ΠΑΛΙΕΣ ΒΑΡΚΕΣ. Κίεβο',
      ua: 'СТАРІ ЧОВНИ. Київ',
    },
    year: 1972,
    medium: 'watercolor-paper',
    size: [32, 22],
  },
  {
    id: '46',
    title: {
      en: 'CARPATHIAN MOTIF',
      el: 'ΚΑΡΠΑΘΙΚΟ ΜΟΤΙΒΟ',
      ua: 'КАРПАТСЬКИЙ МОТИВ',
    },
    year: 1990,
    medium: 'watercolor-paper',
    size: [13, 20],
  },
  {
    id: '47',
    title: {
      en: 'GREEN HAYSTACK',
      el: 'ΠΡΑΣΙΝΗ ΘΗΜΩΝΙΑ',
      ua: 'ЗЕЛЕНА КОПИЦЯ',
    },
    year: 2017,
    medium: 'watercolor-paper',
    size: [30, 40],
  },
  {
    id: '48',
    title: {
      en: 'A LVIV STREET',
      el: 'ΣΟΚΑΚΙ ΤΟΥ ΛΒΙΒ',
      ua: 'ЛЬВІВСЬКА ВУЛИЧКА',
    },
    year: 1992,
    medium: 'watercolor-paper',
    size: [30, 23],
  },
  {
    id: '49',
    title: {
      en: 'STILL LIFE WITH POPPY HEADS',
      el: 'ΝΕΚΡΗ ΦΥΣΗ ΜΕ ΚΩΔΙΕΣ ΠΑΠΑΡΟΥΝΑΣ',
      ua: 'НАТЮРМОРТ З МАКОВИННЯМ',
    },
    year: 2012,
    medium: 'oil-canvas',
    size: [72, 72],
  },
  {
    id: '51',
    title: {
      en: 'FRUITS OF CRETE AGAINST THE SEA',
      el: 'ΚΑΡΠΟΙ ΤΗΣ ΚΡΗΤΗΣ ΜΕ ΦΟΝΤΟ ΤΗ ΘΑΛΑΣΣΑ',
      ua: 'ПЛОДИ КРИТУ НА ТЛІ МОРЯ',
    },
    year: 2010,
    medium: 'oil-canvas',
    size: [84, 69],
  },
  {
    id: '55',
    title: {
      en: 'DAWN. Crete',
      el: 'ΞΗΜΕΡΩΜΑ. Κρήτη',
      ua: 'СВІТАНОК. Крит',
    },
    year: 2017,
    medium: 'watercolor-paper',
    size: [40, 30],
  },
  {
    id: '50',
    title: {
      en: 'FISHERMEN’S SHORE. Crete',
      el: 'Η ΑΚΤΗ ΤΩΝ ΨΑΡΑΔΩΝ. Κρήτη',
      ua: 'РИБАЛЬСЬКИЙ БЕРЕГ. Крит',
    },
    year: 2012,
    medium: 'oil-canvas',
    size: [150, 90],
  },
  {
    id: '56',
    title: {
      en: 'BOUQUET ON THE FLOOR',
      el: 'ΑΝΘΟΔΕΣΜΗ ΣΤΟ ΠΑΤΩΜΑ',
      ua: 'БУКЕТ НА ПІДЛОЗІ',
    },
    year: 2014,
    medium: 'oil-canvas',
    size: [60, 60],
  },
  {
    id: '54',
    title: {
      en: 'HOT SUMMER. Crete',
      el: 'ΚΑΥΤΟ ΚΑΛΟΚΑΙΡΙ. Κρήτη',
      ua: 'СПЕКОТНЕ ЛІТО. Крит',
    },
    year: 2017,
    medium: 'watercolor-paper',
    size: [40, 30],
  },
  {
    id: '52',
    title: {
      en: 'LILIES. A bouquet for my daughter-in-law',
      el: 'ΚΡΙΝΑ. Ανθοδέσμη για τη νύφη μου',
      ua: 'ЛІЛІЇ. Букет для невістки',
    },
    medium: 'oil-canvas',
    size: [50, 60],
  },
  {
    id: '53',
    title: {
      en: 'TWO FISH ON A NEWSPAPER',
      el: 'ΔΥΟ ΨΑΡΙΑ ΣΕ ΕΦΗΜΕΡΙΔΑ',
      ua: 'ДВІ РИБИ НА ГАЗЕТІ',
    },
    year: 1995,
    medium: 'oil-canvas',
    size: [35, 44],
  },
  {
    id: '57',
    title: {
      en: 'THE CLIFF. Cretan study',
      el: 'Ο ΒΡΑΧΟΣ. Κρητική σπουδή',
      ua: 'СКЕЛЯ. Критський етюд',
    },
    year: 1994,
    medium: 'watercolor-paper',
    size: [30, 40],
  },
  {
    id: '58',
    title: {
      en: 'STILL LIFE in retro style',
      el: 'ΝΕΚΡΗ ΦΥΣΗ σε ρετρό ύφος',
      ua: 'НАТЮРМОРТ в стилі ретро',
    },
    year: 1993,
    medium: 'oil-canvas',
    size: [73, 73],
  },
  {
    id: '62',
    title: {
      en: 'LAGOON 1. Crete',
      el: 'ΛΙΜΝΟΘΑΛΑΣΣΑ 1. Κρήτη',
      ua: 'ЛАГУНА 1. Крит',
    },
    year: 2010,
    medium: 'oil-canvas',
    size: [40, 40],
  },
  {
    id: '63',
    title: {
      en: 'LAGOON 2. Crete',
      el: 'ΛΙΜΝΟΘΑΛΑΣΣΑ 2. Κρήτη',
      ua: 'ЛАГУНА 2. Крит',
    },
    year: 2010,
    medium: 'oil-canvas',
    size: [40, 40],
  },
  {
    id: '61',
    title: {
      en: 'HAYSTACKS IN THE MOUNTAINS',
      el: 'ΘΗΜΩΝΙΕΣ ΣΤΑ ΒΟΥΝΑ',
      ua: 'КОПИЦІ В ГОРАХ',
    },
    year: 2015,
    medium: 'sepia-paper',
    size: [20, 30],
  },
  {
    id: '64',
    title: {
      en: 'OLIVE GROVE',
      el: 'ΕΛΑΙΩΝΑΣ',
      ua: 'ОЛИВКОВИЙ ГАЙ',
    },
    year: 2019,
    medium: 'oil-canvas',
    size: [130, 90],
  },
  {
    id: '65',
    title: {
      en: 'BEACH UNDER A LONELY TREE',
      el: 'ΠΑΡΑΛΙΑ ΚΑΤΩ ΑΠΟ ΕΝΑ ΜΟΝΑΧΙΚΟ ΔΕΝΤΡΟ',
      ua: 'ПЛЯЖ ПІД САМОТНІМ ДЕРЕВОМ',
    },
    year: 2019,
    medium: 'oil-canvas',
    size: [40, 50],
  },
  {
    id: '32',
    title: {
      en: 'BOATS ON THE SHORE. Kyiv',
      el: 'ΒΑΡΚΕΣ ΣΤΗΝ ΑΚΤΗ. Κίεβο',
      ua: 'ЧОВНИ НА БЕРЕЗІ. Київ',
    },
    year: 1972,
    medium: 'watercolor-paper',
    size: [30, 20],
    hidden: true,
  },
  {
    id: '33',
    title: {
      en: 'CARPATHIAN HAYSTACK',
      el: 'ΘΗΜΩΝΙΑ ΣΤΑ ΚΑΡΠΑΘΙΑ',
      ua: 'КАРПАЦЬКА КОПИЦЯ',
    },
    year: 1990,
    medium: 'watercolor-paper',
    size: [30, 20],
    hidden: true,
  },
]

/** Pixel size of the full image in public/pictures (from `bun run dimensions`) */
export function pixelSize(id: string): [number, number] {
  const size = (dimensions as Record<string, number[]>)[id]
  return [size[0], size[1]]
}

export function getPicture(id: string): Picture | undefined {
  return pictures.find((picture) => picture.id === id)
}

const yearSuffix: Translated = { en: '', el: '', ua: ' р.' }
const centimeters: Translated = { en: 'cm', el: 'εκ.', ua: 'см' }

/** Width and height in cm, formatted for the language, e.g. { width: "45,5 см", height: "33,5 см" } */
export function pictureDimensions(picture: Picture, language: Language): { width: string; height: string } {
  const number = new Intl.NumberFormat(locales[language])
  const [width, height] = picture.size.map((n) => `${number.format(n)} ${centimeters[language]}`)
  return { width, height }
}

/** The two caption lines shown under a picture, e.g. "ЛАГУНА 1. Крит. 2010 р." / "полотно, олія. 40×40 см" */
export function pictureCaption(picture: Picture, language: Language): { title: string; details: string } {
  const title = picture.title[language]
  const number = new Intl.NumberFormat(locales[language])
  const [width, height] = picture.size.map((n) => number.format(n))
  return {
    title: picture.year ? `${title}. ${picture.year}${yearSuffix[language]}` : title,
    details: `${mediums[picture.medium][language]}. ${width}×${height} ${centimeters[language]}`,
  }
}
