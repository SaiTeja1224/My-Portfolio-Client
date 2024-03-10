import React, { useEffect } from "react";
import { useActiveSection } from "../context/ActiveSectionContext";

const useActiveSectionOnScroll = () => {
  const { setSection } = useActiveSection();

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setSection(entry.target.id);
      }
    });
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };
    const articles = document.getElementsByTagName("article");
    const sectionArrays = Array.from(articles);
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    sectionArrays.forEach((ref) => {
      observer.observe(ref);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return {};
};

export default useActiveSectionOnScroll;
