import { useState, useEffect } from 'react';

export const useGallery = (items, activeCategory) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width >= 1024) {
        setItemsPerPage(12);
      } else if (width >= 768) {
        setItemsPerPage(9);
      } else if (width >= 640) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(4);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredItems =
    activeCategory === "All Works"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Sync currentPage if totalPages decreases
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
    windowWidth,
    hasItems: currentItems.length > 0,
  };
};
