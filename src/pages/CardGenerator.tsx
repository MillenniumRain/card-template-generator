import { ReactNode, FC } from 'react';
import { cn } from '@/shared/utils/cn';

interface CardGeneratorProp {
	children?: ReactNode;
	className?: string;
}

const CardGenerator: FC<CardGeneratorProp> = ({ className }) => {
	return (
		<div
			className={cn(
				'w-screen h-screen grid place-items-center bg-gradient-to-b from-white to-secondary',
				className
			)}>
			<div className='text-primary text-3xl font-bold'>Генератор карт</div>
		</div>
	);
};

export default CardGenerator;
