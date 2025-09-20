import { ButtonComponent } from './styles';
import type { ButtonProps } from './types';


function Button({ name, type = 'button', onButtonClick, bgColor, colorText }: ButtonProps) {
  return (
    <ButtonComponent type={type} onClick={onButtonClick}  bgColor={bgColor} colorText={colorText}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
