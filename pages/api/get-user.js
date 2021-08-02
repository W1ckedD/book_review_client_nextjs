import cookie from "cookie";

export default (req, res) => {
  if (req.method === "GET") {
    if (req.headers.cookie) {
      const { token } = cookie.parse(req.headers.cookie);
      res.status(200).json({ token });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `${req.method} is not allowed` });
  }
};
