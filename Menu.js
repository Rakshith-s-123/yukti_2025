import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({ restaurantId }) => {
  const [menu, setMenu] = useState([]);
  const [dishName, setDishName] = useState('');
  const [price, setPrice] = useState('');
  const [dishType, setDishType] = useState('');
  const [dishImage, setDishImage] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001//Restaurant/${restaurantId}`)
      .then(res => setMenu(res.data.menu))
      .catch(err => console.error(err));
  }, [restaurantId]);

  const handleAddItem = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('dishName', dishName);
    formData.append('price', price);
    formData.append('dishType', dishType);
    if (dishImage) formData.append('dishImage', dishImage);

    axios.post(`http://localhost:3001//Restaurant/Menu`, formData)
      .then(res => setMenu(res.data.menu))
      .catch(err => console.error(err));
  };

  const handleDeleteItem = (menuItemId) => {
    axios.delete(`/Restaurant/${restaurantId}/menu/${menuItemId}`)
      .then(res => setMenu(res.data.menu))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Manage Menu</h2>
      <form onSubmit={handleAddItem}>
        <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)} placeholder="Dish Name" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <input type="text" value={dishType} onChange={(e) => setDishType(e.target.value)} placeholder="Dish Type" />
        <input type="file" onChange={(e) => setDishImage(e.target.files[0])} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {menu.map(item => (
          <li key={item._id}>
            {item.dishName} - ${item.price}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
