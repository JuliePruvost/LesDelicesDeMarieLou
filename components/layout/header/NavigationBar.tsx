import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { mainRoute, routeDescriptions } from "./Routes";
// import {ReactComponent as MainNavItemSvg} from './components/MainNavItem.svg';
import styles from './NavigationBar.module.scss';
import { useState } from "react";
import Link from "next/link";
import MainLogo from "components/icons/MainLogo";

const MainNavigationItem = () => {
    /*<Nav.Item>
            <Nav.Link to={routeDescriptions[0].path!} className={styles["main-nav-item"]}>
                <MainNavItemSvg />
            </Nav.Link>
        </Nav.Item>*/
    return (
        <Link href={routeDescriptions[0].path!} passHref>
            <Nav.Link className={styles["main-nav-item"]}>
                <MainLogo width="181.56" height='72.947' />
            </Nav.Link>
        </Link>
    );
}

export default function NavigationBar() {
    const [expanded, setExpanded] = useState(false);

    const onToggleClick = () => {
        setExpanded(expanded ? false : true);
    };

    const onItemClick = () => {
        setExpanded(false);
    };

    const navigationItems = routeDescriptions
        .filter(routeDescription => routeDescription.path && routeDescription !== mainRoute)
        .map((routeDescription, index) => {
            /*return (
                <Nav.Item key={index} className={styles["common-nav-item"]}>
                    <Link  href={routeDescription.path!}>{routeDescription.label}</Link>
                </Nav.Item>
            );*/
            return (
                <Link href={routeDescription.path!} key={index} passHref>
                    <Nav.Link onClick={onItemClick} className={styles["common-nav-item"]}>
                        {routeDescription.label}
                    </Nav.Link>
                </Link>
            );
        });

    return (
        <Container>
            <Navbar expand="sm" expanded={expanded}>
                <Container>
                    <MainNavigationItem />
                    <Navbar.Toggle onClick={onToggleClick} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse key='collapseableNavBar' id="responsive-navbar-nav">
                        <Nav className="me-auto" 
                            activeKey="/"
                            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >
                            {navigationItems}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}