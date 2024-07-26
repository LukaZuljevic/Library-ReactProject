import { v4 as uuidv4 } from "uuid";

const allBooks = [
  {
    id: uuidv4(),
    bookName: "Biblija",
    bookAuthor: "Više",
    bookYear: 0,
    bookUrl: "./src/assets/biblija.jpg",
    bookGenre: "Religijska",
    bookCopies: 10,
  },

  {
    id: uuidv4(),
    bookName: "Patnje mladog Werthera",
    bookAuthor: "Neki lik",
    bookYear: 1989,
    bookUrl: "./src/assets/werther.jpg",
    bookGenre: "Roman",
    bookCopies: 1,
  },

  {
    id: uuidv4(),
    bookName: "Ilijada",
    bookAuthor: "Homer",
    bookYear: 1572,
    bookUrl: "./src/assets/ilijada.jpg",
    bookGenre: "Drama",
    bookCopies: 2,
  },
];

export default { allBooks };
