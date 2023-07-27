import classes from "./CleaningCard.module.css";

// TODO: props
export default function CleaningCard() {
  return (
    <div className={`${classes["service-card"]}`}>
      <img 
      src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/icons-for-cleaning%2Fsteam-iron.png?alt=media&token=f22c1717-6a6b-42dc-aba3-53cc3f4ca35b"
      alt="iron" 
      className={`${classes["service-img"]}`} />
      <h2 className={`${classes["service-title"]}`}>Home Cleaning</h2>
      <p>Ham jerky in pastrami, andouille ham hock nisi ut pig ground.</p>
    </div>
  );
}
