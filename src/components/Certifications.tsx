import { useState, useCallback } from "react";
import "./styles/Certifications.css";
import ProjectThumbnail from "./ProjectThumbnail";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const certifications = [
  {
    title: "What Is Generative AI?",
    provider: "LinkedIn Learning",
    year: "2026",
    description:
      "Foundational certification covering generative AI concepts, use cases, and how modern AI tools are shaping software workflows.",
    tools: "Generative AI • AI Fundamentals • Generative AI Tools",
    link: "https://www.linkedin.com/learning/certificates/a894f5ffba6711e35adac025b0eb091e08464100883834e4977deeee82067636",
  },
  {
    title: "Microsoft Copilot Studio",
    provider: "Microsoft",
    year: "2024",
    description:
      "Hands-on certification in building AI-powered automations and intelligent workflows using Microsoft Copilot Studio.",
    tools: "Microsoft Copilot Studio • AI Automation • Workflow Design",
    link: "https://kommodo.ai/i/asvxhYs0z4XlMoI7tWDD",
  },
  {
    title: "Excel Automation using ChatGPT",
    provider: "Professional Certification",
    year: "2024",
    description:
      "Practical training on automating Excel tasks and productivity workflows with ChatGPT-driven solutions.",
    tools: "ChatGPT • Excel • Productivity Automation",
    link: "https://kommodo.ai/i/Dod8GX1ObXbx8WvwLEeh",
  },
  {
    title: "National Financial Literacy",
    provider: "Certification Program",
    year: "2024",
    description:
      "Certification focused on financial literacy fundamentals, money management awareness, and practical financial decision-making skills.",
    tools: "Financial Literacy • Money Management • Personal Finance",
    link: "https://kommodo.ai/i/eS9Y3SQLkQP9wje0vdxT",
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="certifications-section" id="certifications">
      <div className="certifications-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>

        <div className="cert-carousel-wrapper">
          <button
            className="cert-carousel-arrow cert-carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous certification"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="cert-carousel-arrow cert-carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next certification"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="cert-carousel-track-container">
            <div
              className="cert-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {certifications.map((cert, index) => (
                <div className="cert-carousel-slide" key={index}>
                  <div className="cert-carousel-content">
                    <div className="cert-carousel-info">
                      <div className="cert-carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="cert-carousel-details">
                        <h4>{cert.title}</h4>
                        <p className="cert-carousel-provider">
                          {cert.provider} • {cert.year}
                        </p>
                        <p className="cert-carousel-description">
                          {cert.description}
                        </p>
                        <div className="cert-carousel-tools">
                          <span className="cert-tools-label">Focus Areas</span>
                          <p>{cert.tools}</p>
                        </div>
                        <div className="cert-carousel-links">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-carousel-link"
                            data-cursor="disable"
                          >
                            View Certificate <MdArrowOutward />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cert-carousel-image-wrapper">
                      <ProjectThumbnail
                        title={cert.title}
                        category="Certification"
                        variant="cert"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cert-carousel-dots">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`cert-carousel-dot ${
                  index === currentIndex ? "cert-carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to certification ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
