import React from 'react';
import PropTypes from 'prop-types';

const GlobalBreadcrumbs = ({ categories, style }) => {
  return (
    <nav className={`${style}`}>
      {categories.map((category, index) => (
        <span key={index}>
          <a href={category.link} className="hover:underline">
            {category.name}
          </a>
          {index < categories.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

// PropTypes for validation
GlobalBreadcrumbs.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GlobalBreadcrumbs;
