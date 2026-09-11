import { createContext, useContext, useState } from 'react';

const DEMO_USERS = {
  entrepreneur: { email: 'entrepreneur@udyogsetu.demo', name: 'Rajesh Sharma', role: 'entrepreneur', business: 'Sahyadri Foods Pvt. Ltd.' },
  officer: { email: 'officer@udyogsetu.demo', name: 'Priya Deshmukh', role: 'officer', department: 'Department of Industries' },
  admin: { email: 'admin@udyogsetu.demo', name: 'Admin User', role: 'admin' },
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (password !== 'Demo@123') return false;
    const found = Object.values(DEMO_USERS).find(u => u.email === email);
    if (found) { setUser(found); return true; }
    return false;
  };

  const demoLogin = (role) => { setUser(DEMO_USERS[role]); };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, demoLogin, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
