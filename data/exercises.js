const exercises = [

{
    id: 1,
    name: "Push-ups",
    image: "assets/pushup.png",
    sets: 3,
    reps: "10",
    rest: 60,
    muscle: "Borst • Schouders • Triceps",
    difficulty: "Beginner",
    calories: 18,
    description: "Houd je lichaam in een rechte lijn. Laat je borst rustig zakken en duw jezelf krachtig omhoog."
},

{
    id: 2,
    name: "Squats",
    image: "assets/squat.png",
    sets: 3,
    reps: "15",
    rest: 60,
    muscle: "Benen • Billen",
    difficulty: "Beginner",
    calories: 20,
    description: "Zak gecontroleerd totdat je bovenbenen ongeveer parallel aan de vloer zijn. Houd je rug recht."
},

{
    id: 3,
    name: "Plank",
    image: "🧘",
    sets: 3,
    reps: "30 sec",
    rest: 45,
    muscle: "Core • Schouders",
    difficulty: "Beginner",
    calories: 10,
    description: "Span je buik en billen aan. Houd je lichaam volledig recht."
},

{
    id: 4,
    name: "Mountain Climbers",
    image: "🏃",
    sets: 3,
    reps: "20",
    rest: 45,
    muscle: "Core • Conditie",
    difficulty: "Beginner",
    calories: 18,
    description: "Breng afwisselend je knieën snel richting je borst."
},

{
    id: 5,
    name: "Glute Bridge",
    image: "🍑",
    sets: 3,
    reps: "15",
    rest: 45,
    muscle: "Billen • Hamstrings",
    difficulty: "Beginner",
    calories: 14,
    description: "Duw je heupen omhoog en span je billen bovenaan goed aan."
},

{
    id: 6,
    name: "Reverse Lunges",
    image: "🦿",
    sets: 3,
    reps: "12 per been",
    rest: 60,
    muscle: "Benen • Billen",
    difficulty: "Beginner",
    calories: 20,
    description: "Stap gecontroleerd naar achteren en duw jezelf terug omhoog."
},
{
    id: 7,
    name: "Superman",
    image: "🦸",
    sets: 3,
    reps: "15",
    rest: 45,
    muscle: "Onderrug • Billen",
    difficulty: "Beginner",
    calories: 12,
    description: "Til tegelijkertijd je armen en benen van de grond en houd dit kort vast."
},

{
    id: 8,
    name: "Bicycle Crunches",
    image: "🚴",
    sets: 3,
    reps: "20",
    rest: 45,
    muscle: "Buikspieren",
    difficulty: "Beginner",
    calories: 16,
    description: "Breng afwisselend je elleboog naar de tegenoverliggende knie."
},

{
    id: 9,
    name: "Burpees",
    image: "🔥",
    sets: 3,
    reps: "10",
    rest: 60,
    muscle: "Volledig lichaam",
    difficulty: "Gemiddeld",
    calories: 30,
    description: "Zak naar de grond, spring terug en eindig met een krachtige sprong."
},

{
    id: 10,
    name: "Jumping Jacks",
    image: "🤸",
    sets: 3,
    reps: "30",
    rest: 45,
    muscle: "Conditie • Schouders • Benen",
    difficulty: "Beginner",
    calories: 18,
    description: "Spring met armen en benen tegelijk naar buiten en weer terug."
},
{
    id: 11,
    name: "Wall Sit",
    image: "🪑",
    sets: 3,
    reps: "45 sec",
    rest: 45,
    muscle: "Bovenbenen • Billen",
    difficulty: "Beginner",
    calories: 14,
    description: "Leun met je rug tegen de muur en houd je bovenbenen parallel aan de vloer."
},

{
    id: 12,
    name: "Pike Push-ups",
    image: "🔺",
    sets: 3,
    reps: "10",
    rest: 60,
    muscle: "Schouders • Triceps",
    difficulty: "Gemiddeld",
    calories: 18,
    description: "Houd je heupen hoog en laat je hoofd gecontroleerd richting de vloer zakken."
},

{
    id: 13,
    name: "High Knees",
    image: "🏃‍♂️",
    sets: 3,
    reps: "30 sec",
    rest: 45,
    muscle: "Conditie • Benen",
    difficulty: "Beginner",
    calories: 20,
    description: "Breng je knieën zo hoog mogelijk omhoog in een hoog tempo."
},

{
    id: 14,
    name: "Side Plank",
    image: "📐",
    sets: 3,
    reps: "30 sec per zijde",
    rest: 45,
    muscle: "Core • Schuine buikspieren",
    difficulty: "Beginner",
    calories: 12,
    description: "Houd je lichaam recht terwijl je steunt op één onderarm."
},

{
    id: 15,
    name: "Donkey Kicks",
    image: "🐴",
    sets: 3,
    reps: "15 per been",
    rest: 45,
    muscle: "Billen",
    difficulty: "Beginner",
    calories: 14,
    description: "Duw je voet gecontroleerd omhoog terwijl je rug stabiel blijft."
},

{
    id: 16,
    name: "Bird Dog",
    image: "🐦",
    sets: 3,
    reps: "12 per zijde",
    rest: 45,
    muscle: "Core • Onderrug",
    difficulty: "Beginner",
    calories: 12,
    description: "Strek één arm en het tegenovergestelde been tegelijk uit en houd je romp stabiel."
},

{
    id: 17,
    name: "Step Back Squat",
    image: "🦵",
    sets: 3,
    reps: "12",
    rest: 45,
    muscle: "Benen • Billen",
    difficulty: "Beginner",
    calories: 18,
    description: "Stap achteruit, keer terug en maak direct een squat."
},

{
    id: 18,
    name: "Bear Crawl",
    image: "🐻",
    sets: 3,
    reps: "20 stappen",
    rest: 60,
    muscle: "Core • Schouders • Benen",
    difficulty: "Gemiddeld",
    calories: 22,
    description: "Kruip langzaam vooruit terwijl je knieën net boven de grond blijven."
},

{
    id: 19,
    name: "Triceps Dips",
    image: "💺",
    sets: 3,
    reps: "12",
    rest: 60,
    muscle: "Triceps",
    difficulty: "Beginner",
    calories: 16,
    description: "Gebruik een stoel of bankje en laat jezelf gecontroleerd zakken."
},

{
    id: 20,
    name: "Calf Raises",
    image: "🦶",
    sets: 3,
    reps: "20",
    rest: 30,
    muscle: "Kuiten",
    difficulty: "Beginner",
    calories: 10,
    description: "Kom op je tenen en laat jezelf langzaam weer zakken."
}
];
