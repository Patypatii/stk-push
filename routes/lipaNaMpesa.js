import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { authToken } from '../middlewares/authorization.js';
import { getTimestamp } from '../utils/timestamp.js';

dotenv.config();


const router = express.Router();
router.post('/lipaNaMpesa', authToken, async (req, res) => {
    try {

        //get phonenumber
        const number = req.body.phoneNumber.replace(/^0/, '');
        console.log(number)
        const phoneNumber = `254${number}`
        console.log(phoneNumber)


        //timestamp
        const timestamp = getTimestamp()
        console.log(timestamp)



        const body = {

            "BusinessShortCode": "174379",
            "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
            "Timestamp": "20160216165627",
            "TransactionType": "CustomerPayBillOnline",
            "Amount": "1",
            "PartyA": phoneNumber,
            "PartyB": "174379",
            "PhoneNumber": phoneNumber,
            "CallBackURL": "https://mydomain.com/pat",
            "AccountReference": "Test",
            "TransactionDesc": "Test"
        }

    } catch (error) {
        console.error('Error in lipaNaMpesa route:', error);
        return res.status(500).json({ error: 'Internal Server Error' });

    }
}
)

export default router;