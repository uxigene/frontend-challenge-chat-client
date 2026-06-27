import type { FC } from 'react';
import Form from '../../components/Form';

type TypeLoginProps = {
	onLogin: (text: string) => void;
};

const Login: FC<TypeLoginProps> = ({ onLogin }: TypeLoginProps) => {
	return (
		<div className="max-w-screen-md size-full sm:px-6 sm:py-2 p-2 items-center justify-center flex mx-auto">
			<Form onSubmit={onLogin} inputPlaceholder="Enter your nickname..." />
		</div>
	);
};

export default Login;
