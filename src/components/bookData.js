import { v4 as uuidv4 } from "uuid";

const allBooks = [
  {
    id: uuidv4(),
    bookName: "Biblija",
    bookAuthor: "Isus",
    bookYear: 0,
    bookUrl: "./src/assets/biblija.jpg",
    bookGenre: "Drama",
    bookCopies: 10,
  },

  {
    id: uuidv4(),
    bookName: "Patnje mladog Werthera",
    bookAuthor: "Neki lik",
    bookYear: 1989,
    bookUrl: "./src/assets/werther.jpg",
    bookGenre: "Roman",
    bookCopies: 0,
  },
];

export default { allBooks };
