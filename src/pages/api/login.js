import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const { id, pw } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return res.status(404).send('notRegistered');
    }

    if (user.password === pw) {
      res.status(200).send('allow');
    } else {
      res.status(401).send('wrongPW');
    }
  } catch (error) {
    console.error('DB QUERY ERROR', error);
    res.status(500).json({ error: 'DB QUERY ERROR' });
  }
}
