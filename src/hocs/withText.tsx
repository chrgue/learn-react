import React from 'react';

type WithTextProps = {
    text: string
}

export const withText = <T extends WithTextProps = WithTextProps>(WrappedComponent: React.ComponentType<T>) => {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    const ComponentWithText = (props: Omit<T, keyof WithTextProps>) =>
        <WrappedComponent  {...(props as T)} text={'Provided By HOC'}/>;

    ComponentWithText.displayName = `withText(${displayName})`;

    return ComponentWithText;
};
