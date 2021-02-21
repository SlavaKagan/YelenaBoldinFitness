import React from 'react';
import {
	Menu,
	MenuItem,
	MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export function MenuBar() {
	return (
		<Menu menuButton={<MenuButton>Open menu</MenuButton>}>
			<MenuItem>New File</MenuItem>
			<MenuItem>Save</MenuItem>
			<MenuItem>Close Window</MenuItem>
		</Menu>

	);
}