import NavItem from "./NavItem";

const Navbar = (props : any):JSX.Element => (
    <>
        <nav className="NavBar">
            <ul className="navbar-nav">
                { props.children }
            </ul>
        </nav>
    </>
)

export default Navbar;