const handlePreviousPage = (setCurrentPage) => {
  setCurrentPage((previous) => previous - 1);
};

const handleNextPage = (setCurrentPage) => {
  setCurrentPage((previous) => previous + 1);
};

export function PageBtn({ type, currentPage, setCurrentPage }) {
  // Check the type of this button
  if (type === "prev") {
    return (
      <button onClick={() => handlePreviousPage(setCurrentPage)} disabled={currentPage === 1}>
        Previous
      </button>
    );
  } else if (type === "next") {
    return <button onClick={() => handleNextPage(setCurrentPage)}>Next</button>;
  }
  return <button>Wrong Button</button>;
}


