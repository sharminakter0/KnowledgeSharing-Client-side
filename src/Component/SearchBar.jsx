import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setFilters, setLoading, setResults, setError } from '../redux/features/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchQuery, filters, loading } = useSelector((state) => state.search);
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    
    try {
      // You can replace this with your actual API call
      const response = await fetch(`/api/articles/search?q=${searchQuery}&category=${filters.category}&sortBy=${filters.sortBy}`);
      const data = await response.json();
      
      if (response.ok) {
        dispatch(setResults(data));
      } else {
        dispatch(setError('Failed to fetch results'));
      }
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilters({ [filterType]: value }));
  };

  // Debounce search query updates
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchQuery(localQuery));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [localQuery, dispatch]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search articles..."
            className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="all">All Categories</option>
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="business">Business</option>
            {/* Add more categories based on your application */}
          </select>
          
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
          </select>
          
          <select
            value={filters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;