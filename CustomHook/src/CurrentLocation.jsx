import useCurrentLocation from './useCurrentLocation'; 

const LocationComponent = () => {
  const { location, getCurrentLocation, error, loading } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      <button onClick={getCurrentLocation}>Get Current Location</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;
