import { useEffect, useState } from 'react';

const useLocalStorage = (key: string) => {
	const [state, setState] = useState<string>(localStorage.getItem(key) ?? '');

	useEffect(() => {
		localStorage.setItem(key, state);
	}, [key, state]);

	return [state, setState] as const;
};

export default useLocalStorage;
