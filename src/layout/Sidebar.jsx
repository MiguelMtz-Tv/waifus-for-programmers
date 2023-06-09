import { useState, useEffect } from "react";

function Sidebar({onData}) {
  const WAIFUS_ENDPOINT = 'https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/';
  const [langs, setLangs] = useState([]);
  
  useEffect(() => {
    fetch(WAIFUS_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      let lang = [];
      for(let i = 0; i < data.length; i++){
        if(data[i].name != '.DS_Store' && data[i].name != 'README.md' && data[i].name != 'CONTRIBUTING.md'){
          let path = data[i].name.replace('#', '%23');
          lang[i] = {
            name: data[i].name,
            path: path
          }
        }
      }
      setLangs(lang);
    })
  }, []);

  function selectLang(data){
    onData(data);
  }

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ml-2 md:mr-24">
                <img src="" className="h-8 mr-3" alt="" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Waifus for Programmers
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {langs.map((lang) => {
              return (
                <li key={lang.name}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer"
                onClick={() => selectLang(lang.path)}
                >
                    <span className="ml-3">{lang.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
