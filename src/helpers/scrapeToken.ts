import { TokenInfo, getTokenInfo as airSwapScrapeToken } from "@airswap/utils";

import * as ethers from "ethers";

const scrapeToken = (
  address: string,
  provider: ethers.providers.BaseProvider,
  chainId?: number
): Promise<TokenInfo | undefined> => {
  return new Promise<TokenInfo | undefined>(async (resolve) => {
    if (!ethers.utils.isAddress(address)) {
      return resolve(undefined);
    }

    try {
      const tokenInfo = await airSwapScrapeToken(provider, address);
      resolve(tokenInfo);
    } catch (e: any) {
      console.error(e);
      resolve(undefined);
    }
  });
};

export default scrapeToken;
