import { SelectQuery, ModifyQuery, AlterQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MySqlResponse } from "../../types";
import { Book } from "../../types";


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
    return SelectQuery<Book>('SELECT * FROM Books;');
}

export function updatedBook(updateBook: string, id: number) {
    return ModifyQuery<Book>('UPDATE books SET ? WHERE id =?;', [updateBook, id])
}

export function deleteBook(id: number) {
    return ModifyQuery<Book>('DELETE FROM books WHERE id =?;', [id])
}


export function insert(title: string, author: string, price: number, category_id: number) {
    return ModifyQuery<Book>('INSERT INTO books (title, author, price, category_id) VALUE (?,?,?,?);',[title, author, price, category_id])
}