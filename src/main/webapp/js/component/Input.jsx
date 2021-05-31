import React from 'react';
import { STRING_EMPTY } from '../common/constants';

const Input = ({ value, onChange }) =>
    <input
        type="text"
        value={value || STRING_EMPTY}
        onChange={event => onChange(event.target.value)}
    />;

export default Input;