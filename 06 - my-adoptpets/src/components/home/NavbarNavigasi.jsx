import NavList from "../utils/NavList";

function NavbarNavigasi() {
  return (
    <ul className="hidden lg:flex gap-10 xl:gap-12 lg:mt-[2px]">
        
      <NavList title="Home" link="#sec-home" />
      <NavList title="Community" link="#sec-community" />
      <NavList title="Choose Pets" link="#sec-choosepets" />
      <NavList title="FAQ" link="#sec-faq" />
      <NavList title="Support Us!" link="#sec-support" />
      
    </ul>
  );
}

export default NavbarNavigasi;
