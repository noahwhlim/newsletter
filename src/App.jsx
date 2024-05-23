import { useState } from "react";
import imgDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-dark-slate-grey h-full min-h-screen grid place-items-center">
      <div className="bg-white flex flex-row p-4 rounded-lg space-x-4 m-20">
        <div className="w-1/2">
          <h1 className="text-6xl pt-16 mb-4 text-center font-bold">
            Stay updated!
          </h1>
          <div className="px-10">
          <p className="font-bold mb-4">
            Join 60,000+ product managers receiving monthly updates on:{" "}
          </p>

          
            {/* talking points */}
            <div className="space-y-3 w-full mb-10">
              <div className="flex flex-row space-x-4">
                <img src={iconList} />
                <p className="w-full">
                  Product discovery and building what matters
                </p>
              </div>

              <div className="flex flex-row space-x-4">
                <img src={iconList} />
                <p>Measuring to ensure updates are a success</p>
              </div>

              <div className="flex flex-row space-x-4">
                <img src={iconList} />
                <p>And much more!</p>
              </div>
            </div>

            {/* email */}
            <div className="w-full mb-4">
              <p className="font-bold">Email address</p>
              <input type="text" className="outline rounded-lg w-full h-12" />
            </div>

            {/* subscribe button */}
            <div className="">
              <button type="submit" className="outline rounded-lg h-12 w-full">
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
        </div>

        <img src={imgDesktop} className="w-1/2 object-cover" />
      </div>
    </div>
  );
}

export default App;
