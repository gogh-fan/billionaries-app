export interface Billionaire {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  country: string;
  industries: string[];
  bio: string;
  about: string;
  financialAssets: FinancialAsset[];
}

export interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
} 