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


// validate login
const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("email-login");
const passLogin = document.getElementById("pass-login");

if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    console.log(1);
    e.preventDefault();
    checkLogin();
  });
}

function checkLogin() {
  const emailValue = emailLogin.value.trim();
  const passValue = passLogin.value.trim();

  if (emailValue === "") {
    setErrorFor(emailLogin, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailLogin, "Email is not valid");
  } else {
    setSuccessFor(emailLogin);
    removeErrorFor(emailLogin);
  }
  
  if (passValue === "") {
    setErrorFor(passLogin, "Password number is empty");
  } else if (!isPassValid(passValue)) {
    setErrorFor(passLogin, "Invalid password number");
  } else {
    setSuccessFor(passLogin);
    removeErrorFor(passLogin);
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
    checkSignup();
  });
}

function checkSignup() {
  const nameValue = nameSignup.value.trim();
  const emailValue = emailSignup.value.trim();
  const phoneValue = phoneSignup.value.trim();
  const passValue = passSignup.value.trim();
  const repassValue = repassSignup.value.trim();

  if (nameValue === "") {
    setErrorFor(nameSignup, "Name cannot be blank");
  } else {
    setSuccessFor(nameSignup);
    removeErrorFor(nameSignup);
  }

  if (!isEmail(emailValue)) {
    setErrorFor(emailSignup, "Email is not valid");
  } else {
    setSuccessFor(emailSignup);
    removeErrorFor(emailSignup);
  }
   if (!isPhoneValid(phoneValue)) {
     setErrorFor(phoneSignup, "Invalid password number");
   } else {
     setSuccessFor(phoneSignup);
     removeErrorFor(phoneSignup);
   }
  
  if (!isPassValid(passValue)) {
    setErrorFor(passSignup, "Invalid password number");
  } else {
    setSuccessFor(passSignup);
    removeErrorFor(passSignup);
  }
  if (repassValue !== passValue){
      setErrorFor(repassSignup, "Invalid password");
  }else if (!isPassValid(repassValue)) {
    setErrorFor(repassSignup, "Invalid password number");
  } else {
    setSuccessFor(repassSignup);
    removeErrorFor(repassSignup);
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
function isPassValid(pass) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass);
}
function isPhoneValid(phone) {
  return /^\d{10}$/.test(phone);
}

// validate repass
const formRepass = document.getElementById("formForgotPass");
const nameRepass = document.getElementById("name-signup");
const emailRepass = document.getElementById("email-signup");
const phoneRepass = document.getElementById("phone-signup");
const passRepass = document.getElementById("pass-signup");
const repassRepass = document.getElementById("repass-signup");

if (formRepass) {
  formRepass.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRePass();
  });
}

function checkRePass() {
  const nameValue = nameRepass.value.trim();
  const emailValue = emailRepass.value.trim();
  const phoneValue = phoneRepass.value.trim();
  const passValue = emailRepass.value.trim();
  const repassValue = phoneRepass.value.trim();

  if (nameValue === "") {
    setErrorFor(nameRepass, "Name cannot be blank");
  } else {
    setSuccessFor(nameRepass);
    removeErrorFor(nameRepass);
  }

if (emailValue === "") {
    setErrorFor(emailRepass, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailRepass, "Email is not valid");
  } else {
    setSuccessFor(emailRepass);
    removeErrorFor(emailRepass);
  }
  if (phoneValue === "") {
    setErrorFor(phoneRepass, "Password number is empty");
  } else if (!isPhoneValid(passValue)) {
    setErrorFor(phoneRepass, "Invalid password number");
  } else {
    setSuccessFor(phoneRepass);
    removeErrorFor(phoneRepass);
  }

  if (passValue === "") {
    setErrorFor(passRepass, "Password number is empty");
  } else if (!isPassValid(passValue)) {
    setErrorFor(passRepass, "Invalid password number");
  } else {
    setSuccessFor(passRepass);
    removeErrorFor(passRepass);
  }
  if (repassValue === "") {
    setErrorFor(repassRepass, "Password number is empty");
  } else if (repassValue != passValue) {
    setErrorFor(repassRepass, "Invalid password");
  } else if (!isPassValid(passValue)) {
    setErrorFor(repassRepass, "Invalid password number");
  } else {
    setSuccessFor(repassRepass);
    removeErrorFor(repassRepass);
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
    checkForgotPass();
  });
}

function checkForgotPass() {
  const passValue = passforgot.value.trim();
  const repassValue = repassforgot.value.trim();

  if (passValue === "") {
    setErrorFor(passforgot, "Password number is empty");
  } else if (!isPassValid(passValue)) {
    setErrorFor(passforgot, "Invalid password number");
  } else {
    setSuccessFor(passforgot);
    removeErrorFor(passforgot);
  }

    if (repassValue === "") {
      setErrorFor(repassforgot, "Password number is empty");
    } else if (repassValue != passValue) {
      setErrorFor(repassforgot, "Invalid password");
    } else if (!isPassValid(repassValue)) {
      setErrorFor(repassforgot, "Invalid password number");
    } else {
      setSuccessFor(repassforgot);
      removeErrorFor(repassforgot);
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

function isPassValid(phone) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(phone);
}

// validate checkmail
const formCheckmail = document.getElementById("formCheckmail");
const emailCheck = document.getElementById("check-mail");

if (formCheckmail) {
  formCheckmail.addEventListener("submit", (e) => {
    console.log(1);
    e.preventDefault();
    checkMail();
  });
}

function checkMail() {
  const emailValue = emailCheck.value.trim();

  if (emailValue === "") {
    setErrorFor(emailCheck, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailCheck, "Email is not valid");
  } else {
    setSuccessFor(emailCheck);
    removeErrorFor(emailCheck);
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

// validate check token
const formToken = document.getElementById("formtoken");
const token = document.getElementById("token");

if (formToken) {
  formToken.addEventListener("submit", (e) => {
    console.log(1);
    e.preventDefault();
    checkToken();
  });
}

function checkToken() {
  const tokenValue = token.value.trim();
 
  if (tokenValue === "") {
    setErrorFor(token, "Token is empty");
  } else if (tokenValue.length < 6) {
    setErrorFor(token, "Token is not correct");
  } else {
    setSuccessFor(token);
    removeErrorFor(token);
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

// vaidate mokup

const formMokup = document.getElementById("form-modal-t");
const nameMokup = document.getElementById("name-mokup");
const phoneMokup = document.getElementById("phone-mokup");
const emailMokup = document.getElementById("email-mokup");

if (formMokup) {
  formMokup.addEventListener("submit", (e) => {
    e.preventDefault();
    checkMokup();
  });
}

function checkMokup() {
  const nameValue = nameMokup.value.trim();
  const phoneValue = phoneMokup.value.trim();
  const emailValue = emailMokup.value.trim();

  if (nameValue === "") {
    setErrorFor(nameMokup, "Name cannot be blank");
  } else {
    setSuccessFor(nameMokup);
    removeErrorFor(nameMokup);
  }
  if (phoneValue === "") {
    setErrorFor(phoneMokup, "Password number is empty");
  } else if (!isPhoneValid(phoneValue)) {
    setErrorFor(phoneMokup, "Invalid password number");
  } else {
    setSuccessFor(phoneMokup);
    removeErrorFor(phoneMokup);
  }
  if (emailValue === "") {
    setErrorFor(emailMokup, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailMokup, "Email is not valid");
  } else {
    setSuccessFor(emailMokup);
    removeErrorFor(emailMokup);
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
    checkEditUser();
  });
}

function checkEditUser() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const imageValue = imageInput.value.trim();
  const oldPasswordValue = oldPasswordInput.value.trim();
  const newPasswordValue = emailInput.value.trim();
  const repassValue = confirmPasswordInput.value.trim();
  const addressValue = addressInput.value.trim();
  if (nameValue === "") {
    setErrorFor(nameInput, "Name cannot be blank");
  } else {
    setSuccessFor(nameInput);
    removeErrorFor(nameInput);
  }
  if (addressValue === "") {
    setErrorFor(addressInput, "Name cannot be blank");
  } else {
    setSuccessFor(addressInput);
    removeErrorFor(addressInput);
  }
  if (!isImage(imageValue)) {
    setErrorFor(imageInput, "Image is not JPG, JPEG, PNG or GIF");
  } else {
    setSuccessFor(imageInput);
    removeErrorFor(imageInput);
  }
  if (emailValue === "") {
    setErrorFor(emailInput, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, "Email is not valid");
  } else {
    setSuccessFor(emailInput);
    removeErrorFor(emailInput);
  }
  if (phoneValue === "") {
    setErrorFor(phoneInput, "Password number is empty");
  } else if (!isPhoneValid(passValue)) {
    setErrorFor(phoneInput, "Invalid password number");
  } else {
    setSuccessFor(phoneInput);
    removeErrorFor(phoneInput);
  }
   if (oldPasswordValue === "") {
     setErrorFor(oldPasswordInput, "Password number is empty");
   } else {
     setSuccessFor(oldPasswordInput);
     removeErrorFor(oldPasswordInput);
   }
  if (newPasswordValue === "") {
    setErrorFor(newPasswordInput, "Password number is empty");
  } else if (!isPassValid(newPasswordValue)) {
    setErrorFor(newPasswordInput, "Invalid password number");
  } else {
    setSuccessFor(newPasswordInput);
    removeErrorFor(newPasswordInput);
  }
  if (repassValue === "") {
    setErrorFor(confirmPasswordInput, "Password number is empty");
  } else if (repassValue != repassValue) {
    setErrorFor(confirmPasswordInput, "Invalid password");
  } else {
    setSuccessFor(confirmPasswordInput);
    removeErrorFor(confirmPasswordInput);
  }
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