import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      The future of apps <br className="sm:block hidden" />  with AI
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The future of mobile apps is no longer one app to rule them all. Instead, the future is a superapp—an app that provides end users 
      (e.g., customers, partners or employees) with a set of core features and access to independently created miniapps. 
      The superapp is built as a platform to deliver consistent and personalized app experiences.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      From an engineering perspective, superapps allow teams to create smaller projects that are easier to manage and maintain than larger ones. 
      For example, if you wanted to build an employee app but didn't have the time or resources right now,
      you could create a "mini-app" in your existing platform that would allow employees access
      </p>

            
    </div>
  </section>
);

export default Billing;
