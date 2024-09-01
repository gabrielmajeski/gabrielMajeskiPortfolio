import React from 'react';
import styles from './Contact.module.css';
import Dropdown from '../dropdown/Dropdown';
import MailIcon from '../../Assets/MailIcon';
import WhatsIcon from '../../Assets/WhatsappIcon';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../form/Input';
import { FORM_POST } from '../../api';
import CodeBlock from './CodeBlock';
import FormSent from './FormSent';
import { useState } from 'react';
import Aside from '../helper/Aside';
import Head from '../helper/Head';

const opts = [
  {
    text: '(51) 98914-0371',
    link: 'https://api.whatsapp.com/send?phone=55515989140371',
    icon: <WhatsIcon />,
  },
  {
    text: 'gabrielcmajeski@gmail.com',
    link: 'mailto:gabrielcmajeski@gmail.com.br',
    icon: <MailIcon />,
  },
];

const Contact = () => {
  const firstName = useForm('');
  const email = useForm('email');
  const [msgSent, setMsgSent] = useState(false);
  const { error, loading, request } = useFetch();
  const [message, setMessage] = React.useState('');
  const date = new Date();
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const body = new FormData();
    body.append('name', firstName.value);
    body.append('email', email.value);
    body.append('message', message);
    const { url, options } = FORM_POST(body);
    const { response } = await request(url, options);
    if (response.ok) {
      setMsgSent(true);
    }
  }

  return (
    <>
      <Head
        title="Contato"
        description="Contato do portfolio, com informações dos meus contatos"
      />
      <Aside>
        <Dropdown data={opts} custom={false} text={'contatos'}></Dropdown>
      </Aside>

      <div className={styles.container}>
        {msgSent ? (
          <FormSent setMsgSent={setMsgSent} />
        ) : (
          <form onSubmit={handleSubmit} className="anime-left">
            <Input
              label={'_nome:'}
              type="text"
              name="name"
              {...firstName}
            ></Input>
            <Input
              label={'_email:'}
              type="text"
              name="email"
              {...email}
            ></Input>
            <div>
              <label htmlFor="message">_mensagem:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={({ target }) => setMessage(target.value)}
              ></textarea>
            </div>
            {loading ? (
              <button disabled={true}>Enviando...</button>
            ) : (
              <button  disabled={false}>Enviar</button>
            )}
          </form>
        )}
        <CodeBlock color={'#4D5BCE'}>
          {' '}
          <span data-line style={{ color: '#4D5BCE' }}>
            <span style={{ color: '#E99287' }}>const </span>
            button<span style={{ color: '#E99287' }}> = </span>
            document.querySelector(
            <span style={{ color: '#FEA55F' }}>'#sendBtn'</span>);
          </span>
          <span data-line>
            <span style={{ color: '#E99287' }}>const </span> message
            <span style={{ color: '#E99287' }}> = </span> &#123;
          </span>
          <span data-line>
            <span> name:</span>{' '}
            <span style={{ color: '#FEA55F' }}>"{firstName.value}"</span>,
          </span>
          <span data-line>
            <span> email:</span>{' '}
            <span style={{ color: '#FEA55F' }}>"{email.value}"</span>,
          </span>
          <span data-line>
            <span> message:</span>{' '}
            <span style={{ color: '#FEA55F' }}>"{message}"</span>,
          </span>
          <span data-line>
            <span style={{ color: 'gray' }}> date: </span>
            {}
            <span style={{ color: '#FEA55F' }}>
              "{date.toLocaleDateString('pt-BR', options).replace('.', '')}"
            </span>
          </span>
          <span data-line>&#125;</span>
          <span data-line> </span>
          <span data-line>
            button.addEventListener('
            <span style={{ color: '#FEA55F' }}>'click'</span>'), ()
            <span style={{ color: '#E99287' }}> =&#62;</span> &#123;
          </span>
          <span data-line> form.send(message);</span>
          <span data-line>&#125;)</span>
        </CodeBlock>
      </div>
    </>
  );
};

export default Contact;
