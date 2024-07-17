let inps = document.querySelectorAll("input");
let formBtn = document.querySelector(".form-btn");
let myform = document.querySelector("form");

const printMsg = (msg, prElem) => {
  let pera = prElem.querySelector("p");
  pera.style.color = 'red';

  if (msg) {
    pera.innerText = msg;
  } else {
    pera.innerText = '';
  }
};

const validateUserName = (userName) => {
  return /^[a-zA-z\s]{3,}$/.test(userName);
};

const validatePhoneNum = (phoneNum) => {
  return /^(03[0-4][\d](?:[\s]|[\W_]|)[\d]{7})|(\+92(?:[\s]|[\W_]|)3[0-4][\d](?:[\s]|[\W_]|)[\d]{7})$/.test(
    phoneNum
  );
};

const validateMail = (mail) => {
  return /^[\da-zA-Z]+(?:[+%._-][\da-zA-Z]+)*@(?:[-.])*[a-zA-Z\d]+(?:[-])*\.[A-Za-z]{2,}$/.test(
    mail
  );
};

const validatePassword = (password) => {
  return /^((?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[\d]+)(?=.*[\W_]+)).{8,}$/.test(
    password
  );
};

const checkFormValidity = (e) => {
  e.preventDefault();
  let isUserName;
  let isPhoneNum;
  let isEmail;
  let isPassword;
  inps.forEach((element, i) => {
    let parentElement = element.parentElement.parentElement;
    parentElement.setAttribute("id", `myform-${i + 1}`);

    if (parentElement.id === "myform-1") {
      isUserName = validateUserName(element.value);

      if (!isUserName) {
        printMsg("Username must be more than 3 words", parentElement);
      } else {
        printMsg("", parentElement);
      }
    }

    else if (parentElement.id === "myform-2") {
      isPhoneNum = validatePhoneNum(element.value);

      if (!isPhoneNum) {
        printMsg("Phone number must be in this format 0123-4567890 or +92 123 4567890", parentElement);
      } else {
        printMsg("", parentElement);
      }
    }

    else if (parentElement.id === "myform-3") {
      isEmail = validateMail(element.value);

      if (!isEmail) {
        printMsg("Please enter a valid Email", parentElement);
      } else {
        printMsg("", parentElement);
      }
    }

    else if (parentElement.id === "myform-4") {
      isPassword = validatePassword(element.value);
      let parentElement2 = parentElement.parentElement.nextElementSibling;
      let cnfrmPassword = parentElement.parentElement.nextElementSibling.querySelector("input");

      if (!isPassword) {
        printMsg("Password must be at least 8 characters with at least 1 uppercase character, 1 lowercase character, 1 digit and 1 special character", parentElement);
      } else {
        printMsg("", parentElement);
        
        if (element.value !== cnfrmPassword.value) {
          printMsg('Password is not matching' , parentElement2)
        }
        else{
        printMsg('' , parentElement2)
      } 

      }
    }
    
  });
  if (isUserName && isPhoneNum && isEmail && isPassword) {
    alert('Congratulations! You are registered');
    document.querySelectorAll("input").forEach(element => {
      element.value = '';
    });
  }
};

formBtn.addEventListener("click", (e) => {
  checkFormValidity(e);
});