import { SelectQuery, ModifyQuery, AlterQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MySqlResponse } from "../../types";
import { Category } from "../../types";

export function getAll() {
    return SelectQuery<Category>('SELECT * FROM Categories;');
}