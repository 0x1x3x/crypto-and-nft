import React from "react";

const Mintbanner = () => {
  return (
    <div class="container">
      <div class="row md:px-10 mt-4 md:mb-5">
        <div id="buy-an-ape" class="column">
          <div class="mb-5">
            <div class="row m-auto p-4 bg-[#bfc500] md:h-28">
              <div class="flex md:basis-[25%] md:max-w-[25%] m-auto">
                <h3 class="text-stone-900">BUY AN APE</h3>
              </div>
              <div class="flex md:basis-[33.333%] md:max-w-[33.333%] m-auto">
                <p class="text-stone-900">
                  The initial sale has sold out. To get your Bored Ape, check
                  out the collection on OpenSea.
                </p>
              </div>
              <div class="flex mt-5 md:basis-[15%] md:max-w-[15%] md:my-auto mx-auto">
                <a href="https://opensea.io/collection/boredapeyachtclub">
                  <button class="mint-button" type="button">
                    BUY AN APE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="md:mx-6 mb-5"></hr>
    </div>
  );
};

export default Mintbanner;
