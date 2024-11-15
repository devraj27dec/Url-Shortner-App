import * as React from 'react';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className=' bg-slate-900 '>
            <div className="container p-2 m-auto ">
                <nav className='py-5 '>
                    <div className=' text-base text-white'>UrlShortner</div>
                </nav>
            </div>
        </div>
    );
  }
}
