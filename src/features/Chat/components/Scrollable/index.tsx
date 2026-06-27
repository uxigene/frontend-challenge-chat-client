import { useEffect, useRef } from 'react';
import type { ReactNode, FC } from 'react';

type TypeScrollableProps = {
	children: ReactNode;
};

const AUTO_SCROLL_THRESHOLD: number = 50;

const Scrollable: FC<TypeScrollableProps> = ({ children }: TypeScrollableProps) => {
	const scrollableRef = useRef<HTMLDivElement | null>(null);
	const shouldAutoScrollRef = useRef<boolean>(true);

	useEffect(() => {
		if (!shouldAutoScrollRef.current || !scrollableRef.current) return;
		scrollableRef.current.scrollTo({ top: scrollableRef.current.scrollHeight });
	}, [children]);

	const handleScroll = () => {
		if (!scrollableRef.current) return;
		shouldAutoScrollRef.current =
			scrollableRef.current.scrollHeight - scrollableRef.current.scrollTop - scrollableRef.current.clientHeight <
			AUTO_SCROLL_THRESHOLD;
	};

	return (
		<div ref={scrollableRef} onScroll={handleScroll} className="flex-1 py-4 overflow-auto outline-none">
			{children}
		</div>
	);
};

export default Scrollable;
