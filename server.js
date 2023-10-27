const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
// Настройка Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 587, // SSL порт
    secure: true,
    auth: {
        user: 'kulesh_uladzislau@mail.ru', // Ваша почта Gmail
        pass: 'ParadoX97', // Пароль от почты
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'kulesh_uladzislau@mail.ru', // Электронная почта получателя
        subject: 'Сообщение с вашего сайта',
        text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Произошла ошибка при отправке сообщения.');
        } else {
            console.log('Сообщение отправлено: ' + info.response);
            res.status(200).send('Сообщение успешно отправлено.');
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
