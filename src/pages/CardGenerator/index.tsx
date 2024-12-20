import { ReactNode, FC, useState } from 'react';
import { cn } from '@/shared/utils/cn';
import UIInput from '@/shared/ui/UIInput';
import UISelect from '@/shared/ui/UISelect';
import UIButton from '@/shared/ui/UIButton';
import SelectedInput from '@/pages/CardGenerator/ui/SelectedInput';

interface CardGeneratorProp {
	children?: ReactNode;
	className?: string;
}

const CardGenerator: FC<CardGeneratorProp> = ({ className }) => {
	const [wordCount, setWordCount] = useState('1');
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
					<UISelect
						isOpen={false}
						className='w-[210px]'
						placeholder='Выберите количество слов'
						options={[
							{ label: 'одно', value: '1' },
							{ label: 'два', value: '2' },
							{ label: 'три', value: '3' },
						]}
						onChange={setWordCount}
					/>
					<div className='flex gap-2 mb-16 '>
						{wordCount > '1' ? <SelectedInput isSelected={true} placeholder='Прилагательное' /> : null}
						{wordCount > '0' ? (
							<div className='flex flex-col relative'>
								<SelectedInput isSelected={false} placeholder='Существительное' />
								<SelectedInput
									className='absolute top-12'
									isSelected={true}
									placeholder='Прилагательное'
								/>
							</div>
						) : null}
						{wordCount > '2' ? (
							<div className='flex flex-col relative'>
								<SelectedInput
									className='absolute -top-12'
									isSelected={true}
									placeholder='Существительное'
								/>
								<SelectedInput isSelected={false} placeholder='Существительное' />
								<SelectedInput
									className='absolute top-12'
									isSelected={false}
									placeholder='Принадлежность'
								/>
							</div>
						) : null}
					</div>
					<UIButton className='px-4 py-3 rounded-xl'>Сгенерировать </UIButton>
				</div>
			</div>
		</div>
	);
};

export default CardGenerator;
