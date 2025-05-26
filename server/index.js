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
const sendConfirmationEmail = async (toEmail, name, plan) => {
  let emailContent = `
    <h2>Xin chào ${name},</h2>
    <p>Cảm ơn bạn đã đăng ký tư vấn! Chúng tôi đã nhận được thông tin của bạn:</p>
    <ul>
      <li><strong>Họ và tên:</strong> ${name}</li>
      <li><strong>Email:</strong> ${toEmail}</li>
  `;
  
  // Kiểm tra và hiển thị plan, nếu không có thì hiển thị thông báo mặc định
  if (plan && plan.trim()) {
    emailContent += `<li><strong>Gói dịch vụ:</strong> ${plan}</li>`;
  } else {
    emailContent += `<li><strong>Gói dịch vụ:</strong> Chưa chọn gói dịch vụ</li>`;
  }

  emailContent += `
    </ul>
    <p>Chúng tôi sẽ liên hệ với bạn sớm nhất. Nếu có thắc mắc, vui lòng liên hệ qua email này.</p>
    <p>Trân trọng,<br/>Đội ngũ hỗ trợ</p>
  `;

  const mailOptions = {
    from: 'Gold Store Solution',
    to: toEmail,
    subject: 'Xác nhận đăng ký thành công',
    html: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    // console.log(`Email xác nhận đã được gửi đến ${toEmail}`);
  } catch (error) {
    // console.error('Lỗi khi gửi email:', error.message);
    throw new Error('Không thể gửi email xác nhận');
  }
};

// Route proxy để gửi dữ liệu lên Google Sheet và gửi email
app.post('/proxy', async (req, res) => {
  try {
    // console.log('📥 Dữ liệu nhận từ client:', req.body);

    // Chuyển dữ liệu từ req.body thành URL-encoded
    const formData = new URLSearchParams(req.body).toString();
    // Gửi dữ liệu lên Google Sheet
    const response = await axios.post(scriptURL, req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Kiểm tra phản hồi từ Google Apps Script
    if (response.data.result !== 'success') {
      throw new Error('Không thể ghi dữ liệu vào Google Sheet');
    }

    // Gửi email xác nhận đến người dùng nếu email được cung cấp
    const { name, email, plan } = req.body;

    // console.log('📋 Giá trị của plan:', plan);

    if (email && email.trim()) {
      await sendConfirmationEmail(email, name, plan);
    }

    // Trả về phản hồi thành công
    res.json({ 
      result: 'success', 
      message: 'Dữ liệu đã được ghi' + (email && email.trim() ? ' và email xác nhận đã gửi!' : '') 
    });
  } catch (error) {
    console.error('Lỗi:', error.message);
    res.status(500).json({ result: 'error', message: error.message });
  }
});

// Khởi động server
app.listen(port, () => {
  console.log(`Proxy server chạy tại http://localhost:${port}`);
});