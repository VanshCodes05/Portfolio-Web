import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdVerified } from "react-icons/md";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";

const certifications = [
  {
    label: "AI",
    title: "What Is Generative AI?",
    link: "https://www.linkedin.com/learning/certificates/a894f5ffba6711e35adac025b0eb091e08464100883834e4977deeee82067636",
  },
  {
    label: "MS",
    title: "Microsoft Copilot Studio",
    link: "https://kommodo.ai/i/asvxhYs0z4XlMoI7tWDD",
  },
  {
    label: "XL",
    title: "Excel Automation using ChatGPT",
    link: "https://kommodo.ai/i/Dod8GX1ObXbx8WvwLEeh",
  },
  {
    label: "FL",
    title: "National Financial Literacy",
    link: "https://kommodo.ai/i/eS9Y3SQLkQP9wje0vdxT",
  },
];

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="side-dock">
        <div className="social-icons" data-cursor="icons" id="social">
          <span>
            <a href="https://github.com/vanshsaini" target="_blank" aria-label="GitHub">
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/vansh-saini-a0bb19382"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span>
            <a
              href="mailto:vanshsaini8457@gmail.com"
              aria-label="Email"
              data-cursor="disable"
            >
              <MdEmail />
            </a>
          </span>
        </div>

        <div className="cert-icons">
          <p className="cert-icons-label">Certs</p>
          {certifications.map((cert) => (
            <a
              key={cert.label}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-icon-btn"
              title={cert.title}
              aria-label={cert.title}
              data-cursor="disable"
            >
              <MdVerified />
              <span>{cert.label}</span>
            </a>
          ))}
        </div>

        <a
          className="resume-button"
          href="/Vansh_Saini_Resume.pdf"
          target="_blank"
          data-cursor="disable"
        >
          <TbNotes />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
