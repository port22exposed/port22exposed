const counts = new Map<string, number>()

export function nextMarqueeIndex(page: string) {
	const count = counts.get(page) ?? 0
	counts.set(page, count + 1)
	return count
}
