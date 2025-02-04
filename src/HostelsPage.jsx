export default function HostelsPage() {
  const hostels = [
    {
      id: 1,
      name: "Greenwood Hostel",
      location: "Near Main Campus",
      price: "$200/month",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      name: "Sunrise Hostel",
      location: "Downtown",
      price: "$180/month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      name: "Oakwood Hostel",
      location: "East Campus",
      price: "$220/month",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="page">
      <h1>Available Hostels</h1>
      <div className="hostel-list">
        {hostels.map((hostel) => (
          <div key={hostel.id} className="hostel-card">
            <img src={hostel.image} alt={hostel.name} className="hostel-image" />
            <h2>{hostel.name}</h2>
            <p><strong>Location:</strong> {hostel.location}</p>
            <p><strong>Price:</strong> {hostel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}