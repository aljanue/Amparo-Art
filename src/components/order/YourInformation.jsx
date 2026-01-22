import React from "react";

function YourInformation() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-2">
        <label className="text-sm uppercase" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Eleanor Rigby"
          className="min-w-70 border-b border-black/20 p-2 font-light"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <label className="text-sm uppercase" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="e.g. eleanor@example.com"
          className="min-w-70 border-b border-black/20 p-2 font-light"
        />
      </div>
    </>
  );
}

export default YourInformation;
