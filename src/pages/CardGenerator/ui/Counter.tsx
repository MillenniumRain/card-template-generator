import { ReactNode, FC, HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import { cn } from '@/shared/utils/cn';
import UIInput from '@/shared/ui/UIInput';
import { S_Minus } from '@/shared/assets/svg/S_Minus';
import { S_Plus } from '@/shared/assets/svg/S_SVGPlus';
import UIButton from '@/shared/ui/UIButton';

interface CounterProp extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
	className?: string;
	onChangeCounter: (counter: number) => void;
}

const Counter: FC<CounterProp> = ({ className, onChangeCounter, value = 0, ...props }) => {
	return (
		<div className={cn('_counter flex gap-3 items-center', className)}>
			<UIButton className='p-1' onClick={() => onChangeCounter(Math.max(+value - 1, 1))}>
				<S_Minus className='text-2xl' stroke='3' />
			</UIButton>
			<div>
				<UIInput
					className='w-14 text-center'
					{...props}
					value={value}
					onChange={(e) => onChangeCounter(Math.min(+e.target.value, 99))}
					max='99'
				/>
			</div>

			<UIButton className='p-1 ' onClick={() => onChangeCounter(Math.min(+value + 1, 99))}>
				<S_Plus className='text-2xl' stroke='3' />
			</UIButton>
		</div>
	);
};

export default Counter;
