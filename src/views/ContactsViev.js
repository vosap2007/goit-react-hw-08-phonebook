import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Filter from '../components/Filter';
import Input from '../components/Input';
import Contacts from "../components/Contacts";
import Alert from '../components/Alert';
import styles from '../css/PhoneBook.module.css';
import '../css/animation.css';

class ContactsViev extends Component {
   state = {
    showTitle: false,
   error: false,
  }

  updateData = (value) => {
    this.setState({ error: value })

    setTimeout(() => {
      this.setState(() => {
        return {
          error: false
        };
      });
    }, 3000);
  }

  render() {
  return (
    <>
      <div className={styles.box}>

<CSSTransition
  in={this.state.error}
  appear={true}
  classNames='error'
  timeout={250}
  unmountOnExit>
  <Alert />
</CSSTransition>

<CSSTransition
  in={true}
  appear={true}
  classNames='fade'
  timeout={500}
  unmountOnExit>
  <h1 className={styles.phonebook}>Phonebook</h1>
</CSSTransition>

<Input updateData={this.updateData} />
<h2 className={styles.title}>Contacts</h2>

<CSSTransition
  in={true}
  timeout={250}
  classNames='fade'
  unmountOnExit>
  <Filter />
</CSSTransition>

<CSSTransition
  in={true}
  timeout={250}
  classNames='fade'
  unmountOnExit>
  <Contacts />
</CSSTransition>

</div>
    </>
  );
}
};

export default ContactsViev;