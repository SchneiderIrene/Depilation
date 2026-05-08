export interface CardProps {
  title: string;
  description: string;
  srcImg: string;
  nameButton1: string;
  nameButton2: string;
  button1Href?: string; // ссылка для кнопки pdf
  button2Href?: string;
  button1Target?: string; // "_blank" или "_self"
}
