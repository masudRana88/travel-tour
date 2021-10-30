import React, { createContext, useEffect } from 'react';
import useDestination from '../../Hooks/useDestination';
export const DestinationContext = createContext();
const DestinationProvider = ({ children }) => {
    return (
        <DestinationContext.Provider value={useDestination()}>
            {children}
        </DestinationContext.Provider>
    );
};

export default DestinationProvider;