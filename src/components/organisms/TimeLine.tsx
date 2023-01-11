import { initialStateProps } from "../../types/initialStateProps";
import { Contributor } from "../molecules/Contributo";
import { useState } from "react";

export const TimeLine = () => {


	const initialState = [
		{
			id: 0,
			name: "yoshiki",
			article: "yahoooo"
		},
		{
			id: 1,
			name: "yoshiki",
			article: "yahoooo"
		},
		{
			id: 2,
			name: "yoshiki",
			article: "yahoooo"
		}
	];

	const [contributorDatas, setContributorDatas] = useState<
		Array<initialStateProps>
	>([]);

	const onClickFetchUser = () => setContributorDatas(initialState);

	return (
		<>
			<button onClick={onClickFetchUser}>データ取得</button>
			<div>
				{contributorDatas.map((contributorData) => (
					<Contributor
						key={contributorData.id}
						name={contributorData.name}
						article={contributorData.article}
					/>
				))}
			</div>
		</>
	);
};
