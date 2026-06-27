import { requestApi } from '../../../helpers/api.ts';
import type { TypeMessage, TypeMessages } from '../types/messages.ts';

type TypeParams = {
	limit?: number;
	after?: string;
	before?: string;
};

export const loadMessagesService = (data: TypeParams = {}): Promise<TypeMessages> => {
	return requestApi('/api/v1/messages', data);
};

export const sendMessageService = async (message: Partial<TypeMessage>): Promise<TypeMessage> => {
	return requestApi('/api/v1/messages', message, 'POST');
};
