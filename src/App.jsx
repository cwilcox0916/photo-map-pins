import React, { useState, useEffect } from 'react';

function App() {
  const [pins, setPins] = useState([]);
  const [selectedPin, setSelectedPin] = useState(null);

  // Load pins from localStorage on component mount
  useEffect(() => {
    const savedPins = localStorage.getItem('mapPins');
    if (savedPins) {
      setPins(JSON.parse(savedPins));
    }
  }, []);

  // Save pins to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('mapPins', JSON.stringify(pins));
  }, [pins]);

  const handleAddPin = (latlng) => {
    const newPin = {
      id: Date.now(),
      lat: latlng.lat,
      lng: latlng.lng,
      photos: []
    };
    setPins([...pins, newPin]);
    setSelectedPin(newPin);
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Photo Map Pins</h1>
      </header>
      <main className="flex-1">
        Map component will go here
      </main>
    </div>
  );
}

export default App;