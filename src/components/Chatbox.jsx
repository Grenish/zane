import React, { useState } from "react";
import data from "../json/data.json";
import general from "../json/general.json";

const Chatbox = () => {
  const greetings = data.greetings;
  const farewells = data.farewells;

  const questions = general.questions;

  const [messages, setMessages] = useState([]);

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

      event.target.value = "";
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="background"></div>
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <span className="text-2xl sm:text-5xl font-bold mb-3">
          Welcome to ZANE
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
                  What is photosynthesis?
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
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="chatbox w-full fixed bottom-0 p-2">
        <div className="w-full flex justify-center gap-4 items-center">
          <div className="boxshadow  flex justify-center rounded-xl">
            <input
              type="text"
              placeholder="Ask something..."
              className="w-[300px] sm:w-[600px] p-3 outline-none rounded-md"
              onKeyPress={handleUserMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
