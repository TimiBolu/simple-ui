import { FC } from "react";

type FlexDirection = 
	| "row" 
	| "row-reverse" 
	| "column"
	| "column-reverse";

type FlexWrap =
	| "nowrap"
	| "wrap"
	| "wrap-reverse";

type FlexFlow = [FlexDirection, FlexWrap];

type JustifyContent = 
	| "flex-start"
	| "start"
	| "flex-end"
	| "end"
	| "center"
	| "left"
	| "right"
	| "safe"
	| "unsafe"
	| "space-between"
	| "space-around"
	| "space-evenly";

type FlexBasis = 
	| "auto" 
	| 0 
	| "none";

type AlignItems = 
	| "flex-start"
	| "self-start"
	| "start"
	| "flex-end"
	| "self-end"
	| "end"
	| "center"
	| "stretch"
	| "baseline"
	| "safe"
	| "unsafe"
	| "first baseline"
	| "last baseline";

type AlignContent = 
	| "flex-start"
	| "flex-end"
	| "stretch"
	| "start"
	| "end"
	| "baseline"
	| "first baseline"
	| "last baseline"
	| "center"
	| "stretch"
	| "safe"
	| "unsafe"
	| "space-between"
	| "space-around"
	| "space-evenly";

type AlignSelf =
	| "auto"
	| "flex-start"
	| "flex-end"
	| "center"
	| "baseline"
	| "stretch";

type FlexProps = {
	flex: number | [number, number, FlexBasis] | string;
	dir: FlexDirection;
	direction: FlexDirection;
	justify: JustifyContent;
	items: AlignItems;
	self: AlignSelf;
	content: AlignContent;
	gap: string;
	rowGap: string;
	columnGap: string;
	flow: FlexFlow | string;
	order: number; 
	wrap: FlexWrap;
	grow: number;
	shrink: number;
	basis: FlexBasis;
};
const Flex: FC<Partial<FlexProps>> = () => {
	const baseClassName = "flex";

	return (
		<div className={`${baseClassName}`}>

		</div>
  );
};

export default Flex;
