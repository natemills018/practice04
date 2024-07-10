import { SelectQuery, ModifyQuery, AlterQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MySqlResponse } from "../../types";
import { Book } from "../../types";
import { User } from "../../types";


// export function insert(newBook: { title: string, author: string, category_id: number }) {
//     return AlterQuery('INSERT INTO Books SET ?', [newBook])
// };

export function find(column: string, value: string) {
    return SelectQuery<User>('SELECT * FROM Users WHERE ?? = ?', [column, value])
}


export function getOne(id: number) {
    return SelectQuery<User>('SELECT * FROM Users WHERE id = ?', [id])
}

export function getAll() {
    return SelectQuery<User>('SELECT * FROM Users;');
}

export function updatedUser(updateUser: string, id: number) {
    return ModifyQuery<User>('UPDATE Users SET ? WHERE id =?;', [updateUser, id])
}

export function deleteUser(id: number) {
    return ModifyQuery<User>('DELETE FROM Users WHERE id =?;', [id])
}


export function insert(newUser: { email: string, password: string}) {
    return ModifyQuery<MySqlResponse> (
        'INSERT INTO Users SET ?', newUser
    )
}