import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserGraduate, FaArrowRight } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";

const AdminNavBar = () => {
  const [isStudentsMenuOpen, setIsStudentsMenuOpen] = useState(false);
  const [isTeachersMenuOpen, setIsTeachersMenuOpen] = useState(false);
  const [isClassMenuOpen, setIsClassMenuOpen] = useState(false);

  const toggleStudentsMenu = () => setIsStudentsMenuOpen(!isStudentsMenuOpen);
  const toggleTeachersMenu = () => setIsTeachersMenuOpen(!isTeachersMenuOpen);
  const toggleClassMenu = () => setIsClassMenuOpen(!isClassMenuOpen);

  return (
    <div className="w-64 bg-white text-[#073861] h-screen pt-6">
      <nav>
        <ul className="space-y-4">
          <li className="hover:bg-[#F4F4F4] font-bold w-full px-5 py-3 flex gap-3 items-center">
            <BiSolidDashboard /> Tableau de bord
          </li>

          {/* Gestion des élèves avec sous-menu */}
          <li className="hover:bg-[#F4F4F4] px-5 py-3 rounded cursor-pointer">
            <div
              onClick={toggleStudentsMenu}
              className="flex items-center justify-between"
            >
              <div className="flex gap-3 items-center font-bold">
                <FaUserGraduate />
                Gestion des élèves
              </div>
              {isStudentsMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {isStudentsMenuOpen && (
              <ul className="animate-slide-down">
                <li className="flex gap-4 items-center mt-3">
                  <FaArrowRight />
                  Liste des élèves
                </li>
                <li className="flex gap-4 items-center mt-3">
                  <FaArrowRight />
                  Ajouter un élève
                </li>
              </ul>
            )}
          </li>

          {/* Gestion des enseignants avec sous-menu */}
          <li className="hover:bg-[#F4F4F4] px-5 py-3 rounded cursor-pointer">
            <div
              onClick={toggleTeachersMenu}
              className="flex items-center justify-between"
            >
              <div className="flex gap-3 items-center font-bold">
                <GiTeacher />
                Gestion des enseignants
              </div>

              {isTeachersMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {isTeachersMenuOpen && (
              <ul className="animate-slide-down">
                <li className="flex gap-4 items-center mt-3">
                  <FaArrowRight />
                  Liste des enseignants
                </li>
                <li className="flex gap-4 items-center mt-3">
                  <FaArrowRight />
                  Ajouter un enseignant
                </li>
              </ul>
            )}
          </li>

          {/* Gestion des classes avec sous-menu */}
          <li className="hover:bg-[#F4F4F4] px-5 py-3 rounded cursor-pointer">
            <div
              onClick={toggleClassMenu}
              className="flex items-center justify-between"
            >
              <div className="flex gap-3 items-center font-bold">
                <SiGoogleclassroom  />
                Gestion des classes
              </div>

              {isClassMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {isClassMenuOpen && (
              <ul className="animate-slide-down">
                <li className="flex gap-4 items-center mt-3">
                  <FaArrowRight />
                  Liste des classes
                </li>
                <li className="flex gap-4 items-center mt-3">
                  <FaArrowRight />
                  Ajouter une classe
                </li>
              </ul>
            )}
          </li>

          <li className="hover:bg-[#F4F4F4] font-bold w-full px-5 py-3 flex gap-3 items-center">
            <RiMessage2Fill /> Envoyer un message
          </li>

          <li className="hover:bg-[#F4F4F4] font-bold w-full px-5 py-3 flex gap-3 items-center">
            <FaQuestionCircle  /> Support et Aide
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavBar;
