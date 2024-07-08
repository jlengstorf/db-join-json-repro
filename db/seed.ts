import { Resource, ResourceRelationships, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Resource).values([
		{
			id: 'test-1',
			fields: {
				slug: 'one',
				draft: true,
			},
		},
		{
			id: 'test-2',
			fields: {
				slug: 'two',
				draft: false,
			},
		},
		{
			id: 'test-3',
			fields: {
				slug: 'three',
				draft: false,
			},
		},
	]);

	await db.insert(ResourceRelationships).values([
		{
			parentId: 'test-1',
			childId: 'test-2',
		},
		{
			parentId: 'test-1',
			childId: 'test-3',
		},
	]);
}
