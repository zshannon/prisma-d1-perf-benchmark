'use server'
import { createId } from '@paralleldrive/cuid2'
import { DateTime } from 'luxon'
import { revalidatePath } from 'next/cache'

import { prisma } from '~/prisma'

export async function writeProperties(count: number) {
	await Promise.all(
		Array.from({ length: count })
			.fill(null)
			.map(async () =>
				prisma.property.create({ data: { key: createId(), value: createId() } })
			)
	)
	await Promise.all(
		Array.from({ length: count })
			.fill(null)
			.map(async () =>
				prisma.parent.create({
					data: {
						properties: {
							createMany: { data: [{ key: createId(), value: DateTime.utc().toISO() }] },
						},
					},
					include: { properties: true },
				})
			)
	)
	revalidatePath('/')
}

export async function countProperties() {
	return prisma.property.count()
}
