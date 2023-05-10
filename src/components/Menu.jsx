import MenuItem from './MenuItem';

function Menu({ menuItems }) {
  const renderedMenuItems = menuItems.map((menuItem) => {
    return <MenuItem key={menuItem.id} {...menuItem} />;
  });

  return <div className="section-center">{renderedMenuItems}</div>;
}
export default Menu;
