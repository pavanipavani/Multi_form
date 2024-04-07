import React from 'react';

function StepTwo({ data, onPrevious, onNext }) {

  const handleNext = () => {
    onNext({ ...data });
  };

  return (
    <div className='max-w-300 w-[600px] h-[500px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[450px]'>
      <h2 className="text-xl font-semibold mb-10">Amie</h2>
      <div>
        <div className='text-red-500 text-lg'>We've started rolling out Amie!</div>
        <img src='resources/smile.jpeg' alt='images' className='w-4 h-4 mt-[-20px] ml-[260px]'/>
      </div>
      <div className='text-2xl font-bold mb-10 pb-10 pt-5'> invites are sent in weekly batches so we can ship based on customer feedback and keep the app stable</div>
      <div className="flex justify-between">
        <button onClick={onPrevious} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"><p> &larr; Back</p></button>
        <button onClick={handleNext} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px] bg-black"><p> Let's gooo &rarr;</p></button>
      </div>
    </div>
  );
}

export default StepTwo;
