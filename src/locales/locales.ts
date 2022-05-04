
export interface IDataLanguage {
	rows_per_page:string
	out_of_pages: string
	all: string
	search_data: string

}
export interface ILanguage {
	en: IDataLanguage,
	ar: IDataLanguage,
	es: IDataLanguage,
	br: IDataLanguage,
	cat: IDataLanguage,
	fr: IDataLanguage,
	nl: IDataLanguage,
	de: IDataLanguage
}

const languages:ILanguage = {
	en: require('./en.json'),
	ar: require('./ar.json'),
	es: require('./es.json'),
	br: require('./br.json'),
	cat: require('./cat.json'),
	fr: require('./fr.json'),
	nl: require('./nl.json'),
	de: require('./de.json'),
}
export default languages

