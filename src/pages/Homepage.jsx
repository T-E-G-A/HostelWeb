export default function HomePage() {
  return (
    <div className="page">
      <h1>Welcome to Hostel Finder</h1>
      <p>Find the best hostels for your stay at school.</p>
      <div className="media-container">
        <img
          src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
          alt="Students Studying"
          className="stock-image"
        />
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/3-DJSCUtXoM?start=72&autoplay=1&mute=1"
          title="Hostel Life"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="stock-video"
        ></iframe>
      </div>
    </div>
  );
}