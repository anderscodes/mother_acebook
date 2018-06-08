import React from  'react';
import Hello from './hello';

class Helloes extends React.Component{
    constructor(props) {
        super(props)
        this.getHelloes = this.getHelloes.bind(this);
    }

    render(){
        return (
            <article className='helloes-main'>
                <h1 className='helloes-title'>
                    Helloes
                </h1>
                <div className='helloes-items'>
                    {this.getHelloes()}
                </div>
            </article>
        )
    }

    getHelloes() {
        return this.props.helloes.map(hello =>
        <Hello key={hello._links.self.href} hello={hello}/>
        );
    }
}

export default Helloes;

