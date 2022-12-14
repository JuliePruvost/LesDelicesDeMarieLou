import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { mainRoute, routeDescriptions } from "./Routes";
// import {ReactComponent as MainNavItemSvg} from './components/MainNavItem.svg';
import styles from './NavigationBar.module.scss';
import { useState } from "react";
import Link from "next/link";
import MainLogo from "components/icons/MainLogo";
import { useRouter } from "next/router";



export default function NavigationBar() {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);

    const onToggleClick = () => {
        setExpanded(expanded ? false : true);
    };

    const onItemClick = () => {
        setExpanded(false);
    };

    const MainNavigationItem = () => {
        const routeDescription = routeDescriptions[0];
        return (
            <Navbar.Brand style={{justifyContent: "center"}}>
                <Link href={routeDescription.path!} passHref>
                    <Nav.Link active={router.pathname === routeDescription.path} className={styles.mainNavItem} onClick={onItemClick}>
                        <div>
                            <MainLogo  />
                        </div>
                    </Nav.Link>
                </Link>
            </Navbar.Brand>
        );
    }

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
                    <Nav.Link active={router.pathname === routeDescription.path} onClick={onItemClick} className={styles.commonNavItem} >
                        {routeDescription.label}
                    </Nav.Link>
                </Link>
            );
        });

    return (
        <Container >
            <Navbar expand="md" expanded={expanded}  >
                <Container  >
                    <MainNavigationItem />
                    <Navbar.Toggle onClick={onToggleClick} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse key='collapseableNavBar' id="responsive-navbar-nav">
                        <Nav className="ml-auto"  >
                            {navigationItems}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}