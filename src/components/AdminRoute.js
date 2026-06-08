export function AdminRoute({ children }) {

  const isAuthenticated = Boolean(localStorage.getItem("authToken") || sessionStorage.getItem("authToken"));
  const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user") || "{}");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}