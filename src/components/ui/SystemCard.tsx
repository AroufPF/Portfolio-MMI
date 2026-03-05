// Composant conteneur de base pour le Dashboard
import React from "react";

interface SystemCardProps {
  children: React.ReactNode;
  className?: string;
}

export const SystemCard: React.FC<SystemCardProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`group bg-slate-50 border-[1px] border-slate-200 rounded-lg p-6 transition-all duration-200 relative overflow-hidden ${className} hover:shadow-md hover:border-l-4 hover:border-cyan-400`}
  >
    {children}
  </div>
);

export default SystemCard;
