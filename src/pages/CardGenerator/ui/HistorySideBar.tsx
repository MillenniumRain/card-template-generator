import { ReactNode, FC, useState, useEffect } from 'react';
import { cn } from '@/shared/utils/cn';
import { S_Plus } from '@/shared/assets/S_SVGPlus';
import { useListNames } from '@/pages/CardGenerator/hooks/useListNames';
import { S_Bucket } from '@/shared/assets/S_Bucket';
import { useDeleteSentences } from '@/pages/CardGenerator/hooks/useDeleteSentences';
import { IPostWordsResponse } from '@/pages/CardGenerator/type';

interface HistorySideBarProp {
	children?: ReactNode;
	visible: boolean;
	onClick: () => void;
	className?: string;
	lastList: string[];
}

const HistorySideBar: FC<HistorySideBarProp> = ({ className, visible, onClick, lastList }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data, maxPage } = useListNames(currentPage);
	const { deleteSentences } = useDeleteSentences();
	return (
		<div
			className={cn(
				'_historysidebar  sm:w-[400px]  h-screen text-orange-600 absolute top-0 right-0 bg-stone-900 transition-all  flex flex-col',
				className,
				visible ? 'right-0 w-screen ' : '-right-[100vw]'
			)}>
			<div className='_close flex justify-start items-center'>
				<div className='p-2 group cursor-pointer ' onClick={onClick}>
					<S_Plus className='rotate-45 text-3xl group-hover:text-orange-400 bg group-hover:rotate-[225deg] transition-all' />
				</div>
				<div className='text-end pr-4 text-xl text-white flex-1 font-bold'>История генерации</div>
			</div>

			<div className='_history flex-1  overflow-hidden bg-white '>
				<div className='w-full h-full  text-stone-900 bg-stone-900 overflow-y-auto flex flex-col gap-1 py-1'>
					{data?.results.map((sentence, index) => (
						<div
							className={cn(
								`flex gap-2 group  cursor-default bg-white  hover:text-white hover:bg-transparent py-1 border-l-4 border-stone-900  hover:border-l-orange-600`,
								lastList.includes(sentence.phrase) ? 'border-green-500' : ''
							)}
							key={sentence.id}>
							<div className='w-6 text-right flex items-center pl-2'>{index + 1}.</div>
							<div className=' flex justify-between w-full p-2 '>
								<span>{sentence.phrase}</span>
								<button
									className='opacity-0 transition-all group-hover:opacity-100 pr-2'
									onClick={() => deleteSentences(sentence.id)}>
									<S_Bucket className='hover:text-orange-600' />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-between p-3 items-center hover:underline'>
				{currentPage > 1 ? (
					<button onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}>Назад</button>
				) : (
					<div></div>
				)}
				{currentPage < maxPage ? (
					<button onClick={() => setCurrentPage((prev) => Math.min(maxPage, prev + 1))}>Далее</button>
				) : null}
			</div>
		</div>
	);
};

export default HistorySideBar;
