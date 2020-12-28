type Question = {
  body: string;
  answers: Record<string, string>;
  correctAnswers: string[];
};

type GameConfig = {
  questions: Question[];
  gain: string[];
  nextQuestionTimeout: number;
};

export const gameConfig: GameConfig = {
  questions: [
    {
      body: 'Where is the city of Mykolaiv situated?',
      answers: {
        A: 'South',
        B: 'North',
        C: 'East',
        D: 'West',
      },
      correctAnswers: ['A'],
    },
    {
      body: 'When did Ukraine become independent?',
      answers: {
        A: '1947',
        B: '1991',
        C: '1994',
        D: '2001',
      },
      correctAnswers: ['B'],
    },
    {
      body: 'What is the capital of Ukraine?',
      answers: {
        A: 'Kharkiv',
        B: 'Odessa',
        C: 'Lviv',
        D: 'Kyiv',
      },
      correctAnswers: ['D'],
    },
    {
      body: 'How many regions are there in Ukraine? (incl. AR Crimea)',
      answers: {
        A: '24',
        B: '25',
        C: '22',
        D: '27',
      },
      correctAnswers: ['B'],
    },
    {
      body: 'When did Euromaidan took place?',
      answers: {
        A: '2013-2014',
        B: '2012',
        C: '2014-2015',
        D: '2011-2012',
      },
      correctAnswers: ['A'],
    },
    {
      body: 'When was Kyiv-Mohyla Academy founded?',
      answers: {
        A: '1991',
        B: '1615',
        C: '1845',
        D: '1734',
      },
      correctAnswers: ['B'],
    },
    {
      body: 'How many districts are there in Kyiv?',
      answers: {
        A: '12',
        B: '23',
        C: '10',
        D: '6',
      },
      correctAnswers: ['C'],
    },
    {
      body: 'When did WW2 start?',
      answers: {
        A: '1941',
        B: '1940',
        C: '1945',
        D: '1939',
      },
      correctAnswers: ['D'],
    },
    {
      body: 'What is the capital of Poland?',
      answers: {
        A: 'Krakow',
        B: 'Lublin',
        C: 'Warsaw',
        D: 'Katowice',
      },
      correctAnswers: ['C'],
    },
    {
      body: 'What does abbr. JS stand for?',
      answers: {
        A: 'JavaScript',
        B: 'Java Spring',
        C: 'JSON Standard',
        D: 'Jeremy Soule',
      },
      correctAnswers: ['A'],
    },
    {
      body: 'Popular book about hobbits adventures is called',
      answers: {
        A: 'Star Wars',
        B: 'The Lord of the Rings',
        C: 'WarCraft',
        D: 'Harry Potter',
      },
      correctAnswers: ['B'],
    },
    {
      body: 'The Big4 of thrash-metal are',
      answers: {
        A: 'Iron Maiden, Judas Priest, Motörhead',
        B: 'Pantera, Decapitated, Vader, Annihilator',
        C: 'Metallica, Rammstein, Death, Obituary',
        D: 'Metallica, Megadeth, Anthrax, Slayer',
      },
      correctAnswers: ['D'],
    },
  ],
  gain: [
    '$500',
    '$1,000',
    '$2,000',
    '$4,000',
    '$8,000',
    '$16,000',
    '$32,000',
    '$64,000',
    '$125,000',
    '$250,000',
    '$500,000',
    '$1,000,000',
  ],
  nextQuestionTimeout: 1000,
};
