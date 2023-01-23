import React from "react";

const Team = () => {
  return (
    <div class="container">
      <div class="row px-5 md:px-10 mt-8 mb-4">
        <div id="team" class="column">
          <div class="row">
            <div class="md:grow-0 md:shrink-0 md:max-w-[58.333%] md:basis-[58.333%] mb-5">
              <h1 class="mb-4">THE TEAM</h1>
              <p>
                BAYC was created by four friends who set out to make some dope
                apes, test our skills, and try to build something (ridiculous).{" "}
                <br />
                <br />
                <span class="goal">GARGAMEL.</span> STARCRAFT OBSESSED. EATS
                SMURFS.
                <br />
                <br />
                <span class="goal">GORDON GONER.</span> REFORMED LEVERAGE
                ADDICT.
                <br />
                <br />
                <span class="goal">EMPEROR TOMATO KETCHUP.</span> SPENT ALL
                THEIR MONEY ON FIRST PRESSES AND PET-NAT. <br />
                <br />
                <span class="goal">NO SASS.</span> HERE FOR THE APES. NOT FOR
                THE SASS.
              </p>
            </div>
            <div class="md:grow-0 md:shrink-0 md:max-w-[33.333%] md:basis-[33.333%] md:ml-[8.3%]">
              <div class="flex flex-wrap">
                <div class="flex flex-wrap">
                  <div class="flex max-w-[50%] pr-[7.5px] pb-[15px]">
                    <img src="/img/garga.webp" alt="" />
                  </div>
                  <div class="flex max-w-[50%] pl-[7.5px] pb-[15px]">
                    <img src="/img/gordy.webp" alt="" />
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="flex max-w-[50%] pr-[7.5px] pb-[15px]">
                    <img src="/img/tomato.webp" alt="" />
                  </div>
                  <div class="flex max-w-[50%] pl-[7.5px] pb-[15px]">
                    <img src="/img/sass.webp" alt="" />
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

export default Team;
