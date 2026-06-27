import { useState, useCallback } from 'react';

import type { TypeMessage, TypeMessages } from '../types/messages.ts';
import { loadMessagesService, sendMessageService } from '../services/messages.ts';

const LIMIT = 50;

const useMessages = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [hasMore, setHasMore] = useState<boolean>(false);

	const [messages, setMessages] = useState<TypeMessages>([]);

	const loadInitMessages = useCallback(async () => {
		try {
			setLoading(true);

			const response = await loadMessagesService({
				before: new Date().toISOString(),
				limit: LIMIT,
			});

			setHasMore(response.length === LIMIT);
			setMessages(response);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, []);

	const loadMoreMessages = useCallback(async () => {
		try {
			setLoading(true);

			const oldestMessage = messages[0];
			const response = await loadMessagesService({
				before: oldestMessage.createdAt,
				limit: LIMIT,
			});

			setHasMore(response.length === LIMIT);
			setMessages((prev) => [...response, ...prev]);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [messages]);

	const loadNewMessages = useCallback(async () => {
		try {
			const newestMessage = messages[messages.length - 1];
			const response = await loadMessagesService({ after: newestMessage.createdAt, limit: LIMIT });

			setMessages((prev) => [...prev, ...response]);
		} catch (error) {
			console.log(error);
		}
	}, [messages]);

	const sendMessage = useCallback(async (message: Partial<TypeMessage>) => {
		try {
			const response = await sendMessageService(message);
			setMessages((prev) => [...prev, response]);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return {
		loading,
		messages,
		hasMore,
		sendMessage,
		loadNewMessages,
		loadInitMessages,
		loadMoreMessages,
	};
};

export default useMessages;
