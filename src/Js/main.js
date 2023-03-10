"use strict";

const openTimeBox = document.querySelector(".oppenTime-box");
const informationTimeBox = document.querySelector(".information-oppenTime");
const closeBoxOPpenTime = document.querySelector(".close-information-oppenTime");

// Click show open time spa
const iconOpenBox = document.querySelector(".open-Time");
    const iconOpenBoxClick = () =>{
       if (openTimeBox.classList.contains("oppenTime-box-Click") && informationTimeBox.classList.contains("information-oppenTime-Click")){
            openTimeBox.classList.remove("oppenTime-box-Click");
            informationTimeBox.classList.remove("information-oppenTime-Click")
       }else{
            openTimeBox.classList.add("oppenTime-box-Click");
            informationTimeBox.classList.add("information-oppenTime-Click")
       }
    }
// click show menu mini responsive in Page

const menuMiniPage = document.querySelector(".menu-sub-page-respon");
if (menuMiniPage){
    const menuMiniResponsive = document.querySelector(".menu-mini-respon");
    
     menuMiniPage.addEventListener("click", () => {
        if (menuMiniResponsive.classList.contains("dpnon")) {
            menuMiniResponsive.classList.remove("dpnon");
        }else{
             menuMiniResponsive.classList.add("dpnon");
        }
     })
}

// click show menu sub responsive

const iconMenuSub = document.querySelector(".icon-menu-sub-responsive");
const menuSubResponsive = document.querySelector(".menu-sub-responsive");

    const iconOpenMenuSubClick = () => {
      if (menuSubResponsive.classList.contains("click-menu-sub-respon")) {
        menuSubResponsive.classList.remove("click-menu-sub-respon");
      } else {
        menuSubResponsive.classList.add("click-menu-sub-respon");
      }
    };