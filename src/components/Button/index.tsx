import type { MouseEventHandler, ReactNode, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type TypeButtonProps = {
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
	disabled?: boolean;
	className?: string;
};

const Button: FC<TypeButtonProps> = ({ children, disabled, className, onClick }: TypeButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={twMerge(
				'bg-orange-400 flex items-center justify-center gap-2 self-center cursor-pointer outline-none p-4 py-3 text-white rounded-md disabled:opacity-60 disabled:cursor-default',
				className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
