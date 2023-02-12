import {
	GridColumnMenuContainer,
	GridFilterMenuItem,
	HideGridColMenuItem,
} from "@mui/x-data-grid";

export const CustomColumnMenu = (props) => {
	const { hideMenu, currentColumn, open } = props;
	return (
		<GridColumnMenuContainer
			hideMenu={hideMenu}
			currentColumn={currentColumn}
			open={open}
		>
			<GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
			<HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
		</GridColumnMenuContainer>
	);
};

export default CustomColumnMenu;
