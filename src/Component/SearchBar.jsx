import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  setLoading,
  setResults,
  setError,
} from '../redux/features/searchSlice';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchQuery, loading } = useSelector((state) => state.search);
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!localQuery.trim()) return;

    dispatch(setLoading(true));
    dispatch(setSearchQuery(localQuery));

    try {
      // Replace this API with your real backend endpoint
      const response = await fetch(
        `https://knowledege-project.vercel.app/articles/search?q=${encodeURIComponent(localQuery)}`
      );
      const data = await response.json();

      if (response.ok) {
        dispatch(setResults(data));
      } else {
        dispatch(setError('Failed to fetch results.'));
      }
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Debounce local input updates
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchQuery(localQuery));
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [localQuery, dispatch]);

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
      >
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search articles..."
          className="flex-1 px-4 py-2 focus:outline-none text-gray-700"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 flex items-center gap-2 font-medium transition-all disabled:opacity-50"
        >
          <FaSearch />
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
