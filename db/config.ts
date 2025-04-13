import { column, defineDb, defineTable } from 'astro:db';

const token = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    token: column.text({unique: true, required: true }),
    refresh_token: column.text({ unique: true, required: true }),
    created_at: column.date(),
    updated_at: column.date(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { token }
});
