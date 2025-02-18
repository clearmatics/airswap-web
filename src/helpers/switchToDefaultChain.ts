import { ChainIds } from "@airswap/utils";

import switchToChain from "./switchToChain";

const switchToDefaultChain = () => {
  try {
    switchToChain(ChainIds.MAINNET);
  } catch (e: any) {
    // unable to switch network, but doesn't matter too much as button
    // looks like a call to action in this case anyway.
  }
};

export default switchToDefaultChain;
