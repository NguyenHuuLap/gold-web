const express = require('express');
const axios = require('axios');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Web app URL của Google Apps Script
const scriptURL = process.env.SCRIPT_URL;

// Cấu hình Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Hàm gửi email
const sendConfirmationEmail = async (toEmail, name) => {
  const mailOptions = {
    from: 'nguyenlap1910@gmail.com',
    to: toEmail,
    subject: 'Xác nhận đăng ký thành công',
    html: `
      <h2>Xin chào ${name},</h2>
      <p>Cảm ơn bạn đã đăng ký tư vấn! Chúng tôi đã nhận được thông tin của bạn:</p>
      <ul>
        <li><strong>Họ và tên:</strong> ${name}</li>
        <li><strong>Email:</strong> ${toEmail}</li>
      </ul>
      <p>Chúng tôi sẽ liên hệ với bạn sớm nhất. Nếu có thắc mắc, vui lòng liên hệ qua email này.</p>
      <p>Trân trọng,<br/>Đội ngũ hỗ trợ</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email xác nhận đã được gửi đến ${toEmail}`);
  } catch (error) {
    console.error('Lỗi khi gửi email:', error.message);
    throw new Error('Không thể gửi email xác nhận');
  }
};

// Route proxy để gửi dữ liệu lên Google Sheet và gửi email
app.post('/proxy', async (req, res) => {
  try {
    // Chuyển dữ liệu từ req.body thành URL-encoded
    const formData = new URLSearchParams(req.body).toString();
    // console.log('📥 Nhận từ frontend:', req.body);

    // console.log('📤 Dữ liệu gửi tới Google Sheet:', formData);
    // Gửi dữ liệu lên Google Sheet
    const response = await axios.post(scriptURL, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Kiểm tra phản hồi từ Google Apps Script
    if (response.data.result !== 'success') {
      throw new Error('Không thể ghi dữ liệu vào Google Sheet');
    }

    // Gửi email xác nhận đến người dùng
    const { name, email } = req.body;
    await sendConfirmationEmail(email, name);

    // Trả về phản hồi thành công
    res.json({ result: 'success', message: 'Dữ liệu đã được ghi và email xác nhận đã gửi!' });
  } catch (error) {
    console.error('Lỗi:', error.message);
    res.status(500).json({ result: 'error', message: error.message });
  }
});

// Khởi động server
app.listen(port, () => {
  console.log(`Proxy server chạy tại http://localhost:${port}`);
});