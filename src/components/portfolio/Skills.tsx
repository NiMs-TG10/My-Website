// "use client";
// import Image from "next/image";
// import MotionSplitText from "@/components/animated/MotionSplit";
// import { motion } from "motion/react";
// import { calmEase, skills } from "@/lib/Constant";

// export function Skills() {
//   return (
//     <section id="skills" className="max-w-7xl mx-auto px-6 py-20 relative">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: calmEase }}
//         viewport={{ once: true }}
//       >
//         <div className="text-center">
//           <MotionSplitText
//             text="Skills&nbsp;&amp;&nbsp;Technologies"
//             splitType="chars"
//             duration={0.3}
//             stagger={0.05}
//             yOffset={40}
//             className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
//           />
//         </div>
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className="flex flex-col h-32 items-center justify-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.04,
//                 ease: "easeOut",
//               }}
//             >
//               <Image
//                 src={skill.logo}
//                 alt={skill.name}
//                 width={60}
//                 height={60}
//                 className="mb-2 h-10 md:h-16"
//               />
//               <span className="text-sm font-medium text-center">
//                 {skill.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import MotionSplitText from "@/components/animated/MotionSplit";
import { motion } from "motion/react";
// Import the new categorized skills object
import { calmEase, skillsByCategory } from "@/lib/Constant";

// A utility function to format the category key into a title for display
const getCategoryTitle = (key) => {
  switch (key) {
    case "languages":
      return "LANGUAGES (Programming & Scripting) ";
    case "ai":
      return "AI / ML (Models & Vector DBs) ";
    case "web3":
      return "WEB3 & BLOCKCHAIN (Smart Contracts & Dapps) ";
    case "frontend":
      return "FRONTEND (Frameworks & Libraries) ";
    case "backend":
      return "BACKEND (Runtimes, Frameworks & DBs) ";
    case "devops":
      return "DEVOPS, CLOUD & INFRASTRUCTURE ";
    default:
      return key.toUpperCase();
  }
};

export function Skills() {
  // Convert the object of skills into an array of [key, value] pairs
  const skillCategories = Object.entries(skillsByCategory);

  // Variable to track the total index for staggered animation across all categories
  let globalSkillIndex = 0;

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="Skills&nbsp;&amp;&nbsp;Technologies"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-16"
          />
        </div>
      </motion.div>

      {/* Categories and Skills Section */}
      <div className="space-y-20">
        {skillCategories.map(([categoryKey, skillsArray], categoryIndex) => (
          <div key={categoryKey} className="group/category">
            {/* Category Title */}
            <motion.h3
              className="text-2xl md:text-3xl font-semibold font-feredoka mb-8 text-center sm:text-left text-primary/80 dark:text-white/90"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: calmEase, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {getCategoryTitle(categoryKey)}
            </motion.h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {skillsArray.map((skill, localIndex) => {
                // Use the global index for a continuous staggered animation delay
                const currentGlobalIndex = globalSkillIndex;
                globalSkillIndex += 1; // Increment for the next skill

                // Logic to handle the case where 'name' is missing, like in the TypeScript entry
                const skillName =
                  skill.name ||
                  skill.logo?.split("/").pop().split(".")[0] ||
                  "Unknown";
                const skillLogo = skill.logo || skill.name;

                return (
                  <motion.div
                    key={skillName}
                    className="flex flex-col h-32 items-center justify-center p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md transition-all hover:shadow-lg hover:bg-white/80 dark:hover:bg-gray-800/80 cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      // The delay uses the current global index for a staggered effect
                      delay: currentGlobalIndex * 0.04,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src={skillLogo}
                      alt={skillName}
                      width={60}
                      height={60}
                      className="mb-2 h-10 w-auto md:h-12 object-contain filter group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs sm:text-sm font-medium text-center mt-2 text-gray-700 dark:text-gray-300">
                      {skillName}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
