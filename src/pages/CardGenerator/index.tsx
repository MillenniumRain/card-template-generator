import { ReactNode, FC, useState, ChangeEvent } from 'react';
import { cn } from '@/shared/utils/cn';
import UIInput from '@/shared/ui/UIInput';
import UISelect from '@/shared/ui/UISelect';
import UIButton from '@/shared/ui/UIButton';
import SelectedInput from '@/pages/CardGenerator/ui/SelectedInput';
import { IGeneratedWords, iSentence } from '@/pages/CardGenerator/type';
import { SS } from '@/pages/CardGenerator/data';
import { group } from 'console';
import { data } from 'react-router-dom';
import Counter from '@/pages/CardGenerator/ui/Counter';
import useLocalStorage from '@/shared/hooks/LocalStorage';

interface CardGeneratorProp {}

const ALL_COLUMS_NUMBERS = ['2', '1', '0'];

const CardGenerator: FC<CardGeneratorProp> = ({}) => {
	const [wordCount, setWordCount] = useState('1');
	const [counter, setCounter] = useState(5);
	const [sentence, setSentence] = useState<iSentence[][]>(SS);

	const [localWords, setLocalWords, removeLocal] = useLocalStorage<IGeneratedWords>('gnrt');
	console.log(localWords);

	const onSelectHandler = (s: iSentence) => {
		setSentence((prev) =>
			prev.map((group) => group.map((word) => (word.id === s.id ? { ...word, active: !word.active } : word)))
		);
	};
	const onChangeHandler = (column: number, s: iSentence, e: ChangeEvent<HTMLInputElement>) => {
		setSentence((prev) =>
			prev.map((group, index) => {
				if (index !== column) return group;
				return group.map((word) =>
					word.id === s.id
						? { ...word, value: e.target.value, active: true }
						: { ...word, active: false, value: '' }
				);
			})
		);
	};

	const filterSentence = () => {
		const filtered = [];
		for (const index in sentence) {
			let withValue = sentence[index].filter((word) => word.value);
			if (withValue.length == 0) {
				withValue = sentence[index];
			}
			filtered.push(withValue.filter((word) => word.active));
		}

		console.log({
			data: filtered
				.filter((group) => group.length > 0)
				.map((group) =>
					group.map((word) => ({
						type: word.type,
						value: word.value,
					}))
				),
			count: counter,
			id: null,
		});
		// setLocalWords({ id: '12313', sentence: ['123', 'adad', 'adadaddda'] });
		// removeLocal();
	};

	return (
		<main
			className={cn(
				'w-screen h-screen grid place-items-center bg-gradient-to-b from-white to-secondary text-primary-alt'
			)}>
			<div className='flex flex-col items-center'>
				<div className='relative text-center'>
					<div className='absolute -top-[3px] text-6xl font-extrabold bg-gradient-to-tl  from-red-500 to-yellow-400 mb-12 bg-clip-text text-transparent'>
						Генератор названия карт
					</div>
					<div className='  text-6xl font-extrabold bg-red-500 mb-12 bg-clip-text text-transparent'>
						Генератор названия карт
					</div>
				</div>

				<div className='grid place-items-center '>
					<div className='mb-6'>
						<UISelect
							isOpen={false}
							className='w-[210px] '
							placeholder='Выберите количество слов'
							options={[
								{ label: 'одно', value: '1' },
								{ label: 'два', value: '2' },
								{ label: 'три', value: '3' },
							]}
							onChange={(num) => {
								setSentence(SS);
								setWordCount(num);
							}}
						/>
					</div>
					<section className='flex gap-2 mb-8 '>
						{ALL_COLUMS_NUMBERS.map((column, index) => {
							if (wordCount <= column) return null;
							return (
								<div className='flex flex-col gap-2' key={column}>
									{sentence[index].map((word) => (
										<SelectedInput
											onSelect={() => onSelectHandler(word)}
											key={word.id}
											isSelected={word.active}
											placeholder={word.label}
											onChange={(e) => onChangeHandler(index, word, e)}
											value={word.value}
										/>
									))}
								</div>
							);
						})}
					</section>
					<button
						className='px-2 py-1 text-sm hover:underline text-center'
						onClick={() => {
							setSentence(SS);
							setCounter(1);
						}}>
						Сбросить
					</button>
					<div className='mb-2 justify-center'>
						<Counter value={counter} onChangeCounter={(counter) => setCounter(counter)} />
					</div>
					<UIButton className='rounded-xl px-6 py-3 ' onClick={filterSentence}>
						Сгенерировать
					</UIButton>
				</div>
			</div>
		</main>
	);
};

export default CardGenerator;
