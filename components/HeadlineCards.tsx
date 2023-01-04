import React from "react";

function HeadlineCars() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">Sunday Morning</p>
          <p className=" px-2">Through 04/01</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">New Cafe</p>
          <p className=" px-2">Added Daily</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">We Deliver Coffees</p>
          <p className=" px-2">Tasty Treats</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
}

export default HeadlineCars;
