'use server'

import { prisma } from '~/prisma'

export async function countProperties() {
	return prisma.property.count()
}
