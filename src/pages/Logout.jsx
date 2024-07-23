import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get("http://localhost:3000/auth/logout", {
          withCredentials: true, // Ensure cookies are sent
        });

        // Redirect to login or home page
        navigate("/auth/login");
      } catch (error) {
        console.error("Error logging out", error);
        // Handle error if needed
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};
export default Logout;
