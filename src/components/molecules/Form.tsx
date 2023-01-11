import React from "react";
import { MainInput } from "../atoms/input";
import { PrimaryButton } from "../atoms/button";

const holder1 = {
	name: "名前",
	placeholder: "名前"
};
const holder2 = {
	name: "投稿",
	placeholder: "投稿"
};
const button1 = {
	children: "watasi",
	disabled: false
};
const style: { [key: string]: string } = {
	border: "solid 1px #ccc",
	borderRadius: "8px",
	padding: "16px 16px",
	textAlign: "left"
};



export const Form = () => {
	return (
		<div style={style}>
			<MainInput name={holder1.name} placeholder={holder1.placeholder} />
			<MainInput name={holder2.name} placeholder={holder2.placeholder} />
			<PrimaryButton disabled={button1.disabled} />
		</div>
	);
};