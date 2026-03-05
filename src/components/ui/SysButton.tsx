"use client";

import React from "react";
import Link from "next/link";
import { useAudio } from "../../hooks/useAudio";

interface SysButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export const SysButton = ({
  href,
  onClick,
  children,
  variant = "outline",
  className = "",
}: SysButtonProps) => {
  const { playHover, playClick } = useAudio();

  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide transition-all duration-200 group overflow-hidden";
  const variants = {
    primary: "bg-slate-800 text-slate-50 hover:bg-slate-700",
    outline:
      "border-[1px] border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 bg-transparent",
    ghost: "text-slate-600 hover:text-cyan-500 bg-transparent",
  };

  const buttonContent = (
    <>
      {/* Ligne décorative d'activation (Micro-interaction) */}
      <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 scale-y-0 origin-bottom transition-transform duration-200 group-hover:scale-y-100" />
      {/* Texte du bouton */}
      <span className="relative z-10 font-mono uppercase text-xs tracking-widest flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onMouseEnter={playHover}
        onClick={playClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        playClick();
        if (onClick) onClick();
      }}
      onMouseEnter={playHover}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default SysButton;
