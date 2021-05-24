import React, {Component, useState } from "react";
import './App.css';
import "./styles.scss";
import "./buys.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';






// Header

const Header = () => {
    return (
        <section className="header__section">
            <div className="header__container">
                <h2>CS:GO Economy Keeper</h2>
            </div>
        </section>
    )
};

// Player bar

const Money = () => {
    return (
        <div className="money-bar">
            <strong>Money</strong>
        </div>
    )
}

const Weapon = () => {
    return (
        <div className="weapon-primary">
            <strong>Rifle</strong>
        </div>
    )
}

const Weaponsec = () => {
    return (
        <div className="weapon-secondary">
            <strong>Pistol</strong>
        </div>
    )

}

const Equipment = () => {
    return (
        <div className="equip-bar">
            <div className="armor-bar">armor
            </div>
            <div className="grenades-bar">
                <div className="granade-low">Low granade
                </div>
                <div className="granade-med">Medium granade
                </div>
                <div className="granade-full">Full granade
                </div>

            </div>
        </div>
    )
}

const Buymenu = () => {
    const [show, setShow] = useState(false);

    const handleBuyClose = () => setShow(false);
    const handleBuyShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleBuyShow}>
                BUY MENU
            </Button>

            <Modal show={show} onHide={handleBuyClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BUY Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>{terrpist.map((el, i) => {
                    return <ListGroup.Item key={i} action variant="secondary">
                        {el.name}
                    </ListGroup.Item>
                })}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleBuyClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleBuyClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

const Tplayer = () => {
    return (
        <div className="terro-player">
            <h4>Terrorist Player</h4>
            <Money/>
            <Weapon/>
            <Weaponsec/>
            <Equipment/>
            <Buymenu/>
            <div className="player-action">
                <button>Died</button>
                <button>Frag/dropdown</button>
            </div>
        </div>
    )

}


// Team

const Terrorist = () => {
    return (
        <section className="terrorist-team">
            <h3> Terrorist Team</h3>
            <div className="terro-status">
                <div className="terro-round-indycator">Round</div>
                <div className="terro-loss-bonus">Loss Bonus: </div>
            </div>
            <div className="terrorist-team-bar">
                <Tplayer/>
                <Tplayer/>
                <Tplayer/>
                <Tplayer/>
                <Tplayer/>
            </div>
            <div className="terrorist-round-decider">
                <button className="terrorist-round-lost">Lost/dropdown=time/team died/bomb defused</button>
                <button className="terrorist-round-win">Win/dropdown=CT killed/Bomb boom</button>
            </div>

        </section>

    )
}




class App extends Component {

    render() {
        return (
            <Terrorist />
        )
    }

}

export default App;