import { prisma } from '~/prisma'

export default async function Home() {
	const count = await prisma.property.count()
	return <main>{JSON.stringify({ count })}</main>
}
