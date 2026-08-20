export interface WeddingContent {
    monogram: string;
    groomName: string;
    brideName: string;
    groomParents: string;
    brideParents: string;
    eventTitle: string;
    subtitle: string;
    date: string;
    time: string;
    venueName: string;
    venueAddress: string;
    bismillah: string;
    tapToOpen: string;
    soundOn: string;
    soundOff: string;

    // Nikkah Section
    nikkahHeaderTitle: string;
    nikkahDuaArabic: string;
    nikkahDuaTransliteration: string;
    nikkahDuaTranslation: string;

    // Invitation Section
    invitationHeading: string;
    invitationGreeting: string;
    invitationBody: string;

    // Special Day Countdown Section
    countdownHeaderTitle: string;
    countdownSubtitle: string;
    daysLabel: string;
    hoursLabel: string;
    minutesLabel: string;
    secondsLabel: string;
    countdownFooterNote: string;

    // Verse Section
    verseArabic: string;
    verseTranslation: string;
    verseHighlightedPart: string;
    verseSource: string;

    // Venue Section
    venueHeaderTitle: string;
    openInMapsLabel: string;
    addToCalendarLabel: string;

    // Dress Code Section
    dressCodeHeaderTitle: string;
    dressCodeIntro: string;
    ladiesTitle: string;
    ladiesColors: string;
    ladiesItems: string;
    ladiesNote: string;
    gentlemenTitle: string;
    gentlemenColors: string;
    gentlemenItems: string;
    dressCodeOutro: string;

    // Programme Section
    programmeHeaderTitle: string;
    programmeItems: Array<{ time: string; title: string; icon: string }>;

    // Walima Menu Section
    menuHeaderTitle: string;
    startersTitle: string;
    startersItems: string;
    mainsTitle: string;
    mainsItems: string;
    dessertsTitle: string;
    dessertsItems: string;

    // Blessed Beginning Section
    blessedBeginningHeaderTitle: string;
    blessedVerseArabic: string;
    blessedVerseTranslation: string;
    blessedVerseSource: string;
    blessedPoints: Array<{ title: string; desc: string }>;
    blessedDua: string;

    // Kind Request Section
    kindRequestHeaderTitle: string;
    kindRequestSubtitle: string;
    kindRequestBody: string;
    kindRequestJazakallah: string;

    // RSVP Section
    rsvpHeaderTitle: string;
    rsvpBismillah: string;
    rsvpSubtitle: string;
    rsvpPhone: string;
    rsvpInstructions: string;
    rsvpButtonLabel: string;
    rsvpPrefilledMessage: string;

    // Footer Section
    footerTitle: string;
    footerDuaArabic: string;
    footerDuaTranslation: string;
    footerFamilyGratitude: string;
    footerJazakallah: string;
    footerClosingBody: string;
    footerLookingForward: string;
}

export type SupportedLanguage = 'en' | 'ar' | 'de';

export interface LanguageConfig {
    code: SupportedLanguage;
    label: string;
    nativeName: string;
    isRTL: boolean;
}

export const LANGUAGES: LanguageConfig[] = [
    { code: 'en', label: 'EN', nativeName: 'English', isRTL: false },
    { code: 'ar', label: 'عربي', nativeName: 'العربية', isRTL: true },
    { code: 'de', label: 'DE', nativeName: 'Deutsch', isRTL: false },
];

export const CONTENT: Record<SupportedLanguage, WeddingContent> = {
    en: {
        monogram: 'F & A',
        groomName: 'Farhan Hussain',
        brideName: 'Amani Abd',
        groomParents: 'Second eldest son of Nozmul Hussain & Irmana Parvin',
        brideParents: 'Eldest daughter of Basim Abd & Lelyan Noufal',
        eventTitle: 'Nikkah & Walima',
        subtitle: 'Together with their families, invite you to celebrate their Islamic Wedding',
        date: 'Saturday, 10 October 2026',
        time: '12:00 PM',
        venueName: 'Badsha Palace Restaurant',
        venueAddress: 'Walsall Road, Birmingham, B42 1LR',
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        tapToOpen: 'TAP TO OPEN',
        soundOn: 'Audio Playing',
        soundOff: 'Audio Muted',

        nikkahHeaderTitle: 'NIKKAH & WALIMA OF',
        nikkahDuaArabic: 'بَارَكَ ٱللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        nikkahDuaTransliteration: 'Bārakallāhu lakumā wa bāraka ʿalaykumā wa jamaʿa baynakumā fī khayr.',
        nikkahDuaTranslation: '"May Allah bless you both, shower His blessings upon you, and unite you both in goodness."',

        invitationHeading: 'THE INVITATION',
        invitationGreeting: 'Assalāmu ʿalaykum wa raḥmatullāhi wa barakātuh',
        invitationBody: 'With the grace and mercy of Allah the families of Farhan & Amani request the honour of your presence as they celebrate their Nikkah & Walima.\n\nAs two lives are joined through the sacred bond of nikah, we would be honoured to have our family and friends share this blessed occasion with us.\n\nMay this gathering be one of remembrance, gratitude and joy, and may Allah place sakinah, mawaddah and rahmah within their marriage.',

        countdownHeaderTitle: 'OUR SPECIAL DAY',
        countdownSubtitle: 'Until the Nikkah',
        daysLabel: 'DAYS',
        hoursLabel: 'HOURS',
        minutesLabel: 'MINUTES',
        secondsLabel: 'SECONDS',
        countdownFooterNote: 'Counting down to a day written by Allah, and the beginning of a new chapter, in shā\' Allāh.',

        verseArabic: 'وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً',
        verseTranslation: '"And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy."',
        verseHighlightedPart: 'compassion and mercy',
        verseSource: '— Surah Ar-Rum, 30:21',

        venueHeaderTitle: 'THE VENUE',
        openInMapsLabel: 'OPEN IN GOOGLE MAPS',
        addToCalendarLabel: 'ADD TO CALENDAR',

        dressCodeHeaderTitle: 'DRESS CODE',
        dressCodeIntro: 'FOR OUR GUESTS\nWe kindly invite our guests to join the colour theme for our special day.',
        ladiesTitle: 'LADIES',
        ladiesColors: 'Blush Pink',
        ladiesItems: 'Sari · Dress · Abaya',
        ladiesNote: 'Modest attire is kindly encouraged.',
        gentlemenTitle: 'GENTLEMEN',
        gentlemenColors: 'Beige',
        gentlemenItems: 'Thobe · Kandora',
        dressCodeOutro: 'We appreciate your efforts in helping create a beautiful and harmonious celebration.',

        programmeHeaderTitle: 'PROGRAMME',
        programmeItems: [
            { time: '12:00 PM – 12:30 PM', title: 'Reception, Welcome Drinks & Chat', icon: 'glass' },
            { time: '12:45 PM', title: 'Bride Arrival', icon: 'sparkles' },
            { time: '1:00 PM', title: 'Nikkah Ceremony', icon: 'rings' },
            { time: '1:30 PM', title: 'Zuhr Jamāʿah', icon: 'mosque' },
            { time: '2:00 PM', title: 'Walima Lunch', icon: 'cutlery' },
            { time: '4:00 PM', title: 'Cake Cutting', icon: 'cake' },
            { time: '4:30 PM', title: 'Bride & Groom Farewell', icon: 'heart' },
        ],

        menuHeaderTitle: 'THE WALIMA MENU',
        startersTitle: 'STARTERS',
        startersItems: 'Peri Peri Chicken, Seekh Kebabs, Fish Pakora, Vegetable Samosa, Salad & Sauces',
        mainsTitle: 'MAINS',
        mainsItems: 'Meat Rogan Josh, Chicken Jalfrezi, Fish Korma, Vegetable Curry, Pilau Rice, Boiled Rice',
        dessertsTitle: 'DESSERTS',
        dessertsItems: 'Gulab Jamun, Ice Cream',

        blessedBeginningHeaderTitle: 'A BLESSED BEGINNING',
        blessedVerseArabic: 'وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ',
        blessedVerseTranslation: '"And of all things We created two mates."',
        blessedVerseSource: '— Surah Adh-Dhariyat, 51:49',
        blessedPoints: [
            { title: 'WRITTEN BY ALLAH', desc: 'Two families come together, two lives begin a new chapter, and a new home is established through nikah.' },
            { title: 'WITH SAKINAH', desc: 'May their home be a place of tranquillity, their companionship a source of comfort, and their hearts always turned towards Allah.' },
            { title: 'WITH MAWADDAH', desc: 'May Allah place lasting affection between them, allowing them to grow together through every season of life.' },
            { title: 'WITH RAHMAH', desc: 'May mercy remain at the heart of their marriage, in moments of ease and in moments requiring patience.' },
        ],
        blessedDua: 'اللَّهُمَّ بَارِكْ لَهُمَا — "O Allah, bless their union."',

        kindRequestHeaderTitle: 'A KIND REQUEST',
        kindRequestSubtitle: 'CELEBRATING WITH BARAKAH',
        kindRequestBody: 'Your presence and sincere duʿās are among the most meaningful gifts you can bring.\nAs we celebrate this blessed occasion, we kindly ask our guests to help us preserve an atmosphere of modesty, respect and barakah throughout the day.',
        kindRequestJazakallah: 'JazākumAllāhu khayran for celebrating with us.',

        rsvpHeaderTitle: 'RSVP',
        rsvpBismillah: 'بِسْمِ ٱللَّٰهِ',
        rsvpSubtitle: 'WILL YOU BE JOINING US?',
        rsvpPhone: '07828 931050',
        rsvpInstructions: 'We would be delighted to have you share this blessed occasion with our families.\nKindly RSVP to 07828 931050.\nPlease include: Your full name, and the names of any guests attending with you.',
        rsvpButtonLabel: 'RSVP NOW VIA WHATSAPP',
        rsvpPrefilledMessage: 'Assalāmu ʿalaykum, I would like to RSVP for Farhan & Amani\'s Nikkah & Walima. My name is ______ and the guests attending with me are ______. JazākumAllāhu khayran.',

        footerTitle: 'Farhan & Amani',
        footerDuaArabic: 'بَارَكَ ٱللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        footerDuaTranslation: '"May Allah bless you both, shower His blessings upon you, and unite you both in goodness."',
        footerFamilyGratitude: 'FROM OUR FAMILIES, WITH GRATITUDE',
        footerJazakallah: 'JazākumAllāhu khayran',
        footerClosingBody: 'Thank you for sharing in this special occasion and for keeping Farhan and Amani in your duʿās.\nMay Allah reward you for your presence, bless our gathering, place barakah in this marriage, and allow it to be the beginning of a home filled with īmān, sakinah, love and mercy.',
        footerLookingForward: 'We look forward to celebrating with you, In shā\' Allāh.',
    },

    ar: {
        monogram: 'ف & أ',
        groomName: 'فرحان حسين',
        brideName: 'أماني عبد',
        groomParents: 'الابن الثاني لـ نزمول حسين وإرمانا بارفين',
        brideParents: 'الابنة الكبرى لـ باسم عبد وليليان نوفل',
        eventTitle: 'عقد القران والوليمة',
        subtitle: 'يتشرفون بدعوتكم لمشاركتهم فرحة عقد قرانهم وزفافهم المبارك',
        date: 'السبت، ١٠ أكتوبر ٢٠٢٦',
        time: 'الساعة ١٢:٠٠ ظهراً',
        venueName: 'مطعم قصر بادشاه',
        venueAddress: 'طريق والسال، بيرمنغهام، B42 1LR',
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        tapToOpen: 'انقر للفتح',
        soundOn: 'الصوت يعمل',
        soundOff: 'الصوت مكتوم',

        nikkahHeaderTitle: 'عقد قران ووليمة',
        nikkahDuaArabic: 'بَارَكَ ٱللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        nikkahDuaTransliteration: 'بارك الله لكما وبارك عليكما وجمع بينكما في خير',
        nikkahDuaTranslation: '"بارك الله لكما وبارك عليكما وجمع بينكما في خير."',

        invitationHeading: 'الدعوة',
        invitationGreeting: 'السلام عليكم ورحمة الله وبركاته',
        invitationBody: 'بفضل الله ورحمته تتشرف عائلتا فرحان وأماني بحضوركم لمشاركتهم حفل عقد القران والوليمة.\n\nنسأل الله أن يجعل هذا الجمع جمعاً مباركاً محفوفاً بالذكر والشكر والسرور، وأن يمنّ عليهما بالسكينة والمودة والرحمة.',

        countdownHeaderTitle: 'يومنا المميز',
        countdownSubtitle: 'حتى النكاح',
        daysLabel: 'أيام',
        hoursLabel: 'ساعات',
        minutesLabel: 'دقائق',
        secondsLabel: 'ثواني',
        countdownFooterNote: 'نعد التنازلي ليوم قدره الله، وبداية فصل جديد إن شاء الله.',

        verseArabic: 'وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً',
        verseTranslation: '"ومن آياته أن خلق لكم من أنفسكم أزواجاً لتسكنوا إليها وجعل بينكم مودة ورحمة."',
        verseHighlightedPart: 'مودة ورحمة',
        verseSource: '— سورة الروم، ٣٠:٢١',

        venueHeaderTitle: 'المكان',
        openInMapsLabel: 'فتح في خرائط جوجل',
        addToCalendarLabel: 'إضافة إلى التقويم',

        dressCodeHeaderTitle: 'الزي الموصى به',
        dressCodeIntro: 'لضيوفنا الكرام\nندعوكم لمشاركتنا ألوان الحفل ليكون يوماً متناسقاً وجميلاً.',
        ladiesTitle: 'السيدات',
        ladiesColors: 'الوردي الناعم (Blush Pink)',
        ladiesItems: 'ساري · فستان · عباءة',
        ladiesNote: 'نشجع على الالتزام بالزي اللائق والمحتشم.',
        gentlemenTitle: 'الرجال',
        gentlemenColors: 'البيج (Beige)',
        gentlemenItems: 'ثوب · كندورة',
        dressCodeOutro: 'نقدر جهودكم في المساهمة بإضفاء جمال ورقي على احتفالنا.',

        programmeHeaderTitle: 'برنامج اليوم',
        programmeItems: [
            { time: '١٢:٠٠ - ١٢:٣٠ ظهراً', title: 'الاستقبال والمشروبات الترحيبية', icon: 'glass' },
            { time: '١٢:٤٥ ظهراً', title: 'وصول العروس', icon: 'sparkles' },
            { time: '١:٠٠ ظهراً', title: 'مراسم النكاح', icon: 'rings' },
            { time: '١:٣٠ ظهراً', title: 'صلاة الظهر جماعة', icon: 'mosque' },
            { time: '٢:٠٠ ظهراً', title: 'غداء الوليمة', icon: 'cutlery' },
            { time: '٤:٠٠ عصراً', title: 'تقطيع الكعك', icon: 'cake' },
            { time: '٤:٣٠ عصراً', title: 'وداع العروسين', icon: 'heart' },
        ],

        menuHeaderTitle: 'قائمة طعام الوليمة',
        startersTitle: 'المقبلات',
        startersItems: 'دجاج بيري بيري، سيخ كباب، سمك باكورا، سمبوسة خضار، سلطات وصلصات',
        mainsTitle: 'الأطباق الرئيسية',
        mainsItems: 'لحم روغان جوش، دجاج جالفريزي، كاري السمك، كاري الخضار، أرز بيلاو، أرز أبيض',
        dessertsTitle: 'الحلويات',
        dessertsItems: 'جلاب جامون، آيس كريم',

        blessedBeginningHeaderTitle: 'بداية مباركة',
        blessedVerseArabic: 'وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ',
        blessedVerseTranslation: '"ومن كل شيء خلقنا زوجين."',
        blessedVerseSource: '— سورة الذاريات، ٥١:٤٩',
        blessedPoints: [
            { title: 'بقضاء الله وقدره', desc: 'تلتقي عائلتان، وتبدأ حياتان فصلاً جديداً، ويُبنى بيت جديد على سنّة الله ورسوله.' },
            { title: 'بالسكينة', desc: 'نسأل الله أن يجعل بيتهما سكناً وطمأنينة وصحبتهما راحة ووداً.' },
            { title: 'بالمودة', desc: 'أن يزرع المحبة الدائمة بينهما وينميا معاً في كل مراحل الحياة.' },
            { title: 'بالرحمة', desc: 'أن تظل الرحمة في قلب زواجهما في اليسر والعسر.' },
        ],
        blessedDua: 'اللَّهُمَّ بَارِكْ لَهُمَا — "اللهم بارك لهما وبارك عليهما."',

        kindRequestHeaderTitle: 'رجاء كريم',
        kindRequestSubtitle: 'الاحتفال بالبركة',
        kindRequestBody: 'حضوركم ودعواتكم الصادقة هي أغلى هدية تقدمونها لنا.\nنرجو من ضيوفنا الكرام مساعدتنا في الحفاظ على أجواء الحشمة والوقار والبركة طوال اليوم.',
        kindRequestJazakallah: 'جزاكم الله خيراً لمشاركتكم فرحتنا.',

        rsvpHeaderTitle: 'تأكيد الحضور',
        rsvpBismillah: 'بِسْمِ ٱللَّٰهِ',
        rsvpSubtitle: 'هل ستشاركوننا الفرحة؟',
        rsvpPhone: '07828 931050',
        rsvpInstructions: 'يسعدنا جداً حضوركم ومشاركتكم هذا اليوم المبارك مع عائلاتنا.\nيرجى تأكيد الحضور عبر الرقم: 07828 931050\nمع ذكر اسمك الكامل وعدد المرافقين.',
        rsvpButtonLabel: 'تأكيد الحضور عبر الواتساب',
        rsvpPrefilledMessage: 'السلام عليكم، أود تأكيد الحضور لحفل نكاح ووليمة فرحان وأماني. الاسم: ______ وعدد المرافقين: ______. جزاكم الله خيراً.',

        footerTitle: 'فرحان & أماني',
        footerDuaArabic: 'بَارَكَ ٱللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        footerDuaTranslation: '"بارك الله لكما وبارك عليكما وجمع بينكما في خير."',
        footerFamilyGratitude: 'من عائلاتنا مع خالص الشكر والامتنان',
        footerJazakallah: 'جزاكم الله خيراً',
        footerClosingBody: 'شكراً لمشاركتكم هذه المناسبة الخاصة ولدعواتكم الطيبة لفرحان وأماني.\nنسأل الله أن يجزكم خير الجزاء ويجعل بيتهما عامراً بالإيمان والسكينة والمودة.',
        footerLookingForward: 'نتطلع للاحتفال معكم إن شاء الله.',
    },

    de: {
        monogram: 'F & A',
        groomName: 'Farhan Hussain',
        brideName: 'Amani Abd',
        groomParents: 'Zweitältester Sohn von Nozmul Hussain & Irmana Parvin',
        brideParents: 'Älteste Tochter von Basim Abd & Lelyan Noufal',
        eventTitle: 'Nikkah & Walima',
        subtitle: 'Laden Sie zusammen mit ihren Familien herzlich zu ihrer islamischen Hochzeit ein',
        date: 'Samstag, 10. Oktober 2026',
        time: 'Ab 12:00 Uhr',
        venueName: 'Badsha Palace Restaurant',
        venueAddress: 'Walsall Road, Birmingham, B42 1LR',
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        tapToOpen: 'ZUM ÖFFNEN TIPPEN',
        soundOn: 'Audio An',
        soundOff: 'Audio Stumm',

        nikkahHeaderTitle: 'NIKKAH & WALIMA VON',
        nikkahDuaArabic: 'بَارَكَ ٱللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        nikkahDuaTransliteration: 'Bārakallāhu lakumā wa bāraka ʿalaykumā wa jamaʿa baynakumā fī khayr.',
        nikkahDuaTranslation: '"Möge Allah euch beide segnen, Seine Segnungen auf euch herabregnen lassen und euch in Güte vereinen."',

        invitationHeading: 'DIE EINLADUNG',
        invitationGreeting: 'Assalāmu ʿalaykum wa raḥmatullāhi wa barakātuh',
        invitationBody: 'Mit der Gnade und Barmherzigkeit Allahs bitten die Familien von Farhan & Amani um die Ehre Ihrer Anwesenheit bei der Feier ihrer Nikkah & Walima.\n\nDa zwei Leben durch das heilige Band der Nikkah vereint werden, wäre es uns eine Ehre, diesen gesegneten Anlass mit Familie und Freunden zu teilen.\n\nMöge diese Zusammenkunft von Dankbarkeit und Freude geprägt sein.',

        countdownHeaderTitle: 'UNSER BESONDERER TAG',
        countdownSubtitle: 'Bis zur Nikkah',
        daysLabel: 'TAGE',
        hoursLabel: 'STUNDEN',
        minutesLabel: 'MINUTEN',
        secondsLabel: 'SEKUNDEN',
        countdownFooterNote: 'Der Countdown läuft für einen von Allah geschriebenen Tag und den Beginn eines neuen Kapitels, in shā\' Allāh.',

        verseArabic: 'وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً',
        verseTranslation: '"Und unter Seinen Zeichen ist dies, dass Er Gattinnen für euch aus euch selbst erschuf, damit ihr Ruhe bei ihnen findet, und Er hat Zuneigung und Barmherzigkeit zwischen euch gesetzt."',
        verseHighlightedPart: 'Zuneigung und Barmherzigkeit',
        verseSource: '— Sure Ar-Rum, 30:21',

        venueHeaderTitle: 'DER VERANSTALTUNGSORT',
        openInMapsLabel: 'IN GOOGLE MAPS ÖFFNEN',
        addToCalendarLabel: 'ZUM KALENDER HINZUFÜGEN',

        dressCodeHeaderTitle: 'DRESSCODE',
        dressCodeIntro: 'FÜR UNSERE GÄSTE\nWir laden unsere Gäste herzlich ein, sich dem Farbthema unseres besonderen Tages anzuschließen.',
        ladiesTitle: 'DAMEN',
        ladiesColors: 'Altrosa (Blush Pink)',
        ladiesItems: 'Sari · Kleid · Abaya',
        ladiesNote: 'Dezente und würdevolle Kleidung wird erbeten.',
        gentlemenTitle: 'HERREN',
        gentlemenColors: 'Beige',
        gentlemenItems: 'Thobe · Kandora',
        dressCodeOutro: 'Wir schätzen Ihre Bemühungen, zu einer wunderschönen Feier beizutragen.',

        programmeHeaderTitle: 'PROGRAMM',
        programmeItems: [
            { time: '12:00 Uhr – 12:30 Uhr', title: 'Empfang, Begrüßungsgetränke & Gespräche', icon: 'glass' },
            { time: '12:45 Uhr', title: 'Ankunft der Braut', icon: 'sparkles' },
            { time: '13:00 Uhr', title: 'Nikkah Zeremonie', icon: 'rings' },
            { time: '13:30 Uhr', title: 'Zuhr Jamāʿah Gebet', icon: 'mosque' },
            { time: '14:00 Uhr', title: 'Walima Mittagessen', icon: 'cutlery' },
            { time: '16:00 Uhr', title: 'Tortenanschnitt', icon: 'cake' },
            { time: '16:30 Uhr', title: 'Verabschiedung des Brautpaares', icon: 'heart' },
        ],

        menuHeaderTitle: 'DAS WALIMA MENÜ',
        startersTitle: 'VORSPEISEN',
        startersItems: 'Peri Peri Hähnchen, Seekh Kebabs, Fisch Pakora, Gemüse Samosa, Salat & Saucen',
        mainsTitle: 'HAUPTSPEISEN',
        mainsItems: 'Fleisch Rogan Josh, Hähnchen Jalfrezi, Fisch Korma, Gemüse Curry, Pilau Reis, Weißer Reis',
        dessertsTitle: 'NACHTISCHE',
        dessertsItems: 'Gulab Jamun, Eiscreme',

        blessedBeginningHeaderTitle: 'EIN GESEGNETER ANFANG',
        blessedVerseArabic: 'وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ',
        blessedVerseTranslation: '"Und von allen Dingen haben Wir Paare erschaffen."',
        blessedVerseSource: '— Sure Adh-Dhariyat, 51:49',
        blessedPoints: [
            { title: 'VON ALLAH GESCHRIEBEN', desc: 'Zwei Familien kommen zusammen, zwei Leben beginnen ein neues Kapitel.' },
            { title: 'MIT SAKINAH', desc: 'Möge ihr Zuhause ein Ort der Ruhe und Geborgenheit sein.' },
            { title: 'MIT MAWADDAH', desc: 'Möge Allah dauerhafte Zuneigung zwischen ihnen pflanzen.' },
            { title: 'MIT RAHMAH', desc: 'Möge Barmherzigkeit das Herzstück ihrer Ehe bleiben.' },
        ],
        blessedDua: 'اللَّهُمَّ بَارِكْ لَهُمَا — "O Allah, segne ihre Gemeinschaft."',

        kindRequestHeaderTitle: 'EINE HERZLICHE BITTE',
        kindRequestSubtitle: 'FEIERN MIT BARAKAH',
        kindRequestBody: 'Ihre Anwesenheit und aufrichtigen Duʿās sind die wertvollsten Geschenke.\nWir bitten unsere Gäste höflich darum, eine Atmosphäre des Respekts und der Barakah zu bewahren.',
        kindRequestJazakallah: 'JazākumAllāhu khayran fürs Mitfeiern.',

        rsvpHeaderTitle: 'RÜCKMELDUNG (RSVP)',
        rsvpBismillah: 'بِسْمِ ٱللَّٰهِ',
        rsvpSubtitle: 'WERDEN SIE DABEI SEIN?',
        rsvpPhone: '07828 931050',
        rsvpInstructions: 'Wir würden uns freuen, diesen gesegneten Tag mit Ihnen zu verbringen.\nBitte antworten Sie bis zum gewünschten Datum an: 07828 931050.\nBitte geben Sie Ihren vollständigen Namen und die Anzahl der Begleitpersonen an.',
        rsvpButtonLabel: 'JETZT VIA WHATSAPP ANTWORTEN',
        rsvpPrefilledMessage: 'Assalāmu ʿalaykum, ich möchte mich für Farhan & Amanis Nikkah & Walima zurückmelden. Mein Name ist ______ und meine Begleitpersonen sind ______. JazākumAllāhu khayran.',

        footerTitle: 'Farhan & Amani',
        footerDuaArabic: 'بَارَكَ ٱللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        footerDuaTranslation: '"Möge Allah euch beide segnen und in Güte vereinen."',
        footerFamilyGratitude: 'VON UNSEREN FAMILIEN MIT DANKBARKEIT',
        footerJazakallah: 'JazākumAllāhu khayran',
        footerClosingBody: 'Vielen Dank, dass Sie diesen besonderen Tag mit uns teilen.\nMöge Allah Sie belohnen und diese Ehe mit Liebe und Barmherzigkeit erfüllen.',
        footerLookingForward: 'Wir freuen uns darauf, mit Ihnen zu feiern, In shā\' Allāh.',
    },
};

export const NASHEED_AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=arabic-meditation-nasheed-ambient-112340.mp3';
export const ENVELOPE_VIDEO_URL = '/videos/clickbutton.mp4';
export const MAIN_BACKGROUND_VIDEO_URL = '/videos/mainbackgroundvideo.mp4';

