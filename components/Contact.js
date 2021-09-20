import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__container}>
        <h2 className={styles.contact__h2}>get in touch</h2>
        <form
          action="https://formsubmit.co/jvalvarenga@mailfence.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="/success" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
          <label className={styles.label__name} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input__name}
            type="name"
            name="name"
            id="name"
            required
          />
          <label className={styles.label__email} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input__email}
            type="email"
            name="email"
            id="email"
            required
          />
          <label className={styles.label__message} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            type="message"
            name="message"
            id="message"
            required
          />
          <button className={styles.btn__contact} type="submit">
            <h2>submit</h2>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
