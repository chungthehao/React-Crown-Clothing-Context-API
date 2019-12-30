import { createContext } from 'react';

import SHOP_DATA from './shop.data';

const CollectionsContext = createContext(SHOP_DATA); // SHOP_DATA: initial value of our context

export default CollectionsContext;
