import { emailRegex } from "consts";
import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "POST") {
        const {email} = req.body;
        if(!emailRegex.test(email)) {
            res.status(422).json({message: "Invalid email address!"})
            return;
        }
        return res.status(201).json({message: "Successfully subscribed our newsletter."})
    } else {
        return res.status(405).json({message: "Please use post method in /api/newsltter route."})
    }
}

export default handler