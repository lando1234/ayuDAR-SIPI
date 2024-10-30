import React from "react";
import Header from "../Header";
import ProgressRing from "./ProgressRing";

export interface RegisterBaseProps {
  progress: number;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const RegisterBase = (props: RegisterBaseProps) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container max-w-md mx-auto">
          <div className="flex flex-col items-center p-0 lg:p-6 bg-primary text-white">
            {/* Progress Circle */}
            <div className="flex w-full justify-between items-center p-4">
              <ProgressRing progressStep={props.progress}></ProgressRing>
              <div className="flex-1 flex flex-col items-end">
                <h1 className="text-xl font-semibold">{props.title}</h1>
                <p className="text-sm mb-4">{props.subtitle}</p>
              </div>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterBase;
