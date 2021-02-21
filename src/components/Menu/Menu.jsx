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
import logo from "../../assets/YBLogo.png";

export function MenuBar() {
	return (
		<>
		<Navbar bg="dark" variant="dark">
			<SocialIcon url= {Strings.Facebook} />
			<SocialIcon url= {Strings.Instagram} />
			<Nav className="mr-auto">
				<Nav.Link href={Strings.ContactURL}> {Strings.Contact}</Nav.Link>
				<Nav.Link href={Strings.CakeURL}> {Strings.Cakes}</Nav.Link>
				<Nav.Link href={Strings.ClipsURL}> {Strings.Clips}</Nav.Link>
				<Nav.Link href={Strings.GalleryURL}> {Strings.Gallery}</Nav.Link>
				<Nav.Link href={Strings.NaturopathyURL}> {Strings.Naturopathy}</Nav.Link>
				<Nav.Link href={Strings.TrainingURL}> {Strings.Trainings}</Nav.Link>
				<Nav.Link href={Strings.AboutURL}>{Strings.About}</Nav.Link>
			</Nav>
			<Navbar.Brand href="/home">{Strings.Home}</Navbar.Brand>
			<img src={logo} alt="logo3" width="15%" height="10%" />
		</Navbar>

		<Router>
			<Route exact path="/" render={ () => <Redirect to="/home"/> }/>
			<Route exact path="/home" component={ Home }/>
			<Route exact path={Strings.AboutURL} component={ About }/>
			<Route exact path={Strings.TrainingURL} component={ Training }/>
			<Route exact path={Strings.NaturopathyURL} component={ Naturopathy }/>
			<Route exact path={Strings.GalleryURL} component={ Gallery }/>
			<Route exact path={Strings.ClipsURL} component={ Clips }/>
			<Route exact path={Strings.CakeURL} component={ Cake }/>
			<Route exact path={Strings.ContactURL} component={ Contact }/>
			</Router>
		</>
	);
}