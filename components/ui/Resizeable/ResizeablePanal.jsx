"use client";

import { useRef } from "react";
import LeftPanal from "./LeftPanal";
import RightPanal from "./RightPanal";

const ResizeablePanal = () => {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const handleMouseMoveRef = useRef(null);
  const handleWidthUpdates = (
    newPosition,
    start,
    inintialRightWidth,
    initialLeftWidth
  ) => {
    const leftElementStyles = leftContainerRef.current.style;
    const rightElementStyles = rightContainerRef.current.style;

    if (start < newPosition) {
      const difference = newPosition - start;
      leftElementStyles.width = `${initialLeftWidth + difference}px`;
      rightElementStyles.width = `${inintialRightWidth - difference}px`;
    } else {
      const difference = start - newPosition;
      leftElementStyles.width = `${initialLeftWidth - difference}px`;
      rightElementStyles.width = `${inintialRightWidth + difference}px`;
    }
  };

  const handleMouseDown = (event) => {
    const start = event.clientX;
    const initialLeftWidth = leftContainerRef.current.offsetWidth;
    const inintialRightWidth = rightContainerRef.current.offsetWidth;

    const handleMouseMove = (event) => {
      const newPosition = event.clientX;
      handleWidthUpdates(
        newPosition,
        start,
        inintialRightWidth,
        initialLeftWidth
      );
    };
    handleMouseMoveRef.current = handleMouseMove;
    document.body.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseUp = () => {
    document.body.removeEventListener("mousemove", handleMouseMoveRef.current);
  };

  return (
    <div className="mt-8" >
      <h1 className="font-black text-4xl p-2">Resizeable Panal</h1>
      <section className="rounded m-2 mt-4 overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.3),0_20px_30px_rgba(0,0,0,0.3)]">

      <div
        onMouseUp={handleMouseUp}
        className="flex items-center h-[70vh] justify-center bg-gray-800 relative text-white border-2 border-gray-800"
        >
        <LeftPanal reference={leftContainerRef} />
        <div
          onMouseDown={handleMouseDown}
          className="w-2 relative h-full bg-gray-800"
          >
          <div className="w-1 absolute top-0 left-[50%] translate-x-[-50%] bottom-0 border bg-blue-700 hover:w-2 cursor-e-resize "></div>
        </div>
        <RightPanal reference={rightContainerRef} />
      </div>
          </section>
    </div>
  );
};

export default ResizeablePanal;
