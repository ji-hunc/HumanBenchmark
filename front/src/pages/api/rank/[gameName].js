import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { gameName } = req.query;

  try {
    let records;
    if (gameName === 'ReactionTime') {
      records = await prisma.reactionTimeRecord.findMany({
        orderBy: { score: 'asc' },
        take: 10,
      });
    } else if (gameName === 'SequenceMemory') {
      records = await prisma.sequenceMemoryRecord.findMany({
        orderBy: { score: 'desc' },
        take: 10,
      });
    } else if (gameName === 'NumberMemory') {
      records = await prisma.numberMemoryRecord.findMany({
        orderBy: { score: 'desc' },
        take: 10,
      });
    } else if (gameName === 'AlphabetMemory') {
      records = await prisma.alphabetMemoryRecord.findMany({
        orderBy: { score: 'desc' },
        take: 10,
      });
    } else {
      return res.status(400).send('Invalid game name');
    }
    res.status(200).json(records);
  } catch (error) {
    console.error('DB QUERY ERROR', error);
    res.status(500).json({ error: 'DB QUERY ERROR' });
  }
}
