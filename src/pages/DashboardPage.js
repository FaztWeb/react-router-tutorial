import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", {
      // replace: true,
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="welcome">Say Welcome</Link>

      <Outlet />

      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
