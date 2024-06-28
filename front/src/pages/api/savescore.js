import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { gameName, score, id } = req.body;
  console.log(req.body);
  const now = new Date();

  try {
    let record;
    if (gameName === 'ReactionTime') {
      record = await prisma.reactionTimeRecord.create({
        data: { score, create_date: now, user_id: id },
      });
    } else if (gameName === 'SequenceMemory') {
      record = await prisma.sequenceMemoryRecord.create({
        data: { score, create_date: now, user_id: id },
      });
    } else if (gameName === 'NumberMemory') {
      record = await prisma.numberMemoryRecord.create({
        data: { score, create_date: now, user_id: id },
      });
    } else if (gameName === 'AlphabetMemory') {
      record = await prisma.alphabetMemoryRecord.create({
        data: { score, create_date: now, user_id: id },
      });
    } else {
      return res.status(400).send('Invalid game name');
    }
    res.status(200).json(record);
  } catch (error) {
    console.error('DB QUERY ERROR', error);
    res.status(500).json({ error: 'DB QUERY ERROR' });
  }
}
