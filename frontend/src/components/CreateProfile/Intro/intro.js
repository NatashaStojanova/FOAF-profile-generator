import React from 'react'

const Intro = () =>  {
    return(
        <div align="center">
            <br/>
            <h2>FOAF Profile Instructions</h2>
            <br/>
            <div align="center">
              <text> Fill out the fields directly below this text to complete a basic FOAF Profile. Optional items are
                  available further down the page in the Tabs Section. <br/>These options include people you know,
                  social
                  networks to which you may belong, and other additional information described by the FOAF vocabulary.

                  As a minimum you'll need to supply your name, URI and email address, and similarly for any friends you
                  might add.
                  It's worth adding a few friends to your description (but feel free to add as many as you like)
              </text>
              <br/>
          </div>
            <div align="">
                <text>(All fields marked with* are mandatory)</text>
            </div>
            <br/>
            <hr className="my-2"/>
            <br/>


        </div>
    )
}

export default Intro;