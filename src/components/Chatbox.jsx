import React, { useState, useEffect, useRef } from "react";
import data from "../json/data.json";
import general from "../json/general.json";
import { TypeAnimation } from "react-type-animation";
import fallback from "../json/fallback.json";

const Chatbox = () => {
  const greetings = data.greetings;
  const farewells = data.farewells;

  const questions = general.questions;
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([]);

  const handleClearChat = () => {
    setMessages([]);
  };

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (theme === "dark") {
      body.classList.add("dark-mode");
      body.style.backgroundColor = "#252525";
    } else {
      body.classList.remove("dark-mode");
      body.style.backgroundColor = "#f1f1f1";
    }
  }, [theme]);

  const handleUserMessage = (event) => {
    let response = "";

    if (event.key === "Enter") {
      const userMessage = event.target.value;
      if (
        userMessage.toLowerCase() === "hi" ||
        userMessage.toLowerCase() === "hello" ||
        userMessage.toLowerCase() === "hey" ||
        userMessage.toLowerCase() === "hi zane" ||
        userMessage.toLowerCase() === "hello zane" ||
        userMessage.toLowerCase() === "hey zane" ||
        userMessage.toLowerCase() === "hi, zane" ||
        userMessage.toLowerCase() === "hello, zane" ||
        userMessage.toLowerCase() === "hey, zane"
      ) {
        const randomGreeting =
          greetings[Math.floor(Math.random() * greetings.length)];
        setMessages([
          ...messages,
          { text: userMessage, isUser: true },
          { text: randomGreeting, isUser: false },
        ]);
      } else if (
        userMessage.toLowerCase() === "bye" ||
        userMessage.toLowerCase() === "bye zane"
      ) {
        const randomFarewells =
          farewells[Math.floor(Math.random() * farewells.length)];
        setMessages([
          ...messages,
          { text: userMessage, isUser: true },
          { text: randomFarewells, isUser: false },
        ]);
      }

      const matchedQuestion = Object.keys(questions).find(
        (question) => question.toLowerCase() === userMessage.toLowerCase()
      );

      if (matchedQuestion) {
        const answers = questions[matchedQuestion];
        const answer = answers[Math.floor(Math.random() * answers.length)];
        setMessages([
          ...messages,
          { text: userMessage, isUser: true },
          { text: answer, isUser: false },
        ]);
      }
      if (
        !matchedQuestion &&
        userMessage.toLowerCase() !== "hi" &&
        userMessage.toLowerCase() !== "hello" &&
        userMessage.toLowerCase() !== "hey" &&
        userMessage.toLowerCase() !== "hi zane" &&
        userMessage.toLowerCase() !== "hello zane" &&
        userMessage.toLowerCase() !== "hey zane" &&
        userMessage.toLowerCase() !== "hi, zane" &&
        userMessage.toLowerCase() !== "hello, zane" &&
        userMessage.toLowerCase() !== "hey, zane"
      ) {
        const fallbackResponses = fallback.fallbackResponses;
        const fallbackResponse =
          fallbackResponses[
            Math.floor(Math.random() * fallbackResponses.length)
          ];
        setMessages([
          ...messages,
          { text: userMessage, isUser: true },
          { text: fallbackResponse, isUser: false },
        ]);
      }

      event.target.value = "";
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="background"></div>
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <span className="text-2xl sm:text-5xl font-bold mb-1">
          Welcome to ZANE
        </span>
        <span className="text-xs mb-3">
          New version ZANE V2.0 |{" "}
          <a href="" target="_blank" className="underline">
            What's new?
          </a>{" "}
        </span>
        <span className="text-sm text-center sm:text-xl font-semibold mb-3">
          Your personal chatbot! I'm here to help you with anything you need.
          Let's chat!
        </span>
        <div className="flex sm:flex-row flex-col gap-5">
          <div className="">
            <span className="w-full flex justify-center mb-2">Examples</span>
            <div className="w-[300px]">
              <ul>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md text-sm mb-2">
                  Explain quantum computing in simple terms
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md text-sm mb-2">
                  What is the difference between a valence electron and an inner
                  electron?
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md text-sm mb-2">
                  Who is the CEO of Amazon?
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md text-sm">
                  What is the difference between prokaryotic and eukaryotic
                  cells?
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <span className="w-full flex justify-center mb-2">Limitations</span>
            <div className="w-[300px]">
              <ul>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md text-sm mb-2">
                  Abilities are restricted to certain types of questions and
                  tasks.
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md text-sm mb-2">
                  Ability to understand and respond may be limited by its
                  programming and training data.
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md text-sm">
                  Does not have emotions or the ability to understand and
                  respond to human emotions in a meaningful way.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 bg-[#ffffff55] rounded-xl shadow-md my-3 text-sm"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <div className="chat-container">
        <div className="main-chat-container bg-[#ffffff55] rounded-xl backdrop-blur-sm w-[900px] flex flex-col">
          {messages.map((message, index) => (
            <div key={index}>
              {message.isUser ? (
                <p className="px-5 pt-2">
                  <span className="font-bold">You:</span> {message.text}
                </p>
              ) : (
                <p className="px-5 pb-5">
                  <span className="font-bold">Zane:</span> {message.text}
                  <p className="text-[10px] text-end">
                    Not happy with the answer?{" "}
                    <a
                      href="https://forms.gle/xng28RSZX663kdnC8"
                      target="_blank"
                      className="underline"
                    >
                      add question
                    </a>{" "}
                  </p>
                </p>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="chatbox w-full fixed bottom-0 p-2">
        <div className="w-full flex justify-center items-center">
          <div className="  flex justify-center rounded-xl gap-3">
            
            <input
              type="text"
              placeholder="Ask something..."
              className="text w-[300px] sm:w-[600px] p-3 outline-none rounded-md boxshadow"
              onKeyDown={handleUserMessage}
            />
            <button
              onClick={handleClearChat}
              className=" p-2 boxshadow flex bg-[#fff] items-center justify-center w-[45px] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-stars text-[#252525] "
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
