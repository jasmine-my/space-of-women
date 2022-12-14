import { useCallback, useEffect, useState } from 'react';

const useGetScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = useCallback(() => {
        const position = window.scrollY;
        setScrollPosition(position);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollPosition };
};

export default useGetScrollPosition;
