import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a> Faculty of Computer Science and Engineering,
                    Skopje</a>
                    <br/>
                    <a>Natasha Stojanova</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;