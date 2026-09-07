import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const resume = sqliteTable('resume', {id:integer('id').primaryKey(),content:text('content').notNull(),revision:integer('revision').notNull().default(0)});
