import {
  Model,
  Table,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: true,
  tableName: "authors"
})
export class Author extends Model<Author> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;
  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @HasMany(() => Book)
  books!: Book[];
}

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: true,
  tableName: "books"
})
export class Book extends Model<Book> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey(() => Author)
  authorId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @BelongsTo(() => Author)
  author!: Author;
}

export default [Author, Book];
