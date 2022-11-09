import { apple, bill2, google } from "../assets";
import styles, { layout } from "../style";

const Billing2 = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill2} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Architecture design<br className="sm:block hidden" /> industry with AI
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The engineering and architecture design industry is changing fast, and it's becoming increasingly important 
      for engineers to find ways to streamline their workflows. By 2026, 80% of engineering and architecture
       design organizations will establish platform teams as internal providers of reusable services,
       components and tools for finding optimized solutions for design and construction work.

      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With the help of these platform teams, engineers can better manage the complexities of their projects by providing a variety
       of resources that are all accessible from one interface.
       As these teams become more common in the industry, it's critical for engineers to understand how to use them effectively.
      </p>

            
    </div>
  </section>
);

export default Billing2;
