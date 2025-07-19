import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

const app = express();
dotenv.config();
const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
const auth = Buffer.from(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString('base64');

export async function authToken(req, res, next) {
    try {
        const result = await axios.get(url, {
            headers: { Authorization: `Basic ${auth}` }
        }
        )

        console.log(result.data);
        req.token = result.data.access_token;

        next();
    } catch (error) {
        console.error('Error fetching auth token:', error);
        return res.status(500).json({ error: 'Failed to fetch auth token' });
    }
}