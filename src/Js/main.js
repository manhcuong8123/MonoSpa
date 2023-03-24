"use strict";

const openTimeBox = document.querySelector(".oppenTime-box");
const informationTimeBox = document.querySelector(".information-oppenTime");
const closeBoxOPpenTime = document.querySelector(
  ".close-information-oppenTime"
);

// Click show open time spa
const iconOpenBox = document.querySelector(".btn-openTimeBox");
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

const menuMiniPage = document.querySelector(".onCl-categosies-dv-respon");
if (menuMiniPage) {
  const menuMiniResponsive = document.querySelector(
    ".ul-box-categories-service-respon"
  );

  menuMiniPage.addEventListener("click", () => {
    console.log(1);
    if (menuMiniResponsive.classList.contains("click-menu-responsive-dv")) {
      menuMiniResponsive.classList.remove("click-menu-responsive-dv");
    } else {
      menuMiniResponsive.classList.add("click-menu-responsive-dv");
    }
  });
}

// click show dv

const categoriesdv = document.querySelectorAll(".text-title-li-span");
  categoriesdv.forEach((clickCates) => {
    clickCates.addEventListener("click", () => {
      console.log(1);
      const accordionCates = clickCates.parentElement;
      const ulBoxMiniDv = accordionCates.querySelector(".ul-li-cates");
      if (ulBoxMiniDv.classList.contains("showcate-list")) {
        ulBoxMiniDv.classList.remove("showcate-list");
      } else {
        ulBoxMiniDv.classList.add("showcate-list");
      }
    });
  });

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
    const isValid = checkInputs();
     if (isValid) {
       form.submit();
     }
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
  var isValid = true;

  if (nameValue === "") {
    setErrorFor(namef, "Tên không được để trống ");
    isValid = false;
  } else {
    setSuccessFor(namef);
    removeErrorFor(namef);
  }

  if (!isEmail(emailValue)) {
    setErrorFor(email, "Email sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(email);
    removeErrorFor(email);
  }

  if (selectValue === "0") {
    setErrorFor(select, "Bạn phải chọn 1 trong  các mục");
    isValid = false;
  } else {
    setSuccessFor(select);
    removeErrorFor(select);
  }

  if (!isPhoneValid(telValue)) {
    setErrorFor(tel, "Số điện thoại sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(tel);
    removeErrorFor(tel);
  }
  if (dateValue == "") {
    setErrorFor(date, "Ngày không được để tróng");
    isValid = false;
  } else if (selectedDate < today) {
    setErrorFor(date, "Ngày sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(date);
    removeErrorFor(date);
  }

  if (textareaValue === "") {
    setErrorFor(textarea, "Bạn phải nhập nội dung");
    isValid = false;
  } else {
    setSuccessFor(textarea);
    removeErrorFor(textarea);
  }
  return isValid;
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
  const contentModalMokup =  document.querySelector(".modal-mockup");
  // document.querySelector('.content-modal-mockup').style.display = 'none';
  if (contentModalMokup){
    contentModalMokup.style.display = "block";
  }
}
const modal = setTimeout(test, 1000);
function myStopFunction() {
  clearTimeout(modal);
  document.querySelector(".content-modal-mockup").style.display = "none";
}

/*VALIDATE CONTACT AND SINGLE BLOG*/

/*validate form contact*/

/*  end validate from contact */

const formContact = document.querySelector("#form-contact");
const inputContact = document.getElementById("form-contact-message");
const nameContact = document.getElementById("name-form-contact");
const emailContact = document.getElementById("email-form-contact");
const websiteContact = document.getElementById("subject-form-contact");

if (formContact) {
  formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkContact();
    if (isValid) {
      formContact.submit();
    }
  });
}

function checkContact() {
  const emailValue = emailContact.value.trim();
  const nameValue = nameContact.value.trim();
   const websiteValue = websiteContact.value.trim();
    const ContactValue = inputContact.value.trim();
  var isValid = true;

   if (nameValue === "") {
     setErrorFor(nameContact, "Email không được để trống");
     isValid = false;
   } else {
     setSuccessFor(nameContact);
     removeErrorFor(nameContact);
   }

  if (emailValue === "") {
    setErrorFor(emailContact, "Email không được để trống");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailContact, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailContact);
    removeErrorFor(emailContact);
  }

  if (websiteValue == "") {
    setErrorFor(websiteContact, "Subject không được để trống");
    isValid = false;
  } else {
    setSuccessFor(websiteContact);
    removeErrorFor(websiteContact);
  }
   if (ContactValue === "") {
     setErrorFor(inputContact, "Bạn phải nhập nội dung");
     isValid = false;
   } else {
     setSuccessFor(inputContact);
     removeErrorFor(inputContact);
   }
   
  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "item box-form error";
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
function isUrl(url) {
  return /^((http|https):\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?$/i.test(url);
}
function isPassValid(phone) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    phone
  );
}
// validate form contact

// vaidate comment detail page

// validate form comment
const formComment = document.querySelector("#form-comment");
const inputComment = document.getElementById("comment");
const nameComment = document.getElementById("name-comment");
const emailComment = document.getElementById("email-comment");
const websiteComment = document.getElementById("website-comment");

if (formComment) {
  formComment.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkComment();
    if (isValid) {
      formComment.submit();
    }
  });
}

function checkComment() {
  const emailValue = emailComment.value.trim();
  const nameValue = nameComment.value.trim();
   const websiteValue = websiteComment.value.trim();
    const CommentValue = inputComment.value.trim();
  var isValid = true;

   if (nameValue === "") {
     setErrorFor(nameComment, "Email không được để trống");
     isValid = false;
   } else {
     setSuccessFor(nameComment);
     removeErrorFor(nameComment);
   }

  if (emailValue === "") {
    setErrorFor(emailComment, "Email không được để trống");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailComment, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailComment);
    removeErrorFor(emailComment);
  }

  if (!isUrl(websiteValue)) {
    setErrorFor(websiteComment, "Url không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(websiteComment);
    removeErrorFor(websiteComment);
  }
   if (CommentValue === "") {
     setErrorFor(inputComment, "Bạn phải nhập phần này");
     isValid = false;
   } else {
     setSuccessFor(inputComment);
     removeErrorFor(inputComment);
   }
   
  return isValid;
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
function isUrl(url) {
  return /^((http|https):\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?$/i.test(url);
}
function isPassValid(phone) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    phone
  );
} 

// validate login
const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("email-login");
const passLogin = document.getElementById("pass-login");

if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkLogin();
     if (isValid) {
       formLogin.submit();
     }
  });
}

function checkLogin() {
  const emailValue = emailLogin.value.trim();
  const passValue = passLogin.value.trim();
  var isValid = true;

  if (emailValue === "") {
    setErrorFor(emailLogin, "Email không được để trống");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailLogin, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailLogin);
    removeErrorFor(emailLogin);
  }
  
  if (!isPassValid(passValue)) {
    setErrorFor(passLogin, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(passLogin);
    removeErrorFor(passLogin);
  }

  return isValid;
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
function isPassValid(phone) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(phone);
}

// validate signup 
const formSignup = document.getElementById("formSignup");
const nameSignup = document.getElementById("name-signup");
const emailSignup = document.getElementById("email-signup");
const phoneSignup = document.getElementById("phone-signup");
const passSignup = document.getElementById("pass-signup");
const repassSignup = document.getElementById("repass-signup");

if (formSignup) {
  formSignup.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkSignup();
    if (isValid) {
      formSignup.submit();
    }
  });
}

function checkSignup() {
  const nameValue = nameSignup.value.trim();
  const emailValue = emailSignup.value.trim();
  const phoneValue = phoneSignup.value.trim();
  const passValue = passSignup.value.trim();
  const repassValue = repassSignup.value.trim();
  var isValid = true;

  if (nameValue === "") {
    setErrorFor(nameSignup, "Tên không được để trống ");
    isValid = false;
  } else {
    setSuccessFor(nameSignup);
    removeErrorFor(nameSignup);
  }

  if (!isEmail(emailValue)) {
    setErrorFor(emailSignup, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailSignup);
    removeErrorFor(emailSignup);
  }
   if (!isPhoneValid(phoneValue)) {
     setErrorFor(phoneSignup, "Số điện thoại sai định dạng");
     isValid = false;
   } else {
     setSuccessFor(phoneSignup);
     removeErrorFor(phoneSignup);
   }
  
  if (!isPassValid(passValue)) {
    setErrorFor(passSignup, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(passSignup);
    removeErrorFor(passSignup);
  }
  if (repassValue !== passValue){
      setErrorFor(repassSignup, "Mật khẩu không khớp");
      isValid = false;
  }else if (!isPassValid(repassValue)) {
    setErrorFor(repassSignup, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(repassSignup);
    removeErrorFor(repassSignup);
  }

  return isValid;

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
function isPassValid(pass) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass);
}
function isPhoneValid(phone) {
  return /^\d{10}$/.test(phone);
}

// validate repass
const formRepass = document.getElementById("formForgotPass");
const nameRepass = document.getElementById("name-repass");
const emailRepass = document.getElementById("email-repass");
const phoneRepass = document.getElementById("phone-repass");
const passRepass = document.getElementById("pass-repass");
const repassRepass = document.getElementById("repass-repass");

if (formRepass) {
  formRepass.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkRePass();
   if (isValid) {
     formRepass.submit();
   }
  });
}

function checkRePass() {
  const nameValue = nameRepass.value.trim();
  const emailValue = emailRepass.value.trim();
  const phoneValue = phoneRepass.value.trim();
  const passValue = passRepass.value.trim();
  const repassValue = repassRepass.value.trim();
  var isValid = true;

  if (nameValue === "") {
    setErrorFor(nameRepass, "Tên không được để trống ");
    isValid = false;
  } else {
    setSuccessFor(nameRepass);
    removeErrorFor(nameRepass);
  }

if (emailValue === "") {
    setErrorFor(emailRepass, "Email không được để trống");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailRepass, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailRepass);
    removeErrorFor(emailRepass);
  }
  if (!isPhoneValid(phoneValue)) {
    setErrorFor(phoneRepass, "Số điện thoại sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(phoneRepass);
    removeErrorFor(phoneRepass);
  }

  if (!isPassValid(passValue)) {
    setErrorFor(passRepass, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(passRepass);
    removeErrorFor(passRepass);
  }
  if (repassValue != passValue) {
    setErrorFor(repassRepass, "Invalid password");
    isValid = false;
  } else if (!isPassValid(repassValue)) {
    setErrorFor(repassRepass, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(repassRepass);
    removeErrorFor(repassRepass);
  }

  return isValid;
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
function isPassValid(phone) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(phone);
}
function isPhoneValid(phone) {
  return /^\d{10}$/.test(phone);
}

// validate forgot password
const formforgot = document.getElementById("formforgot");
const passforgot = document.getElementById("pass-forgot");
const repassforgot = document.getElementById("repass-forgot");

if (formforgot) {
  formforgot.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkForgotPass();
     if (isValid) {
       formforgot.submit();
     }
  });
}

function checkForgotPass() {
  const passValue = passforgot.value.trim();
  const repassValue = repassforgot.value.trim();
  var isValid = true;

  if (!isPassValid(passValue)) {
    setErrorFor(passforgot, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(passforgot);
    removeErrorFor(passforgot);
  }

    if (repassValue != passValue) {
      setErrorFor(repassforgot, "Mật khẩu không khớp");
      isValid = false;
    } else if (!isPassValid(repassValue)) {
      setErrorFor(repassforgot, "Mật khẩu sai định dạng");
      isValid = false;
    } else {
      setSuccessFor(repassforgot);
      removeErrorFor(repassforgot);
    }

    return isValid;
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

function isPassValid(phone) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(phone);
}

// validate checkmail
const formCheckmail = document.getElementById("formCheckmail");
const emailCheck = document.getElementById("check-mail");

if (formCheckmail) {
  formCheckmail.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkMail();
    if (isValid) {
      formCheckmail.submit();
    }
  });
}

function checkMail() {
  const emailValue = emailCheck.value.trim();
  var isValid = true;
   if (!isEmail(emailValue)) {
    setErrorFor(emailCheck, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailCheck);
    removeErrorFor(emailCheck);
  }

  return isValid;
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

// validate check token
const formToken = document.getElementById("formtoken");
const token = document.getElementById("token");

if (formToken) {
  formToken.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkToken();
    if (isValid) {
      formToken.submit();
    }
  });
}

function checkToken() {
  const tokenValue = token.value.trim();
  var isValid = true;
 if (tokenValue.length < 6) {
    setErrorFor(token, "Mã sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(token);
    removeErrorFor(token);
  }
  return isValid;
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

// vaidate mokup

const formMokup = document.getElementById("form-modal-t");
const nameMokup = document.getElementById("name-mokup");
const phoneMokup = document.getElementById("phone-mokup");
const emailMokup = document.getElementById("email-mokup");

if (formMokup) {
  formMokup.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkMokup();
    if (isValid) {
      formMokup.submit();
    }
  });
}

function checkMokup() {
  const nameValue = nameMokup.value.trim();
  const phoneValue = phoneMokup.value.trim();
  const emailValue = emailMokup.value.trim();
  var isValid = true;
  if (nameValue === "") {
    setErrorFor(nameMokup, "Tên không được để trống ");
    isValid = false;
  } else {
    setSuccessFor(nameMokup);
    removeErrorFor(nameMokup);
  }
  if (!isPhoneValid(phoneValue)) {
    setErrorFor(phoneMokup, "Số điện thoại sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(phoneMokup);
    removeErrorFor(phoneMokup);
  }
 if (!isEmail(emailValue)) {
    setErrorFor(emailMokup, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailMokup);
    removeErrorFor(emailMokup);
  }

  return isValid;
  
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

// vali date editUser 
const formEditUser = document.querySelector(".formEditUser");
const nameInput = document.getElementById("name-edit-user");
const emailInput = document.getElementById("email-edit-user");
const imageInput = document.getElementById("file-upload");
const phoneInput = document.getElementById("phone-edit-user");
const addressInput = document.getElementById("address-edit-user");
const oldPasswordInput = document.getElementById("oldPass-edit-user");
const newPasswordInput = document.getElementById("newPass-edit-user");
const confirmPasswordInput = document.getElementById("confirmPass-edit-user");
const submitButton = document.getElementById("btn-edit-image-submit");

if (formEditUser) {
  formEditUser.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkEditUser();
    if (isValid) {
      formEditUser.submit();
    }
  });
}

function checkEditUser() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const imageValue = imageInput.value.trim();
  const oldPasswordValue = oldPasswordInput.value.trim();
  const newPasswordValue = newPasswordInput.value.trim();
  const repassValue = confirmPasswordInput.value.trim();
  const addressValue = addressInput.value.trim();
  var isValid = true;
  if (nameValue === "") {
    setErrorFor(nameInput, "Tên không được để trống ");
    isValid = false;
  } else {
    setSuccessFor(nameInput);
    removeErrorFor(nameInput);
  }
  if (addressValue === "") {
    setErrorFor(addressInput, "Địa chỉ không được để trống ");
    isValid = false;
  } else {
    setSuccessFor(addressInput);
    removeErrorFor(addressInput);
  }
  if (!isImage(imageValue)) {
    setErrorFor(imageInput, "Ảnh sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(imageInput);
    removeErrorFor(imageInput);
  }
  if (emailValue === "") {
    setErrorFor(emailInput, "Email không được để trống");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, "Email không đúng định dạng");
    isValid = false;
  } else {
    setSuccessFor(emailInput);
    removeErrorFor(emailInput);
  }
 if (!isPhoneValid(phoneValue)) {
    setErrorFor(phoneInput, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(phoneInput);
    removeErrorFor(phoneInput);
  }
   if (oldPasswordValue === "") {
     setErrorFor(oldPasswordInput, "Mật khẩu không được để trống");
     isValid = false;
   } else {
     setSuccessFor(oldPasswordInput);
     removeErrorFor(oldPasswordInput);
   }
  if (!isPassValid(newPasswordValue)) {
    setErrorFor(newPasswordInput, "Mật khẩu sai định dạng");
    isValid = false;
  } else {
    setSuccessFor(newPasswordInput);
    removeErrorFor(newPasswordInput);
  }
   if (repassValue != repassValue) {
    setErrorFor(confirmPasswordInput, "Mật khẩu không khớp");
    isValid = false;
  } else {
    setSuccessFor(confirmPasswordInput);
    removeErrorFor(confirmPasswordInput);
  }
  
  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);
  const small = formControl.querySelector("small");
  console.log(small);
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
function isPassValid(phone) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    phone
  );
}
function isPhoneValid(phone) {
  return /^\d{10}$/.test(phone);
}
function isImage(image) {
  return /(\.jpg|\.jpeg|\.png|\.gif)$/i.exec(image);
}

/* end the validate form */