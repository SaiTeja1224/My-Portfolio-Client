/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
interface ActiveSectionContextData {
  activeSection: string;
  setSection: (_: string) => void;
  setSectionByIndex: (_: number) => void;
}
const ActiveSectionContext = createContext<ActiveSectionContextData>({
  activeSection: "home",
  setSection() {},
  setSectionByIndex: (_) => {},
});

export const ActiveSectionProvider = ({ children }: { children: any }) => {
  const [activeSection, setActiveSection] = useState("home");

  const setSection = (section: string) => {
    setActiveSection(section);
  };
  const setSectionByIndex = (idx: number) => {
    if (idx === 0) {
      setActiveSection("home");
    } else if (idx === 1) {
      setActiveSection("about");
    } else if (idx === 2) {
      setActiveSection("skills");
    } else if (idx === 3) {
      setActiveSection("project");
    } else if (idx === 4) {
      setActiveSection("contact-form");
    }
  };

  const contextValue = {
    activeSection,
    setSection,
    setSectionByIndex,
  };
  return (
    <ActiveSectionContext.Provider value={contextValue}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => useContext(ActiveSectionContext);
