import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import * as Strings from '../../utils/strings.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from '../../Pages/AboutMe/About';
import { Contact } from '../../Pages/Contact/Contact';
import { Cake } from '../../Pages/Cakes/Cakes';
import { Gallery } from '../../Pages/Gallery/Gallery';
import { Naturopathy } from '../../Pages/Naturopathy/Naturopathy';
import { Training } from '../../Pages/Training/Training';
import { Home } from '../../Pages/Home/Home';
import { Clips } from '../../Pages/Clips/Clips';
import { SocialIcon } from 'react-social-icons';

export function MenuBar() {
	return (
		<>
		<Navbar bg="dark" variant="dark">
			<SocialIcon url={Strings.Facebook} />
			<SocialIcon url={Strings.Instagram} />
			<Nav className="mr-auto">
				<Nav.Link href="/contact">{Strings.Contact}</Nav.Link>
				<Nav.Link href="/cake">{Strings.Cakes}</Nav.Link>
				<Nav.Link href="/clips">{Strings.Clips}</Nav.Link>
				<Nav.Link href="/gallery">{Strings.Gallery}</Nav.Link>
				<Nav.Link href="/naturopathy">{Strings.Naturopathy}</Nav.Link>
				<Nav.Link href="/training">{Strings.Trainings}</Nav.Link>
				<Nav.Link href="/about">{Strings.About}</Nav.Link>
			</Nav>
			<Navbar.Brand href="/home">{Strings.Home}</Navbar.Brand>
		</Navbar>

		<Router>
			<Route exact path="/" render={ () => <Redirect to="/home"/> }/>
			<Route exact path="/home" component={ Home }/>
			<Route exact path="/about" component={ About }/>
			<Route exact path="/training" component={ Training }/>
			<Route exact path="/naturopathy" component={ Naturopathy }/>
			<Route exact path="/gallery" component={ Gallery }/>
			<Route exact path="/clips" component={ Clips }/>
			<Route exact path="/cake" component={ Cake }/>
			<Route exact path="/contact" component={ Contact }/>
			</Router>
		</>
	);
}