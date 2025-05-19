import React from "react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none w-full h-full">
      {/* Monochromatic Background Effects */}
      <div className="absolute rounded-full filter blur-[100px] animate-float-slow top-1/4 right-1/4 w-[35vw] h-[35vw] min-w-[300px] min-h-[300px] bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600 opacity-40 dark:opacity-30" />
      <div className="absolute rounded-full filter blur-[120px] animate-float-medium bottom-1/4 left-1/4 w-[45vw] h-[45vw] min-w-[350px] min-h-[350px] bg-gradient-to-tr from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-500 opacity-30 dark:opacity-25" />
      <div className="absolute rounded-full filter blur-[80px] animate-float-fast top-1/3 left-1/3 w-[25vw] h-[25vw] min-w-[250px] min-h-[250px] bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-700 opacity-50 dark:opacity-20" />
    </div>
  );
}