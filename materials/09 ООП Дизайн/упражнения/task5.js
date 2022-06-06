import { object, string, number } from 'yup';

const genres = ['drama', 'horror', 'fantasy', 'classic'];

export default function getInvalidBooks(bookList) {
  const bookSchema = object({
    name: string().required(),
    author: string().required(),
    pagesCount: number().notRequired().positive().integer(),
    link: string().notRequired().url().min(1),
    genre: string().notRequired().oneOf(genres),
  });

  return bookList.filter((book) => !bookSchema.isValidSync(book));
}

// const books = [
//   { name: 'book', author: 'author' },
//   { author: 'author 2' },
// ];

// const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]
// console.log(invalidBooks);
