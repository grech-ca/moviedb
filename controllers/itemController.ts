import { NextApiHandler } from 'next';

import { getOrCreateConnection } from 'lib/db';

import { Item } from 'entities';

export const createItem: NextApiHandler = async (req, res) => {
  const db = await getOrCreateConnection();

  const repository = db.getRepository(Item);

  const item = new Item();
  item.name = `Запись ${new Date().toLocaleDateString()}`;

  const createdItem = await repository.save(item);

  res.send(createdItem); 
};

export const getItems: NextApiHandler = async (req, res) => {
  const db = await getOrCreateConnection();
  const repository = db.getRepository(Item);

  const allItems = await repository.find();
  res.send(allItems);
};

