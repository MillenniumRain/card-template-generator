import { cn } from '@/shared/utils/cn';
import React, { useEffect, useRef, useState } from 'react';

interface Option {
	value: string;
	label: string;
}

interface UISelectProps {
	options: Option[];
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	value?: string;
	isOpen?: boolean;
}

const UISelect: React.FC<UISelectProps> = ({ options, onChange, placeholder, className, value, isOpen = false }) => {
	const [isOpenSelect, setIsOpenSelect] = useState(isOpen);
	const [selectedValue, setSelectedValue] = useState<string | null>(value || null);
	const ref = useRef<HTMLDivElement>(null);
	const handleSelect = (value: string) => {
		setSelectedValue(value);
		onChange(value);
		setIsOpenSelect(false);
	};
	const onSelectClick = () => {
		setIsOpenSelect((prev) => !prev);
	};

	return (
		<div className='relative mb-2'>
			<div
				className={cn(`border border-gray-300 bg-white rounded-md py-2 px-3 cursor-pointer `, className)}
				onClick={onSelectClick}>
				Кол-во слов:{' '}
				{selectedValue ? options.find((option) => option.value === selectedValue)?.label : placeholder}
			</div>
			{isOpenSelect && (
				<div
					className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg'
					ref={ref}>
					<div className='p-2 bg-slate-200 '>{placeholder}</div>
					{options.map((option) => (
						<div
							key={option.value}
							className='p-2 hover:bg-gray-100 cursor-pointer text-stone-700'
							onClick={() => handleSelect(option.value)}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default UISelect;
