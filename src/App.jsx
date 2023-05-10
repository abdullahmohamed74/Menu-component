import { useState } from 'react';
import Menu from './components/Menu';
import data from './components/data';
import Title from './components/Title';
import Categories from './components/Categories';

const allCategories = data.map((item) => item.category);
const uniqueCategories = ['all', ...new Set(allCategories)];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(uniqueCategories);

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }

    const filteredMenu = data.filter((item) => {
      return item.category === category;
    });

    setMenuItems(filteredMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories
          categories={categories}
          handleCategoryClick={handleCategoryClick}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}
export default App;
