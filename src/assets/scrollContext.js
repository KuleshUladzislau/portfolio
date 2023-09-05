
import React, { createContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState();

    return (
        <ScrollContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </ScrollContext.Provider>
    );
};