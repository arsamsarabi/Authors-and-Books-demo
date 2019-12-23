import { Book, Author } from "#root/db/models";

const resolvers = () => {
  books: (author: Author) => {
    return Book.findAll({
      include: [
        {
          model: Author,
          where: { id: author.id }
        }
      ],
      order: [["name", "ASC"]]
    });
  };
};

export default resolvers;
