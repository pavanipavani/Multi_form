import React from 'react';

function SubmitData({ data, onPrevious, onSubmit }) {
  const handleSubmit = () => {
    onSubmit(data);
  };

  return (
    <div>
      <h1 className='text-center mt-10 font-bold text-3xl text-green-500'>Details</h1>

      <div className='max-w-300 w-[600px] h-[560px] p-6 bg-white rounded-lg shadow-md mt-[50px] ml-[450px]'>
        
        <div className='border border-black-500 font-bold text-xl text-center ml-20 w-[400px] mb-20 text-blue-500'>
            <p className='border border-gray-500  p-2 rounded-[20px]'> Email: {data.email}</p>
            <p className='border border-gray-500 mt-5 p-2 rounded-[20px]'>Name: {data.name}</p>
            <p className='border border-gray-500 mt-5 p-2 rounded-[20px]'>Todos: {data.todo}</p>
            <p className='border border-gray-500 mt-5 p-2 rounded-[20px]'>Work: {data.work}</p>
            <p className='border border-gray-500 mt-5 p-2 rounded-[20px] '>Company: {data.company}</p>
            <p className='border border-gray-500 mt-5 p-2 rounded-[20px] '> AccountEmail: {data.accountemail}</p>
        </div>
      <div className="flex justify-between mt-4">
          <button onClick={onPrevious} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 px-4 ml-20 rounded"><p> &larr; Back</p></button>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded mr-20">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default SubmitData;


