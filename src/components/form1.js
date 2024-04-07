// import React, { useState } from 'react';


// function StepOne({ data, onNext }) {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');

//   const handleNext = () => {
//     onNext({ ...data, email, name });
//   };

//   return (
//     <div className='max-w-300 w-[600px] h-[500px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[450px]'>
//       <h2 className="text-xl font-semibold mb-10">Amie</h2>
//       <div className="mb-4">
//         <h3 className="text-lg mt-10 mb-3">What's your email?
//             <img src="resources/lovesymble.png" alt="images" className="w-3 h-3 inline-block mb-1 ml-1" />
//             <div className="text-lg mt-[-29px] ml-[170px]">(only Gmail for now) *</div>
//         </h3>
        
//         <p className="  text-sm text-gray-600 mb-5 flex justify-between">Tip: use your personal email so you never lose access to Amie. You can add work emails as sub-accounts</p>
//         <input
//           type="email"
//           placeholder="name@gmail.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border border-gray rounded-[10px] py-2 px-3 block w-[330px] "
//         />
//       </div>
//       <div className="mb-4">
//         <h3 className="text-lg mb-4">What's your first name
        
//             <img src="resources/baloon.jpeg" alt="images" className="w-5 h-5 inline-block mb-1" />
//         </h3>
//         <p className="text-sm mb-4">We also love nicknames</p>
//         <input
//           type="text"
//           placeholder="First name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border border-gray rounded-[10px] py-2 px-3 block w-[330px]"
//         />
//       </div>
//       <div className="flex justify-between">
//         <button onClick={handleNext} disabled={!email || !name} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px]"> <p> Continue&rarr; </p></button>
//       </div>
//     </div>
//   );
// }

// export default StepOne;


import React, { useState } from 'react';

function StepOne({ data, onNext }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleNext = () => {
    onNext({ ...data, email, name });
  };

  return (
    <div className='max-w-300 w-[600px] h-[500px] p-6 bg-white rounded-lg shadow-md mt-[100px] ml-[450px]'>
      <h2 className="text-xl font-semibold mb-10">Amie</h2>
      <div className="mb-4">
        <h3 className="text-lg mt-10 mb-3">What's your email?
            <img src="resources/lovesymble.png" alt="images" className="w-3 h-3 inline-block mb-1 ml-1" />
            <div className="text-lg mt-[-29px] ml-[170px]">(only Gmail for now) *</div>
        </h3>
        
        <p className="  text-sm text-gray-600 mb-5 flex justify-between">Tip: use your personal email so you never lose access to Amie. You can add work emails as sub-accounts</p>
        <input
          type="email"
          placeholder="name@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray rounded-[10px] py-2 px-3 block w-[330px] "
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-4">What's your first name
        
            <img src="resources/baloon.jpeg" alt="images" className="w-5 h-5 inline-block mb-1" />
        </h3>
        <p className="text-sm mb-4">We also love nicknames</p>
        <input
          type="text"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray rounded-[10px] py-2 px-3 block w-[330px]"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={handleNext} disabled={!email || !name} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px]"> <p> Continue&rarr; </p></button>
      </div>
    </div>
  );
}

export default StepOne;
