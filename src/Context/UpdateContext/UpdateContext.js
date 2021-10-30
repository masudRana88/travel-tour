import React, { createContext } from 'react';
import useUpdate from '../../Hooks/useUpdate';
export const UpdateFieldContext = createContext();
const UpdateContext = ({ children }) => {
    const upadteFild = useUpdate()
    return (
        <UpdateFieldContext.Provider value={upadteFild}>
            {children}
        </UpdateFieldContext.Provider>
    );
};

export default UpdateContext;