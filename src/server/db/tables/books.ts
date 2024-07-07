import { SelectQuery, ModifyQuery, AlterQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MySqlResponse } from "../../types";
import { Book } from "../../types";


export function insert(newBook: { email: string, password: string }) {
    return AlterQuery('INSERT INTO Books SET ?', [newBook])
};

export function find(column: string, value: string) {
    return SelectQuery<Book>('SELECT * FROM Books WHERE ?? = ?', [column, value])
}


export function getOne(id: number) {
    return SelectQuery<Book>('SELECT * FROM Books WHERE id = ?', [id])
}