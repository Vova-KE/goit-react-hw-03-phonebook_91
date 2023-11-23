import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './style.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor={this.nameId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              className={style.name}
              onChange={this.handleChange}
              id={this.nameId}
            />
            <label className={style.label} htmlFor={this.numberId}>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                className={style.number}
                onChange={this.handleChange}
                id={this.numberId}
              />
            </label>
            <button type="submit" className={style.button}>
              Add contact
            </button>
          </label>
        </form>
      </>
    );
  }
}

export default ContactForm;
