import React from "react";
import Logo from "../cybera-logo-340.png";

function Nav() {
  return (
    <div>
      <nav class="flex flex-row justify-between items-center py-4 px-8">
        <img class="w-32" src={Logo} alt="Logo Cybera" />
        <ul class="flex flex-row z-10 justify-between w-2/4">
          <li>
            <a href="#home" class="font-sans text-neutral-50 text-xl font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="font-sans text-neutral-50 text-xl font-medium">
              Sobre 
            </a>
          </li>
          <li>
            <a href="#projects" class="font-sans text-neutral-50 text-xl font-medium">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" class="font-sans text-neutral-50 text-xl font-medium">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
