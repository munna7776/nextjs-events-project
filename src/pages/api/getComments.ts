import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "GET") {
        return res.status(405).json({message: "Please use get method for /api/getComments route."})
    }
    const {eventId} = req.query
    if(!eventId) {
        return res.status(422).json({message: "Event Id is required."})
    }
    const comments = [
        {id: 1, name: "Munna", comment: "comment1"},
        {id: 2, name: "Ravi", comment: "ravi comment1"},
        {id: 3, name: "Chatur", comment: "chatur comment1"},
    ]

    return res.status(200).json({comments})
}

export default handler