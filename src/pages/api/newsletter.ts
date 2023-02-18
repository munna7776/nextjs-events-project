import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest,res: NextApiResponse) {
    res.status(201).json({name:req.query.name})
}

export default handler