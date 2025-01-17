// SponsorHighlight.jsx


import PropTypes from 'prop-types';

function SponsorHighlight({ links }) {
    return (
        <div className="mx-2 py-2 flex-shrink-0 grayscale transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-4 xl:mx-6">
            <img
                src={links}
                alt="Sponsor Logo"
                className="w-24 h-24 object-contain"
                draggable="false"
            />
        </div>
    );
}

SponsorHighlight.propTypes = {
    links: PropTypes.string.isRequired,
};

export default SponsorHighlight;
