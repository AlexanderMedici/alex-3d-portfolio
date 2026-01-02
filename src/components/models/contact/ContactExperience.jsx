import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";

const ContactExperienceCanvas = lazy(() => import("./ContactExperienceCanvas"));

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobile) {
    return (
      <img
        src="/images/devices.png"
        alt="Workspace preview"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        loading="lazy"
      />
    );
  }

  return (
    <Suspense fallback={<div className="w-full h-full" />}>
      <ContactExperienceCanvas />
    </Suspense>
  );
};

export default ContactExperience;
