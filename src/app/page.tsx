import { countProperties, writeProperties } from '~/app/actions'

export const runtime = 'edge'

export default async function Home() {
	const count = await countProperties()
	return (
		<main>
			{JSON.stringify({ count })}
			<form
				action={async () => {
					'use server'
					await writeProperties(10)
				}}
			>
				<button type="submit">write properties</button>
			</form>
		</main>
	)
}
