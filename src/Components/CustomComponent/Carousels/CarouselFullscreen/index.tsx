import { ICarouselFullscreen } from './types.carouselfullscreen';

import { useEffect, useState } from 'react';

const next = require('../../../../Assets/Icons/Next.png');
const prev = require('../../../../Assets/Icons/Prev.png');

export const CarouselFullscreen: React.FC<ICarouselFullscreen> = ({
	...props
}) => {
	const [selInd, setSelInd] = useState(props.selectedIndex);

	useEffect(() => {
		const interval = setInterval(() => {
			if (selInd < props.images.length - 1) {
				setSelInd(selInd + 1);
			} else {
				setSelInd(0);
			}
		}, 5000);
		return () => clearInterval(interval);
	}, [selInd]);

	function onNext() {
		if (selInd < props.images.length - 1) {
			setSelInd(selInd + 1);
		} else {
			setSelInd(0);
		}
	}

	function onPrev() {
		if (selInd > 0) {
			setSelInd(selInd - 1);
		} else {
			setSelInd(props.images.length - 1);
		}
	}

	return (
		<div className="w-screen h-full max-h-[93vh] overflow-hidden relative">
			{props.images.map((item, index) => {
				return (
					index === selInd && (
						<img
							alt="bg"
							key={index}
							src={item}
							className={`w-full h-full
                    mm:object-contain sm:object-contain md:object-contain lg:object-contain xl:object-cover object-cover`}
						/>
					)
				);
			})}
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-[2vw]">
				<img
					alt="prev"
					src={prev}
					className="w-[48px] h-[48px] cursor-pointer"
					onClick={onPrev}
				/>
				<img
					alt="next"
					src={next}
					className="w-[48px] h-[48px] cursor-pointer"
					onClick={onNext}
				/>
			</div>
		</div>
	);
};
