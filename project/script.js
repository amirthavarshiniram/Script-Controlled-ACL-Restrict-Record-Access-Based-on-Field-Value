// MOBILE MENU

function toggleMenu() {

    const nav = document.querySelector(".header nav");

    nav.classList.toggle("show");

}


// ACL ACCESS CONTROL

function checkAccess() {

    const status = document.getElementById("status").value;

    const resultIcon =
        document.getElementById("resultIcon");

    const resultTitle =
        document.getElementById("resultTitle");

    const resultMessage =
        document.getElementById("resultMessage");

    const fieldValue =
        document.getElementById("fieldValue");

    const accessValue =
        document.getElementById("accessValue");


    fieldValue.textContent = status;


    if (status === "Restricted") {

        resultIcon.textContent = "🔒";

        resultTitle.textContent = "Access Denied";

        resultMessage.textContent =
            "This record is restricted and cannot be viewed.";

        accessValue.textContent = "DENIED";

        accessValue.style.color = "#dc3545";

    }

    else if (status === "Private") {

        resultIcon.textContent = "⚠️";

        resultTitle.textContent = "Limited Access";

        resultMessage.textContent =
            "This record requires additional permission.";

        accessValue.textContent = "LIMITED";

        accessValue.style.color = "#e39b17";

    }

    else {

        resultIcon.textContent = "🔓";

        resultTitle.textContent = "Access Granted";

        resultMessage.textContent =
            "This record is available for viewing.";

        accessValue.textContent = "ALLOWED";

        accessValue.style.color = "#20a36a";

    }

}


// GEMINI AI DEMO

function askAI() {

    const input =
        document.getElementById("question");

    const question =
        input.value.trim();


    if (question === "") {

        alert("Please enter a question.");

        return;

    }


    const chatBody =
        document.querySelector(".chat-body");


    // User message

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "message user-message";

    userMessage.textContent =
        question;

    chatBody.appendChild(userMessage);


    // Simple educational simulation

    let answer =
        "ACL controls whether a user can access a record based on predefined rules.";

    if (
        question.toLowerCase().includes("javascript")
    ) {

        answer =
            "JavaScript can evaluate a field value and execute an access-control rule dynamically.";

    }

    else if (
        question.toLowerCase().includes("restricted")
    ) {

        answer =
            'When the status field is "Restricted", the ACL rule can deny access to the record.';

    }

    else if (
        question.toLowerCase().includes("acl")
    ) {

        answer =
            "ACL stands for Access Control List. It defines rules that determine who can access a resource.";

    }


    setTimeout(function () {

        const aiMessage =
            document.createElement("div");

        aiMessage.className =
            "message ai-message";

        aiMessage.textContent =
            answer;

        chatBody.appendChild(aiMessage);

        chatBody.scrollTop =
            chatBody.scrollHeight;

    }, 500);


    input.value = "";

}


// INITIAL CHECK

document.addEventListener(
    "DOMContentLoaded",
    function () {

        checkAccess();

    }
);