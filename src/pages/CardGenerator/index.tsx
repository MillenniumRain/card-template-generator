import { ReactNode, FC, useState, ChangeEvent } from 'react';
import { cn } from '@/shared/utils/cn';
import UIInput from '@/shared/ui/UIInput';
import UISelect from '@/shared/ui/UISelect';
import UIButton from '@/shared/ui/UIButton';
import SelectedInput from '@/pages/CardGenerator/ui/SelectedInput';
import { iSentence } from '@/pages/CardGenerator/type';
import { SS } from '@/pages/CardGenerator/data';
import { group } from 'console';

interface CardGeneratorProp {
	children?: ReactNode;
	className?: string;
}

const CardGenerator: FC<CardGeneratorProp> = ({ className }) => {
	const [wordCount, setWordCount] = useState('1');
	const [sentence, setSentence] = useState<iSentence[][]>(JSON.parse(JSON.stringify(SS)));

	const onSelectHandler = (s: iSentence) => {
		setSentence((prev) => {
			const sents = [...prev];
			sents.forEach((sent) => {
				const word = sent.find((word) => word.id === s.id);
				if (word) {
					word.active = !s.active;
				}
			});
			return sents;
		});
	};
	const onChangeHandler = (column: number, s: iSentence, e: ChangeEvent<HTMLInputElement>) => {
		setSentence((prev) => {
			const sents = [...prev];
			sents[column].forEach((word) => {
				if (word.id !== s.id) {
					word.active = false;
					word.value = '';
				}
			});
			sents.forEach((group) => {
				const word = group.find((word) => word.id === s.id);
				if (word) {
					word.value = e.target.value;
					word.active = true;
				}
			});
			return sents;
		});
	};

	const filterSentence = () => {
		const filtered = [];
		// const lastFiltered = [];
		for (const index in sentence) {
			let withValue = sentence[index].filter((word) => word.value);
			if (withValue.length == 0) {
				withValue = sentence[index];
			}
			filtered.push(withValue.filter((word) => word.active));
		}

		console.log(filtered.filter((group) => group.length > 0));
	};

	return (
		<div
			className={cn(
				'w-screen h-screen grid place-items-center bg-gradient-to-b from-white to-secondary text-primary-alt',
				className
			)}>
			<div className='flex flex-col items-center'>
				<div className='relative'>
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
								setSentence(JSON.parse(JSON.stringify(SS)));
								setWordCount(num);
							}}
						/>
					</div>
					<div className='flex gap-2 mb-8 '>
						{wordCount > '2' ? (
							<div className='flex flex-col gap-2'>
								{sentence[0].map((word, index) => (
									<SelectedInput
										onSelect={() => onSelectHandler(word)}
										key={word.id}
										isSelected={word.active}
										placeholder={word.label}
										onChange={(e) => onChangeHandler(0, word, e)}
										value={word.value}
									/>
								))}
							</div>
						) : null}
						{wordCount > '1' ? (
							<div className='flex flex-col gap-2'>
								{sentence[1].map((word, index) => (
									<SelectedInput
										onSelect={() => onSelectHandler(word)}
										key={word.id}
										isSelected={word.active}
										placeholder={word.label}
										onChange={(e) => onChangeHandler(1, word, e)}
										value={word.value}
									/>
								))}
							</div>
						) : null}
						{wordCount > '0' ? (
							<div className='flex flex-col gap-2'>
								{sentence[2].map((word, index) => (
									<SelectedInput
										onSelect={() => onSelectHandler(word)}
										key={word.id}
										isSelected={word.active}
										placeholder={word.label}
										onChange={(e) => onChangeHandler(2, word, e)}
										value={word.value}
									/>
								))}
							</div>
						) : null}
					</div>
					<button
						className='px-2 py-1 text-sm hover:underline'
						onClick={() => {
							setSentence(JSON.parse(JSON.stringify(SS)));
						}}>
						Сбросить
					</button>
					<UIButton className='px-4 py-3 rounded-xl' onClick={filterSentence}>
						Сгенерировать{' '}
					</UIButton>
				</div>
			</div>
		</div>
	);
};

export default CardGenerator;
