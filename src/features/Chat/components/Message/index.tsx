import type { FC } from 'react';
import type { TypeMessage } from '../../types/messages.ts';

import { twMerge } from 'tailwind-merge';
import { formatDistanceToNow } from 'date-fns';

type TypeMessageProps = {
	message: TypeMessage;
	nickname: string;
};

const Message: FC<TypeMessageProps> = ({ nickname, message }: TypeMessageProps) => {
	const isMine = nickname === message.author;
	return (
		<div
			className={twMerge(
				'flex flex-col p-4 rounded-xl border-1 max-w-9/10 sm:max-w-2/3 ',
				isMine
					? 'self-end bg-orange-100 border-orange-200 rounded-br-none'
					: 'self-start bg-white border-neutral-200 rounded-bl-none',
			)}
		>
			{!isMine && <div className="text-neutral-500">{message.author}</div>}
			<div className="text-neutral-900">{message.message}</div>
			<div className="text-neutral-500">{formatDistanceToNow(message.createdAt, { addSuffix: true })}</div>
		</div>
	);
};

export default Message;
