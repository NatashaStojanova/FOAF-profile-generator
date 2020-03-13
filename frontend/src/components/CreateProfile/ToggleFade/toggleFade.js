import React, {useState} from 'react';
import {Button, Fade} from 'reactstrap';
import Friend from "../Friend/friend";

const ToggleFade = (props) => {
    const [fadeIn, setFadeIn] = useState(true);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button color="primary" onClick={toggle}>Toggle Fade</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
                <Friend/>
            </Fade>
        </div>
    );
}

export default ToggleFade;
