import { ReactNode, FC } from 'react';
import { cn } from '@/shared/utils/cn';
import { S_Plus } from '@/shared/assets/S_SVGPlus';

interface HistorySideBarProp {
	children?: ReactNode;
	visible: boolean;
	onClick: () => void;
	className?: string;
}

const HistorySideBar: FC<HistorySideBarProp> = ({ className, visible, onClick }) => {
	return (
		<div
			className={cn(
				'_historysidebar w-[400px]  h-screen text-orange-600 absolute top-0 right-0 bg-stone-900 transition-all pb-4 flex flex-col',
				className,
				visible ? 'right-0' : '-right-[400px]'
			)}>
			<div className='_close flex justify-start items-center'>
				<div className='p-2 group cursor-pointer ' onClick={onClick}>
					<S_Plus className='rotate-45 text-3xl group-hover:rotate-[225deg] transition-transform' />
				</div>
				<div className='text-end pr-4 text-xl text-white flex-1 font-bold'>История генерации</div>
			</div>

			<div className='_history flex-1  overflow-hidden bg-white '>
				<div className='w-full h-full  text-stone-900 bg-secondary/30 p-3  overflow-y-auto flex flex-col gap-2 '>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1000.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
					<div className='flex gap-2'>
						<div>1.</div>
						<div className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HistorySideBar;
