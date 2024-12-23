import { ReactNode, FC, InputHTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';
import UIInput from '@/shared/ui/UIInput';

interface SelectedInputProp extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
	className?: string;
	isSelected: boolean;
	onSelect?: () => void;
}

const SelectedInput: FC<SelectedInputProp> = ({ className, onSelect, isSelected = false, ...props }) => {
	return (
		<div
			className={cn(
				`_sinput flex relative items-center rounded-md`,
				isSelected ? ' outline outline-[2px] outline-orange-600' : null
			)}>
			<div className=' '>
				<UIInput className={cn(`w-[210px]  border-r-0  rounded-r-none`, className)} {...props} />
			</div>
			<div
				className={cn(`bg-white h-full px-2 rounded-r-md border  border-l-0  border-gray-300 cursor-pointer`)}
				onChange={() => {
					onSelect && onSelect();
				}}>
				<input type='checkbox' className=' h-full cursor-pointer' checked={isSelected} onChange={() => {}} />
			</div>
		</div>
	);
};

export default SelectedInput;
