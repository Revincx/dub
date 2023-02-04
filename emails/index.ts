import { buildSendMail } from "mailing-core";
import nodemailer from "nodemailer";

const sendMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST || "smtp.postmarkapp.com",
    port: parseInt(process.env.EMAIL_SERVER_PORT) || 587,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  }),
  defaultFrom: process.env.EMAIL_FROM,
  configPath: "./mailing.config.json",
});

export default sendMail;

export const sendMarketingMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: "smtp-broadcasts.postmarkapp.com",
    port: 587,
    auth: {
      user: process.env.POSTMARK_MARKETING_API_KEY,
      pass: process.env.POSTMARK_MARKETING_API_SECRET,
    },
  }),
  defaultFrom: "Steven from Dub <steven@ship.dub.sh>",
  configPath: "./mailing.config.json",
});
