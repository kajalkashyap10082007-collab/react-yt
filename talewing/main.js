 
    let maindiv = createMaindiv();
    document.body.appendChild(maindiv);

    function createMaindiv() {
      let maindiv = document.createElement("div");
      maindiv.className = "h-[850px] w-[1200px] border-2 border-black-400";
      return maindiv;
    }

    let header = createHeader();
    maindiv.appendChild(header);

    function createHeader() {
      let header = document.createElement("div");
      header.className = "h-[100px] w-[1200px] bg-teal-600 text-[60px] text-white flex items-center pl-[20px]";
      header.innerText = "Discussion Portal";
      return header;
    }

    let outdiv = createOutdiv();
    maindiv.appendChild(outdiv);

    function createOutdiv() {
      let outdiv = document.createElement("div");
      outdiv.className = "h-[750px] w-[1200px] border-2 border-gray-300 flex";
      return outdiv;
    }

    let leftdiv = createLeftDiv();
    outdiv.appendChild(leftdiv);

    function createLeftDiv() {
      let leftdiv = document.createElement("div");
      leftdiv.className = "h-[740px] w-[550px] border-2 border-gray-300";
      return leftdiv;
    }

    let resultdiv = createResultDiv();
    outdiv.appendChild(resultdiv);

    function createResultDiv() {
      let resultdiv = document.createElement("div");
      resultdiv.className = "h-[740px] w-[650px] border-2 border-gray-300";
      return resultdiv;
    }

    let rightdiv = createRightDiv();
    resultdiv.appendChild(rightdiv);

    function createRightDiv() {
      let rightdiv = document.createElement("div");
      rightdiv.className = "h-[740px] w-[620px] p-[40px]";
      rightdiv.innerHTML = `<h1 style="font-size:40px">Welcome To Discussion Portal!</h1><br><h6>Enter a Subject and Questions to get started</h6>`;
      return rightdiv;
    }

    let innerdiv = createInnerDiv();
    leftdiv.appendChild(innerdiv);

    function createInnerDiv() {
      let innerdiv = document.createElement("div");
      innerdiv.className = "h-[150px] w-[550px] border-2 border-gray-300 flex items-center";
      return innerdiv;
    }

    let outerdiv = createOuterDiv();
    leftdiv.appendChild(outerdiv);

    function createOuterDiv() {
      let outerdiv = document.createElement("div");
      outerdiv.className = "h-[590px] w-[550px] border-2 border-gray-300 overflow-auto";
      return outerdiv;
    }

    let button = createQuesButton();
    innerdiv.appendChild(button);

    function createQuesButton() {
      let button = document.createElement("button");
      button.className =
        "h-[40px] w-[200px] bg-indigo-400 border-2 border-blue-600 ml-[10px] rounded-xl";
      button.innerText = "New Question Form";
      button.addEventListener("click", () => {
        resultdiv.innerHTML = "";
        if (!resultdiv.contains(rightdiv)) {
          resultdiv.appendChild(rightdiv);
        }
        rightdiv.style.display = "block";
      });
      return button;
    }

    let search = createSearch();
    innerdiv.appendChild(search);

    function createSearch() {
      let search = document.createElement("input");
      search.className = "h-[40px] w-[200px] border border-black ml-[20px] rounded-[3px]";
      search.placeholder = "Search Questions.....";
      return search;
    }

    let subject = createSubject();
    rightdiv.appendChild(subject);

    function createSubject() {
      let subject = document.createElement("input");
      subject.id = "sub";
      subject.className = "h-[40px] w-[200px] border-2 border-gray-300 mt-[20px]";
      subject.placeholder = "Subject";
      return subject;
    }

    let question = createQuestion();
    rightdiv.appendChild(question);

    function createQuestion() {
      let question = document.createElement("textarea");
      question.id = "ques";
      question.className = "h-[160px] w-[570px] border-2 border-gray-300 mt-[15px]";
      question.placeholder = "Question";
      return question;
    }

    let submit = createSubmit();
    rightdiv.appendChild(submit);

    function createSubmit() {
      let submit = document.createElement("button");
      submit.className = "h-[30px] w-[100px] bg-indigo-400 rounded-[4px] ml-[450px] mt-[10px]";
      submit.innerText = "Submit";
      submit.onclick = showquery;
      return submit;
    }

    function showquery() {
      let subjectvalue = document.getElementById("sub").value;
      let questionvalue = document.getElementById("ques").value;

      if (subjectvalue.trim() === "" || questionvalue.trim() === "") return;

      let newQuestion = {
        subject: subjectvalue,
        question: questionvalue,
        responses: []
      };

      let allQuestions = JSON.parse(localStorage.getItem("questions")) || [];
      allQuestions.push(newQuestion);
      localStorage.setItem("questions", JSON.stringify(allQuestions));

      addQuestionToList(newQuestion, allQuestions.length - 1);

      document.getElementById("sub").value = "";
      document.getElementById("ques").value = "";
    }

    function addQuestionToList(questionObj, index) {
      let div = document.createElement("div");
      div.className = "h-[120px] w-[545px] border-1 border-gray-300 cursor-pointer";
      div.dataset.index = index;

      let subvalue = document.createElement("h1");
      subvalue.className = "text-[40px] ml-[10px]";
      subvalue.innerText = questionObj.subject;

      let quesvalue = document.createElement("h4");
      quesvalue.className = "text-[15px] ml-[10px] mb-[12px]";
      quesvalue.innerText = questionObj.question;

      div.appendChild(subvalue);
      div.appendChild(quesvalue);
      outerdiv.appendChild(div);

      div.addEventListener("click", () => {
        rightdiv.style.display = "none";
        resultdiv.innerHTML = "";
        showquestions(questionObj.subject, questionObj.question, index);
      });
    }

    function showquestions(showsub, showques, index) {
      let div1 = document.createElement("div");
      div1.className = "h-[120px] w-[580px] border-1 border-gray-300 bg-gray-300";

      let newvalue = document.createElement("h1");
      newvalue.className = "text-[40px] ml-[10px]";
      newvalue.innerText = showsub;

      let newques = document.createElement("h4");
      newques.className = "text-[15px] ml-[10px] mb-[12px]";
      newques.innerText = showques;

      div1.appendChild(newvalue);
      div1.appendChild(newques);

      let h1 = document.createElement("h1");
      h1.innerText = "Response";
      h1.className = "text-[30px] ml-[20px] mt-[10px]";

      let div4 = document.createElement("div");
      div4.className =
        "h-[100px] w-[550px] border-1 border-gray-300 bg-gray-300 ml-[12px] overflow-auto";

      let div2 = document.createElement("div");
      div2.className = "h-[250px] w-[580px] border-1 border-gray-300 mt-[15px] ml-[20px]";
      div2.innerHTML = `<h1 style="font-size:25px">Question</h1>`;
      div2.appendChild(div1);

      let resolve = document.createElement("button");
      resolve.innerText = "Resolve";
      resolve.className =
        "h-[30px] w-[80px] bg-indigo-400 mt-[10px] ml-[430px] rounded-[3px]";
      resolve.addEventListener("click", () => {
        let allQuestions = JSON.parse(localStorage.getItem("questions")) || [];
        allQuestions.splice(index, 1);
        localStorage.setItem("questions", JSON.stringify(allQuestions));
        outerdiv.innerHTML = "";
        allQuestions.forEach((q, i) => {
          addQuestionToList(q, i);
        });
        resultdiv.innerHTML = "";
        resultdiv.appendChild(rightdiv);
        rightdiv.style.display = "block";
      });
      div2.appendChild(resolve);

      let div3 = document.createElement("div");
      div3.className = "h-[300px] w-[580px] border-1 border-gray-300 mt-[15px] ml-[20px]";
      div3.innerHTML = `<h1 style="font-size:25px">Add to Response</h1>`;

      let name = document.createElement("input");
      name.className = "h-[40px] w-[200px] border-2 border-gray-300 mt-[20px] ml-[10px]";
      name.placeholder = "Name";

      let comment = document.createElement("textarea");
      comment.className = "h-[100px] w-[530px] border-2 border-gray-300 mt-[15px] ml-[10px]";
      comment.placeholder = "Comment";

      let submit2 = document.createElement("button");
      submit2.className = "h-[30px] w-[100px] bg-indigo-400 rounded-[4px] ml-[450px] mt-[10px]";
      submit2.innerText = "Submit";

      // Load saved responses
      let allQuestions = JSON.parse(localStorage.getItem("questions")) || [];
      let savedResponses = allQuestions[index].responses || [];

      savedResponses.forEach((response) => {
        let responseBox = document.createElement("div");
        responseBox.className = "border p-[5px] m-[5px] bg-white";
        responseBox.innerHTML = `
          <b>${response.name}</b><br>
          ${response.comment}<br>
          <p style="font-size: 12px; color: gray;">${response.time}</p>`;
        div4.appendChild(responseBox);
      });

      submit2.addEventListener("click", () => {
        if (name.value.trim() !== "" && comment.value.trim() !== "") {
          const currentTime = new Date().toLocaleString();
          const response = {
            name: name.value,
            comment: comment.value,
            time: currentTime
          };

          let responseBox = document.createElement("div");
          responseBox.className = "border p-[5px] m-[5px] bg-white";
          responseBox.innerHTML = `
            <b>${response.name}</b><br>
            ${response.comment}<br>
            <p style="font-size: 12px; color: gray;">${response.time}</p>`;
          div4.appendChild(responseBox);

          let allQuestions = JSON.parse(localStorage.getItem("questions")) || [];
          allQuestions[index].responses = allQuestions[index].responses || [];
          allQuestions[index].responses.push(response);
          localStorage.setItem("questions", JSON.stringify(allQuestions));

          name.value = "";
          comment.value = "";
        }
      });

      div3.appendChild(name);
      div3.appendChild(comment);
      div3.appendChild(submit2);

      resultdiv.appendChild(div2);
      resultdiv.appendChild(h1);
      resultdiv.appendChild(div4);
      resultdiv.appendChild(div3);
    }

    let savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    outerdiv.innerHTML = "";
    savedQuestions.forEach((q, i) => {
      addQuestionToList(q, i);
    });

    search.addEventListener("input", function () {
      const searchText = this.value.toLowerCase();
      const allQuestions = JSON.parse(localStorage.getItem("questions")) || [];

      outerdiv.innerHTML = "";
      const matched = allQuestions
        .map((q, i) => ({ ...q, index: i }))
        .filter(
          (q) =>
            q.subject.toLowerCase().includes(searchText) ||
            q.question.toLowerCase().includes(searchText)
        );

      if (matched.length > 0) {
        matched.forEach((q) => addQuestionToList(q, q.index));
      } else {
        const notFound = document.createElement("div");
        notFound.className = "text-[20px] text-red-600 font-bold text-center mt-[20px]";
        notFound.innerText = "Match Not Found";
        outerdiv.appendChild(notFound);
      }
    });
  
