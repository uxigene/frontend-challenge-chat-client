import { useState } from 'react';
import type { ElementType, ChangeEvent, KeyboardEvent, FC } from 'react';

import { CheckIcon } from '@heroicons/react/24/outline';

import Input from '../Input';
import Button from '../Button';

type TypeFormProps = {
	onSubmit: (text: string) => void;
	minLength?: number;
	ButtonIcon?: ElementType;
	inputPlaceholder?: string;
};

const Form: FC<TypeFormProps> = ({
	inputPlaceholder,
	onSubmit,
	minLength = 1,
	ButtonIcon = CheckIcon,
}: TypeFormProps) => {
	const [text, setText] = useState('');
	const trimmedText = text.trim();

	const isValid = trimmedText.length >= minLength;

	const handleSubmit = () => {
		if (isValid) {
			onSubmit(trimmedText);
			setText('');
		}
	};

	const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.code === 'Enter') {
			handleSubmit();
		}
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleButtonClick = () => {
		handleSubmit();
	};

	return (
		<div className="flex w-full gap-2">
			<Input
				value={text}
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
				placeholder={inputPlaceholder}
			/>
			<Button onClick={handleButtonClick} disabled={!isValid}>
				<ButtonIcon className="size-6" />
			</Button>
		</div>
	);
};

export default Form;
