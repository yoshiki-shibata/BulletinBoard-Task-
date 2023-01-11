import React, { memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children?: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
};

export const PrimaryButton = (props: Props) => {
	const { children, onClick } = props;
	return (
		<Button
			bg="teal.400"
			color="black"
			_hover={{ opacity: 0.8 }}
			// disabled={disabled || loading}
			// isLoading={loading}
			onClick={onClick}>
			{children}
		</Button>
	);
};