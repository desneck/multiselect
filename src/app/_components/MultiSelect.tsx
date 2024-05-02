"use client";

import axios from "axios";
import { useState, useEffect, useRef } from "react";

interface Item {
  id: number;
  name: string;
  image: string;
  episode: string[];
}

const MultiSelect: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Map<number, Item>>(new Map());
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const wrapperRef = useRef(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (searchQuery.length > 0) {
        setIsLoading(true);
        setError('');
        try {
          const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchQuery)}`);
          setItems(data.results);
        } catch (err) {
          setError('No characters found with that name');
          setItems([]);  
        } finally {
          setIsLoading(false);
        }
      } else {
        setItems([]);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchCharacters();
    }, 300); 

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listeners for both mousedown and touchstart
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      // Remove event listeners when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleSelectItem = (id: number, item: Item) => {
    setSelectedItems(prev => {
      const newSelectedItems = new Map(prev);
      if (newSelectedItems.has(id)) {
        newSelectedItems.delete(id);
      } else {
        newSelectedItems.set(id, item);
      }
      return newSelectedItems;
    });
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <div className="relative p-2 bg-white shadow-md rounded-2xl w-full flex justify-between items-center border" ref={wrapperRef}>
      <div className="flex items-center space-x-2 w-full">
      {Array.from(selectedItems.values()).map(item => (
          <div key={item.id} className="bg-[#e2e8f0] rounded-lg px-2 py-1 text-sm text-[#334155] flex items-center justify-center">
            {item.name}
            <button onClick={() => handleSelectItem(item.id, item)} className="text-[#f8fafc] ml-2 bg-[#94a3b8] rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>            </button>
          </div>
        ))}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="input outline-none flex-1"
          placeholder="Search..."
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 rounded-2xl bg-white z-10 overflow-auto shadow-lg mt-1 max-h-60 text-[#475569] border-[#475569] border">
          {isLoading ? (
            <div className="text-center p-2">Loading...</div>
          ) : error ? (
            <div className="text-red-500 text-center p-2">{error}</div>
          ) : filteredItems.length > 0 ? filteredItems.map(item => (
            <div key={item.id} className="flex items-center p-2 cursor-pointer hover:bg-gray-100 border-b" onClick={() => handleSelectItem(item.id, item)}>
              <input type="checkbox" checked={selectedItems.has(item.id)} readOnly className="checkbox checkbox-primary mr-2"/>

              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md mr-2"/>
              <div className="flex flex-col">
                <span>{highlightText(item.name, searchQuery)}</span>
                <span className="text-xs text-gray-600">{item.episode.length} Episodes</span>
              </div>
            </div>
          )) : (
            <div className="text-center p-2">No characters found</div>
          )}
        </div>
      )}

    </div>
  );
};

export default MultiSelect;
