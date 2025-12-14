import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="slide-up">
      <Link to="/" className="back-link">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
