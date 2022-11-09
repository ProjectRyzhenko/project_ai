import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Artificial intelligence <br className="sm:block hidden" /> models MaaS apps
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The idea behind this concept is that it allows people to live in compact urban areas without having to spend hours each day 
      travelling between different parts of town.
       It also means less pollution since fewer cars are needed because many people will be able to walk or cycle instead of driving everywhere themselves.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      A 15-minute city should provide all the services that people need on a daily 
      basis within walking distance or a short bus or bike ride away. This includes health care, education, entertainment, shopping and work.
      </p>

          
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
