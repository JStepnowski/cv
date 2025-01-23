import {useState} from 'react';

import {motion} from 'framer-motion';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, message}),
      });

      const contentType = response.headers.get('Content-Type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        setResponseMessage('Wiadomość została wysłana!');
      } else {
        setResponseMessage(`Błąd: ${data}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResponseMessage(`Błąd: ${error.message}`);
      } else {
        setResponseMessage('Wystąpił nieznany błąd');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-[hsl(var(--primary-foreground))] flex flex-col items-center px-6 py-12 transition-colors duration-500'>
      <motion.div
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className='text-center mb-12'
      >
        <h1 className='text-5xl font-bold text-shadow mb-4'>Skontaktuj się ze mną</h1>
        <p className='text-lg text-white'>
          Masz pytania lub chcesz nawiązać współpracę? Poniżej znajdziesz moje dane kontaktowe.
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 0.4}}
        className='w-full max-w-2xl bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-lg p-6 shadow-lg mb-8 bg-opacity-80'
      >
        <h2 className='text-3xl font-semibold mb-4'>Dane kontaktowe</h2>
        <div className='space-y-4 text-lg'>
          <div className='flex items-center space-x-4'>
            <span className='text-2xl'>📞</span>
            <p>Telefon: 793 256 206</p>
          </div>
          <div className='flex items-center space-x-4'>
            <span className='text-2xl'>✉️</span>
            <p>
              E-mail:{' '}
              <a
                href='mailto:j.stepnowski97@gmail.com'
                className='text-[hsl(var(--primary))] underline hover:text-[hsl(var(--primary-foreground))]'
              >
                j.stepnowski97@gmail.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 0.8}}
        className='w-full max-w-2xl bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-lg p-6 shadow-lg bg-opacity-80'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl font-semibold mb-4'>Napisz do mnie</h2>
        <div className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-[hsl(var(--muted-foreground))] mb-2'>
              Imię
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Twoje imię'
              className='w-full p-3 bg-[hsl(var(--input))] text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-[hsl(var(--muted-foreground))] mb-2'>
              E-mail
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Twój e-mail'
              className='w-full p-3 bg-[hsl(var(--input))] text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-[hsl(var(--muted-foreground))] mb-2'>
              Wiadomość
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Twoja wiadomość'
              className='w-full p-3 bg-[hsl(var(--input))] text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-all'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <button
          type='submit'
          className='mt-6 w-full py-3 px-6 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:bg-[hsl(var(--primary-foreground))] hover:text-[hsl(var(--primary))] transition-all'
        >
          {loading ? 'Wysyłam...' : 'Wyślij wiadomość'}
        </button>

        {responseMessage && (
          <p className='mt-4 text-center text-lg text-white'>{responseMessage}</p>
        )}
      </motion.form>
    </div>
  );
};

export default ContactPage;
