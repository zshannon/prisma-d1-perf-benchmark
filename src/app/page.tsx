import { countProperties } from '~/app/actions'

export const runtime = 'edge'

export default async function Home() {
	const count = await countProperties()
	return <main>{JSON.stringify({ count })}</main>
}
