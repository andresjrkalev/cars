import React from 'react';
import Label from './Label';
import {
    KEY_ASC,
    KEY_DESC,
    LABEL_ASCENDING,
    LABEL_DESCENDING,
    LABEL_SORT
} from '../common/constants';

const Sort = ({ value, onChange }) =>
    <>
        <Label text={LABEL_SORT} />
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option />
            <option value={KEY_ASC}>{LABEL_ASCENDING}</option>
            <option value={KEY_DESC}>{LABEL_DESCENDING}</option>
        </select>
    </>;

export default Sort;