import React from "react";

function SummaryCard() {
  return (
    <div className="w-full lg:max-w-100 max-w-full bg-white pt-10 rounded-lg shadow-md border-t-4 border-primary flex flex-col gap-8">
      <div className="px-8 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl italic">Commission Request</h1>
          <p className="font-light">Review your preferences before sending.</p>
        </div>
        <div className="flex flex-col gap-4 border-y border-gray-300 py-8">
          <div className="flex justify-between items-center">
            <span className="font-light">Name</span>
            <span>Eleanor Kenway</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-light">Email</span>
            <span>eleanor.kenway@example.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-light">Selected Medium</span>
            <span>Oil Painting</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-light">Size Preference</span>
            <span>Medium (12" x 16")</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-light">Notes</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              eos quia perferendis neque, sint excepturi assumenda magnam
              eveniet eaque sapiente impedit, veritatis temporibus vel nisi cum
              illo ratione! Modi, nisi? Officiis, quos! Minus tempore,
              exercitationem aperiam molestias tempora ratione animi recusandae
              consectetur quaerat maiores placeat alias a possimus officiis vero
              facilis cumque omnis earum! Ipsa nostrum ullam cumque voluptates
              magnam! Architecto, eaque sunt quod iusto iste deserunt commodi
              maxime quis ab impedit tenetur fuga exercitationem accusantium.
              Amet mollitia facilis quod incidunt et, accusantium exercitationem
              nisi qui nemo error ullam deleniti.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <button className="cursor-pointer text-white bg-black border border-black rounded-sm px-8 py-3 transition-all ease-in-out duration-300 hover:bg-white hover:text-black hover:shadow-lg ">
            Request Free Quote
          </button>
          <p className="font-light text-center text-sm">
            No payment required today. An artist will review your request and
            contact you within 24 hours.
          </p>
        </div>
      </div>
      <div className="w-full p-4 bg-background-light flex items-center justify-center text-center text-sm font-light rounded-md uppercase gap-4">
        <div class="flex flex-col items-center gap-1 text-gray-600">
          <span class="material-symbols-outlined text-xl">verified_user</span>
          <span class="text-[10px] uppercase tracking-wider font-bold">
            Secure
          </span>
        </div>
        <div class="h-8 w-px bg-gray-400"></div>
        <div class="flex flex-col items-center gap-1 text-gray-600">
          <span class="material-symbols-outlined text-xl">thumb_up</span>
          <span class="text-[10px] uppercase tracking-wider font-bold">
            Guarantee
          </span>
        </div>
        <div class="h-8 w-px bg-gray-400"></div>
        <div class="flex flex-col items-center gap-1 text-gray-600">
          <span class="material-symbols-outlined text-xl">support_agent</span>
          <span class="text-[10px] uppercase tracking-wider font-bold">
            Support
          </span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
