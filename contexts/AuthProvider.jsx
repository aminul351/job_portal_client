import React from 'react';

const AuthProvider = ({ children }) => {
    return (
        <div>
            <AuthProvider>
                {children}
            </AuthProvider>
        </div>
    );
};

export default AuthProvider;