import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (typeof req.body === "string") {
    req.body = JSON.parse(req.body);
  }
  const userName = req.body.userName;
  const from = req.body.from;
  const text = req.body.text;

  const subject = `PORTFOLIO MESSAGE from ${userName}`;

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: "oxdcjbsqsjlshfey",
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }

  const mailOptions = {
    from: from,
    to: process.env.EMAIL,
    subject: subject,
    text: text,
  };
  console.log("🚀 ~ mailOptions", mailOptions);

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
}
