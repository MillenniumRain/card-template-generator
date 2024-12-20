import { ReactNode, FC, InputHTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';
import UIInput from '@/shared/ui/UIInput';

interface SelectedInputProp extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
	className?: string;
	isSelected: boolean;
}

const SelectedInput: FC<SelectedInputProp> = ({ className, isSelected = false, ...props }) => {
	return (
		<UIInput className={cn(`w-[210px]`, isSelected ? 'border-2 border-orange-600' : null, className)} {...props} />
	);
};

export default SelectedInput;
