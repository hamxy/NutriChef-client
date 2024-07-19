import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the JWT token from cookies
    Cookies.remove("jwt");

    // Redirect to login or home page
    navigate("/auth/login");
  }, [navigate]);
  return <div>Loging out</div>;
};

export default Logout;
