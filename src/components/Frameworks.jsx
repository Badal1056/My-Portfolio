import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "c",
    "cplusplus",
    "css3",
    "androidstudio",
    "apachemaven",
    "bootstrap",
    "apachetomcat",
    "git",
    "github",
    "html5",
    "java",
    "eclipseide",
    "intellijidea",
    "firebase",
    "hibernate",
    "spring",
    "mongodb",
    "mysql",
    "postgressql",
    "three",
    "javascript",
    "microsoft",
    "typescript",
    "visualstudiocode",
    "react",
    "tailwindcss",
    "vitejs",
    "adobepremierepro",
    "aftereffects",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={42}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={120} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
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
