import { Input } from "@chakra-ui/react";

type InputProps = {
	name: string;
	placeholder: string;
};

export const MainInput = (props: InputProps) => {
	const { name, placeholder } = props;
	return (
		<div>
			<p>{name}</p>
			<Input placeholder={placeholder} />
		</div>
	);
};