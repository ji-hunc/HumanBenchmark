import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  console.log('enter');

  const { id, pw } = req.body;
  const now = new Date();

  try {
    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (existingUser) {
      return res.status(409).send('already Exist!');
    }

    await prisma.user.create({
      data: { id, password: pw, create_date: now },
    });

    res.status(200).send('registered!');
  } catch (error) {
    console.error('DB QUERY ERROR', error);
    res.status(500).json({ error: 'DB QUERY ERROR' });
  }
}
