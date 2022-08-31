import { useState } from 'react';

export const useText = () => {
    const [text] = useState('Provided By Hook');
    return text
}