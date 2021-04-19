import React, { Component } from 'react'

export default class Header extends Component{
    render(){
        return(
            <div>
                <header className="header">
                    <div className="toolbar">
                        <div>
                            <span>Conectar dev</span>
                        </div>
                        <div>
                            <button>Novo Post</button>
                            <span>img1</span>
                            <span>img2</span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}