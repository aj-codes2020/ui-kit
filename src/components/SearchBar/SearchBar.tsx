import React, { useState, useEffect, ChangeEvent } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  suggestions: string[];
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  suggestions = [],
  onSearch,
  placeholder = 'Search...',
  className = '',
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  useEffect(() => {
    if (query) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, suggestions]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setActiveSuggestion(0);
  };

  const handleClick = (suggestion: string) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const selectedSuggestion = filteredSuggestions[activeSuggestion] ?? '';
      setQuery(selectedSuggestion);
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      onSearch(selectedSuggestion);
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestion > 0) {
        setActiveSuggestion(activeSuggestion - 1);
      }
    } else if (e.key === 'ArrowDown') {
      if (activeSuggestion < filteredSuggestions.length - 1) {
        setActiveSuggestion(activeSuggestion + 1);
      }
    }
  };

  return (
    <div className={`search-bar ${className}`}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="search-input"
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`suggestion ${index === activeSuggestion ? 'active' : ''}`}
              onClick={() => handleClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
