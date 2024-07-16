import React from 'react';
import { useTripContext } from '../context/index';

const Summary = () => {
  const { tripData } = useTripContext();

  if (!tripData) {
    return <p className="text-center mt-10">No trip data available. Please create a trip first.</p>;
  }

  let data;
  try {
    data = JSON.parse(tripData);
  } catch (error) {
    console.error('Error parsing trip data:', error);
    return <p className="text-center mt-10">Error parsing trip data.</p>;
  }

  // Ensure data has the expected structure
  if (!data || !data.hotels || !data.itinerary) {
    return <p className="text-center mt-10">Invalid trip data format.</p>;
  }

  return (
    <div className="p-6 sm:p-10 lg:p-20 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Trip Summary</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {hotel.HotelImageUrl && (
                <img
                  src={hotel.HotelImageUrl}
                  alt={hotel.HotelName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-bold">{hotel.HotelName}</h3>
              <p className="text-gray-700">{hotel.HotelAddress}</p>
              <p className="text-gray-700 font-semibold">Price: {hotel.Price}</p>
              <p className="text-gray-700">Rating: {hotel.Rating}</p>
              <p className="text-gray-700 mt-2">{hotel.Description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
        {data.itinerary.map((day, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-bold mb-4">{`Day ${index + 1}`}</h3>
            <div className="space-y-6">
              {day.Plan.map((place, placeIndex) => (
                <div key={placeIndex} className="bg-white rounded-lg shadow-md p-6">
                  {place.PlaceImageUrl && (
                    <img
                      src={place.PlaceImageUrl}
                      alt={place.PlaceName}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h4 className="text-xl font-bold">{place.PlaceName}</h4>
                  <p className="text-gray-700">{place.PlaceDetails}</p>
                  <p className="text-gray-700 font-semibold">Ticket Price: {place.TicketPricing}</p>
                  <p className="text-gray-700">Estimated Time: {place.Time}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Summary;
