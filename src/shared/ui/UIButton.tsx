import React, { FC, ReactNode } from 'react';
import { cn } from '@/shared/utils/cn'; // Предполагается, что у вас есть функция cn для объединения классов
import clsx from 'clsx';

interface UIButtonProps {
	children: ReactNode; // Содержимое кнопки
	onClick?: () => void; // Обработчик события клика
	className?: string; // Дополнительные классы для стилизации
	disabled?: boolean; // Флаг для отключения кнопки
}

const UIButton: FC<UIButtonProps> = ({ children, onClick, className, disabled }) => {
	return (
		<button
			className={clsx(
				`_button text-emerald-900 bg-200 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400   rounded-md bg-pos-0 hover:bg-pos-100 duration-500 font-semibold hover:text-white text-2xl`,
				disabled ? 'opacity-50 cursor-not-allowed' : null,
				className
			)}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
};

export default UIButton;
