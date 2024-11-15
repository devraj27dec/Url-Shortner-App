import * as React from 'react';

export interface IFooterProps {
}
const Footer: React.FunctionComponent<IFooterProps> = () => {

    return (
      <div className=' bg-slate-900 text-white text-base text-center py-5'>
        Copyright &#169; URLSHORTNER | Devraj Rajput
      </div>
    );
}

export default Footer