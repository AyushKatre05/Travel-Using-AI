import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { chatSession } from './AIModal';

const CreateTrip = () => {

  const AI_PROMPT = "Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with {High} budget, Give me a Hotels options list with HotelName, Hotel Adress, Price, Hotel image url , geo coordinates , rating , descriptions and suggest itinerary with placeNmae , Place Details, Place Image Url , Geo Coordinates , ticket Pricing , Time t travel each of the location for 3 days with each day plan woth bext time to visit in JSON format"

  const [formData, setFormData] = useState({
    place: '',
    days: '',
    budget: '',
    companions: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGenerateTrip = async() => {
    const { place, days, budget, companions } = formData;

    if (!place || !days || !budget || !companions) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setIsLoading(true);

    // Add your trip generation logic here
    console.log(formData);

    const FINAL_PROMPT = AI_PROMPT.replace('{location}',formData?.place).replace('{totalDays}',formData?.days).replace('{traveler}',formData?.companions).replace('{High}',formData?.budget)

    console.log(FINAL_PROMPT)

    const result = await chatSession.sendMessage(FINAL_PROMPT)

    console.log(result?.response?.text())

    // Reset form after submission
    setFormData({
      place: '',
      days: '',
      budget: '',
      companions: ''
    });

    setIsLoading(false);
  };

  return (
    <div className='px-4 sm:px-10 md:px-32 lg:px-56 xl:px-72 mt-10'>
      <h2 className='font-bold text-2xl sm:text-3xl text-center'>Tell us where you want to plan your trip</h2>
      <p className='mt-3 text-gray-500 text-lg sm:text-xl text-center'>Provide some details</p>
      <div className='mt-10 flex flex-col gap-6 sm:gap-9'>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <div>
          <h2 className='text-lg sm:text-xl my-2 sm:my-3 font-medium'>What is your destination?</h2>
          <Input
            name='place'
            value={formData.place}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h2 className='text-lg sm:text-xl my-2 sm:my-3 font-medium'>How many days?</h2>
          <Input
            type='number'
            name='days'
            value={formData.days}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h2 className='text-lg sm:text-xl my-2 sm:my-3 font-medium'>What is your budget?</h2>
          <select
            name='budget'
            value={formData.budget}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={handleInputChange}
          >
            <option value=''>Select Budget</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>
        <div>
          <h2 className='text-lg sm:text-xl my-2 sm:my-3 font-medium'>Who are you traveling with?</h2>
          <select
            name='companions'
            value={formData.companions}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={handleInputChange}
          >
            <option value=''>Select Companion</option>
            <option value='me'>Me Only</option>
            <option value='couple'>Couple</option>
            <option value='friends'>Friends</option>
            <option value='family'>Family</option>
          </select>
        </div>
        <button
          className={`bg-blue-500 text-white py-3 px-6 rounded text-lg mt-6 sm:mt-10 ${isLoading ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'}`}
          onClick={handleGenerateTrip}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Trip'}
        </button>
      </div>
    </div>
  );
};

export default CreateTrip;
