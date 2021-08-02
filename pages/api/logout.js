import cookie from 'cookie'

export default (req, res) => {
  if (req.method === 'POST') {
    const setCookie = cookie.serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    });
    res.setHeader('Set-Cookie', setCookie);
    res.status(200).json({ success: true })
  } else {
    res.writeHead('Allow', ['POST']);
    res.status(405).json({ error: `${req.method} is not allowed` });
  }
}