import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import style from "./Header.module.scss";

function Header() {
  // smooth scroll
  const anchors = document.querySelectorAll('a[href*="#"');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockId = anchor.getAttribute("href").substring(1);
      document.getElementById(blockId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
  // smooth scrolll
  const [nav, setNav] = useState(false);
  return (
    <header class="container">
      <nav class="flex justify-between content-center md:px-3">
        <a href="/">
          <img width={200} src="/img/logo.webp" alt="" />
        </a>
        <div onClick={() => setNav(!nav)} class={style.mobileBtn}>
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
        <div class={nav ? [style.menu, style.active].join(" ") : [style.menu]}>
          <a id="nav-link" title="BUY AN APE" href="#buy-an-ape" class="pl-4">
            BUY AN APE
          </a>
          <a id="nav-link" title="ROADMAP" href="#roadmap" class="pl-4">
            ROADMAP
          </a>
          <a id="nav-link" title="TEAM" href="#team" class="pl-4">
            TEAM
          </a>
          <a
            id="nav-link"
            title="GALLERY"
            href="https://boredapeyachtclub.com/#/gallery"
            class="pl-4"
          >
            GALLERY
          </a>
          <a
            id="nav-link"
            title="PROVENANCE"
            href="https://boredapeyachtclub.com/#/provenance"
            class="pl-4"
          >
            PROVENANCE
          </a>
        </div>
        <div class="hidden md:flex content-center flex-wrap flex-row">
          <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
            <i class="fa fa-youtube-play social-icon pl-5"></i>
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
      </nav>
    </header>
  );
}

export default Header;
