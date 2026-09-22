const dateFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
	timeZone: 'UTC',
});

export function formatDate(date: string) {
	return dateFormatter.format(new Date(`${date.slice(0, 10)}T00:00:00Z`));
}
