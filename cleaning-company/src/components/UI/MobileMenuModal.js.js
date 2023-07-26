import classes from "./MobileMenuModal.module.css";

export default function MobileMenuModal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <i className={`fa-regular fa-circle-xmark ${classes.close}`} onClick={props.onConfirm}></i>
        <header className={classes.header}>
          <h2>MENU</h2>
        </header>
        <div>
          <ul className={`${classes["hidden-menu"]}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>What Clients Say</li>
            <li>Gallery</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </>
  );
}
