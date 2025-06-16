export interface MyNftType {
  image: string;
  nftName: string;
  value: string;
  nftType: string;
  isRegistered: boolean;
  onClick: (id: string) => void;
  id: string;
  contractId: number;
}
