import { ButtonComponent } from './styles';
import type { ButtonProps } from './types';


function Button({ name, type = 'button', onButtonClick, bgColor, colorText, children }: ButtonProps) {
  return (
    <ButtonComponent type={type} onClick={onButtonClick}  bgColor={bgColor} colorText={colorText}>
      {name} {children}
    </ButtonComponent>
  );
}

export default Button;
