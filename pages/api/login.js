import cookie from 'cookie';

export default (req, res) => {
  const { token } = req.body;
  const setCookie = cookie.serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 3600 * 24 * 30,
    sameSite: 'strict',
    path: '/'
  });
  res.setHeader('Set-Cookie', setCookie);
  
  return res.status(200).json({ success: true });
}