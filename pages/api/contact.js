const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SG_API_KEY);

export default async function hadler(req, res) {
  const { name, email, content } = req.body;
  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: email,
    html: `
      <p><strong>Name:</strong>${name}</p>
      <p><strong>Email:</strong>${email}</p>
      <p><strong>Message:</strong>${content}</p>
      `,
  };
  await sgMail.send(msg);
  res.json({ success: true });
}
