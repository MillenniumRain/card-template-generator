export type sentenceTypes = 'which' | 'what' | 'whose';
export interface iSentence {
	id: number;
	type: sentenceTypes;
	value: string;
	label: string;
	active: boolean;
}
export interface IGeneratedWords {
	id: string;
	sentence: string[];
}
export interface IResultList {
	id: number;
	phrase: string;
	use: number;
}
export interface IListNames {
	id: number;
	results: IResultList[];
	count: number;
	next: string;
	previous: string;
}

/**/

export interface IPostSentence {
	type: string;
	value: string;
}
export interface IPostWords {
	data: IPostSentence[][];
	count: number;
}
export interface IPostWordsResponse {
	data: string[];
	id: string;
}
