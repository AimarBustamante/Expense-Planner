// Formateador de monedas - para USD
export function formatCurrency(amount: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

// Formateador de fechas - para agregar la fecha en la que se agrega el gasto en español
export function formatDate(dateStr: string) : string {
	const dateObj = new Date(dateStr)
	const options : Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	}
	return new Intl.DateTimeFormat("es-ES", options).format(dateObj)
}