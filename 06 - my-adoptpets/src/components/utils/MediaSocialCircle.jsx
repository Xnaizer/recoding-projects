import propsTypes from 'prop-types';

function MediaSocialCircle({nameClass, colour,link}) {
    return (
        <>
        <a
            href={link}
            target="_blank"
            className={`rounded-full sm:mr-2 md:mr-4 flex justify-center items-center text-slate-500 border border-slate-300 hover:border-primary hover:bg-white ${colour} w-14 h-14 sm:w-16 sm:h-16 `}
            >
            <i className={`${nameClass} text-2xl fill-current lg:text-4xl`}></i>
        </a>
        </>
    );
}

MediaSocialCircle.propTypes = {
    nameClass: propsTypes.string,
    colour: propsTypes.string,
    link: propsTypes.string,
};


export default MediaSocialCircle;