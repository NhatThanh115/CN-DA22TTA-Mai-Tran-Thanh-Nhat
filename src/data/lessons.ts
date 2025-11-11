/**
 * Data structure for TVEnglish learning content
 * 
 * Hierarchy:
 * Course (CEFR Level: A1, A2, B1, B2)
 *   └── Topics (e.g., Greetings, Daily Life, Work)
 *       └── Lessons (individual lessons with exercises)
 */

export type DifficultyLevel = 'A1' | 'A2' | 'B1' | 'B2';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  keyPoints: string[];
  media?: {
    type: 'image' | 'video';
    url?: string;
    placeholder: string;
    caption?: string;
  }[];
  examples: {
    sentence: string;
    explanation: string;
  }[];
  practiceExercise?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}

export const lessons: Record<string, Lesson> = {
  // GREETINGS & INTRODUCTIONS
  "greetings-basic": {
    id: "greetings-basic",
    title: "Basic Greetings",
    description: "Learn how to greet people in different situations - formal and informal contexts.",
    difficulty: "A1",
    keyPoints: [
      "Use 'Hello' and 'Hi' for general greetings",
      "'Good morning/afternoon/evening' are time-specific greetings",
      "'How are you?' is a common follow-up question",
      "Informal greetings include 'Hey', 'What's up?', 'How's it going?'"
    ],
    examples: [
      {
        sentence: "Hello! How are you today?",
        explanation: "A friendly, neutral greeting suitable for most situations"
      },
      {
        sentence: "Good morning, Mr. Smith. Nice to see you.",
        explanation: "A formal greeting using time of day and title"
      },
      {
        sentence: "Hey! What's up?",
        explanation: "An informal greeting used between friends"
      },
      {
        sentence: "Hi there! How's it going?",
        explanation: "A casual, friendly greeting"
      }
    ],
    practiceExercise: {
      question: "Complete the conversation: 'Good morning, ___________.'",
      options: ["dude", "Professor Johnson", "buddy", "mate"],
      correctAnswer: 1,
      explanation: "The correct answer is 'Professor Johnson'. Since the greeting is 'Good morning' (formal), we should use a formal title and last name."
    }
  },

  "introductions-self": {
    id: "introductions-self",
    title: "Introducing Yourself",
    description: "Learn how to introduce yourself in English, including sharing your name, occupation, and where you're from.",
    difficulty: "A1",
    keyPoints: [
      "Start with 'My name is...' or 'I'm...' to give your name",
      "Use 'I'm from...' to say where you're from",
      "Say 'I work as...' or 'I'm a...' to describe your job",
      "Add 'Nice to meet you' at the end"
    ],
    examples: [
      {
        sentence: "Hi, my name is Sarah. I'm from Canada.",
        explanation: "Basic self-introduction with name and country"
      },
      {
        sentence: "Hello, I'm John Smith. I work as a software engineer.",
        explanation: "Professional introduction including full name and occupation"
      },
      {
        sentence: "Nice to meet you. I'm Maria, and I'm a teacher from Spain.",
        explanation: "Complete introduction with greeting, name, job, and origin"
      }
    ],
    practiceExercise: {
      question: "Fill in the blanks: 'Hello, my name ___ David. I ___ from Australia, and I ___ as a doctor.'",
      options: ["is / am / work", "am / am / working", "is / come / works", "was / am / worked"],
      correctAnswer: 0,
      explanation: "The correct answer is 'is / am / work'. We use 'is' after 'my name', 'am' with 'I', and 'work' in present simple for jobs."
    }
  },

  "greetings-farewell": {
    id: "greetings-farewell",
    title: "Saying Goodbye",
    description: "Learn different ways to say goodbye in formal and informal situations.",
    difficulty: "A1",
    keyPoints: [
      "Basic farewells: Goodbye, Bye, See you later",
      "Formal: Have a good day, Take care, It was nice meeting you",
      "Informal: See ya, Catch you later, Talk to you soon",
      "Time-specific: Good night (only when leaving in the evening)"
    ],
    examples: [
      {
        sentence: "Goodbye! Have a great day!",
        explanation: "Polite farewell suitable for most situations"
      },
      {
        sentence: "See you tomorrow! Take care.",
        explanation: "Friendly goodbye with future meeting implied"
      },
      {
        sentence: "It was nice meeting you. Hope to see you again soon.",
        explanation: "Formal farewell after first meeting"
      },
      {
        sentence: "Gotta go! Catch you later!",
        explanation: "Very informal goodbye between friends"
      }
    ],
    practiceExercise: {
      question: "When should you say 'Good night' as a farewell?",
      options: [
        "Only when leaving in the evening or before bed",
        "Anytime you want to say goodbye",
        "Only to your family members",
        "Only when it's already dark outside"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'Only when leaving in the evening or before bed'. 'Good night' is specifically used when parting in the evening or before going to sleep, not as a general greeting throughout the night."
    }
  },

  // DAILY ACTIVITIES
  "daily-routines": {
    id: "daily-routines",
    title: "Daily Routines",
    description: "Learn vocabulary and phrases to describe your daily activities and routines.",
    difficulty: "A2",
    keyPoints: [
      "Use present simple tense to describe regular activities",
      "Common routine verbs: wake up, get up, have breakfast, go to work, come home",
      "Time expressions: in the morning, at noon, in the afternoon, in the evening, at night",
      "Frequency adverbs: always, usually, often, sometimes, rarely, never"
    ],
    examples: [
      {
        sentence: "I wake up at 7:00 AM every morning.",
        explanation: "Describing a regular morning activity with specific time"
      },
      {
        sentence: "She usually has breakfast before going to work.",
        explanation: "Using frequency adverb 'usually' to describe a routine"
      },
      {
        sentence: "We often exercise in the evening after dinner.",
        explanation: "Describing an evening routine with frequency and time"
      },
      {
        sentence: "He sometimes works from home on Fridays.",
        explanation: "Using 'sometimes' to show an activity that happens occasionally"
      }
    ],
    practiceExercise: {
      question: "Put the words in the correct order: 'usually / I / breakfast / at / have / 8 AM'",
      options: [
        "I usually have breakfast at 8 AM",
        "Usually I have at breakfast 8 AM",
        "I have usually breakfast at 8 AM",
        "At 8 AM I have usually breakfast"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is: 'I usually have breakfast at 8 AM.' In English, the word order is: Subject + Frequency adverb + Verb + Object + Time."
    }
  },

  "time-telling": {
    id: "time-telling",
    title: "Telling the Time",
    description: "Learn how to ask for and tell the time in English, including different ways to express time.",
    difficulty: "A1",
    keyPoints: [
      "Ask 'What time is it?' or 'Do you have the time?'",
      "Use 'o'clock' for exact hours: 'It's 3 o'clock'",
      "For minutes after the hour: 'It's ten past three' or 'It's 3:10'",
      "For minutes before the hour: 'It's ten to four' or 'It's 3:50'"
    ],
    examples: [
      {
        sentence: "What time is it? - It's 9 o'clock.",
        explanation: "Asking and telling time on the hour"
      },
      {
        sentence: "It's half past two. / It's 2:30.",
        explanation: "Two ways to say the same time - British and American style"
      },
      {
        sentence: "It's quarter to five. / It's 4:45.",
        explanation: "Expressing 15 minutes before the hour"
      },
      {
        sentence: "The meeting starts at 10:15 AM.",
        explanation: "Using specific time with AM designation"
      }
    ]
  },

  "daily-housework": {
    id: "daily-housework",
    title: "Housework & Chores",
    description: "Learn vocabulary for household tasks and how to talk about daily chores.",
    difficulty: "A2",
    keyPoints: [
      "Common chores: do the dishes, vacuum, sweep, mop, dust",
      "Laundry: wash clothes, hang laundry, iron, fold clothes",
      "Kitchen: cook, prepare meals, wash dishes, clean the counter",
      "Expressing duty: 'I need to...', 'I have to...', 'It's my turn to...'"
    ],
    examples: [
      {
        sentence: "I need to vacuum the living room before guests arrive.",
        explanation: "Expressing a necessary chore"
      },
      {
        sentence: "My brother does the dishes every night after dinner.",
        explanation: "Describing regular household responsibilities"
      },
      {
        sentence: "It's my turn to take out the trash this week.",
        explanation: "Talking about shared household duties"
      },
      {
        sentence: "I spent all morning cleaning the house and doing laundry.",
        explanation: "Describing completed housework"
      }
    ],
    practiceExercise: {
      question: "Match the chore with its meaning: 'Do the laundry'",
      options: [
        "Wash and care for clothes",
        "Clean the floors",
        "Wash the dishes",
        "Organize the closet"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'Wash and care for clothes'. 'Do the laundry' means to wash, dry, and sometimes iron and fold clothes."
    }
  },

  // SHOPPING & FOOD
  "shopping-basics": {
    id: "shopping-basics",
    title: "Shopping Basics",
    description: "Essential phrases and vocabulary for shopping in English-speaking countries.",
    difficulty: "A2",
    keyPoints: [
      "Use 'How much is this?' to ask about price",
      "'I'm looking for...' to say what you want to buy",
      "'Can I try this on?' when shopping for clothes",
      "'I'll take it' when you decide to buy something"
    ],
    examples: [
      {
        sentence: "Excuse me, how much is this shirt?",
        explanation: "Politely asking for the price of an item"
      },
      {
        sentence: "I'm looking for a birthday gift for my friend.",
        explanation: "Telling the salesperson what you need"
      },
      {
        sentence: "Can I try this on? Where's the fitting room?",
        explanation: "Asking to try on clothes and find the changing room"
      },
      {
        sentence: "This looks great! I'll take it.",
        explanation: "Deciding to purchase an item"
      }
    ],
    practiceExercise: {
      question: "Complete the shopping dialogue: 'Excuse me, _____ is this jacket?' / 'Can I _____ it _____?'",
      options: ["how much / try / on", "what price / wear / now", "how many / see / here", "which cost / buy / there"],
      correctAnswer: 0,
      explanation: "The correct answer is 'how much / try / on'. These are essential shopping phrases - 'how much' asks about price, and 'try it on' means to test clothing."
    }
  },

  "restaurant-ordering": {
    id: "restaurant-ordering",
    title: "Ordering at a Restaurant",
    description: "Learn how to order food and drinks at restaurants, cafes, and other dining establishments.",
    difficulty: "A2",
    keyPoints: [
      "Use 'I'd like...' or 'Can I have...' to order",
      "Ask 'What do you recommend?' for suggestions",
      "'Could I get the bill/check, please?' to ask for the bill",
      "Say 'This is delicious' or 'This tastes great' to compliment the food"
    ],
    examples: [
      {
        sentence: "I'd like the grilled salmon, please.",
        explanation: "Politely ordering a main course"
      },
      {
        sentence: "Can I have a coffee and a piece of chocolate cake?",
        explanation: "Ordering drinks and dessert"
      },
      {
        sentence: "What do you recommend for vegetarians?",
        explanation: "Asking for menu recommendations"
      },
      {
        sentence: "Could we get the check, please? The meal was wonderful!",
        explanation: "Asking for the bill and complimenting the food"
      }
    ],
    practiceExercise: {
      question: "After the waiter takes your order, what would they typically say?",
      options: [
        "The bill, please",
        "And for dessert?",
        "Enjoy your meal!",
        "What's your name?"
      ],
      correctAnswer: 2,
      explanation: "The correct answer is 'Enjoy your meal!' After taking your order, the waiter would typically say this before bringing your food. They might ask about dessert later, after you finish your main course."
    }
  },

  "shopping-grocery": {
    id: "shopping-grocery",
    title: "Grocery Shopping",
    description: "Learn essential vocabulary and phrases for shopping at supermarkets and grocery stores.",
    difficulty: "A2",
    keyPoints: [
      "Items: fresh produce, dairy products, frozen foods, canned goods",
      "Quantities: a carton of milk, a loaf of bread, a bunch of bananas",
      "Ask: 'Where can I find...?', 'Do you have...?'",
      "At checkout: 'Do you need a bag?', 'Cash or card?'"
    ],
    examples: [
      {
        sentence: "Excuse me, where can I find the fresh vegetables?",
        explanation: "Asking for location in a supermarket"
      },
      {
        sentence: "I need to buy a loaf of bread and a carton of milk.",
        explanation: "Using quantity expressions for groceries"
      },
      {
        sentence: "Do you have any organic apples?",
        explanation: "Asking about specific products"
      },
      {
        sentence: "That'll be $45.50. Will you be paying by cash or card?",
        explanation: "Checkout conversation"
      }
    ]
  },

  // TRAVEL & DIRECTIONS
  "asking-directions": {
    id: "asking-directions",
    title: "Asking for Directions",
    description: "Learn how to ask for and understand directions when traveling or exploring a new place.",
    difficulty: "B1",
    keyPoints: [
      "Start with 'Excuse me, how do I get to...?'",
      "Common directions: turn left/right, go straight, it's on your left/right",
      "Distance phrases: 'It's about 5 minutes away', 'It's two blocks from here'",
      "Landmarks: 'next to', 'opposite', 'between', 'near'"
    ],
    examples: [
      {
        sentence: "Excuse me, how do I get to the train station?",
        explanation: "Politely asking for directions to a location"
      },
      {
        sentence: "Go straight for two blocks, then turn left at the traffic lights.",
        explanation: "Giving clear step-by-step directions"
      },
      {
        sentence: "The museum is on your right, next to the post office.",
        explanation: "Using landmarks to describe location"
      },
      {
        sentence: "It's about a 10-minute walk from here.",
        explanation: "Giving distance in terms of walking time"
      }
    ]
  },

  "travel-hotel": {
    id: "travel-hotel",
    title: "Hotel & Accommodation",
    description: "Learn essential phrases for booking hotels and communicating at accommodations.",
    difficulty: "B1",
    keyPoints: [
      "Booking: 'I'd like to book a room', 'Do you have any vacancies?'",
      "Check-in/out: 'I have a reservation under...', 'What time is checkout?'",
      "Requests: 'Could I have an extra towel?', 'Is breakfast included?'",
      "Problems: 'The AC isn't working', 'Could you send someone to fix...?'"
    ],
    examples: [
      {
        sentence: "I'd like to book a double room for three nights, please.",
        explanation: "Making a hotel reservation"
      },
      {
        sentence: "Hello, I have a reservation under the name Johnson.",
        explanation: "Checking in at the hotel"
      },
      {
        sentence: "What time is breakfast served, and is it included in the room rate?",
        explanation: "Asking about hotel amenities"
      },
      {
        sentence: "Excuse me, the WiFi in my room isn't working. Could you help?",
        explanation: "Reporting a problem"
      }
    ],
    practiceExercise: {
      question: "What should you say when you arrive at a hotel where you've already made a booking?",
      options: [
        "I have a reservation under [your name]",
        "I want to book a room",
        "Give me a room please",
        "Where's my room?"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'I have a reservation under [your name]'. This is the polite and standard way to check in when you've already booked a room."
    }
  },

  "travel-airport": {
    id: "travel-airport",
    title: "At the Airport",
    description: "Master essential airport vocabulary and phrases for international travel.",
    difficulty: "B1",
    keyPoints: [
      "Check-in: boarding pass, passport control, baggage allowance",
      "Security: take off shoes, liquids in carry-on, metal detector",
      "Boarding: gate number, boarding time, seat assignment",
      "Arrivals: baggage claim, customs, nothing to declare"
    ],
    examples: [
      {
        sentence: "May I see your boarding pass and passport, please?",
        explanation: "Security checkpoint question"
      },
      {
        sentence: "Flight BA204 to London is now boarding at Gate 12.",
        explanation: "Boarding announcement"
      },
      {
        sentence: "Please place all liquids in a clear plastic bag for security.",
        explanation: "Security instruction"
      },
      {
        sentence: "After collecting your luggage, proceed to customs.",
        explanation: "Arrival procedure"
      }
    ]
  },

  // WEATHER & SMALL TALK
  "weather-talk": {
    id: "weather-talk",
    title: "Talking About the Weather",
    description: "Learn how to discuss the weather - a common topic for small talk in English.",
    difficulty: "A2",
    keyPoints: [
      "Common phrases: 'What's the weather like?', 'It's sunny/rainy/cloudy'",
      "Temperature: 'It's hot/warm/cool/cold'",
      "Use 'There is/are' for weather conditions: 'There's a storm coming'",
      "Future weather: 'It's going to rain', 'It will be sunny tomorrow'"
    ],
    examples: [
      {
        sentence: "What a beautiful day! It's so sunny and warm.",
        explanation: "Making a positive comment about nice weather"
      },
      {
        sentence: "It's raining heavily today. Don't forget your umbrella!",
        explanation: "Describing current weather and giving advice"
      },
      {
        sentence: "The forecast says it's going to snow tomorrow.",
        explanation: "Talking about future weather predictions"
      },
      {
        sentence: "It's quite cold this morning, isn't it?",
        explanation: "Using a question tag to start a conversation about weather"
      }
    ],
    practiceExercise: {
      question: "Match the weather condition with the description:\\n\\n1. It's pouring\\n2. It's freezing\\n3. It's boiling\\n\\na) Extremely hot\\nb) Very cold\\nc) Raining very heavily",
      options: ["c) Raining very heavily", "b) Very cold", "a) Extremely hot"],
      correctAnswer: 0,
      explanation: "Answers: 1-c, 2-b, 3-a. These are informal expressions to describe extreme weather conditions."
    }
  },

  "weather-seasons": {
    id: "weather-seasons",
    title: "Seasons & Climate",
    description: "Learn how to talk about seasons, climate, and weather patterns throughout the year.",
    difficulty: "A2",
    keyPoints: [
      "Four seasons: spring, summer, fall/autumn, winter",
      "Season characteristics: warm, hot, cool, cold, rainy, snowy",
      "Climate: tropical, temperate, dry, humid, mild",
      "Preferences: 'I love/hate...', 'My favorite season is...'"
    ],
    examples: [
      {
        sentence: "Spring is my favorite season because flowers bloom everywhere.",
        explanation: "Expressing preference with reason"
      },
      {
        sentence: "It gets very hot in summer, often over 35 degrees Celsius.",
        explanation: "Describing seasonal temperature"
      },
      {
        sentence: "We usually get a lot of rain during the autumn months.",
        explanation: "Talking about weather patterns"
      },
      {
        sentence: "Winter in this region is quite mild compared to northern areas.",
        explanation: "Comparing climate conditions"
      }
    ],
    practiceExercise: {
      question: "Complete: 'In _____ the leaves change color and fall from the trees.'",
      options: ["autumn/fall", "spring", "summer", "winter"],
      correctAnswer: 0,
      explanation: "The correct answer is 'autumn/fall'. This is the season when deciduous trees shed their leaves. Both 'autumn' (British English) and 'fall' (American English) are correct."
    }
  },

  "weather-natural-disasters": {
    id: "weather-natural-disasters",
    title: "Extreme Weather & Natural Disasters",
    description: "Learn vocabulary for extreme weather conditions and how to talk about natural disasters.",
    difficulty: "A2",
    keyPoints: [
      "Weather events: storm, hurricane, typhoon, tornado, flood",
      "Actions: evacuate, take shelter, prepare emergency supplies",
      "Warnings: weather alert, storm warning, emergency broadcast",
      "Safety: 'Stay indoors', 'Avoid flood areas', 'Follow evacuation orders'"
    ],
    examples: [
      {
        sentence: "There's a severe storm warning for tonight. Please stay indoors.",
        explanation: "Communicating a weather warning"
      },
      {
        sentence: "The typhoon caused flooding in several coastal areas.",
        explanation: "Describing disaster impact"
      },
      {
        sentence: "We need to prepare an emergency kit with water and supplies.",
        explanation: "Discussing disaster preparedness"
      },
      {
        sentence: "Residents were asked to evacuate before the hurricane arrived.",
        explanation: "Talking about emergency procedures"
      }
    ]
  },

  // WORK & BUSINESS
  "job-interview": {
    id: "job-interview",
    title: "Job Interview Phrases",
    description: "Essential English phrases and expressions for job interviews.",
    difficulty: "B2",
    keyPoints: [
      "Introduce yourself professionally: 'Thank you for this opportunity'",
      "Talk about strengths: 'I'm good at...', 'My strength is...'",
      "Discuss experience: 'I have X years of experience in...'",
      "Ask questions: 'What are the main responsibilities?', 'What's the company culture like?'"
    ],
    examples: [
      {
        sentence: "Thank you for inviting me to interview. I'm excited about this opportunity.",
        explanation: "Professional opening statement showing enthusiasm"
      },
      {
        sentence: "I have five years of experience in project management.",
        explanation: "Clearly stating your relevant experience"
      },
      {
        sentence: "My greatest strength is my ability to work well in a team.",
        explanation: "Answering a common interview question about strengths"
      },
      {
        sentence: "Could you tell me more about the team I would be working with?",
        explanation: "Asking an intelligent question about the role"
      }
    ]
  },

  "email-writing": {
    id: "email-writing",
    title: "Professional Email Writing",
    description: "Learn how to write clear, professional emails in English for business communication.",
    difficulty: "B2",
    keyPoints: [
      "Start with appropriate greeting: 'Dear Mr./Ms. [Name]' or 'Hi [Name]'",
      "State purpose clearly in opening: 'I am writing to...'",
      "Be concise and use professional language",
      "End with: 'Best regards', 'Kind regards', or 'Sincerely'"
    ],
    examples: [
      {
        sentence: "Dear Ms. Johnson, I am writing to inquire about the position advertised on your website.",
        explanation: "Formal email opening stating the purpose"
      },
      {
        sentence: "Thank you for your prompt response. I appreciate your help with this matter.",
        explanation: "Professional way to thank someone in an email"
      },
      {
        sentence: "Please find the attached document for your review.",
        explanation: "Professional way to mention an email attachment"
      },
      {
        sentence: "I look forward to hearing from you soon. Best regards, [Your name]",
        explanation: "Professional email closing"
      }
    ],
    practiceExercise: {
      question: "Which is the most professional way to rewrite this email: 'Hey, can you send me that file? Thanks!'",
      options: [
        "Dear [Name], Could you please send me the file we discussed? Thank you for your assistance. Best regards, [Your name]",
        "Hey, please send the file. Thanks!",
        "Send me that file now. Thanks.",
        "Hi, file please?"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is the first option. It includes a proper greeting ('Dear [Name]'), polite language ('Could you please'), specific reference ('the file we discussed'), thanks, and a professional closing ('Best regards')."
    }
  },

  "work-meetings": {
    id: "work-meetings",
    title: "Business Meetings",
    description: "Learn professional language for participating in meetings and discussions.",
    difficulty: "B2",
    keyPoints: [
      "Opening: 'Let's get started', 'The purpose of this meeting is...'",
      "Contributing: 'I'd like to add...', 'From my perspective...'",
      "Agreeing/Disagreeing: 'I agree with that point', 'I see it differently'",
      "Closing: 'To summarize...', 'Are there any questions?'"
    ],
    examples: [
      {
        sentence: "Let's get started. The purpose of today's meeting is to discuss the new project timeline.",
        explanation: "Opening a meeting professionally"
      },
      {
        sentence: "I'd like to add that we should also consider the budget constraints.",
        explanation: "Contributing to the discussion"
      },
      {
        sentence: "I see your point, but I think we need to approach this differently.",
        explanation: "Politely disagreeing"
      },
      {
        sentence: "To summarize, we've agreed on three main action items for next week.",
        explanation: "Closing a meeting with summary"
      }
    ],
    practiceExercise: {
      question: "What's the most professional way to disagree in a meeting?",
      options: [
        "I see your point, but I have a different perspective",
        "That's wrong",
        "I don't agree",
        "No, that won't work"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'I see your point, but I have a different perspective'. This acknowledges the other person's view before presenting your own, making it diplomatic and professional."
    }
  },

  // CULTURE & HERITAGE
  "visiting-pagoda": {
    id: "visiting-pagoda",
    title: "Visiting a Pagoda",
    description: "Learn essential vocabulary and phrases for visiting pagodas and understanding cultural etiquette at religious sites.",
    difficulty: "B1",
    keyPoints: [
      "Remove your shoes before entering: 'Please take off your shoes here'",
      "Dress modestly: cover shoulders and knees",
      "Be respectful: speak quietly, don't point at Buddha statues",
      "Photography: always ask 'Is it okay to take photos inside?'",
      "Common features: main hall, prayer room, bell tower, incense burner"
    ],
    examples: [
      {
        sentence: "This pagoda was built in the 18th century and is considered a national treasure.",
        explanation: "Describing the historical significance of a pagoda"
      },
      {
        sentence: "Excuse me, do I need to remove my shoes before entering?",
        explanation: "Politely asking about cultural etiquette"
      },
      {
        sentence: "The architecture is stunning! Look at the intricate carvings on the roof.",
        explanation: "Expressing admiration for the pagoda's architecture"
      },
      {
        sentence: "Visitors can light incense and offer prayers at the altar.",
        explanation: "Explaining what visitors can do at a pagoda"
      },
      {
        sentence: "Is photography allowed inside the main hall?",
        explanation: "Asking about photography rules"
      }
    ],
    practiceExercise: {
      question: "What should you do before entering most pagodas and temples in Asia?",
      options: [
        "Remove your shoes and dress modestly",
        "Bring your own incense",
        "Make a donation first",
        "Bow three times at the entrance"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'Remove your shoes and dress modestly'. These are the most common and important etiquette rules when visiting pagodas. While donations are appreciated and bowing may be appropriate, removing shoes and dressing modestly are essential requirements."
    }
  },

  "cultural-heritage": {
    id: "cultural-heritage",
    title: "Discussing Cultural Heritage Sites",
    description: "Learn how to talk about cultural heritage sites, including pagodas, temples, and historical monuments.",
    difficulty: "B1",
    keyPoints: [
      "Describe significance: 'This site is important because...'",
      "Talk about age: 'It dates back to...', 'It was constructed in...'",
      "Explain purpose: 'It was used for...', 'People come here to...'",
      "Express appreciation: 'It's impressive', 'What a magnificent structure'",
      "Ask for information: 'What's the story behind...?', 'Can you tell me about...?'"
    ],
    examples: [
      {
        sentence: "This pagoda dates back to the 15th century and has been restored several times.",
        explanation: "Providing historical context about a cultural site"
      },
      {
        sentence: "What's the story behind the golden Buddha statue in the main hall?",
        explanation: "Asking about specific features of the site"
      },
      {
        sentence: "The pagoda is a UNESCO World Heritage Site due to its unique architectural style.",
        explanation: "Explaining why a site is culturally significant"
      },
      {
        sentence: "Many locals come here to pray and meditate, especially during festivals.",
        explanation: "Describing how people use the cultural site"
      },
      {
        sentence: "The blend of Vietnamese and Chinese architectural influences is fascinating.",
        explanation: "Commenting on architectural features"
      }
    ],
    practiceExercise: {
      question: "Complete the sentence: 'This ancient pagoda _____ to the 13th century and _____ as a center of Buddhist learning.'",
      options: [
        "dates back / was used",
        "goes back / is using",
        "came from / uses",
        "returns / was using"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'dates back / was used'. 'Dates back to' is the standard phrase for talking about when something was built or created. 'Was used' (past passive) is correct for describing the historical purpose of the building."
    }
  },

  "culture-festivals": {
    id: "culture-festivals",
    title: "Festivals & Celebrations",
    description: "Learn how to talk about cultural festivals, traditions, and celebrations.",
    difficulty: "B1",
    keyPoints: [
      "Types: religious festival, national holiday, traditional celebration",
      "Activities: parade, fireworks, special foods, family gathering",
      "Describe: 'We celebrate by...', 'It's traditional to...'",
      "Share: 'In my culture...', 'This festival commemorates...'"
    ],
    examples: [
      {
        sentence: "During Lunar New Year, families gather for a big feast.",
        explanation: "Describing festival traditions"
      },
      {
        sentence: "This festival commemorates our country's independence.",
        explanation: "Explaining festival significance"
      },
      {
        sentence: "It's traditional to give red envelopes with money during this celebration.",
        explanation: "Describing customs"
      },
      {
        sentence: "We celebrate with fireworks, music, and traditional dancing.",
        explanation: "Listing festival activities"
      }
    ],
    practiceExercise: {
      question: "Complete: 'During this festival, it's _____ to wear traditional clothing.'",
      options: ["customary/traditional", "important", "necessary", "required"],
      correctAnswer: 0,
      explanation: "The correct answer is 'customary/traditional'. These words best describe cultural practices that are typical or expected but not mandatory."
    }
  },

  // NUMBERS & COUNTING (A1)
  "numbers-basic": {
    id: "numbers-basic",
    title: "Numbers 1-100",
    description: "Learn how to count and use numbers in everyday situations.",
    difficulty: "A1",
    keyPoints: [
      "Numbers 1-12 are unique: one, two, three... twelve",
      "Numbers 13-19 end in -teen: thirteen, fourteen, fifteen",
      "Tens end in -ty: twenty, thirty, forty, fifty",
      "Combine tens and ones: twenty-one, thirty-five, ninety-nine"
    ],
    examples: [
      {
        sentence: "I have three brothers and two sisters.",
        explanation: "Using small numbers to talk about family"
      },
      {
        sentence: "The shop opens at nine o'clock.",
        explanation: "Using numbers to tell time"
      },
      {
        sentence: "There are twenty-four students in my class.",
        explanation: "Using compound numbers"
      },
      {
        sentence: "I'm thirty-five years old.",
        explanation: "Using numbers to talk about age"
      }
    ],
    practiceExercise: {
      question: "How do you write this number in words: 87?",
      options: ["eighty-seven", "eight-seven", "eighty-eighth", "seventy-eight"],
      correctAnswer: 0,
      explanation: "The correct answer is 'eighty-seven'. We combine the tens (eighty) with the ones (seven) using a hyphen."
    }
  },

  "numbers-prices": {
    id: "numbers-prices",
    title: "Prices & Money",
    description: "Learn how to talk about prices, costs, and handle money transactions.",
    difficulty: "A1",
    keyPoints: [
      "Use 'How much is/are...?' to ask about price",
      "Say prices: 'It's ten dollars' or 'It costs fifty cents'",
      "Currency symbols: $ (dollar), £ (pound), € (euro)",
      "Making change: 'Here's twenty dollars. Keep the change.'"
    ],
    examples: [
      {
        sentence: "How much is this book? - It's fifteen dollars.",
        explanation: "Asking and stating a price"
      },
      {
        sentence: "The coffee costs three euros and fifty cents.",
        explanation: "Saying prices with decimals"
      },
      {
        sentence: "That will be forty-two dollars, please.",
        explanation: "Cashier stating the total"
      },
      {
        sentence: "Can I pay by card?",
        explanation: "Asking about payment methods"
      }
    ],
    practiceExercise: {
      question: "Complete the dialogue: 'How _____ is this shirt?' - 'It _____ twenty-five dollars.'",
      options: ["much / costs", "many / cost", "much / cost", "price / costs"],
      correctAnswer: 0,
      explanation: "The correct answer is 'much / costs'. We use 'How much' for uncountable things and prices. 'Costs' is singular because we're talking about one shirt."
    }
  },

  "numbers-dates": {
    id: "numbers-dates",
    title: "Dates & Years",
    description: "Learn how to say and write dates, years, and talk about calendar events.",
    difficulty: "A1",
    keyPoints: [
      "Say dates: 'the first of May' or 'May first'",
      "Ordinal numbers: first, second, third, fourth... thirtieth",
      "Years: 'two thousand twenty-five' or 'twenty twenty-five'",
      "Asking about dates: 'What's the date today?' or 'When is your birthday?'"
    ],
    examples: [
      {
        sentence: "My birthday is on the fifteenth of July.",
        explanation: "Stating a date using ordinal numbers"
      },
      {
        sentence: "Today is Monday, November fifth, 2025.",
        explanation: "Saying the complete date"
      },
      {
        sentence: "I was born in nineteen ninety-five.",
        explanation: "Saying a year"
      },
      {
        sentence: "The meeting is scheduled for March third.",
        explanation: "Talking about future dates"
      }
    ]
  },

  // FAMILY & RELATIONSHIPS (A1)
  "family-members": {
    id: "family-members",
    title: "Family Members",
    description: "Learn vocabulary for family members and how to talk about your family.",
    difficulty: "A1",
    keyPoints: [
      "Immediate family: mother, father, sister, brother, parents, siblings",
      "Extended family: grandmother, grandfather, aunt, uncle, cousin",
      "Use possessive: my mother, his sister, her brother",
      "Describe family: 'I have...', 'I come from a big/small family'"
    ],
    examples: [
      {
        sentence: "This is my mother, and that's my father.",
        explanation: "Introducing parents"
      },
      {
        sentence: "I have two sisters and one brother.",
        explanation: "Talking about siblings"
      },
      {
        sentence: "My grandmother is eighty years old.",
        explanation: "Describing a family member"
      },
      {
        sentence: "Do you have any cousins?",
        explanation: "Asking about extended family"
      }
    ],
    practiceExercise: {
      question: "What do you call your mother's sister?",
      options: ["aunt", "cousin", "niece", "sister-in-law"],
      correctAnswer: 0,
      explanation: "The correct answer is 'aunt'. Your mother's sister (or father's sister) is called your aunt. Her husband would be your uncle."
    }
  },

  "family-relationships": {
    id: "family-relationships",
    title: "Describing Relationships",
    description: "Learn how to describe family relationships and talk about people you know.",
    difficulty: "A1",
    keyPoints: [
      "Marital status: single, married, divorced, widowed",
      "Relationships: husband, wife, boyfriend, girlfriend, partner",
      "Use 'Who is...?' to ask about relationships",
      "Describe: 'He/She is my...', 'They are my...'"
    ],
    examples: [
      {
        sentence: "She's my best friend. We've known each other for ten years.",
        explanation: "Describing a friendship"
      },
      {
        sentence: "Are you married? - Yes, this is my husband.",
        explanation: "Talking about marital status"
      },
      {
        sentence: "My parents have been married for thirty years.",
        explanation: "Describing family relationships"
      },
      {
        sentence: "Who is that man? - He's my uncle.",
        explanation: "Asking about and identifying people"
      }
    ]
  },

  "family-activities": {
    id: "family-activities",
    title: "Family Activities",
    description: "Learn how to talk about things you do with your family and family gatherings.",
    difficulty: "A1",
    keyPoints: [
      "Family activities: have dinner together, watch TV, play games",
      "Special occasions: birthday party, family reunion, holiday celebration",
      "Use present simple for regular activities: 'We eat together every Sunday'",
      "Use past simple for completed events: 'We visited my grandparents last week'"
    ],
    examples: [
      {
        sentence: "We have dinner together every evening at seven o'clock.",
        explanation: "Describing a regular family routine"
      },
      {
        sentence: "My family went to the beach last weekend.",
        explanation: "Talking about a past family activity"
      },
      {
        sentence: "We're planning a big party for my grandmother's birthday.",
        explanation: "Discussing future family events"
      },
      {
        sentence: "I usually help my mother with cooking on Sundays.",
        explanation: "Describing participation in family activities"
      }
    ],
    practiceExercise: {
      question: "Choose the correct form: 'My family _____ together every Sunday.'",
      options: ["eats", "eating", "is eat", "are eating"],
      correctAnswer: 0,
      explanation: "The correct answer is 'eats'. We use present simple (eats) for regular, habitual activities. 'Family' is treated as singular in American English."
    }
  },

  // HEALTH & MEDICAL (B1)
  "health-symptoms": {
    id: "health-symptoms",
    title: "Describing Symptoms",
    description: "Learn how to describe health problems and symptoms to medical professionals.",
    difficulty: "B1",
    keyPoints: [
      "Common symptoms: headache, fever, cough, sore throat, stomachache",
      "Intensity: mild, moderate, severe, sharp, dull pain",
      "Duration: 'I've had this for...', 'It started yesterday'",
      "Ask: 'I don't feel well', 'I need to see a doctor'"
    ],
    examples: [
      {
        sentence: "I've had a terrible headache for the past two days.",
        explanation: "Describing symptom and duration"
      },
      {
        sentence: "I'm experiencing sharp pains in my stomach.",
        explanation: "Describing pain intensity and location"
      },
      {
        sentence: "I have a high fever and my throat is very sore.",
        explanation: "Describing multiple symptoms"
      },
      {
        sentence: "The pain started suddenly this morning.",
        explanation: "Explaining when symptoms began"
      }
    ],
    practiceExercise: {
      question: "How would you describe a very bad headache to a doctor?",
      options: [
        "I have a severe/terrible headache",
        "My head is big",
        "I have head",
        "My head is breaking"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'I have a severe/terrible headache'. These adjectives properly convey the intensity of the pain in medical English."
    }
  },

  "health-doctor-visit": {
    id: "health-doctor-visit",
    title: "At the Doctor's Office",
    description: "Learn essential phrases for doctor's appointments and medical consultations.",
    difficulty: "B1",
    keyPoints: [
      "Making appointments: 'I'd like to make an appointment', 'When is the doctor available?'",
      "At reception: 'I have an appointment at...', 'Is this your first visit?'",
      "With doctor: 'What seems to be the problem?', 'How long have you felt this way?'",
      "Prescriptions: 'Take this twice a day', 'Come back in a week if it doesn't improve'"
    ],
    examples: [
      {
        sentence: "I'd like to make an appointment with Dr. Smith, please.",
        explanation: "Requesting an appointment"
      },
      {
        sentence: "What seems to be the problem today?",
        explanation: "Doctor asking about the issue"
      },
      {
        sentence: "Take these pills twice a day after meals.",
        explanation: "Doctor giving prescription instructions"
      },
      {
        sentence: "If your symptoms don't improve in three days, come back to see me.",
        explanation: "Follow-up instructions"
      }
    ]
  },

  "health-pharmacy": {
    id: "health-pharmacy",
    title: "At the Pharmacy",
    description: "Learn how to get medicine and talk to pharmacists about medications.",
    difficulty: "B1",
    keyPoints: [
      "Requesting: 'I need something for...', 'Do you have anything for...?'",
      "Prescriptions: 'I have a prescription from Dr...'",
      "Over-the-counter: pain relievers, cough syrup, cold medicine",
      "Instructions: dosage, side effects, warnings"
    ],
    examples: [
      {
        sentence: "I have a prescription from Dr. Johnson. Can you fill this for me?",
        explanation: "Presenting a prescription"
      },
      {
        sentence: "Do you have anything for a headache? Preferably something mild.",
        explanation: "Asking for over-the-counter medicine"
      },
      {
        sentence: "How often should I take this medicine?",
        explanation: "Asking about dosage"
      },
      {
        sentence: "This medication may cause drowsiness. Don't drive after taking it.",
        explanation: "Pharmacist explaining side effects"
      }
    ],
    practiceExercise: {
      question: "What should you bring to the pharmacy to get prescription medicine?",
      options: [
        "A prescription from your doctor",
        "Money only",
        "Your medical history",
        "A referral letter"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'A prescription from your doctor'. Pharmacies require a written prescription from a licensed doctor to dispense prescription medications."
    }
  },

  // TECHNOLOGY & SOCIAL MEDIA (B2)
  "tech-devices": {
    id: "tech-devices",
    title: "Technology & Devices",
    description: "Learn vocabulary for modern technology, gadgets, and device troubleshooting.",
    difficulty: "B2",
    keyPoints: [
      "Devices: smartphone, laptop, tablet, smartwatch, wireless earbuds",
      "Features: touchscreen, voice control, facial recognition, cloud storage",
      "Problems: frozen screen, battery drain, software update, connectivity issues",
      "Actions: restart, reset, update, sync, backup"
    ],
    examples: [
      {
        sentence: "My phone's battery drains really quickly. I think I need to replace it.",
        explanation: "Describing a technical problem"
      },
      {
        sentence: "Make sure to back up your data before installing the software update.",
        explanation: "Giving technical advice"
      },
      {
        sentence: "The latest smartphone features facial recognition and wireless charging.",
        explanation: "Describing technology features"
      },
      {
        sentence: "Try restarting your device if the screen freezes.",
        explanation: "Troubleshooting suggestion"
      }
    ],
    practiceExercise: {
      question: "What does 'sync' mean in technology?",
      options: [
        "To update data across multiple devices",
        "To delete files",
        "To charge a device",
        "To take a screenshot"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'To update data across multiple devices'. Syncing ensures that your files, contacts, and settings are the same across all your connected devices."
    }
  },

  "tech-social-media": {
    id: "tech-social-media",
    title: "Social Media & Online Communication",
    description: "Master vocabulary and expressions related to social media and digital communication.",
    difficulty: "B2",
    keyPoints: [
      "Platforms: Instagram, Facebook, Twitter, LinkedIn, TikTok",
      "Actions: post, share, like, comment, follow, unfollow, tag",
      "Content: story, feed, reel, live stream, hashtag",
      "Privacy: settings, block, report, private account, public profile"
    ],
    examples: [
      {
        sentence: "She posted a story about her vacation and tagged all her friends.",
        explanation: "Describing social media activity"
      },
      {
        sentence: "Make sure your privacy settings are configured correctly before sharing personal information.",
        explanation: "Discussing online safety"
      },
      {
        sentence: "His video went viral and got over a million views in one day.",
        explanation: "Talking about social media success"
      },
      {
        sentence: "You can report inappropriate content by clicking on the three dots.",
        explanation: "Explaining platform features"
      }
    ]
  },

  "tech-digital-skills": {
    id: "tech-digital-skills",
    title: "Digital Skills & Online Safety",
    description: "Learn about cybersecurity, digital literacy, and safe internet practices.",
    difficulty: "B2",
    keyPoints: [
      "Security: strong password, two-factor authentication, encryption, VPN",
      "Threats: phishing, malware, spam, hacking, identity theft",
      "Best practices: regular updates, secure networks, verify sources",
      "Digital literacy: fact-checking, identifying fake news, online etiquette"
    ],
    examples: [
      {
        sentence: "Always use a strong password with a combination of letters, numbers, and symbols.",
        explanation: "Security advice"
      },
      {
        sentence: "Be careful of phishing emails that try to steal your personal information.",
        explanation: "Warning about online threats"
      },
      {
        sentence: "Enable two-factor authentication for an extra layer of security.",
        explanation: "Recommending security measures"
      },
      {
        sentence: "Before sharing news online, verify the source to avoid spreading misinformation.",
        explanation: "Promoting digital literacy"
      }
    ],
    practiceExercise: {
      question: "What is 'phishing'?",
      options: [
        "A scam to steal personal information through fake emails or websites",
        "A way to catch fish online",
        "A type of social media platform",
        "A method to improve internet speed"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'A scam to steal personal information through fake emails or websites'. Phishing is a cybercrime where attackers impersonate legitimate organizations to trick people into revealing sensitive data."
    }
  },

  // EDUCATION & LEARNING (B2)
  "education-system": {
    id: "education-system",
    title: "Education Systems",
    description: "Learn vocabulary for discussing education systems, schools, and academic life.",
    difficulty: "B2",
    keyPoints: [
      "Levels: preschool, elementary, middle school, high school, university",
      "Qualifications: diploma, bachelor's degree, master's degree, PhD",
      "People: principal, dean, professor, lecturer, tutor",
      "Subjects: mathematics, literature, science, history, arts"
    ],
    examples: [
      {
        sentence: "She's currently pursuing a master's degree in environmental science.",
        explanation: "Describing academic studies"
      },
      {
        sentence: "The education system in this country consists of 12 years of compulsory schooling.",
        explanation: "Explaining education structure"
      },
      {
        sentence: "He graduated with honors and received a scholarship for his PhD program.",
        explanation: "Discussing academic achievements"
      },
      {
        sentence: "The curriculum includes both theoretical knowledge and practical skills.",
        explanation: "Describing educational content"
      }
    ],
    practiceExercise: {
      question: "What comes after a Bachelor's degree?",
      options: [
        "Master's degree",
        "Diploma",
        "High school diploma",
        "Certificate"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'Master's degree'. The typical progression in higher education is: Bachelor's degree → Master's degree → PhD (Doctoral degree)."
    }
  },

  "education-study-skills": {
    id: "education-study-skills",
    title: "Study Skills & Techniques",
    description: "Learn vocabulary and expressions for discussing effective study methods and learning strategies.",
    difficulty: "B2",
    keyPoints: [
      "Methods: take notes, review material, practice problems, group study",
      "Tools: flashcards, mind maps, study guides, online resources",
      "Time management: set goals, prioritize tasks, avoid procrastination",
      "Memory: mnemonics, spaced repetition, active recall"
    ],
    examples: [
      {
        sentence: "I find that taking detailed notes helps me remember information better.",
        explanation: "Sharing study technique"
      },
      {
        sentence: "Using flashcards with spaced repetition is an effective way to memorize vocabulary.",
        explanation: "Describing learning method"
      },
      {
        sentence: "Try to avoid procrastination by breaking large tasks into smaller, manageable steps.",
        explanation: "Giving study advice"
      },
      {
        sentence: "Group study sessions can be helpful, but make sure they stay focused.",
        explanation: "Discussing collaborative learning"
      }
    ]
  },

  "education-exams": {
    id: "education-exams",
    title: "Exams & Assessments",
    description: "Master vocabulary for discussing tests, exams, and academic performance.",
    difficulty: "B2",
    keyPoints: [
      "Types: quiz, midterm, final exam, oral exam, practical test",
      "Preparation: revise, cram, practice tests, study groups",
      "Results: pass, fail, grade, score, GPA, percentile",
      "Performance: ace an exam, do well/poorly, improve grades"
    ],
    examples: [
      {
        sentence: "I need to revise all the material before the final exam next week.",
        explanation: "Talking about exam preparation"
      },
      {
        sentence: "She aced the test and got the highest score in the class.",
        explanation: "Describing excellent performance"
      },
      {
        sentence: "Don't cram the night before the exam; it's better to study consistently.",
        explanation: "Giving exam advice"
      },
      {
        sentence: "The grading system is based on both coursework and final examination.",
        explanation: "Explaining assessment structure"
      }
    ],
    practiceExercise: {
      question: "What does it mean to 'ace an exam'?",
      options: [
        "To do extremely well and get a very high score",
        "To barely pass",
        "To fail the exam",
        "To skip the exam"
      ],
      correctAnswer: 0,
      explanation: "The correct answer is 'To do extremely well and get a very high score'. 'Ace' is informal English meaning to perform excellently, usually getting an A grade or perfect score."
    }
  }
};

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  lessons: string[];
  difficulty: DifficultyLevel;
}

export interface Course {
  id: string;
  level: DifficultyLevel;
  title: string;
  description: string;
  topics: string[]; // Array of topic IDs
  estimatedHours: number;
  color: string;
  bgColor: string;
}

export const topics: Topic[] = [
  {
    id: "greetings",
    name: "Greetings & Introductions",
    description: "Learn how to greet people and introduce yourself in various situations",
    icon: "👋",
    lessons: ["greetings-basic", "introductions-self", "greetings-farewell"],
    difficulty: "A1"
  },
  {
    id: "numbers",
    name: "Numbers & Counting",
    description: "Master numbers, counting, prices, and dates in English",
    icon: "🔢",
    lessons: ["numbers-basic", "numbers-prices", "numbers-dates"],
    difficulty: "A1"
  },
  {
    id: "family",
    name: "Family & Relationships",
    description: "Talk about family members, relationships, and activities",
    icon: "👨‍👩‍👧‍👦",
    lessons: ["family-members", "family-relationships", "family-activities"],
    difficulty: "A1"
  },
  {
    id: "daily-life",
    name: "Daily Life",
    description: "Master vocabulary and phrases for everyday activities and routines",
    icon: "🏠",
    lessons: ["daily-routines", "time-telling", "daily-housework"],
    difficulty: "A2"
  },
  {
    id: "shopping-food",
    name: "Shopping & Food",
    description: "Learn essential phrases for shopping and dining out",
    icon: "🛍️",
    lessons: ["shopping-basics", "restaurant-ordering", "shopping-grocery"],
    difficulty: "A2"
  },
  {
    id: "weather",
    name: "Weather & Small Talk",
    description: "Make small talk and discuss weather like a native speaker",
    icon: "🌤️",
    lessons: ["weather-talk", "weather-seasons", "weather-natural-disasters"],
    difficulty: "A2"
  },
  {
    id: "travel",
    name: "Travel & Directions",
    description: "Navigate confidently with essential travel phrases and directions",
    icon: "✈️",
    lessons: ["asking-directions", "travel-hotel", "travel-airport"],
    difficulty: "B1"
  },
  {
    id: "culture",
    name: "Culture & Heritage",
    description: "Explore cultural sites and discuss traditions in English",
    icon: "🏛️",
    lessons: ["visiting-pagoda", "cultural-heritage", "culture-festivals"],
    difficulty: "B1"
  },
  {
    id: "health",
    name: "Health & Medical",
    description: "Communicate effectively about health issues and medical needs",
    icon: "⚕️",
    lessons: ["health-symptoms", "health-doctor-visit", "health-pharmacy"],
    difficulty: "B1"
  },
  {
    id: "work",
    name: "Work & Business",
    description: "Professional English for workplace communication and career growth",
    icon: "💼",
    lessons: ["job-interview", "email-writing", "work-meetings"],
    difficulty: "B2"
  },
  {
    id: "technology",
    name: "Technology & Social Media",
    description: "Master digital vocabulary and online communication skills",
    icon: "💻",
    lessons: ["tech-devices", "tech-social-media", "tech-digital-skills"],
    difficulty: "B2"
  },
  {
    id: "education",
    name: "Education & Learning",
    description: "Discuss education systems, study skills, and academic life",
    icon: "📚",
    lessons: ["education-system", "education-study-skills", "education-exams"],
    difficulty: "B2"
  }
];

export const courses: Course[] = [
  {
    id: "course-a1",
    level: "A1",
    title: "Beginner (A1)",
    description: "Start your English learning journey! Master basic greetings, simple sentences, and everyday vocabulary.",
    topics: ["greetings", "numbers", "family"], // A1 topics
    estimatedHours: 80,
    color: "#22c55e",
    bgColor: "bg-green-500"
  },
  {
    id: "course-a2",
    level: "A2",
    title: "Elementary (A2)",
    description: "Build on your basics! Learn past tenses, more complex sentences, and expand your vocabulary.",
    topics: ["daily-life", "shopping-food", "weather"], // A2 topics
    estimatedHours: 100,
    color: "#3b82f6",
    bgColor: "bg-blue-500"
  },
  {
    id: "course-b1",
    level: "B1",
    title: "Intermediate (B1)",
    description: "Become an independent user! Master complex grammar, discuss abstract topics, and improve fluency.",
    topics: ["travel", "culture", "health"], // B1 topics
    estimatedHours: 120,
    color: "#f97316",
    bgColor: "bg-orange-500"
  },
  {
    id: "course-b2",
    level: "B2",
    title: "Upper-Intermediate (B2)",
    description: "Achieve advanced proficiency! Handle complex discussions, understand nuanced language, and express yourself fluently.",
    topics: ["work", "technology", "education"], // B2 topics
    estimatedHours: 140,
    color: "#a855f7",
    bgColor: "bg-purple-500"
  }
];

// Helper function to get all lessons for a course
export function getCourseLessons(courseId: string): string[] {
  const course = courses.find(c => c.id === courseId);
  if (!course) return [];
  
  const allLessons: string[] = [];
  course.topics.forEach(topicId => {
    const topic = topics.find(t => t.id === topicId);
    if (topic) {
      allLessons.push(...topic.lessons);
    }
  });
  
  return allLessons;
}

// Helper function to get topic by ID
export function getTopicById(topicId: string): Topic | undefined {
  return topics.find(t => t.id === topicId);
}

// Helper function to get course by ID
export function getCourseById(courseId: string): Course | undefined {
  return courses.find(c => c.id === courseId);
}
