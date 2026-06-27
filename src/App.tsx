import Chat from './features/Chat';
import Login from './features/Login';

import useLocalStorage from './hooks/useLocalstorage.ts';

function App() {
	const [nickname, setNickname] = useLocalStorage('nickname');

	if (!nickname) {
		return <Login onLogin={setNickname} />;
	}

	return <Chat nickname={nickname} />;
}

export default App;
