type ButtonType = "button" | "submit" | "reset" | undefined

export interface ButtonProps {
    name?: React.ReactNode,
    type?: ButtonType,
    onButtonClick?: () => void,
    bgColor?: boolean,
    colorText?:  boolean,
    children?: React.ReactNode;
  }
  

  