import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){
  emailjs.init("RKcrZkSA2MtniZW4S");

  const form = useRef(null);

  const sendEmail = (e)=>{
    e.preventDefault();
    // replace placeholders with your EmailJS values
    emailjs.sendForm("service_r36my2f","template_to31fb9",form.current,"RKcrZkSA2MtniZW4S")
      .then(()=> alert("Message sent!"))
      .catch(err=>{ console.error(err); alert("Failed to send."); });
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail} style={{marginTop:12}}>
        <input className="input" name="user_name" placeholder="Your name" required />
        <input className="input" name="user_email" type="email" placeholder="Email" required />
        <textarea className="textarea" name="message" rows="6" placeholder="Message" required />
        <button className="button" type="submit">Send Message</button>
      </form>
    </section>
  );
}
