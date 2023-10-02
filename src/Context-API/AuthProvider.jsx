import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  
    const info = {name: 'Humairaa'};
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;