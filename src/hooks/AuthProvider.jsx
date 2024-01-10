import { createContext } from 'react';
import useAuthCheck from './useAuthCheck';
import GlobalLoader from '../components/share/loading/GlobalLoader';


const AuthProvider = ({ children }) => {
  const AuthContext = createContext()
  const authChecked = useAuthCheck()

  return (
    <AuthContext.Provider value={""}>
      {!authChecked ?
        <div className="flex items-center justify-center h-screen">
          <GlobalLoader />
        </div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
