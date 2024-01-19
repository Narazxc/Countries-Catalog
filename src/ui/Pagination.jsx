import { useSearchParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // get current page from url
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // calculate number of pages
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    // if we are on the last page, don't move up to another page
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    // modify page param in url
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    // don't move down if page already === 1
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full">
      <div className="fixed bottom-0 right-0 left-0 flex items-center lowercase justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
        <p>
          Showing{" "}
          <span className="font-bold">{(currentPage - 1) * PAGE_SIZE + 1}</span>{" "}
          to{" "}
          <span className="font-bold">
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>{" "}
          of <span className="font-bold">{count}</span> results
        </p>

        <div className="flex gap-3">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`flex items-center ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            <HiChevronLeft /> <span>Previous</span>
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === pageCount}
            className={`flex items-center ${
              currentPage === pageCount ? "cursor-not-allowed" : ""
            }`}
          >
            <span>Next</span> <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
