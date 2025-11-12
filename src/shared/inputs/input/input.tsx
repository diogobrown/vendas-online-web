import { useState } from "react";
import { Input as InputAntd, type InputProps as InputPropsAntd } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { BoxInput, TitleInput } from "./input.styles";

interface InputProps extends InputPropsAntd {
  title?: string;
  margin?: string;
}

const Input = ({ title, margin, type, ...props }: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <BoxInput style={{ margin }}>
      {title && <TitleInput>{title}</TitleInput>}

      {type === "password" ? (
        <InputAntd.Password
          {...props}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      ) : (
        <InputAntd {...props} type={type} />
      )}
    </BoxInput>
  );
};

export default Input;