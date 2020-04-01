import React from 'react';

const SocialNetwork = (props) => {

    const onSocNetChange = (e) => {
        e.preventDefault();
        props.onSocNetChange(e.target.name, e.target.value);
    };

    return (
        <div align="left">
            <form>
                <div className="form-group row">
                    <label htmlFor="blog" className="col-sm-1 col-form-label">Blog</label>
                    <div className="col-sm-4">
                        <input type="url" className="form-control" name="blog" id="blog" onChange={onSocNetChange}
                               placeholder="https://"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="facebookLink" className="col-sm-1 col-form-label">Facebook</label>
                    <div className="col-sm-4">
                        <input type="url" className="form-control" name="facebookLink" id="facebookLink"
                               onChange={onSocNetChange} placeholder="https://"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="twitterLink" className="col-sm-1 col-form-label">Twitter</label>
                    <div className="col-sm-4">
                        <input type="url" className="form-control" name="twitterLink" id="twitterLink"
                               onChange={onSocNetChange} placeholder="https://"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="linkedIn" className="col-sm-1 col-form-label">LinkedIn</label>
                    <div className="col-sm-4">
                        <input type="url" className="form-control" name="linkedIn" id="linkedIn"
                               onChange={onSocNetChange} placeholder="https://"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="skypeID" className="col-sm-1 col-form-label">Skype</label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control" name="skypeID" id="skypeID"
                               onChange={onSocNetChange}/>
                    </div>
                </div>

            </form>

        </div>

    );
}

export default SocialNetwork;
