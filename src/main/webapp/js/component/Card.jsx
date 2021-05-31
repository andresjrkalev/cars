import React from 'react';
import {
    LABEL_EXECUTE,
    LABEL_GET,
    LABEL_RESPONSE,
    STRING_EMPTY
} from '../common/constants';

const Card = ({ header, children, execute, response }) =>
    <div className="card">
      <div className="header">{LABEL_GET} {header}</div>
      <div className="body">
        <div>{children}</div>
        <button onClick={() => execute()}>{LABEL_EXECUTE}</button>
      </div>
      <div className="footer">
        {LABEL_RESPONSE}
        <div className="response">
            <pre>{response ? JSON.stringify(response, null, 2) : STRING_EMPTY}</pre>
        </div>
      </div>
    </div>;

export default Card;