import React from 'react';

function DoctorCard() {
  return (
    <div className="bg-amber-50 p-6 rounded-lg shadow-md w-80">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Doctor"
          className="w-24 h-24 rounded-full mb-4"
        />
        <div className="flex items-center mb-2">
          <span className="text-xl font-bold">4.5</span>
          <span className="text-yellow-400 ml-1">★</span>
        </div>
        <h3 className="text-lg font-bold">Dr. Prerna Narang</h3>
        <p className="text-sm text-gray-600">Male-Female Infertility</p>
        <p className="text-sm text-gray-600">7 years of Experience</p>
        <p className="text-sm text-gray-600">Speaks: English, Hindi, Marathi</p>
        <div className="flex justify-between w-full my-4 text-sm">
          <p>Video Consultation: <strong>₹800</strong></p>
          <p>Chat Consultation: <strong>Free</strong></p>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-2">View Profile</button>
        <button className="bg-green-700 text-white px-4 py-2 rounded-md">Book a consultation</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-amber-100 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">AMRUTAM</h1>
        <nav>
          <a href="#" className="px-4">Home</a>
          <a href="#" className="px-4 font-bold">Find Doctors</a>
          <a href="#" className="px-4">About Us</a>
        </nav>
        <div>
          <button className="border px-4 py-1 rounded-md mr-2">Login</button>
          <button className="bg-green-600 text-white px-4 py-1 rounded-md">Sign-up</button>
        </div>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Find Expert Doctors For An In-Clinic Session Here</h2>
        <div className="flex justify-center mb-4">
          <input type="text" placeholder="Select Location" className="border rounded-md px-3 py-1 mr-2" />
          <input type="text" placeholder="eg. Doctor, specialization, clinic name" className="border rounded-md px-3 py-1" />
        </div>
        
        <div className="flex gap-2 justify-center mb-6">
          <button className="border px-3 py-1 rounded-md">Expertise</button>
          <button className="border px-3 py-1 rounded-md">Gender</button>
          <button className="border px-3 py-1 rounded-md">Fees</button>
          <button className="border px-3 py-1 rounded-md">Languages</button>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md">All filters</button>
        </div>
        
        <div className="flex justify-center gap-2 mb-6">
          <span className="bg-green-200 px-3 py-1 rounded-md">Hair Care ✕</span>
          <span className="bg-green-200 px-3 py-1 rounded-md">Female ✕</span>
          <span className="bg-green-200 px-3 py-1 rounded-md">Rs.0-Rs.500 ✕</span>
          <span className="bg-green-200 px-3 py-1 rounded-md">Hindi ✕</span>
        </div>
        
        <div className="flex justify-center flex-wrap gap-6">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </main>
    </div>
  );
}

export default App;
