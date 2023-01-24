import React from "react";

const Specs = () => {
  return (
    <div class="container">
      <div class="row md:px-10 mt-5 mb-4">
        <div class="column">
          <div class="row">
            <div class="md:grow-0 md:shrink-0 md:max-w-[58.333%] md:basis-[58.333%] mb-5">
              <h1 class="mb-4">THE SPECS</h1>
              <p>
                Each Bored Ape is unique and programmatically generated from
                over 170 possible traits, including expression, headwear,
                clothing, and more. All apes are dope, but some are rarer than
                others.
                <br />
                <br />
                The apes are stored as ERC-721 tokens on the Ethereum blockchain
                and hosted on IPFS. (See Record and Proof.) Purchasing an ape
                costs 0.08 ETH.
                <br />
                <br />
                To access members-only areas such as THE BATHROOM, Apeholders
                will need to be signed into their Metamask Wallet.
              </p>
            </div>
            <div class="md:grow-0 md:shrink-0 md:max-w-[33.333%] md:basis-[58.333%] md:ml-[8.3%]">
              <div class="flex flex-wrap">
                <div class="flex flex-wrap">
                  <div class="flex md:pl-[15px] pb-[15px]">
                    <img src="/img/gif-preview.webp" alt="" />
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

export default Specs;
