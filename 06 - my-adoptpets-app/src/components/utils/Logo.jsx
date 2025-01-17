import doublePawLogo from '../../assets/img/doublepaw.png';

function Logo() {
    return (
        <div className="flex gap-2 items-center hover:text-slate-200">
            <a href="/" className="flex gap-2 items-center duration-300">
                <img
                src={doublePawLogo}
                alt="double-paw"
                className="w-12 duration-300"
                />
                <h1 className="font-Sawa text-md text-paleBlue font-bold hover:text-slate-700">
                AdoptPets
                </h1>
            </a>
        </div>
    );
}

export default Logo;