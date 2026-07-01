import "./styles/ProjectThumbnail.css";

interface Props {
  title: string;
  category: string;
  variant?: "restaurant" | "crm" | "portfolio" | "ecommerce" | "cert";
}

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  restaurant: "thumb-restaurant",
  crm: "thumb-crm",
  portfolio: "thumb-portfolio",
  ecommerce: "thumb-ecommerce",
  cert: "thumb-cert",
};

const ProjectThumbnail = ({
  title,
  category,
  variant = "portfolio",
}: Props) => {
  return (
    <div className={`project-thumbnail ${variantClass[variant]}`}>
      <span className="project-thumbnail-tag">{category}</span>
      <p className="project-thumbnail-title">{title}</p>
    </div>
  );
};

export default ProjectThumbnail;
