import { ICategoryCardProps } from './categorycard.types';

export const CategoryCard: React.FC<ICategoryCardProps> = ({ ...props }) => {
	return (
		<div className="flex justify-center w-full">
			<div
				key={props.key}
				className="grid grid-cols-1 rounded-md bg-white w-[250px] h-full overflow-hidden cursor-pointer select-none transition-all hover:scale-105"
				onClick={props.onSelect}>
				<img
					className="w-full h-full aspect-square object-contain"
					src={props.src}
					alt="img"
				/>
				<div className="w-full flex justify-center h-full py-[0.8vw] px-[10%]">
					<p className="text-center font-medium">{props.title}</p>
				</div>
			</div>
		</div>
	);
};
