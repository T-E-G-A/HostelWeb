export default function AboutPage() {
  return (
    <div className="page">
      <h1>About Hostel Finder</h1>
      <p>
        Hostel Finder is a platform designed to help students find the best hostels near their school.
        We provide detailed information about each hostel, including location and pricing.
      </p>
      <div className="media-container">
        <img
          src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg" 
          alt="School Building"
          className="stock-image"
        />
      </div>
    </div>
  );
}