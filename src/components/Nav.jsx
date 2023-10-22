import React from "react";

function Nav() {
  return (
    <div>
      <nav class="bg-bg-nav flex flex-row justify-between items-center z-10 py-4 px-8">
        <h1 className="App-title" class="text-4xl w-2/4 font-medium text-neutral-50">CYBERA</h1>
        <ul class="flex flex-row z-10 justify-between w-2/4">
          <li>
            <a href="#home" class="text-neutral-50 text-2xl font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="text-neutral-50 text-2xl font-medium">
              Sobre 
            </a>
          </li>
          <li>
            <a href="#projects" class="text-neutral-50 text-2xl font-medium">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" class="text-neutral-50 text-2xl font-medium">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
