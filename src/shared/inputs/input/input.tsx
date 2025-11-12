import {Input as InputAntd, InputProps as InputPropsAntd} from 'antd';
import { BoxInput, TitleInput } from './input.styles';
import type { InputHTMLAttributes } from 'react';


interface InputProps extends InputPropsAntd{
    title?:string;
}

const Input = ({title, ...props}: InputProps) => {
    return (
        <BoxInput>
            <TitleInput>{title}</TitleInput>
            <InputAntd {...props}/>
        </BoxInput>
        
    )
};

export default Input;