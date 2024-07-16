import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location : Goa, for 7 Days for Couple with High budget, Give me a Hotels options list with HotelName, Hotel Adress, Price, Hotel image url , geo coordinates , rating , descriptions and suggest itinerary with placeNmae , Place Details, Place Image Url , Geo Coordinates , ticket Pricing , Time t travel each of the location for 3 days with each day plan woth bext time to visit in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "{\"hotels\": [{\"HotelName\": \"The Leela Goa\", \"HotelAddress\": \"Mobor, Cavelossim, Goa 403731, India\", \"Price\": \"$350-$700\", \"HotelImageUrl\": \"https://www.theleela.com/media/images/hotels/goa/hero-banner-desktop.jpg\", \"GeoCoordinates\": \"15.2361° N, 73.9614° E\", \"Rating\": \"4.8\", \"Description\": \"Luxury hotel with private beach access, multiple pools, spa, and fine dining options.\"}, {\"HotelName\": \"Grand Hyatt Goa\", \"HotelAddress\": \"Bambolim, Goa 403202, India\", \"Price\": \"$250-$500\", \"HotelImageUrl\": \"https://www.hyatt.com/en-US/hotel/india/grand-hyatt-goa/goagr\", \"GeoCoordinates\": \"15.4360° N, 73.8855° E\", \"Rating\": \"4.5\", \"Description\": \"Modern resort with stunning views, a variety of restaurants, and a large outdoor pool.\"}, {\"HotelName\": \"W Goa\", \"HotelAddress\": \"Vagator, Bardez, Goa 403509, India\", \"Price\": \"$200-$400\", \"HotelImageUrl\": \"https://www.marriott.com/marriott/hotel-photos/goa-w-goa/goa-w-goa-exterior-0014.jpg\", \"GeoCoordinates\": \"15.5155° N, 73.8100° E\", \"Rating\": \"4.7\", \"Description\": \"Stylish hotel with a vibrant atmosphere, beachfront location, and rooftop bar with panoramic views.\"}, {\"HotelName\": \"The LaLiT Golf & Spa Resort Goa\", \"HotelAddress\": \"Raj Baga, Goa 403721, India\", \"Price\": \"$180-$350\", \"HotelImageUrl\": \"https://www.thelaLIT.com/media/images/hotels/goa/hero-banner-desktop.jpg\", \"GeoCoordinates\": \"15.2687° N, 73.9938° E\", \"Rating\": \"4.6\", \"Description\": \"Relaxing resort with a golf course, multiple pools, spa, and a variety of dining options.\"}, {\"HotelName\": \"The Park Calangute Goa\", \"HotelAddress\": \"Calangute, Goa 403516, India\", \"Price\": \"$150-$300\", \"HotelImageUrl\": \"https://www.theparkhotels.com/media/images/hotels/goa/hero-banner-desktop.jpg\", \"GeoCoordinates\": \"15.5433° N, 73.8441° E\", \"Rating\": \"4.4\", \"Description\": \"Modern hotel in the heart of Calangute, close to the beach, with rooftop pool and bar.\"}], \"itinerary\": [{\"Day\": \"Day 1\", \"Plan\": [{\"PlaceName\": \"Dudhsagar Falls\", \"PlaceDetails\": \"Magnificent waterfall cascading over cliffs, offering stunning views and nature's beauty.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2022/09/20/dudhsagar-falls-goa.jpg\", \"GeoCoordinates\": \"15.1068° N, 74.0594° E\", \"TicketPricing\": \"INR 50-100 per person\", \"Time\": \"9:00 AM - 12:00 PM\"}, {\"PlaceName\": \"Panjim Market\", \"PlaceDetails\": \"Bustling market with a vibrant atmosphere, offering local handicrafts, spices, and souvenirs.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2019/08/21/panjim-market-goa.jpg\", \"GeoCoordinates\": \"15.4990° N, 73.8268° E\", \"TicketPricing\": \"Free\", \"Time\": \"1:00 PM - 3:00 PM\"}, {\"PlaceName\": \"Old Goa\", \"PlaceDetails\": \"Historic site with churches like Se Cathedral and Basilica of Bom Jesus, reflecting Portuguese architecture.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2018/07/19/old-goa.jpg\", \"GeoCoordinates\": \"15.5081° N, 73.8459° E\", \"TicketPricing\": \"INR 10-20 per person\", \"Time\": \"4:00 PM - 6:00 PM\"}]}, {\"Day\": \"Day 2\", \"Plan\": [{\"PlaceName\": \"Palolem Beach\", \"PlaceDetails\": \"Serene beach with clear waters, ideal for swimming, sunbathing, and enjoying water sports.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2022/04/18/palolem-beach.jpg\", \"GeoCoordinates\": \"15.1005° N, 73.9527° E\", \"TicketPricing\": \"Free\", \"Time\": \"9:00 AM - 12:00 PM\"}, {\"PlaceName\": \"Divar Island\", \"PlaceDetails\": \"Peaceful island with traditional villages, temples, and scenic landscapes, accessible by ferry.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2022/07/27/divar-island.jpg\", \"GeoCoordinates\": \"15.5201° N, 73.8591° E\", \"TicketPricing\": \"INR 10-20 per person\", \"Time\": \"1:00 PM - 3:00 PM\"}, {\"PlaceName\": \"Sunset Cruise on the Mandovi River\", \"PlaceDetails\": \"Romantic experience cruising along the river with panoramic views of the city and stunning sunset.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2017/11/16/sunset-cruise-goa.jpg\", \"GeoCoordinates\": \"15.5128° N, 73.8245° E\", \"TicketPricing\": \"INR 500-1000 per person\", \"Time\": \"4:00 PM - 6:00 PM\"}]}, {\"Day\": \"Day 3\", \"Plan\": [{\"PlaceName\": \"Baga Beach\", \"PlaceDetails\": \"Popular beach with vibrant atmosphere, water sports, beach shacks, and nightlife.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2021/12/15/baga-beach-goa.jpg\", \"GeoCoordinates\": \"15.5612° N, 73.8338° E\", \"TicketPricing\": \"Free\", \"Time\": \"9:00 AM - 12:00 PM\"}, {\"PlaceName\": \"Spice Plantation\", \"PlaceDetails\": \"Experience the aromas and beauty of spice farms, learn about cultivation, and enjoy a traditional Goan lunch.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2022/10/27/spice-plantation-goa.jpg\", \"GeoCoordinates\": \"15.4984° N, 73.8825° E\", \"TicketPricing\": \"INR 200-300 per person\", \"Time\": \"1:00 PM - 3:00 PM\"}, {\"PlaceName\": \"Calangute Beach\", \"PlaceDetails\": \"Lively beach with restaurants, shops, and water sports, perfect for people watching and enjoying the beach vibe.\", \"PlaceImageUrl\": \"https://www.holidify.com/images/cmsuploads/blog/2021/09/29/calangute-beach-goa.jpg\", \"GeoCoordinates\": \"15.5433° N, 73.8441° E\", \"TicketPricing\": \"Free\", \"Time\": \"4:00 PM - 6:00 PM\"}]}]}\n"},
        ],
      },
    ],
  });

