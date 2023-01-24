import React from "react";

const Bathroom = () => {
  return (
    <div class="container">
      <div class="row md:px-10 mt-5 mb-4">
        <div class="column">
          <div class="row">
            <div class="md:max-w-[58.333%] md:basis-[58.333%] mb-5">
              <h1 class="mb-4">THE BATHROOM</h1>
              <p>
                The BAYC Bathroom will become operational once the presale
                period is over. It contains a canvas accessible only to wallets
                containing at least one ape. Like any good dive bar bathroom,
                this is the place to draw, scrawl, or write expletives. <br />
                <br />
                Each ape-holder will be able to paint a pixel on the bathroom
                wall every fifteen minutes. Think of it as a collaborative art
                experiment for the cryptosphere. A members-only canvas for the
                discerning minds of crypto twitter. <br />
                <br />
                We're pretty sure it's going to be full of dicks.
              </p>
            </div>
            <div class="md:grow-0 md:shrink-0 md:max-w-[33.333%] md:basis-[33.333%] md:ml-[8.3%]">
              <div class="flex flex-wrap">
                <div class="flex flex-wrap">
                  <div class="flex md:pl-[15px] pb-[15px]">
                    <img src="/img/toilet.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="md:mx-6 mb-5" />
    </div>
  );
};

export default Bathroom;
