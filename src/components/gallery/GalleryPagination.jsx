import React from "react";

const GalleryPagination = ({ currentPage, totalPages, onPageChange, windowWidth }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const isMobile = windowWidth < 640;

  return (
    <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-4 mt-8">
      {/* Previous Button */}
      <div
        className={`justify-self-start flex items-center gap-1 transition-all ${
          currentPage === 1
            ? "opacity-30 cursor-not-allowed"
            : "cursor-pointer hover:gap-2"
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        <span className="material-symbols-outlined font-light text-sm">
          arrow_back
        </span>
        <p className="font-light uppercase tracking-widest text-sm sm:block hidden">
          Previous
        </p>
      </div>

      {/* Page Numbers */}
      <div className="flex gap-2 justify-center items-center px-4">
        {isMobile ? (
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 bg-black text-white shadow-lg scale-110">
            {currentPage}
          </button>
        ) : (
          getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="text-gray-400 px-1 select-none">...</span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                    currentPage === page
                      ? "bg-black text-white shadow-lg scale-110"
                      : "cursor-pointer hover:bg-gray-100 text-gray-600 hover:scale-105"
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))
        )}
      </div>

      {/* Next Button */}
      <div
        className={`justify-self-end flex items-center gap-1 transition-all ${
          currentPage === totalPages
            ? "opacity-30 cursor-not-allowed"
            : "cursor-pointer hover:gap-2"
        }`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        <p className="font-light uppercase tracking-widest text-sm sm:block hidden">
          Next
        </p>{" "}
        <span className="material-symbols-outlined font-light text-sm">
          arrow_forward
        </span>
      </div>
    </div>
  );
};

export default GalleryPagination;
