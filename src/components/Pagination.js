export default function Pagination({ currentPage, totalPages, setCurrentPage, mounted }) {

    if (!mounted) return null;

    return (
        <footer>
            <button
                onClick={() => setCurrentPage(prev => prev - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <span>Page {currentPage} of {totalPages}</span>

            <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={currentPage === totalPages || currentPage === 500}
            >
                Next
            </button>
        </footer>
    );
}