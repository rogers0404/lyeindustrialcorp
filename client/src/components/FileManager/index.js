import React from 'react';
import upload from '../../assets/upload.png';
import refresh from '../../assets/refresh.png'
function FileManager() {
  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">
            <div className="card text-center w-100">
                {/* this is the username welcome */}
                <div className="card-header m-1 textFontColor font-weight-bold">My Files</div>
                {/* this is the username welcome */}
                <div className="card-body justify-content-left">
                    <div className="d-flex justify-content-start list-group-item list-group-item-action active text-white">
                        <div className="w-25">
                            <p className=" text-left" >
                                Welcome: username
                            </p>
                        </div>
                        <div className="w-75 d-flex align-items-start">
                            <button class="btn btn-default">
                                <img className="img-fluid brandImageSize2 w-50" src={upload} alt="upload"/>
                            </button>
                            <a class="btn btn-default" href="/dashboard">
                                <img className="img-fluid brandImageSize2 w-75" src={refresh} alt="refresh"/>
                            </a>
                        </div>
                    </div>
                
                {/* <div className="card-deck textFontColor" > */}
                <div class="row textFontColor">
                  <div class="col-sm-12 col-md-3 col-lg-3">                    
                    <div className="card">
                      <div className="card-body justify-content-left">
                          <p className="card-text  m-1 text-justify textFontColor">
                              My Files {'>'} {/* link to the bucket */}
                          </p>
                            <ul className="list-group textFontColor text-justify "> {/* loop for the folders inside the bucket */}
                                <li className="list-group-item border-0"> {'> '} HTML</li>
                                <li className="list-group-item border-0">CSS</li>
                                <li className="list-group-item border-0">JavaScript</li>
                                <li className="list-group-item border-0">JQuery</li>
                                <li className="list-group-item border-0">Responsive Design</li>
                                <li className="list-group-item border-0">React</li>
                                <li className="list-group-item border-0">Bootstrap</li>
                                <li className="list-group-item border-0">CURB Foundation</li>
                                <li className="list-group-item border-0">Chakra-UI</li>
                                <li className="list-group-item border-0">Redux</li>
                            </ul>
                      </div>
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                    <div className="card">
                      <div className="card-body justify-content-left">
                            <p className="card-text m-1 text-justify textFontColor">
                              Back-End Proficiencies
                          </p>
                          <ul className="list-group textFontColor text-justify">
                                <li className="list-group-item">APIs</li>
                                <li className="list-group-item">Node.js</li>
                                <li className="list-group-item">Express.js</li>
                                <li className="list-group-item">MySQL, Sequelize</li>
                                <li className="list-group-item">MongoDB, Mogoose</li>
                            </ul>
                      </div>
                    </div>
                  </div>
                  </div>

                </div>
            </div>
        </div>
        
    </section>
  );
}

export default FileManager;
