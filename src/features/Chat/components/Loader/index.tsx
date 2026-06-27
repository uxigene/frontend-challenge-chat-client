import type { FC } from 'react';

import { twJoin } from 'tailwind-merge';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

import Button from '../../../../components/Button';

type TypeLoaderProps = {
	loading: boolean;
	onClick: () => void;
};

const Loader: FC<TypeLoaderProps> = ({ loading, onClick }: TypeLoaderProps) => {
	return (
		<Button
			className="bg-white rounded-full text-black p-3 border-1 border-neutral-200 min-w-36"
			onClick={onClick}
			disabled={loading}
		>
			<ArrowPathIcon className={twJoin('size-5', loading && 'animate-spin')} />
			{loading ? 'Loading...' : 'Load more'}
		</Button>
	);
};

export default Loader;
