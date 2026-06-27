import { useEffect } from 'react';
import type { FC } from 'react';

import type { TypeMessage } from './types/messages';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import Form from '../../components/Form';
import Loader from './components/Loader';
import Message from './components/Message';
import Scrollable from './components/Scrollable';

import useMessages from './hooks/useMessages.ts';
import useInterval from '../../hooks/useInterval.ts';

const POLLING_INTERVAL = 3000;

type TypeChatProps = {
	nickname: string;
};

const Chat: FC<TypeChatProps> = ({ nickname }: TypeChatProps) => {
	const { messages, loading, hasMore, sendMessage, loadNewMessages, loadInitMessages, loadMoreMessages } =
		useMessages();

	const handleFormSubmit = async (text: string) => {
		await sendMessage({ author: nickname, message: text });
	};

	useEffect(() => {
		loadInitMessages().then();
	}, [loadInitMessages]);

	useInterval(() => {
		loadNewMessages().then();
	}, POLLING_INTERVAL);

	return (
		<div className="flex flex-col h-dvh overflow-hidden">
			<Scrollable>
				<div className="max-w-screen-md w-full px-6 mx-auto flex flex-col gap-4">
					{hasMore && <Loader loading={loading} onClick={loadMoreMessages} />}
					{messages.map((message: TypeMessage) => (
						<Message key={message._id} message={message} nickname={nickname} />
					))}
				</div>
			</Scrollable>
			<div className="bg-neutral-100">
				<div className="max-w-screen-md w-full mx-auto sm:px-6 sm:py-2 p-2">
					<Form
						onSubmit={handleFormSubmit}
						ButtonIcon={PaperAirplaneIcon}
						inputPlaceholder="Type your message..."
					/>
				</div>
			</div>
		</div>
	);
};

export default Chat;
