import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";

// creata the context
export const AppContext = createContext();

// create a provider component
export const AppProvider = ({ children }) => {
  const [apiUrl, setApiUrl] = useState("https://api.tojoglobal.com");
  const [categories, setCategories] = useState([]);
  const [timeData, setTimeData] = useState("");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500);
  const [isLargeMobileView, setIsLargeMobileView] = useState(
    window.innerWidth <= 769
  );
  const [isTabView, setIsTabView] = useState(window.innerWidth <= 992);

  // Fetch categories data
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await axios.get(
          `${apiUrl}/api/admin/newsCategory`
        );
        if (categoryResponse.data.Status) {
          setCategories(categoryResponse.data.Result);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, [apiUrl]);

  // Get the category name by matching category_id
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.ID === categoryId);
    return category ? category.name : "Unknown Category";
  };

  //layout based on mobile screen size
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //layout based on large mobile screen size
  useEffect(() => {
    const handleResize = () => setIsLargeMobileView(window.innerWidth <= 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update layout based on screen size
  useEffect(() => {
    const handleResize = () => setIsTabView(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const valueProvider = {
    apiUrl,
    setTimeData,
    timeData,
    getCategoryName,
    isMobileView,
    isLargeMobileView,
    isTabView,
  };

  return (
    <AppContext.Provider value={valueProvider}>{children}</AppContext.Provider>
  );
};

// Define prop types for AppProvider
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
