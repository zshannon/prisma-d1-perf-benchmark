import { clearDb } from '~/app/actions'
import { PerformanceTest } from '~/app/components'

export const runtime = 'edge'

export default async function Home() {
	return (
		<main>
			<form
				action={async () => {
					'use server'
					await clearDb()
				}}
			>
				<button type="submit">Clear DB</button>
			</form>
			<PerformanceTest />
		</main>
	)
}
