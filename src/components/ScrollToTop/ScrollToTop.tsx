// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // setTimeout нужен, чтобы перебить скролл браузера и SPA-навигацию
    setTimeout(() => {
      // Скроллим window
      window.scrollTo(0, 0);

      // Скроллим контейнер main, если есть кастомный scroll
      const main = document.querySelector("main");
      if (main) main.scrollTo(0, 0);

      // Для надежности очищаем scroll у HTML/body
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;