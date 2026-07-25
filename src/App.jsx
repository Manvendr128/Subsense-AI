import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './routes';

/**
 * App — Root application component.
 * Wraps the entire app in AuthProvider for global auth state.
 */
const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
