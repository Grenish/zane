import React, { useState, useEffect, useRef } from "react";
import fallback from "../json/fallback.json";
import queries from "../json/data";
import Fuse from "fuse.js";
import { create, all } from "mathjs";

const Chatbox = () => {
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

  const math = create(all);

  const handleUserMessage = async (event) => {
    const fuse = new Fuse(queries, {
      keys: ["query"],
      threshold: 0.3,
    });
  
    if (event.key === "Enter" || event.type === "click") {
      const userMessage = event.target.value.trim();
  
      try {
        const result = math.evaluate(userMessage);
        setMessages([
          ...messages,
          { text: userMessage, isUser: true },
          { text: result, isUser: false },
        ]);
      } catch (e) {
        const results = fuse.search(userMessage);
  
        if (results.length > 0) {
          const matchedQuery = results[0].item;
          const responses = matchedQuery.response;
          const response =
            responses[Math.floor(Math.random() * responses.length)];
          setMessages([
            ...messages,
            { text: userMessage, isUser: true },
            { text: response, isUser: false },
          ]);
        } else {
          try {
            
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
  
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
      }
  
      event.target.value = "";
    }
    
  };
  

  




  
  return (
    <div className="w-full h-screen">
      <div className="background"></div>
      <div className=" w-full flex flex-col justify-center items-center">
        <span className="text-2xl sm:text-5xl font-bold mb-1">
          Welcome to ZANE 
        </span>
        <span className="text-xs font-thin p-2 rounded-full bg-blue-600">Experiment</span>
        <span className="text-xs mb-3">
          New version ZANE V2.1 |{" "}
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
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md md:text-sm text-xs mb-2">
                  Explain quantum computing in simple terms
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md md:text-sm text-xs mb-2">
                  What is the difference between a valence electron and an inner
                  electron?
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md md:text-sm text-xs mb-2">
                  Who is the CEO of Amazon?
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md md:text-sm text-xs">
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
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md md:text-sm text-xs mb-2">
                  Abilities are restricted to certain types of questions and
                  tasks.
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md md:text-sm text-xs mb-2">
                  Ability to understand and respond may be limited by its
                  programming and training data.
                </li>
                <li className="p-2 bg-[#ffffff55] rounded-xl shadow-md md:text-sm text-xs">
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
            <div key={index} className="p-2">
              {message.isUser ? (
                <p
                  className={`mt-3 p-3 mb-0  rounded-t-xl ${
                    theme == "dark" ? "bg-[#252525]" : "bg-[#e3e3e3]"
                  }`}
                >
                  <span className="font-bold">You:</span> {message.text}
                </p>
              ) : (
                <p
                  className={`p-3 rounded-b-xl ${
                    theme == "dark" ? "bg-[#252525]" : "bg-[#e3e3e3]"
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Zane:</strong> ${message.text}`,
                    }}
                  ></div>
                  <p className="text-[10px] text-end">
                    Not happy with the answer?{" "}
                    <a
                      href="https://forms.gle/xng28RSZX663kdnC8"
                      target="_blank"
                      className="underline"
                    >
                      Feedback
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
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
