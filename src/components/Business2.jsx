import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business2 = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business <br className="sm:block hidden" /> with "AI Engineering"
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Enterprises that have adopted AI engineering practices to build and manage adaptive 
      AI systems will outperform their peers in the operationalizing AI models by at least 25%.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The key to building and managing adaptive AI systems is to use an approach called "AI Engineering." 
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      This approach is based on a set of principles that guide the design of both software and hardware architectures, 
      as well as the processes used to create them. 
      It also incorporates best practices from other disciplines, such as DevOps.
      </p>

      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business2;


