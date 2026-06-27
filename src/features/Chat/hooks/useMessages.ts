import { useState, useCallback } from 'react';

import type { TypeMessage, TypeMessages } from '../types/messages.ts';

const INITIAL_MESSAGES_MOCK: TypeMessages = [
	{
		_id: '1',
		message: 'Hey team! I created a Doodle poll for our monthly team lunch 🍕',
		author: 'Luka',
		createdAt: new Date().toISOString(),
	},
	{
		_id: '2',
		message: 'Cool! It&#39;s super easy to vote.',
		author: 'John',
		createdAt: new Date().toISOString(),
	},
	{
		_id: '3',
		message: 'Could everyone vote by tomorrow? Then we can lock in the restaurant reservation.',
		author: 'Luka',
		createdAt: new Date().toISOString(),
	},
	{
		_id: '4',
		message: "Done! Love how it shows everyone's availability at a glance.",
		author: 'Maddie',
		createdAt: new Date().toISOString(),
	},
	{
		_id: '5',
		message: "Just submitted my preferences. Can't wait for the lunch! 😋",
		author: 'Nina',
		createdAt: new Date().toISOString(),
	},
];

const LIMIT = 50;

const useMessages = () => {
	const [messages, setMessages] = useState<TypeMessages>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [hasMore, setHasMore] = useState<boolean>(true);

	const loadInitMessages = useCallback(async () => {
		setLoading(true);
		setTimeout(() => {
			setMessages(INITIAL_MESSAGES_MOCK);
			setHasMore(INITIAL_MESSAGES_MOCK.length >= LIMIT);
			setLoading(false);
		}, 1000);
	}, []);

	const loadMoreMessages = useCallback(async () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const sendMessage = useCallback(async (message: Partial<TypeMessage>) => {
		const mock: TypeMessage = {
			_id: new Date().toISOString(),
			createdAt: new Date().toISOString(),
			...message,
		} as TypeMessage;
		setMessages((prev: TypeMessages) => [...prev, mock]);
	}, []);

	return {
		loading,
		messages,
		hasMore,
		sendMessage,
		loadInitMessages,
		loadMoreMessages,
	};
};

export default useMessages;
