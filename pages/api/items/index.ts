import nc from 'next-connect';

import { itemController } from 'controllers';

const itemsHandler = nc()
  .get(itemController.getItems)
  .post(itemController.createItem);

export default itemsHandler;

