export const Title: React.FC<TitleProps> = ({ title }: TitleProps) => {
  return <h1>{title}</h1>;
};

export interface TitleProps {
  title: string;
}
