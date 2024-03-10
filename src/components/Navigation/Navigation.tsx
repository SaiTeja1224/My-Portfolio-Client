import React, { useState } from "react";
import { useActiveSection } from "../../context/ActiveSectionContext";

const Navigation = () => {
  const { activeSection, setSection } = useActiveSection();
  const [activeSectionEnabled, setActiveSectionEnabled] = useState(false);
  const handleActiveSection = (section: string) => {
    const newSection = section.split("_")[0];
    setSection(newSection);
    if (!activeSectionEnabled) {
      setActiveSectionEnabled(true);
    }
    const a = document.createElement("a");
    a.href = `#${newSection}`;
    a.click();
  };
  return (
    <nav className="nav">
      <ul className="nav__wrapper">
        <li
          id="home_section"
          onClick={(e) => handleActiveSection(e.currentTarget.id)}
          className={`nav__option ${
            activeSectionEnabled && activeSection === "home" && "active-option"
          }`}
        >
          Home
        </li>
        <li
          id="about_section"
          onClick={(e) => handleActiveSection(e.currentTarget.id)}
          className={`nav__option ${
            activeSectionEnabled && activeSection === "about" && "active-option"
          }`}
        >
          About
        </li>
        <li
          id="skills_section"
          onClick={(e) => handleActiveSection(e.currentTarget.id)}
          className={`nav__option ${
            activeSectionEnabled &&
            activeSection === "skills" &&
            "active-option"
          }`}
        >
          Skills
        </li>
        <li
          id="project_section"
          onClick={(e) => handleActiveSection(e.currentTarget.id)}
          className={`nav__option ${
            activeSectionEnabled &&
            activeSection === "project" &&
            "active-option"
          }`}
        >
          Projects
        </li>
        <li
          id="contact-form_section"
          onClick={(e) => handleActiveSection(e.currentTarget.id)}
          className={`nav__option ${
            activeSectionEnabled &&
            activeSection === "contact-form" &&
            "active-option"
          }`}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
