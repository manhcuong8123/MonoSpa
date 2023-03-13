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




//    pocup===============
function test(){
     // document.querySelector('.content-modal-mockup').style.display = 'none';
     document.querySelector('.modal-mockup').innerHTML=`
     <div class="content-modal-mockup">
     <div class="item-modal-mockup">
        <img src="../src/Image/photo_2023-03-10_10-33-00.png" width="100px" alt="">
        <h5>"Mono Bovis Spa = Chạm đến làn da không tuổi"</h5>
        <h3>ƯU ĐÃI YÊU THƯƠNG</h3>
        <p>Nâng tầm sắc đẹp Việt</p>
        <img src="../src/Image/Screenshot 2023-03-12 160307.png" width="50%" alt=""> 
         <p class="title-give"> * Nhận món quà siêu khủng từ MonoSpa chỉ với 1 phút cập nhật đầy đủ *</p>
         <div class="form-modal text-center">
           
        <form>
            <div class="value-form-modal">
                <label>Họ và tên </label>
          :  <input type="text" name="name" placeholder="nhập tên anh/chị">
            </div>
            <div class="value-form-modal">
                <label>Số điện thoại :</label>
            <input type="text" name="phone" placeholder="nhập SĐT anh/chị">
            </div>
            <div class="value-form-modal">
                <label>Email</label>
           : <input type="email" placeholder="nhập email anh/chị">
            </div>
            <a href=""><button class="btn submit-form-modal">GỬI THÔNG TIN</button></a>
        </form>
                
         </div>
        <button class="close-modal btn" onclick="myStopFunction()"><i class='bx bx-x bx-tada' ></i></button>
      </div>
  </div>`;
}
const modal = setTimeout(test, 5000);
function myStopFunction() {
     clearTimeout(modal);
     document.querySelector('.content-modal-mockup').style.display = 'none';
   }