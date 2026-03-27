export default function Header({ setQuery, setSort, setCurrentPage }) {
    return (
        <header>
            <div className="top-header">
                <h1>Movie Explorer</h1>
            </div>

            <div className="bottom-header">
                <input
                    placeholder="Search for a movie..."
                    onChange={(e) => {
                        setCurrentPage(1);
                        setQuery(e.target.value);
                    }}
                />

                <select
                    onChange={(e) => {
                        setCurrentPage(1);
                        setSort(e.target.value);
                    }}
                >
                    <option value="">Sort By</option>
                    <option value="release_date.asc">Release Date (Asc)</option>
                    <option value="release_date.desc">Release Date (Desc)</option>
                    <option value="vote_average.asc">Rating (Asc)</option>
                    <option value="vote_average.desc">Rating (Desc)</option>
                </select>
            </div>
        </header>
    );
}