import { card2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal2 = () => (
  <section className={layout.section}>

<div className={layout.sectionImg}>
      <img src={card2} alt="billing" className="w-[100%] h-[100%]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      AI solutions for <br className="sm:block hidden" /> Architecture design
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The first step in using an AI solution is to gather data about the building that you want to design.
      You can do this by taking pictures of the building's exterior, or by taking measurements of its dimensions. 
      The next step is to upload these photos and measurements into your computer, 
      which will enable you to create a 3D model of the building. 
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      This model can then be used in conjunction with other software programs
      such as CAD or Revit, allowing you to analyze it further and make changes if necessary.

      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Once you've made these changes, you can export them back out into a format that can 
        be used by architects who are designing new buildings or renovating existing ones.
      </p>

     
    </div>

  </section>
);

export default CardDeal2;
