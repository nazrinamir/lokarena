import { useAuth } from "./AuthContext.tsx";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return window.location.href = "/";
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRoute;