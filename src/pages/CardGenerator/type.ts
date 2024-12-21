export type sentenceTypes = 'which' | 'what' | 'whose';
export interface iSentence {
	id: number;
	type: sentenceTypes;
	value: string;
	label: string;
	active: boolean;
}
