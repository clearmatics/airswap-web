import { FC } from "react";
import {
  DefaultNamespace,
  Namespace,
  TFuncKey,
  useTranslation,
} from "react-i18next";

import { GuideButtonContainer, StyledIcon, Text } from "./GuideButton.styles";

export interface GuideButtonProps<T extends Namespace = DefaultNamespace> {
  iconName: string;
  text: TFuncKey<T> | TemplateStringsArray extends infer A ? A : never;
  href: string;
}

const GuideButton: FC<GuideButtonProps> = ({ iconName, text, href }) => {
  const { t } = useTranslation();
  const content = t(text);

  return (
    <GuideButtonContainer target="_blank" href={href}>
      <StyledIcon name={iconName} iconSize={1.5} />
      <Text>{JSON.stringify(content)}</Text>
    </GuideButtonContainer>
  );
};

export default GuideButton;
