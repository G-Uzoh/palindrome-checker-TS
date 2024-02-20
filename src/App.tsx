import { useState } from "react";

function App() {
  const [input, setInput] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);

  const message = document.getElementById("message") as HTMLParagraphElement;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") checkPalindrome();
  };

  const checkPalindrome = () => {
    if (!input) alert("Please enter a text");

    const splitStr = input.toLowerCase().split(" ").join("");
    const reversedStr = splitStr.split("").reverse().join("");
    setIsPalindrome(splitStr === reversedStr);

    message.classList.remove("hidden");
  };

  return (
    <div className="bg-[#434059] min-h-screen text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg my-5 uppercase">Palindrome Checker</h1>
        <p className="w-[600px] mb-8 mt-2">
          A palindrome is a word, phrase, number, or sequence of symbols that
          reads the same backwords as forwards. Find out if a phrase is a
          palindrome by typing it in the input field and clicking the check
          button, or hitting Enter on your keyboard.
        </p>
        <input
          className="border border-gray-300 p-2 rounded-md w-80 mt-5 text-black"
          type="text"
          placeholder="Enter text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-slate-300 p-3 my-5 rounded-md text-black w-28"
          onClick={checkPalindrome}
        >
          Check
        </button>
        <div className={!input ? "hidden" : "block"}>
          <p id="message" className="hidden">
            {isPalindrome
              ? `${input} is a palindrome`
              : `${input} is not a palindrome`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
