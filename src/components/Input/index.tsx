import type { FC, ChangeEventHandler, KeyboardEventHandler } from 'react';

type TypeInputProps = {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
	placeholder?: string;
};

const Input: FC<TypeInputProps> = ({
	value,
	onChange,
	onKeyDown,
	placeholder = 'Type something...',
}: TypeInputProps) => {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
			placeholder={placeholder}
			className="bg-white outline-none px-4 py-3 rounded-md flex-1"
		/>
	);
};

export default Input;
