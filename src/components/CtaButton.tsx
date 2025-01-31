import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CtaButton = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <Link
      to={to}
      className="inline-flex items-center bg-brand-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
    >
      {children}
      <ArrowRight className="ml-2" size={20} aria-hidden="true" />
    </Link>
  );
