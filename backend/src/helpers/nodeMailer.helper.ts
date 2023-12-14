import nodemailer from 'nodemailer'
import config from '../config/nodeMailer.config'

import { nodemailerMessageOptions } from '../interfaces/nodeMailer.interface';

export default class NodeMail {
    // Singleton
    private static instance: NodeMail;
    
    private constructor() {
    }
    
    public static getInstance(): NodeMail {
        if (!NodeMail.instance) {
            NodeMail.instance = new NodeMail();
        }
        return NodeMail.instance
    }

    private static setMessageOptions(recipient:string, emailSubject:string,resetLink:string) {
        const messageOptions:nodemailerMessageOptions = {
            from: process.env.NODEMAILER_EMAIL as string || 'stevehotcodes',
            to: recipient,
            subject: emailSubject,
            text: `Click the following link to reset your password: ${resetLink}`
        }

        return messageOptions
    }

    async send(recipient:string, emailSubject:string,resetLink:string) {
        const transporter = nodemailer.createTransport(config)
        const messageOptions:nodemailerMessageOptions = NodeMail.setMessageOptions(recipient, emailSubject,resetLink)

        const info = await transporter.sendMail(messageOptions)

        return info
    }
}