'use client'

import { useState } from 'react'

import { writeProperties } from '~/app/actions'

type Test = {
	d1SqlMs: number
	prismaSqlMs: number
	prismaMs: number
	numberOfRecordsToCreate: number
	start: number
}

export function PerformanceTest() {
	const [tests, setTests] = useState<Test[]>([])
	const [numberOfRecordsToCreate, setNumberOfRecordsToCreate] = useState<number>(100) // Default value

	return (
		<div>
			<form
				action={async () => {
					const start = Date.now()
					const serverMs = await writeProperties(numberOfRecordsToCreate)
					setTests(t => [
						...t,
						{
							...serverMs,
							numberOfRecordsToCreate,
							start,
						},
					])
				}}
			>
				<label>
					Number of Records to Create:
					<input
						type="number"
						value={numberOfRecordsToCreate}
						onChange={e => {
							setNumberOfRecordsToCreate(Number(e.target.value))
						}}
					/>
				</label>
				<button type="submit">Start test</button>
			</form>
			<ul>
				<li>i,numberOfRecordsToCreate,prismaMs,prismaSqlMs,d1SqlMs</li>
				{tests.map((test, i) => (
					<li key={test.start}>
						{[
							i,
							Math.round(test.numberOfRecordsToCreate * 1000),
							Math.round(test.prismaMs * 1000),
							Math.round(test.prismaSqlMs * 1000),
							Math.round(test.d1SqlMs * 1000),
						].join(',')}
					</li>
				))}
			</ul>
		</div>
	)
}
