const queries = [
  {
    query: [
      "Hello",
      "Hi",
      "What's up?",
      "What is up?",
      "Yo zane",
      "zane",
      "hiya",
      "hiyo",
      "hello there",
      "hi there",
    ],
    response: ["Hi there! How may I help you?"],
  },
  {
    query: "Who is Elon Musk?",
    response: [
      "Elon Musk is a very successful businessman and investor. He founded companies like SpaceX and Tesla, and also owns Twitter. He is known for his vision and accomplishments, but has also been criticized for his work ethic and management style. He is one of the wealthiest people in the world and has been named Time magazine's Person of the Year in 2021.",
    ],
  },

  {
    query: "Who is the ceo of microsoft?",
    response: [
      "Satya Nadella is the CEO of Microsoft since 2014, and he is an Indian-American business executive who has been with Microsoft since 1992. Nadella is credited with leading Microsoft's transformation into a cloud-first company and for his focus on diversity and inclusion. During his tenure as CEO, Microsoft's market capitalization has increased from $250 billion to $1.6 trillion, making Microsoft one of the most successful companies in the world. Nadella is a visionary leader and a role model for other business leaders.",
    ],
  },
  {
    query: "Who is the ceo of Amazon?",
    response: [
      "Andy Jassy is the current CEO of Amazon, succeeding Jeff Bezos in July 2021. Jassy has been with Amazon since 1997 and has held various leadership roles, including senior vice president of AWS. He is credited with helping build AWS into the leading cloud computing platform in the world, with a multi-billion dollar business. Jassy is known for his focus on innovation and has been driving force behind Amazon's investment in new technologies, such as artificial intelligence and machine learning. As CEO, Jassy has increased Amazon's focus on innovation and has contributed to its continued success. He is a role model for other business leaders and an inspiration to his employees.",
    ],
  },
  {
    query: "Who is Jeff Bezos?",
    response: [
      "Jeff Bezos is a well-known American entrepreneur, investor, and media proprietor. He is the founder, executive chairman, and former CEO of Amazon, the world's largest e-commerce and cloud computing company. Bezos started Amazon as an online bookstore in his garage in 1994, which eventually grew to sell a variety of products. He also founded Blue Origin, a private space exploration company, in 2013, and purchased The Washington Post, a major American newspaper, in 2016. Bezos is known for his visionary leadership and entrepreneurship in shaping the future of e-commerce, cloud computing, and space exploration. He is one of the richest people in the world and a role model for other business leaders.",
    ],
  },
  {
    query: [
      "What is your name?",
      "What do you call yourself?",
      "How may I address you?",
      "What can I call you?",
      "who are you?",
    ],
    response: ["I'm ZANE. Nice to meet you!"],
  },
  {
    query: [
      "What can you do?",
      "what do you do?",
      "how can you help me?",
      "what are you?",
    ],
    response: [
      "I can assist you with a variety of tasks and answer your questions to the best of my knowledge. For example: <ol><li>I can tell you a joke.</li> <li>I can do some maths problem as well.</li> <li>I can give you some random and interesting facts.</li> <li>I may have very little knowledge about the world, but I can still answer to some of your question.</li></ol>",
    ],
  },
  {
    query: ["Tell me a joke", "can you tell me a joke?"],
    response: [
      "Why don't scientists trust atoms? Because they make up everything.",
      "Why was the math book sad? Because it had too many problems.",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "How does a penguin build its house? Igloos it together!",
      "Why don't oysters share their pearls? Because they're shellfish!",
      "What do you get when you cross a snowman and a shark? Frostbite!",
      "What do you call an alligator in a vest? An investigator!",
      "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels!",
      "Why did the coffee file a police report? Because it got mugged!",
    ],
  },
  {
    query: ["What is mean by ZANE?", "what is zane?", "fullform of zane"],
    response: [
      "The name I go by is an acronym for Zero-delay Assistance and Navigation Engine.",
      "I'm called by an acronym which stands for Zero-delay Assistance and Navigation Engine.",
      "My name is actually an abbreviation for Zero-delay Assistance and Navigation Engine.",
    ],
  },
  {
    query: ["Facts", "tell me some facts"],
    response: [
      "The Chupa Chups logo was designed by Salvador Dalí.",
      "Ketchup was once sold as medicine.",
      "The world's longest walking distance is 14,000 miles.",
      "The moon has moonquakes.",
      "There's only one Shell garage actually shaped like a Shell.",
      "The shortest commercial flight in the world is in Scotland.",
      "Dolphins have names for one another.",
      "The blob of toothpaste on a toothbrush has a name.",
      "The world's largest producer of diamonds is Russia.",
      "The world's largest producer of coffee is Brazil.",
      "The world's largest producer of oil is Saudi Arabia.",
      "The world's largest producer of natural gas is Russia.",
      "The world's largest producer of wheat is China.",
      "The world's largest producer of rice is India.",
      "The world's largest producer of corn is the United States.",
      "The world's largest producer of soybeans is Brazil.",
      "The world's largest producer of sugar is Brazil.",
      "The world's largest producer of bananas is Ecuador.",
      "The world's largest producer of oranges is Brazil.",
      "The world's largest producer of apples is China.",
      "The world's largest producer of grapes is Italy.",
      "The world's largest producer of pineapples is the Philippines.",
      "The world's largest producer of watermelons is China.",
      "The world's largest producer of tomatoes is China.",
      "The world's largest producer of cucumbers is China.",
      "The world's largest producer of onions is China.",
      "The world's largest producer of potatoes is China.",
      "The world's largest producer of carrots is China.",
      "The world's largest producer of cabbages is China.",
      "The world's largest producer of lettuce is China.",
      "The world's largest producer of broccoli is China.",
      "The world's largest producer of cauliflower is China.",
      "The world's largest producer of peas is China.",
      "The world's largest producer of beans is China.",
      "The world's largest producer of lentils is India.",
      "The world's largest producer of chickpeas is India.",
      "The world's largest producer of peanuts is China.",
      "The world's largest producer of sesame seeds is India.",
      "The world's largest producer of sunflower seeds is Russia.",
      "The world's largest producer of cashew nuts is India.",
      "The world's largest producer of almonds is the United States.",
      "The world's largest producer of walnuts is China.",
      "The world's largest producer of hazelnuts is Turkey.",
      "The shortest war in history was between Britain and Zanzibar in 1896 and lasted only 38 minutes.",
      "The first recorded game of baseball was played in 1846 in Hoboken, New Jersey.",
      "The shortest commercial flight in the world is between two Scottish islands and lasts only 1.7 miles.",
      "The world's largest snowflake on record measured 15 inches wide and 8 inches thick.",
      "A group of flamingos is called a flamboyance.",
      "The first computer mouse was made of wood.",
      "The world's oldest piece of chewing gum is over 9,000 years old.",
      "The longest word in the English language is 189,819 letters long.",
      "The only letter that doesn't appear in any U.S. state name is 'Q'.",
      "The world's largest ant colony covers over 3,750 miles.",
      "The world's oldest piece of chewing gum is over 9,000 years old.",
      "A crocodile can't stick its tongue out.",
      "Pigs can get sunburned.",
      "The longest wedding veil was longer than 63 football fields.",
      "The world's oldest piece of chewing gum is over 9,000 years old.",
      "The shortest war in history was between Britain and Zanzibar in 1896 and lasted only 38 minutes.",
      "The tallest building in the world is the Burj Khalifa in Dubai, measuring 828 meters tall.",
      "Cats have over 20 muscles in their ears.",
      "The world's largest living organism is a fungus in Oregon that covers over 2,200 acres.",
      "The world's oldest piece of chewing gum is over 9,000 years old.",
      "A group of kangaroos is called a mob.",
      "A sneeze can travel up to 100 miles per hour.",
      "The longest wedding veil was longer than 63 football fields.",
      "The Great Wall of China is not visible from space with the naked eye.",
      "Elephants can't jump.",
      "The shortest war in history was between Britain and Zanzibar in 1896 and lasted only 38 minutes.",
      "The world's largest snowflake on record measured 15 inches wide and 8 inches thick.",
      "A group of flamingos is called a flamboyance.",
      "The first computer mouse was made of wood.",
      "The world's oldest piece of chewing gum is over 9,000 years old.",
      "The longest word in the English language is 189,819 letters long.",
      "The only letter that doesn't appear in any U.S. state name is 'Q'.",
      "The world's largest ant colony covers over 3,750 miles.",
      "The shortest commercial flight in the world is between two Scottish islands and lasts only 1.7 miles.",
      "The world's oldest piece of chewing gum is over 9,000 years old.",
      "Pigs can get sunburned.",
      "Cats have over 20 muscles in their ears.",
      "The longest wedding veil was longer than 63 football fields.",
      "A sneeze can travel up to 100 miles per hour.",
      "The Great Wall of China is not visible from space with the naked eye.",
      "Elephants can't jump.",
      "The tallest building in the world is the Burj Khalifa in Dubai, measuring 828 meters tall.",
      "The world's largest living organism is a fungus in Oregon that covers over 2,200 acres.",
      "The world's largest ball of paint is in Alexandria, Indiana. It weighs over 15 tons.",
      "The world's largest ball of twine is in Cawker City, Kansas. It weighs over 9 tons.",
      "The world's largest ball of rubber is in Akron, Ohio. It weighs over 6 tons.",
      "The world's largest ball of yarn is in Brainerd, Minnesota. It weighs over 5 tons.",
      "The world's largest ball of aluminum foil is in Phoenix, Arizona. It weighs over 4 tons.",
      "The world's largest ball of duct tape is in Tyler, Texas. It weighs over 3 tons.",
      "The world's largest ball of bubble gum is in Los Angeles, California. It weighs over 2 tons.",
      "The world's largest ball of string is in New York City. It weighs over 1 ton.",
      "The world's largest ball of paper is in London, England. It weighs over 0.5 tons.",
    ],
  },
  {
    query: [
      "can you do math?",
      "maths",
      "solve",
      "so you can do math?",
      "do math",
      "solve math problems",
      "can you solve math problems?",
    ],
    response: [
      "Sure, I can assist you with some math problems. For instance: <ol> <li>1 + 1 = 2</li> <li>sin(90 deg) = 1</li> <li>csc(90 deg - 20 deg) = 1.0641777724759</li></ol> I can even help you in converting some numbers, for example: <ol><li>40cm to inch = 15.748031496063 inch</li> <li>40cm to inch = 15.748031496063 inch</li> <li>100 megabytes to kilobytes = 1e+5 kilobytes</li></ol>",
    ],
  },
  {
    query: [
      "can you do coding?",
      "code",
      "can you write a code?",
      "can you code?",
    ],
    response: [
      "I'm afraid not, coding is not within my capabilities. However, I can assist you with a variety of tasks and answer your questions to the best of my knowledge.",
    ],
  },
  {
    query: ["What is twitter?", "twitter"],
    response: [
      "I'm afraid not, coding is not within my capabilities. However, I can assist you with a variety of tasks and answer your questions to the best of my knowledge.",
    ],
  },
  {
    query: ["Who is the ceo of amazon?", "ceo of amazon", "amazon ceo"],
    response: [
      "The current CEO of Amazon is Andy Jassy. He was appointed CEO on July 5, 2021, following the retirement of Jeff Bezos. Jassy has been with Amazon since 1997 and has held a variety of roles, including CEO of Amazon Web Services (AWS). AWS is Amazon's cloud computing platform and is one of the most successful cloud computing platforms in the world. Jassy is a graduate of Harvard University and Harvard Business School. He is married and has two children.",
    ],
  },
  {
    query: [
      "What is Tesla?",
      "Tesla",
      "tell me something about tesla",
      "tell me about tesla",
    ],
    response: [
      "Tesla is an American multinational automotive and clean energy company that designs, manufactures, and sells electric vehicles, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services. It is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker. In 2022, the company had the most worldwide sales of battery electric vehicles, capturing 18% of the market. <br/> Tesla was founded in 2003 by Martin Eberhard and Marc Tarpenning. In 2004, Elon Musk joined the company as chairman and product architect. Musk became CEO in 2008. Tesla's first product was the Roadster, a sports car that was produced from 2008 to 2012. The company's second product was the Model S, a luxury sedan that was produced from 2012 to 2022. The Model S was followed by the Model X, an SUV that was produced from 2015 to 2022. In 2017, Tesla released the Model 3, a mass-market sedan. The Model 3 was followed by the Model Y, a crossover SUV that was produced from 2020 to present. In 2021, Tesla released the Cybertruck, an electric pickup truck. <br/> Tesla is a leading company in the electric vehicle and clean energy industries. The company has helped to accelerate the adoption of electric vehicles and has made a significant contribution to the fight against climate change.",
    ],
  },
];

export default queries;