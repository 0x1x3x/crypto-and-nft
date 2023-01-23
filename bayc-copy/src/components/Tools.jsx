import React from "react";

const Tools = () => {
  return (
    <div class="container">
      <div class="row px-5 md:px-10 mt-8 mb-4">
        <div class="column">
          <div class="row">
            <div class="md:grow-0 md:shrink-0 md:max-w-[66.666%] md:basis-[66.666%] mb-5">
              <h1 class="mb-4">COMMUNITY TOOLS</h1>
              <p>
                Here are some helpful tools created by the Bored Ape Yacht Club
                community. Please note that these are unofficial in nature.
                Every assignment of an ape's overall value or rarity is
                inherently subjective.
              </p>
            </div>
            <div class="md:grow-0 md:shrink-0 md:max-w-[33.333%] md:basis-[33.333%] m-auto">
              <div class="row m-auto">
                <div class="mb-3 mx-auto w-full md:basis-[60%] md:max-w-[60%]">
                  <a href="https://nftexp.io/explore/bored-ape-yacht-club">
                    <button class="com-button w-full" type="button">
                      NFTEXP.IO
                    </button>
                  </a>
                </div>
                <div class="mx-auto w-full md:basis-[60%] md:max-w-[60%]">
                  <a href="https://opensea.io/collection/boredapeyachtclub">
                    <button class="com-button w-full" type="button">
                      RARITY.TOOLS
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="md:mx-6 mb-5"></hr>
    </div>
  );
};

export default Tools;
