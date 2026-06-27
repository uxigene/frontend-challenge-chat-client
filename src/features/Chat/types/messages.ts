export interface TypeMessage {
	_id: string;
	author: string;
	message: string;
	createdAt: string;
}

export type TypeMessages = TypeMessage[];
