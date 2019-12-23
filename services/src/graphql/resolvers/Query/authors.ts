import { Author } from "#root/db/models";

const authorsResolver = () => {
  return Author.findAll();
};

export default authorsResolver;
