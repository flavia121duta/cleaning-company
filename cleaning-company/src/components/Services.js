import classes from "./Services.module.css";
import CleaningCard from "./UI/CleaningCard";

export default function Services() {
  return (
    <section id="services" className={classes.parallax}>
      <div className={`${classes["our-services"]}`}>
        <h2 className={`${classes["title-style"]}`}>Our Services</h2>
        <hr className={`${classes["horizontal-line"]}`} />
        <p className={`${classes["text-style"]}`}>
          Our professional and experienced cleaning staff does the job right the
          first time, giving you confidence that you office and building will
          always look their best.
        </p>
      </div>

      <div className={`${classes["services-contaier"]}`}>
        <CleaningCard
          className={`${classes["first-card"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/icons-for-cleaning%2Fvacuum-cleaner.png?alt=media&token=c6f8452b-fdd3-4f0e-8818-572146c09efe"
          alt="vacuum cleaner"
          title="Home Cleaning"
          text="Revolutionary cleaning with powerful vacuum technology!"
        />
        <CleaningCard
          className={`${classes["second-card"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/icons-for-cleaning%2Firon.png?alt=media&token=9e675f02-fac4-48b9-98a5-590377617cd5"
          alt="iron"
          title="Cloth Ironing"
          text="Flawless fabrics, pressed to perfection."
        />
        <CleaningCard
          className={`${classes["third-card"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/icons-for-cleaning%2Fwashing-maschine.png?alt=media&token=e6514667-dc2d-45c7-835a-147d220d71fb"
          alt="washing machine"
          title="Washing Clothes"
          text="Fresh, clean clothes – your wardrobe's best friend."
        />
        <CleaningCard
          className={`${classes["fourth-card"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/icons-for-cleaning%2Fvessels.png?alt=media&token=13c100a2-59ec-4585-af88-ba46c6252896"
          alt="vessel"
          title="Washing Up"
          text="Spotless dishes, sparkling kitchen – we wash, you relax!"
        />

        <CleaningCard
          className={`${classes["fifth-card"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/icons-for-cleaning%2Fwindows-cleaning.png?alt=media&token=fb666211-8532-448d-a4b0-198e069f6f9e"
          alt="cleaning windows"
          title="Window Cleaning"
          text="Crystal-clear views, one streak at a time."
        />
        <CleaningCard
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/icons-for-cleaning%2Fdumpster.png?alt=media&token=8941ec67-1142-4c90-9a85-9123ab859c81"
          alt="dumpster"
          title="Scavengery"
          text="From mess to pristine, we handle your trash with care."
        />
      </div>
    </section>
  );
}
