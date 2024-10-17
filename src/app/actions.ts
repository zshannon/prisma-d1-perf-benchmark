'use server'
import { createId } from '@paralleldrive/cuid2'

import { prisma } from '~/prisma'

export async function writeProperties(count: number) {
	const t0 = performance.now()
	const data = Array.from({ length: count })
		.fill(null)
		.map(() => ({ key: createId(), value: createId() }))
	const t1 = performance.now()
	await prisma.property.createMany({
		data,
	})
	const t2 = performance.now()
	const values = Array.from({ length: count })
		.fill(null)
		.map(() => `('${createId()}', '${createId()}')`)
		.join(', ')
	const sql = `INSERT INTO Property (key, value) VALUES ${values}`
	const t3 = performance.now()
	await prisma.$executeRawUnsafe(sql)
	const t4 = performance.now()
	const values2 = Array.from({ length: count })
		.fill(null)
		.map(() => `('${createId()}', '${createId()}')`)
		.join(', ')
	const sql2 = `INSERT INTO Property (key, value) VALUES ${values2}`
	const t5 = performance.now()
	await process.env.DB.exec(sql2)
	const t6 = performance.now()
	return {
		d1SqlMs: t6 - t5,
		// generateMs: t1 - t0,
		prismaMs: t2 - t1,
		prismaSqlMs: t4 - t3,
	}
}

export async function clearDb() {
	return prisma.property.deleteMany()
}

export async function countProperties() {
	return prisma.property.count()
}
