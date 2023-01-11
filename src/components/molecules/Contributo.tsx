import { initialStateProps } from "../../types/initialStateProps";

export const Contributor = (props: initialStateProps) => {
	const { name, article } = props;

	const style: { [key: string]: string } = {
		border: "solid 1px #ccc",
		borderRadius: "8px",
		padding: "16px 16px",
		textAlign: "left",
		margin: "8px"
	};

	return (
		<div style={style}>
			<dl>
				<dt>名前</dt>
				<dd>{name}</dd>
				<dt>投稿</dt>
				<dd>{article}</dd>
			</dl>
		</div>
	);
};
