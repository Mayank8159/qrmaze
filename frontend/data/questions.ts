
export type OptionKey = "A" | "B" | "C" | "D";

export interface MCQQuestion {
  id: string;
  question: string;
  options: Record<OptionKey, string>;
  correctOption: OptionKey;
}

export interface QuestionSet {
  setId: number;
  title: string;
  questions: MCQQuestion[];
}

export const questionSets: QuestionSet[] = [
  {
    setId: 1,
    title: "Introduction to Programming (C & Python)",
    questions: [
      {
        id: "1-1",
        question:
          "In C programming, which format specifier character is used to represent a single byte or character?",
        options: {
          A: "d",
          B: "s",
          C: "c",
          D: "f",
        },
        correctOption: "C",
      },
      {
        id: "1-2",
        question: 'What is the output of this Python code? print(len("cat"))',
        options: {
          A: "2",
          B: "3",
          C: "4",
          D: "Error",
        },
        correctOption: "B",
      },
      {
        id: "1-3",
        question:
          "In a Linux terminal, what is the command used to list files in a long format?",
        options: {
          A: "ls",
          B: "l",
          C: "ll",
          D: "dir",
        },
        correctOption: "B",
      },
      {
        id: "1-4",
        question: "In RGB, which color is used for Lime or Forest shades?",
        options: {
          A: "Red",
          B: "Blue",
          C: "Green",
          D: "Yellow",
        },
        correctOption: "C",
      },
      {
        id: "1-5",
        question: 'What is the output of printf("%d", 5 > 2); in C?',
        options: {
          A: "0",
          B: "1",
          C: "True",
          D: "Error",
        },
        correctOption: "B",
      },
      {
        id: "1-6",
        question:
          "Which symbol is used in Python to access a method from an object?",
        options: {
          A: "#",
          B: "::",
          C: ".",
          D: "->",
        },
        correctOption: "C",
      },
      {
        id: "1-7",
        question:
          "What is the value of x after: int x = 10 / 3; (Integer division in C)?",
        options: {
          A: "3",
          B: "3.33",
          C: "4",
          D: "Error",
        },
        correctOption: "A",
      },
    ],
  },

  {
    setId: 2,
    title: "Digital Logic & Hardware",
    questions: [
      {
        id: "2-1",
        question: "Which number system uses only 0 and 1?",
        options: {
          A: "Decimal",
          B: "Binary",
          C: "Octal",
          D: "Hexadecimal",
        },
        correctOption: "B",
      },
      {
        id: "2-2",
        question: "How many inputs does a 3-input AND gate have?",
        options: {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
        },
        correctOption: "C",
      },
      {
        id: "2-3",
        question: "In digital logic, what represents the Low state?",
        options: {
          A: "1",
          B: "High",
          C: "True",
          D: "0",
        },
        correctOption: "D",
      },
      {
        id: "2-4",
        question: "In the term GPU, what does G stand for?",
        options: {
          A: "General",
          B: "Graphic",
          C: "Graphical",
          D: "Gigabyte",
        },
        correctOption: "C",
      },
      {
        id: "2-5",
        question: "How many bits are in a nibble?",
        options: {
          A: "2",
          B: "4",
          C: "6",
          D: "8",
        },
        correctOption: "B",
      },
      {
        id: "2-6",
        question: "What is the dot (.) character called in a file name?",
        options: {
          A: "Slash",
          B: "Separator",
          C: "Period",
          D: "Colon",
        },
        correctOption: "C",
      },
      {
        id: "2-7",
        question: "What is the decimal value of binary 0011?",
        options: {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
        },
        correctOption: "C",
      },
    ],
  },

  {
    setId: 3,
    title: "Python Basics",
    questions: [
      {
        id: "3-1",
        question: "Which data type stores True or False in Python?",
        options: {
          A: "int",
          B: "bool",
          C: "str",
          D: "float",
        },
        correctOption: "B",
      },
      {
        id: "3-2",
        question: "What is the output of print(1 + 2)?",
        options: {
          A: "12",
          B: "2",
          C: "3",
          D: "Error",
        },
        correctOption: "C",
      },
      {
        id: "3-3",
        question: "Which variable is commonly used as a loop index?",
        options: {
          A: "x",
          B: "i",
          C: "loop",
          D: "n",
        },
        correctOption: "B",
      },
      {
        id: "3-4",
        question: "What does the prefix G stand for in 1 GB?",
        options: {
          A: "Giga",
          B: "Gram",
          C: "Graph",
          D: "Gain",
        },
        correctOption: "A",
      },
      {
        id: "3-5",
        question: "What is the output of int(1.9)?",
        options: {
          A: "2",
          B: "1",
          C: "1.9",
          D: "Error",
        },
        correctOption: "B",
      },
      {
        id: "3-6",
        question: "Which character is used as a decimal separator?",
        options: {
          A: ",",
          B: ":",
          C: ".",
          D: "_",
        },
        correctOption: "C",
      },
      {
        id: "3-7",
        question: "What is len([10, 20, 30])?",
        options: {
          A: "2",
          B: "3",
          C: "4",
          D: "Error",
        },
        correctOption: "B",
      },
    ],
  },

  {
    setId: 4,
    title: "C Programming Snippets",
    questions: [
      {
        id: "4-1",
        question: "Which keyword is used to exit a loop or switch?",
        options: {
          A: "stop",
          B: "exit",
          C: "break",
          D: "return",
        },
        correctOption: "C",
      },
      {
        id: "4-2",
        question:
          'What does this code print? int a=1, b=2; printf("%d", a+b);',
        options: {
          A: "1",
          B: "2",
          C: "3",
          D: "12",
        },
        correctOption: "C",
      },
      {
        id: "4-3",
        question: "Which suffix defines a long integer constant?",
        options: {
          A: "U",
          B: "F",
          C: "L",
          D: "D",
        },
        correctOption: "C",
      },
      {
        id: "4-4",
        question: "Which command is used to clone a Git repository?",
        options: {
          A: "git push",
          B: "git pull",
          C: "git clone",
          D: "git fork",
        },
        correctOption: "C",
      },
      {
        id: "4-5",
        question: "What is the value of !(0) in C?",
        options: {
          A: "0",
          B: "1",
          C: "True",
          D: "False",
        },
        correctOption: "B",
      },
      {
        id: "4-6",
        question: "What symbol represents the current directory?",
        options: {
          A: "..",
          B: "/",
          C: "~",
          D: ".",
        },
        correctOption: "D",
      },
      {
        id: "4-7",
        question:
          "How many times will this loop run? for(int i=0; i<3; i++)",
        options: {
          A: "2",
          B: "3",
          C: "4",
          D: "Infinite",
        },
        correctOption: "B",
      },
    ],
  },

  {
    setId: 5,
    title: "Web & Fundamentals",
    questions: [
      {
        id: "5-1",
        question: "Which HTML tag is used to insert a line break?",
        options: {
          A: "<lb>",
          B: "<break>",
          C: "<br>",
          D: "<p>",
        },
        correctOption: "C",
      },
      {
        id: "5-2",
        question: "In version v2.1.3, what does 3 represent?",
        options: {
          A: "Major",
          B: "Minor",
          C: "Patch",
          D: "Build",
        },
        correctOption: "C",
      },
      {
        id: "5-3",
        question: "Which HTML tag represents a list item?",
        options: {
          A: "<ul>",
          B: "<ol>",
          C: "<li>",
          D: "<list>",
        },
        correctOption: "C",
      },
      {
        id: "5-4",
        question: "Which company owns YouTube?",
        options: {
          A: "Meta",
          B: "Amazon",
          C: "Google",
          D: "Microsoft",
        },
        correctOption: "C",
      },
      {
        id: "5-5",
        question: "What is the result of 10 % 3?",
        options: {
          A: "1",
          B: "3",
          C: "0",
          D: "10",
        },
        correctOption: "A",
      },
      {
        id: "5-6",
        question: "Which symbol separates name and domain in a URL?",
        options: {
          A: "/",
          B: ":",
          C: ".",
          D: "-",
        },
        correctOption: "C",
      },
      {
        id: "5-7",
        question: "How many basic logic gates are AND, OR, NOT?",
        options: {
          A: "2",
          B: "3",
          C: "4",
          D: "5",
        },
        correctOption: "B",
      },
    ],
  },
];
