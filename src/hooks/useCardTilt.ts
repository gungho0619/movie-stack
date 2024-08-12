import { useEffect, useRef } from "react";

const cardMove = (x: number, y: number, scale: number) =>
  `perspective(500px) scale(${scale}) rotateX(${x}deg) rotateY(${y}deg)`;

export function useCardTilt() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cardContainer = containerRef.current;
    const card = cardRef.current;
    if (cardContainer === null || card === null) return;

    function tiltCard(e: MouseEvent) {
      const cardRect = cardContainer?.getBoundingClientRect();
      if (!cardRect) return;
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;

      const width = cardRect.width;
      const height = cardRect.height;

      const xRatio = x / width;
      const yRatio = y / height;

      let xRotate = -1 * (xRatio - 0.5);
      let yRotate = yRatio - 0.5;

      if (card) {
        card.style.transform = cardMove(5 * yRotate, 3 * xRotate, 1.01);
      }
    }

    function enterCard() {
      if (card) {
        setTimeout(() => {
          card.style.transition = "";
        }, 300);
        card.style.transition = "1s cubic-bezier(0.03, 0.98, 0.52, 0.99)";
      }
    }

    function dropTilt() {
      if (card) {
        card.style.transition = "1s cubic-bezier(0.03, 0.98, 0.52, 0.99)";
        card.style.transform = cardMove(0, 0, 1);
      }
    }

    cardContainer.addEventListener("mouseenter", enterCard);
    cardContainer.addEventListener("mousemove", tiltCard);
    cardContainer.addEventListener("mouseleave", dropTilt);

    return () => {
      cardContainer.removeEventListener("mouseenter", enterCard);
      cardContainer.removeEventListener("mousemove", tiltCard);
      cardContainer.removeEventListener("mouseout", dropTilt);
    };
  }, [containerRef]);

  return { containerRef, cardRef };
}
