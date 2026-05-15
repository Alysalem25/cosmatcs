"use client";

import Spline from "@splinetool/react-spline";
import { useEffect, useRef } from "react";

export default function SplineScene() {
  const splineRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!splineRef.current) return;

      // scroll progress
      const scroll =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

      // convert scroll to timeline value
      const timelineValue = scroll * 100;

      // set spline variable
      splineRef.current.setVariable(
        "scrollProgress",
        timelineValue
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0">
      <Spline
        scene="https://prod.spline.design/83wklDoR2hc5e3Az/scene.splinecode"
        onLoad={(spline) => {
          splineRef.current = spline;
        }}
      />
    </div>
  );
}