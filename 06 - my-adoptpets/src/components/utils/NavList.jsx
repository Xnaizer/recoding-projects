import propsTypes from "prop-types";

function NavList({title,link}) {
    return (
        <li>
            <a
            href={link}
            className="text-secondGray font-medium font-Sawa duration-300 ease-in-out hover:text-paleBlue hover:text-slate-700"
            >
            {title}
            </a>
        </li>

        
    )

}

NavList.propTypes = {
    title: propsTypes.string,
    link: propsTypes.string,
}

export default NavList;