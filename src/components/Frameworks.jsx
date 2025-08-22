import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "C",
    "cplusplus",
    "css3",
    "Android Studio",
    "Apache Maven",
    "Bootstrap",
    "Apache Tomcat",
    "git",
    "github",
    "html5",
    "Java",
    "Eclipse IDE",
    "IntelliJ IDEA",
    "Firebase",
    "Hibernate",
    "Spring",
    "MongoDB",
    "MySQL",
    "PostgresSQL",
    "threejs",
    "javascript",
    "microsoft",
    "TypeScript",
    "visualstudiocode",
    "react",
    "tailwindcss",
    "vitejs",
    "Adobe Premiere Pro",
    "After Effects",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={42}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`public/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={120} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`public/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt=""
    className="size-full object-contain p-1 rounded-sm duration-200 hover:scale-110"
  />
);
