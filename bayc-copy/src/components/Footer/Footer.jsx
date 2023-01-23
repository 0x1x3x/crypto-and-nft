import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer class="w-full">
      <hr class="mx-4" />
      <div class="max-w-[90%] mx-auto px-4 py-[15px]">
        <div class="row">
          <div class="md:max-w-[33.333%] md:basis-[33.333%] mx-auto">
            <div class="text-center md:text-left md:py-[50px] ">
              <span class="italic font-medium text-[20px] md:ml-[50px] ">
                GET ON THE LIST
              </span>
              <br />
              <div class="flex pt-[20px] mx-auto">
                <br />
                <form
                  id="email-submit"
                  method="post"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  class="flex w-[80%] m-auto"
                >
                  <input
                    id="email-address"
                    class="m-0 email-input-text"
                    type="email"
                    placeholder="Email Address"
                    name="EMAIL"
                    value=""
                  />
                  <button
                    name="subscribe"
                    class={style.emailSubmit}
                    type="submit"
                  >
                    →
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="md:max-w-[33.333%] md:basis-[33.333%] m-auto">
            <img
              class="flex m-auto max-w-[100%] max-h-[250px]"
              src="/img/logo-footer.webp"
              width="250"
              alt=""
            />
          </div>
          <div class="md:max-w-[33.333%] md:basis-[33.333%] m-auto">
            <div class="">
              <div class="md:text-right md:pr-[50px]">
                <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
                  <i class="fa fa-youtube-play social-icon"></i>
                </a>
                <a href="https://www.instagram.com/boredapeyachtclub">
                  <i class="fa fa-instagram social-icon pl-5"></i>
                </a>
                <a href="https://discord.gg/3P5K3dzgdB">
                  <i class="fa fa-discord-alt social-icon pl-5"></i>
                </a>
                <a href="https://twitter.com/BoredApeYC">
                  <i class="fa fa-twitter social-icon pl-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="bottom-line"></span>
      </div>
    </footer>
  );
};

export default Footer;
