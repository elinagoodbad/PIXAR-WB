import React, { useState } from "react";
import "./FilterProduct.css";

const FilterProduct = ({ onFilterChange, onResetFilters }) => {
  const [genre, setGenre] = useState("all");
  const [rating, setRating] = useState({ min: 1, max: 10 });
  const [releaseOrder, setReleaseOrder] = useState("newest");
  const [year, setYear] = useState({
    min: 1960,
    max: 2024,
  });

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setRating((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleReleaseOrderChange = (e) => {
    setReleaseOrder(e.target.value);
  };

  const handleProductionYearChange = (e) => {
    const { name, value } = e.target;
    setYear((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleApplyFilters = () => {
    onFilterChange({ genre, rating, releaseOrder, year });
  };

  const handleResetFilters = () => {
    setGenre("all");
    setRating({ min: 1, max: 10 });
    setReleaseOrder("newest");
    setYear({ min: 1960, max: 2024 });
    onResetFilters();
  };

  return (
    <div className="filter-container">
      <div className="filter-item">
        <label>Жанр:</label>
        <select value={genre} onChange={handleGenreChange}>
          <option value="all">Все</option>
          <option value="action">Боевик</option>
          <option value="comedy">Комедия</option>
          <option value="drama">Драма</option>
          <option value="thriller">Триллер</option>
          <option value="short">Короткометражный</option>
          <option value="crime">Криминал</option>
          <option value="fantasy">Фантастика</option>
          <option value="family">Семейный</option>
          <option value="documentary">Документальный</option>
          <option value="western">Вестерн</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Рейтинг:</label>
        <div className="filter-range">
          <input
            type="number"
            name="min"
            value={rating.min}
            onChange={handleRatingChange}
            min="1"
            max="10"
          />
          <span>до</span>
          <input
            type="number"
            name="max"
            value={rating.max}
            onChange={handleRatingChange}
            min="1"
            max="10"
          />
        </div>
      </div>

      <div className="filter-item">
        <label>Порядок выпуска:</label>
        <select value={releaseOrder} onChange={handleReleaseOrderChange}>
          <option value="newest">Сначала новые</option>
          <option value="oldest">Сначала старые</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Год производства:</label>
        <div className="filter-range">
          <input
            type="number"
            name="min"
            value={year.min}
            onChange={handleProductionYearChange}
            min="1960"
            max="2024"
          />
          <span>до</span>
          <input
            type="number"
            name="max"
            value={year.max}
            onChange={handleProductionYearChange}
            min="1960"
            max="2024"
          />
        </div>
      </div>

      <div className="filter-actions">
        <button onClick={handleApplyFilters}>Применить</button>
        <button onClick={handleResetFilters}>Сбросить</button>
      </div>
    </div>
  );
};

export default FilterProduct;
