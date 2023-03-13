"use strict";

const openTimeBox = document.querySelector(".oppenTime-box");
const informationTimeBox = document.querySelector(".information-oppenTime");
const closeBoxOPpenTime = document.querySelector(
  ".close-information-oppenTime"
);

// Click show open time spa
const iconOpenBox = document.querySelector(".open-Time");
const iconOpenBoxClick = () => {
  if (
    openTimeBox.classList.contains("oppenTime-box-Click") &&
    informationTimeBox.classList.contains("information-oppenTime-Click")
  ) {
    openTimeBox.classList.remove("oppenTime-box-Click");
    informationTimeBox.classList.remove("information-oppenTime-Click");
  } else {
    openTimeBox.classList.add("oppenTime-box-Click");
    informationTimeBox.classList.add("information-oppenTime-Click");
  }
};
// click show menu mini responsive in Page

const menuMiniPage = document.querySelector(".menu-sub-page-respon");
if (menuMiniPage) {
  const menuMiniResponsive = document.querySelector(".menu-mini-respon");

  menuMiniPage.addEventListener("click", () => {
    if (menuMiniResponsive.classList.contains("click-menu-responsive-page")) {
      menuMiniResponsive.classList.remove("click-menu-responsive-page");
    } else {
      menuMiniResponsive.classList.add("click-menu-responsive-page");
    }
  });
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

// Show question FAQ page

const textQuestion = document.querySelectorAll(".text-question");

textQuestion.forEach((btnClick) => {
  btnClick.addEventListener("click", () => {
    const accordionItem = btnClick.parentElement;
    const replyQuestion = accordionItem.querySelector(".reply-question");
    const iconQuestion = accordionItem.querySelector(".icon-Question");
    if (replyQuestion.classList.contains("show-question")) {
      replyQuestion.classList.remove("show-question");
      btnClick.classList.remove("add-background-question");
      iconQuestion.classList.add("bx-plus");
      iconQuestion.classList.remove("bx-x");
    } else {
      replyQuestion.classList.add("show-question");
      btnClick.classList.add("add-background-question");
      iconQuestion.classList.remove("bx-plus");
      iconQuestion.classList.add("bx-x");
    }
  });
});
// click show menu account layout pc
const iconAccount = document.querySelector(".user-account");
const menuAccount = document.querySelector(".box-fs-account");

if (iconAccount) {
  iconAccount.addEventListener("click", () => {
    if (menuAccount.classList.contains("click-box-fs-account")) {
      menuAccount.classList.remove("click-box-fs-account");
    } else {
      menuAccount.classList.add("click-box-fs-account");
    }
  });
}
// click show menu account layout mobile
const iconAccountMobile = document.querySelector(".box-account-responsive");
const menuAccountMobile = document.querySelector(".box-fs-account-responsive");

if (iconAccountMobile) {
  iconAccountMobile.addEventListener("click", () => {
    if (menuAccountMobile.classList.contains("click-account-responsive")) {
      menuAccountMobile.classList.remove("click-account-responsive");
    } else {
      menuAccountMobile.classList.add("click-account-responsive");
    }
  });
}

// validate form Booking
const form = document.getElementById("form");
const namef = document.getElementById("name");
const email = document.getElementById("email");
const select = document.getElementById("select");
const tel = document.getElementById("tel");
const date = document.getElementById("date");
const textarea = document.getElementById("textarea");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
  });
}

function checkInputs() {
  const nameValue = namef.value.trim();
  const emailValue = email.value.trim();
  const selectValue = select.value;
  const telValue = tel.value.trim();
  const dateValue = date.value;
  const textareaValue = textarea.value.trim();
  const today = new Date();
  const selectedDate = new Date(dateValue);

  if (nameValue === "") {
    setErrorFor(namef, "Name cannot be blank");
  } else {
    setSuccessFor(namef);
    removeErrorFor(namef);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
    removeErrorFor(email);
  }

  if (selectValue === "0") {
    setErrorFor(select, "Please select a service");
  } else {
    setSuccessFor(select);
    removeErrorFor(select);
  }

  if (telValue === "") {
    setErrorFor(tel, "Phone number is empty");
  } else if (!isPhoneValid(telValue)) {
    setErrorFor(tel, "Invalid phone number");
  } else {
    setSuccessFor(tel);
    removeErrorFor(tel);
  }

  if (dateValue === "") {
    setErrorFor(date, "Please select a date");
  } else if (selectedDate < today) {
    setErrorFor(date, "Please select a date here");
  } else {
    setSuccessFor(date);
    removeErrorFor(date);
  }

  if (textareaValue === "") {
    setErrorFor(textarea, "Message cannot be blank");
  } else {
    setSuccessFor(textarea);
    removeErrorFor(textarea);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "box-form error";
  small.innerText = message;
  small.style.display = "block";
}

function removeErrorFor(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error-message");
  const small = formGroup.querySelector("small");
  small.style.display = "none";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "box-form success";
}

function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isPhoneValid(phone) {
  return /^\d{10}$/.test(phone);
}

//    pocup===============
function test() {
  // document.querySelector('.content-modal-mockup').style.display = 'none';
  document.querySelector(".modal-mockup").innerHTML = `
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
  document.querySelector(".content-modal-mockup").style.display = "none";
}

/*VALIDATE CONTACT AND SINGLE BLOG*/

/*validate form contact*/
const form_contact = document.getElementById("form-contact");
const nameInput_contact = document.getElementById("name-form-contact");
const emailInput_contact = document.getElementById("email-form-contact");
const subjectInput = document.getElementById("subject-form-contact");
const messageInput = document.getElementById("form-contact");

if (form_contact) {
  form_contact.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent the form from submitting
    console.log(form_contact);
    // Validate name
    if (nameInput_contact.value.trim() === "") {
      document.getElementById("nameform-contact-error").textContent =
        "Please enter your name";
    } else {
      document.getElementById("nameform-contact-error").textContent = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput_contact.value)) {
      document.getElementById("emailform-contact-error").textContent =
        "Please enter a valid email address";
    } else {
      document.getElementById("emailform-contact-error").textContent = "";
    }

    // Validate subject
    if (subjectInput.value.trim() === "") {
      document.getElementById("subject-contact-error").textContent =
        "Please enter a subject";
    } else {
      document.getElementById("subject-contact-error").textContent = "";
    }

    // Validate message
    if (messageInput.value === "") {
      document.getElementById("form-contact-error").textContent =
        "Please enter a message";
    } else {
      document.getElementById("form-contact-error").textContent = "";
    }

    // Submit the form if all fields are valid
    if (
      nameInput_contact.value.trim() !== "" &&
      emailRegex.test(emailInput_contact.value) &&
      subjectInput.value.trim() !== "" &&
      messageInput.value.trim() !== ""
    ) {
      form_contact.submit();
    }
  });
}
/*  end validate from contact */
// validate form comment
const form_cmt = document.getElementById("form-comment");
const comment = document.querySelector("#comment");
const nameComment = document.querySelector("#name-comment");
const emailComment = document.querySelector("#email-comment");
const website = document.querySelector("#website-comment");
const commentError = document.querySelector("#comment-error");
const nameCommentError = document.querySelector("#nameComment-error");
const emailCommentError = document.querySelector("#emailComment-error");
const websiteError = document.querySelector("#website-error");

if (form_cmt) {
  form_cmt.addEventListener("submit", function (event) {
    console.log(form_cmt);
    event.preventDefault();

    if (!comment.value) {
      commentError.textContent = "Please enter a comment.";
    } else {
      commentError.textContent = "";
    }

    if (!nameComment.value) {
      nameCommentError.textContent = "Please enter your nameComment.";
    } else {
      nameCommentError.textContent = "";
    }

    if (!emailComment.value) {
      emailCommentError.textContent = "Please enter your emailComment.";
    } else if (!isValidEmailComment(emailComment.value)) {
      emailCommentError.textContent = "Please enter a valid emailComment.";
    } else {
      emailCommentError.textContent = "";
    }

    if (website.value && !isValidUrl(website.value)) {
      websiteError.textContent = "Please enter a valid URL.";
    } else {
      websiteError.textContent = "";
    }

    if (comment.value && nameComment.value && emailComment.value) {
      form_cmt.submit();
    }
  });

  function isValidEmailComment(emailComment) {
    const emailCommentRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCommentRegex.test(emailComment);
  }

  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
}

/* end the validate form */
