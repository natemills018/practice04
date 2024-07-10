import { SelectQuery, ModifyQuery, AlterQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MySqlResponse } from "../../types";
import { Book } from "../../types";
import { NewBook } from "../../types";


// export function insert(newBook: { title: string, author: string, category_id: number }) {
//     return AlterQuery('INSERT INTO Books SET ?', [newBook])
// };

export function find(column: string, value: string) {
    return SelectQuery<Book>('SELECT * FROM Books WHERE ?? = ?', [column, value])
}


export function getOne(id: number) {
    return SelectQuery<Book>('SELECT * FROM Books WHERE id = ?', [id])
}

export function getAll() {
    return SelectQuery<Book>('SELECT Books.id, Books.title, Books.price, Books.author, Books.category_id, Books.created_at, Categories.name from Books JOIN Categories ON Books.category_id = Categories.id;');
}

export function updatedBook(updateBook: string, id: number) {
    return ModifyQuery<Book>('UPDATE Books SET ? WHERE id =?;', [updateBook, id])
}

export function deleteBook(id: number) {
    return ModifyQuery<Book>('DELETE FROM Books WHERE id =?;', [id])
}


export function insert(newBook:NewBook ) {
    return ModifyQuery('INSERT INTO Books SET ?;', [newBook])
}