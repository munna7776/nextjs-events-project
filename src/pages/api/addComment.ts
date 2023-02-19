import { NextApiRequest, NextApiResponse } from "next";
import { emailRegex } from "consts";

const sendInvalidMessage = (
  res: NextApiResponse,
  statusCode: number,
  message: string
) => {
  return res.status(statusCode).json({ message: message });
};

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return sendInvalidMessage(
      res,
      405,
      "Please use post method in /api/addComment route."
    );
  }
  const { email, name, comment, eventId } = req.body;
  if(!eventId) {
    return sendInvalidMessage(res,422,"Please comment on Next Js Events.")
  }
  if (name.trim().length < 1) {
    return sendInvalidMessage(res, 422, "Please enter valid name!");
  }
  if (!email.match(emailRegex)) {
    return sendInvalidMessage(res, 422, "Please enter valid email address!");
  }
  if (comment.trim().length < 1) {
    return sendInvalidMessage(res, 422, "Please enter valid comment!");
  }

  res.status(201).json({message: "Comment successfully added!"})
}

export default handler;
