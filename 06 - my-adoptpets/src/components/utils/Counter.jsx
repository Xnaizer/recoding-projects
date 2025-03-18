// src/components/utils/Counter.jsx
import  { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Counter({ start = 0, end, duration, prefix = '', suffix = '' }) {
    const [count, setCount] = useState(start);
    const startTimeRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const step = (timestamp) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = timestamp - startTimeRef.current;
            const progressRatio = Math.min(progress / duration, 1);
            const currentCount = Math.floor(progressRatio * (end - start) + start);
            setCount(currentCount);
            if (progress < duration) {
                animationRef.current = requestAnimationFrame(step);
            } else {
                setCount(end); // Pastikan mencapai nilai akhir
            }
        };

        animationRef.current = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationRef.current);
    }, [start, end, duration]);

    return <span>{prefix}{count}{suffix}</span>;
}

Counter.propTypes = {
    start: PropTypes.number,
    end: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired, // Durasi dalam milidetik
    prefix: PropTypes.string,
    suffix: PropTypes.string,
};

export default Counter;
