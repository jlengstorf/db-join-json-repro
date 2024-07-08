import { column, defineDb, defineTable } from 'astro:db';

const Resource = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		fields: column.json(),
	},
});

const ResourceRelationships = defineTable({
	columns: {
		childId: column.text({ references: () => Resource.columns.id }),
		parentId: column.text({ references: () => Resource.columns.id }),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Resource,
		ResourceRelationships,
	},
});
