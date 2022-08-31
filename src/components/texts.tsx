import { withText } from '../hocs/withText';
import { useText } from '../hooks/useText';
import React from 'react';

type TextProps = {
    text: string
}

export const Text = ({ text }: TextProps) => <span>{text}</span>;
export const TextWithHOC = withText(Text);
export const TextWithHook = () => <span>{useText()}</span>;
export const TextMemorized = React.memo(Text);