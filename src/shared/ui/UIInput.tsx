import { cn } from '@/shared/utils/cn';
import React, { InputHTMLAttributes } from 'react';

interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
	// label?: string;
	error?: boolean;
	helperText?: string;
}

const UIInput: React.FC<UIInputProps> = ({ error, helperText, className, ...props }) => {
	return (
		<>
			{/* {label && <label className='mb-1 text-sm font-medium'>{label}</label>} */}
			<input
				className={cn(
					`p-2 border rounded-md focus-visible:outline-none `,
					error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 ',
					className
				)}
				{...props}
			/>
			{helperText && <span className='text-xs text-gray-500'>{helperText}</span>}
			{error && <span className='text-xs text-red-500'>Ошибка ввода</span>}
		</>
	);
};

export default UIInput;
