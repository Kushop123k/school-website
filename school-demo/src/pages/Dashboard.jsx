import React, { useContext } from 'react';
import { SchoolContext } from '../context/SchoolContext';

export default function Dashboard() {
  const {
    aboutText,
    setAboutText,
    imageUrl,
    setImageUrl
  } = useContext(SchoolContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImageUrl(imgUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('School info saved (in memory)');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Upload Photo</label>
          <input type="file" onChange={handleImageChange} />
        </div>

        <div>
          <label className="block mb-1 font-medium">About School</label>
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded"
            placeholder="Enter about school..."
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
