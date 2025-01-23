require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Ustawienia transportera nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Zmienna środowiskowa
    pass: process.env.EMAIL_PASS, // Zmienna środowiskowa
  },
});

// Endpoint do wysyłania wiadomości
app.post('/send-email', (req, res) => {
  const {name, email, message} = req.body;

  // Konfiguracja e-maila
  const mailOptions = {
    from: process.env.EMAIL_USER, // Używamy zmiennej środowiskowej
    to: process.env.EMAIL_USER, // Używamy zmiennej środowiskowej
    subject: 'Nowa wiadomość z formularza kontaktowego',
    text: `
      Imię: ${name}
      E-mail: ${email}
      Wiadomość: ${message}
    `,
  };

  // Wysyłanie wiadomości
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Błąd przy wysyłaniu wiadomości:', error); // Logowanie błędu
      return res.status(500).send('Wystąpił błąd przy wysyłaniu wiadomości');
    }
    // Jeśli e-mail został wysłany pomyślnie, wysyłamy odpowiedź sukcesu
    console.log('E-mail wysłany pomyślnie:', info.response);
    return res.status(200).send('Wiadomość wysłana pomyślnie');
  });
});

// Uruchomienie serwera
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
