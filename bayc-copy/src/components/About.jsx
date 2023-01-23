import React from "react";

const About = () => {
  return (
    <div class="container">
      <div class="row px-5 md:px-10 mt-8 mb-4">
        <div class="column">
          <div class="row">
            <div class="md:grow-0 md:shrink-0 md:max-w-[58.333%] md:basis-[58.333%] mb-5">
              <h1 class="mb-4">
                WELCOME TO THE
                <br />
                BORED APE YACHT CLUB
              </h1>
              <p>
                BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                collectibles living on the Ethereum blockchain. Your Bored Ape
                doubles as your Yacht Club membership card, and grants access to
                members-only benefits, the first of which is access to THE
                BATHROOM, a collaborative graffiti board. Future areas and perks
                can be unlocked by the community through roadmap activation.
              </p>
            </div>
            <div class="md:grow-0 md:shrink-0 md:max-w-[33.333%] md:basis-[33.333%] md:ml-[8.3%]">
              <div class="flex flex-wrap">
                <div class="flex flex-wrap">
                  <div class="flex max-w-[50%] pr-[7.5px] pb-[15px]">
                    <img src="/img/1-1.webp" alt="" />
                  </div>
                  <div class="flex max-w-[50%] pl-[7.5px] pb-[15px]">
                    <img src="/img/1-2.webp" alt="" />
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="flex max-w-[50%] pr-[7.5px] pb-[15px]">
                    <img src="/img/1-3.webp" alt="" />
                  </div>
                  <div class="flex max-w-[50%] pl-[7.5px] pb-[15px]">
                    <img src="/img/1-4.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
