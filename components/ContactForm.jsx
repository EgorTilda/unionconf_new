import { useState } from 'react';

const ContactForm = () => {

  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      tel,
      email
    };
    console.log(data);
  };

    return (
        <form onSubmit={handleSubmit} className="contact-form" action="#" method="POST" name="form-contact">
            <fieldset className="contact-form__fields">
                <legend className="contact-form__title">Оставьте контактные данные:</legend>
                <input type="email" 
                        id="email" 
                        className="contact-form__field form-field"
                        placeholder="Почта: example@mail.com"
                        onChange={e => setEmail(e.target.value)}
                />
                <input type="tel" id="tel" className="contact-form__field form-field"
                    placeholder="Телефон: +7(916)111-11-11" />
                <button type="submit" className="contact-form__btn">Отправить</button>
            </fieldset>
        </form>
    );
}

export default ContactForm;