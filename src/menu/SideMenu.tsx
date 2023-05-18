import { RubikCube } from "../main/RubikCube";

export function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <h2>Contact Form</h2>
        <form action="images/seflie.jpg" method="post">
          <label htmlFor="contact-email">Email</label>
          <input type="email" name="email" id="contact-email" required placeholder="hr@company.com" />
          <br />
          <label htmlFor="contact-name">Name</label>
          <input type="text" name="name" id="contact-name" required placeholder="Enter your Name" />
          <br />
          <label htmlFor="contact-reason">Reason</label>
          <input type="text" name="reason" id="contact-reason" required placeholder="Reason for contacting me" />
          <br />
          <button type="submit">Contact Us</button>
        </form>
      </section>
      <section>
        <h2>Rubik's Face</h2>
        <RubikCube />
      </section>
    </div>
  );
}
