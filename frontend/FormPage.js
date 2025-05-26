import React, { useState } from 'react';
import axios from 'axios';

function FormPage() {
  const [formData, setFormData] = useState({ productName: '', productCost: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/submissions', formData);
      alert('Product submitted!');
      setFormData({ productName: '', productCost: '' });
    } catch (err) {
      alert('Error submitting product');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Add Product</h2>
      <label>Product Name:
        <input name="productName" value={formData.productName} onChange={handleChange} required />
      </label><br /><br />
      <label>Product Cost:
        <input name="productCost" value={formData.productCost} onChange={handleChange} required />
      </label><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormPage;
