function Categories({ categories, handleCategoryClick }) {
  const renderedCategories = categories.map((category) => {
    return (
      <button
        key={category}
        className="btn"
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
    );
  });

  return <div className="btn-container">{renderedCategories}</div>;
}
export default Categories;
