export default function Info(props) {


    let languagesElements = props.languages.map((element) => <li key={element}><span>{element}</span></li>)
    let currenciesElements = props.currencies.map((element) => <li key={element}><span>{element}</span></li>)
    let capitals = props.capital.map((element) => <span className="capitals" key={element}>{element} </span>)


    return (
        <div className="info">
            <div className="identity">
                <img className="flag" src={props.flagPng} alt={props.flagAlt} />
                <div className="info-style">
                    <h1 className="official-name"> {props.officialName}</h1>

                    <h2 className="native-name"> {(props.languages[0] != "English") ? props.nativeName : ""} </h2>

                </div>
            </div>
            <h2 className="capital">Capital: <span style={{ color: "#4c4c4c" }}>{capitals}</span></h2>

            <div className="row-container">
                <h2 className="properties">
                    <svg height="40" id="svg9724" width="40" version="1.1" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <defs id="defs9728" />
                        <g id="g10449" style={{ "strokeWidth": "1.05103" }} transform="matrix(0.95173205,0,0,0.95115787,13.901174,12.168794)">
                            <g id="path10026" transform="matrix(1.3807551,0,0,1.2700888,273.60014,263.99768)" />
                            <g id="g11314" style={{ "strokeWidth": "50.6951" }} transform="matrix(1.5092301,0,0,1.3955555,36.774048,-9.4503933)" />
                            <path id="path295" style={{ "color": "#041320", "fill": "#041320", "strokeWidth": "1.05103", "strokeLinecap": "round", "strokeLinejoin": "round", "InkscapeStroke": "none", "paintOrder": "stroke fill markers" }} d="m 248.07279,-12.793664 c -72.13241,0 -131.33949,59.250935 -131.33949,131.392074 0,38.92115 17.25502,74.07152 44.45432,98.20884 C 58.500207,254.84854 -14.606185,358.21398 -14.606185,477.846 a 35.037921,35.037921 0 0 0 35.034809,35.03543 H 188.95771 c 6.88866,-25.46243 17.91968,-49.15043 32.45932,-70.0688 H 58.235927 C 73.730605,344.39181 153.38526,271.2598 248.07279,271.2598 c 13.12286,0 25.94065,1.45153 38.35524,4.13353 4.26325,-42.80875 34.59589,-78.30933 74.73011,-90.32371 11.57931,-19.5408 18.25414,-42.27592 18.25414,-66.47121 0,-72.141139 -59.20709,-131.392074 -131.33949,-131.392074 z m 0,70.068794 c 34.24293,0 61.26987,27.028459 61.26987,61.32328 0,34.29482 -27.02694,61.3274 -61.26987,61.3274 -34.24293,0 -61.27192,-27.03258 -61.27192,-61.3274 0,-34.294821 27.02899,-61.32328 61.27192,-61.32328 z" />
                            <path id="path295-3" style={{ "color": "#041320", "fill": "#041320", "strokeWidth": "1.05103", "strokeLinecap": "round", "strokeLinejoin": "round", "InkscapeStroke": "none", "paintOrder": "stroke fill markers" }} d="m 405.68024,197.47637 c -57.70598,0 -105.07159,47.40151 -105.07159,105.11449 0,31.13694 13.80343,59.25664 35.56289,78.56652 -82.15001,30.43306 -140.63449,113.12556 -140.63449,208.83127 a 28.030337,28.030337 0 0 0 28.0273,28.0278 h 182.11589 182.11452 a 28.030337,28.030337 0 0 0 28.0286,-28.0278 c 0,-95.70539 -58.4835,-178.39795 -140.63307,-208.83127 21.75947,-19.30988 35.56153,-47.42958 35.56153,-78.56652 0,-57.71298 -47.3656,-105.11449 -105.07158,-105.11449 z m 0,56.05559 c 27.39437,0 49.01562,21.62301 49.01562,49.0589 0,27.43588 -21.62125,49.06164 -49.01562,49.06164 -27.39437,0 -49.017,-21.62576 -49.017,-49.06164 0,-27.43589 21.62263,-49.0589 49.017,-49.0589 z m 0,171.18664 c 75.7501,0 139.47372,58.50552 151.86952,137.24226 H 405.68024 253.81075 C 266.2065,483.22412 329.93014,424.7186 405.68024,424.7186 Z" />
                        </g>
                    </svg>
                    <span>{props.population}</span>
                </h2>
                <h2 className="properties">
                    <svg height="50" width="50" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9928 6.6967L17.1747 3.51472L20.3567 6.6967L19.2961 7.75736L17.9247 6.38604L17.9247 17.614L19.2961 16.2426L20.3567 17.3033L17.1747 20.4853L13.9928 17.3033L15.0534 16.2426L16.4247 17.614V6.38604L15.0534 7.75736L13.9928 6.6967Z" fill="#041320" fillRule="evenodd" />
                        <path d="M3.75 4.5L4.5 3.75H12L12.75 4.5V19.5L12 20.25H4.5L3.75 19.5V4.5ZM5.25 5.25V18.75H11.25V17.25H8.25V15.75H11.25V14.25H8.25V12.75H11.25V11.25H7.5V9.75H11.25V8.25H8.25V6.75H11.25V5.25H5.25Z" fill="#041320" fillRule="evenodd" />
                    </svg>
                    <span>{props.area}  km<sup style={{ fontSize: 18 }}>2</sup></span></h2>
            </div>

            <div className="inner-container">
                <h2 className="properties">
                    <svg height="40" id="meteor-icon-kit__solid-language" width="40" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H13C11.3431 24 10 22.6569 10 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H11C12.6569 0 14 1.34315 14 3V7ZM14 9V11H16C16 10.4477 16.4477 10 17 10C17.5523 10 18 10.4477 18 11H18.9794C18.9924 10.9997 19.0054 10.9997 19.0185 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H19.7985C19.4241 14.4757 18.8531 15.8257 18.0876 17.0466C18.7882 17.8313 19.6099 18.538 20.5548 19.1679C21.0143 19.4743 21.1385 20.0952 20.8322 20.5547C20.5258 21.0142 19.9049 21.1384 19.4454 20.8321C18.4832 20.1906 17.6268 19.4745 16.8773 18.6846C16.2131 19.4542 15.4538 20.1597 14.6 20.8C14.1582 21.1314 13.5314 21.0418 13.2 20.6C12.8686 20.1582 12.9582 19.5314 13.4 19.2C14.2377 18.5717 14.9675 17.8745 15.5904 17.1065C15.2236 16.5795 14.8952 16.0263 14.6057 15.4472C14.3587 14.9532 14.5589 14.3526 15.0529 14.1056C15.5469 13.8586 16.1476 14.0588 16.3945 14.5528C16.5199 14.8035 16.6538 15.0485 16.7962 15.2878C17.1768 14.5736 17.4863 13.8113 17.7253 13H14V14C14 15.3062 13.1652 16.4175 12 16.8293V21C12 21.5523 12.4477 22 13 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H14ZM6.22076 9.5L7 7.16228L7.77924 9.5H6.22076ZM5.55409 11.5H8.44591L9.05132 13.3162C9.22596 13.8402 9.79228 14.1233 10.3162 13.9487C10.8402 13.774 11.1233 13.2077 10.9487 12.6838L7.94868 3.68377C7.64478 2.77208 6.35522 2.77208 6.05132 3.68377L3.05132 12.6838C2.87667 13.2077 3.15983 13.774 3.68377 13.9487C4.20772 14.1233 4.77404 13.8402 4.94868 13.3162L5.55409 11.5Z" fill="#041320" fillRule="evenodd" />
                    </svg>
                </h2>
                <ul>
                    {languagesElements}
                </ul>
            </div>

            <div className="inner-container">
                <h2 className="properties">
                    <svg height="40" id="Capa_1" width="40" fill="#041320" version="1.1" viewBox="0 0 124.029 124.029" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                        <g>
                            <g>
                                <path d="M46.163,71.234c9.877,0,17.884-8.008,17.884-17.884c0-9.877-8.006-17.884-17.884-17.884S28.279,43.473,28.279,53.35    C28.279,63.226,36.286,71.234,46.163,71.234z M45.299,54.589c-3.425-1.24-5.643-2.806-5.643-5.839    c0-2.805,1.957-4.958,5.251-5.545v-3.197h2.676v3.034c2.054,0.065,3.457,0.554,4.5,1.076l-0.88,3.001    c-0.782-0.359-2.218-1.109-4.437-1.109c-2.283,0-3.098,1.174-3.098,2.283c0,1.337,1.173,2.088,3.946,3.197    c3.654,1.37,5.286,3.131,5.286,6.034c0,2.772-1.924,5.219-5.513,5.806v3.359h-2.675v-3.166c-2.055-0.062-4.11-0.65-5.285-1.432    l0.882-3.067c1.271,0.75,3.098,1.435,5.088,1.435c2.056,0,3.458-1.011,3.458-2.576C48.854,56.415,47.712,55.47,45.299,54.589z" />
                                <path d="M72.838,39.089c9.909,0,17.941-8.033,17.941-17.942c0-9.909-8.032-17.942-17.941-17.942    c-9.909,0-17.941,8.033-17.941,17.942C54.897,31.056,62.929,39.089,72.838,39.089z M63.415,21.899h1.833c0-0.164,0-0.36,0-0.524    c0-0.393,0.033-0.817,0.066-1.177h-1.899v-2.029h2.192c0.394-1.997,1.277-3.698,2.455-4.941c1.767-1.963,4.156-3.076,7.068-3.076    c1.963,0,3.6,0.491,4.68,1.015l-0.818,3.043c-0.85-0.457-2.191-0.884-3.665-0.884c-1.638,0-3.078,0.589-4.155,1.8    c-0.689,0.72-1.18,1.8-1.441,3.043h8.574v2.029h-8.967c-0.064,0.36-0.064,0.752-0.064,1.145c0,0.196,0,0.36,0,0.557h9.033v1.995    h-8.674c0.23,1.408,0.721,2.455,1.41,3.208c1.11,1.21,2.682,1.766,4.385,1.766c1.603,0,3.106-0.556,3.86-0.98l0.688,2.944    c-1.08,0.655-2.914,1.31-5.008,1.31c-2.978,0-5.66-1.179-7.395-3.371c-1.047-1.211-1.768-2.848-2.062-4.877h-2.097V21.899z" />
                                <path d="M108.582,47.367c8.531,0,15.447-6.916,15.447-15.447c0-8.531-6.916-15.447-15.447-15.447s-15.447,6.916-15.447,15.447    C93.135,40.451,100.051,47.367,108.582,47.367z M105.004,22.763l2.367,5.1c0.507,1.042,0.816,1.916,1.184,2.817h0.057    c0.339-0.845,0.703-1.831,1.184-2.874l2.452-5.043h3.662l-4.931,8.255h3.494v1.719h-4.424v1.916h4.424v1.719h-4.424v4.705h-3.24    v-4.705h-4.395v-1.719h4.395v-1.916h-4.395v-1.719h3.521l-4.676-8.255H105.004z" />
                                <path d="M74.703,60.601c0,8.813,7.145,15.958,15.957,15.958c8.814,0,15.958-7.145,15.958-15.958    c0-8.814-7.144-15.958-15.958-15.958S74.703,51.787,74.703,60.601z M96.219,51.708l-0.64,2.707    c-0.554-0.321-1.397-0.583-2.532-0.583c-2.154,0-2.941,1.455-2.941,3.144c0,0.989,0.146,1.776,0.322,2.619h4.074v2.474h-3.755    c0.03,0.902,0.03,1.775-0.204,2.59c-0.291,0.99-0.873,1.834-1.688,2.562v0.058h8.179v2.94H84.285v-1.951    c1.748-0.813,3.29-2.562,3.29-4.627c0-0.553-0.028-1.02-0.116-1.571h-2.91v-2.474h2.502c-0.146-0.815-0.291-1.775-0.291-2.707    c0-3.58,2.533-5.908,6.142-5.908C94.473,50.981,95.578,51.33,96.219,51.708z" />
                                <path d="M116.212,81.589c-2.056-1.637-6.036-3.549-10.499-3.549c-3.775,0-9.246,1.369-13.893,7.879    c-4.18,5.336-9.419,7.496-13.674,8.314c0.382-0.953,0.63-2.098,0.637-3.717c0.038-9.051-7.176-15.855-17.151-15.9l-35.608,0.031    c-3.342,0-6.631,0.986-9.404,2.771v-4.633H0v48.039h16.619v-5.104c0.628,0.311,1.493,0.938,1.493,0.938    c2.861,1.578,7.295,3.515,11.818,3.515h32.713c28.179,0,47.634-15.787,54.69-23.607c2.108-2.338,4.292-4.756,4.041-7.801    C121.152,86.044,119.15,83.929,116.212,81.589z M11.053,83.398H5.244v-5.809h5.809V83.398z M113.021,92.675    c-6.535,7.244-24.528,21.69-50.377,21.69H29.931c-5.531,0-11.487-4.326-11.541-4.368c-0.51-0.376-1.117-0.568-1.729-0.568    c-0.013,0-0.027,0.004-0.042,0.004V83.835c0.636,0.012,1.27-0.171,1.795-0.57l0.635-0.479c1.976-1.501,4.452-2.328,6.961-2.328    l35.595-0.032c5.68,0.025,11.399,3.286,11.37,10.068c0,3.916-2.611,4.117-2.752,4.152H44.13c-1.604,0-2.904,1.301-2.904,2.904    c0,1.603,1.3,2.902,2.904,2.902h27.693l1.543-0.004c4.347-0.001,15.295-1.027,23.073-11.008c0.025-0.034,0.053-0.069,0.076-0.104    c2.586-3.641,5.68-5.487,9.196-5.487c3.175,0,5.89,1.494,6.88,2.283c2.91,2.317,2.991,3.077,2.993,3.108    C115.596,89.825,113.727,91.896,113.021,92.675z" />
                            </g>
                        </g>
                    </svg>
                </h2>
                <ul>
                    {currenciesElements}
                </ul>
            </div>

            <div className="row-container" style={{ gap: 50 }}>
                <h2 className="properties">
                    <svg height="40" width="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8" fill="none" stroke="#041320" strokeWidth="2" />
                    </svg>
                    <span>{props.subRegion}</span></h2>
                <h2 className="properties">
                    <svg className="icon glyph" height="40" id="call-out" width="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path style={{ "fill": "#041320" }} d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z" />
                        <path style={{ "fill": "#041320" }} d="M16,9a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l5-5a1,1,0,1,1,1.42,1.42l-5,5A1,1,0,0,1,16,9Z" />
                        <path style={{ "fill": "#041320" }} d="M21,9a1,1,0,0,1-1-1V4H16a1,1,0,0,1,0-2h5a1,1,0,0,1,1,1V8A1,1,0,0,1,21,9Z" />
                    </svg>
                    <span>{props.callCode}</span>
                </h2>
            </div>




            <div className="googleMapsLink">
                <svg fill="#084977" width="30px" height="35px" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.76l.65.56.65-.56C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"></path><circle cx="12" cy="10" r="2"></circle></svg>
                <a href={props.googleMaps} target="_blank">View on Google Maps</a>
            </div>
        </div>
    )
}

// Earth Icon SVG

// <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" version="1.1" id="Capa_1" width="40px" height="40px" viewBox="0 0 48.625 48.625" xml:space="preserve"><g><g><polygon points="35.432,10.815 35.479,11.176 34.938,11.288 34.866,12.057 35.514,12.057 36.376,11.974 36.821,11.445     36.348,11.261 36.089,10.963 35.7,10.333 35.514,9.442 34.783,9.591 34.578,9.905 34.578,10.259 34.93,10.5   "></polygon><polygon points="34.809,11.111 34.848,10.629 34.419,10.444 33.819,10.583 33.374,11.297 33.374,11.76 33.893,11.76   "></polygon><path d="M22.459,13.158l-0.132,0.34h-0.639v0.33h0.152c0,0,0.009,0.07,0.022,0.162l0.392-0.033l0.245-0.152l0.064-0.307    l0.317-0.027l0.125-0.258l-0.291-0.06L22.459,13.158z"></path><polygon points="20.812,13.757 20.787,14.08 21.25,14.041 21.298,13.717 21.02,13.498   "></polygon><path d="M48.619,24.061c-0.007-0.711-0.043-1.417-0.11-2.112c-0.225-2.317-0.779-4.538-1.609-6.62    c-0.062-0.155-0.119-0.312-0.185-0.465c-1.106-2.613-2.659-4.992-4.56-7.045c-0.125-0.134-0.252-0.266-0.379-0.396    c-0.359-0.373-0.728-0.737-1.11-1.086C36.344,2.402,30.604,0,24.312,0C17.967,0,12.186,2.445,7.852,6.44    C6.842,7.371,5.914,8.387,5.072,9.475C1.896,13.583,0,18.729,0,24.312c0,13.407,10.907,24.313,24.313,24.313    c9.43,0,17.617-5.4,21.647-13.268c0.862-1.682,1.533-3.475,1.985-5.354c0.115-0.477,0.214-0.956,0.3-1.441    c0.245-1.381,0.379-2.801,0.379-4.25C48.625,24.228,48.62,24.145,48.619,24.061z M44.043,14.344l0.141-0.158    c0.185,0.359,0.358,0.724,0.523,1.094l-0.23-0.009l-0.434,0.06V14.344z M40.53,10.102l0.004-1.086    c0.382,0.405,0.75,0.822,1.102,1.254l-0.438,0.652l-1.531-0.014l-0.096-0.319L40.53,10.102z M11.202,7.403V7.362h0.487    l0.042-0.167h0.797v0.348l-0.229,0.306h-1.098L11.202,7.403L11.202,7.403z M11.98,8.488c0,0,0.487-0.083,0.529-0.083    s0,0.486,0,0.486L11.411,8.96l-0.209-0.25L11.98,8.488z M45.592,18.139h-1.779l-1.084-0.807l-1.141,0.111v0.696h-0.361    l-0.39-0.278l-1.976-0.501v-1.28l-2.504,0.195l-0.776,0.417h-0.994L34.1,16.643l-1.207,0.67v1.261l-2.467,1.78l0.205,0.76h0.5    L31,21.838l-0.352,0.129l-0.019,1.892l2.132,2.428h0.928l0.056-0.148h1.668l0.481-0.445h0.946l0.519,0.52l1.41,0.146l-0.187,1.875    l1.565,2.763l-0.824,1.575l0.056,0.742l0.649,0.647v1.784l0.852,1.146v1.482h0.736c-4.096,5.029-10.33,8.25-17.305,8.25    C12.009,46.625,2,36.615,2,24.312c0-3.097,0.636-6.049,1.781-8.732v-0.696l0.798-0.969c0.277-0.523,0.574-1.033,0.891-1.53    l0.036,0.405l-0.926,1.125c-0.287,0.542-0.555,1.096-0.798,1.665v1.27l0.927,0.446v1.765l0.889,1.517l0.723,0.111l0.093-0.52    l-0.853-1.316l-0.167-1.279h0.5l0.211,1.316l1.233,1.799L7.02,21.27l0.784,1.199l1.947,0.482v-0.315l0.779,0.111l-0.074,0.556    l0.612,0.112l0.945,0.258l1.335,1.521l1.705,0.129l0.167,1.391l-1.167,0.816l-0.055,1.242l-0.167,0.76l1.688,2.113l0.129,0.724    c0,0,0.612,0.166,0.687,0.166c0.074,0,1.372,0.983,1.372,0.983v3.819l0.463,0.13l-0.315,1.762l0.779,1.039l-0.144,1.746    l1.029,1.809l1.321,1.154l1.328,0.024l0.13-0.427l-0.976-0.822l0.056-0.408l0.175-0.5l0.037-0.51l-0.66-0.02l-0.333-0.418    l0.548-0.527l0.074-0.398l-0.612-0.175l0.036-0.37l0.872-0.132l1.326-0.637l0.445-0.816l1.391-1.78l-0.316-1.392l0.427-0.741    l1.279,0.039l0.861-0.682l0.278-2.686l0.955-1.213l0.167-0.779l-0.871-0.279l-0.575-0.943l-1.965-0.02l-1.558-0.594l-0.074-1.111    l-0.52-0.909l-1.409-0.021l-0.814-1.278l-0.723-0.353l-0.037,0.39l-1.316,0.078l-0.482-0.671l-1.373-0.279l-1.131,1.307    l-1.78-0.302l-0.129-2.006l-1.299-0.222l0.521-0.984l-0.149-0.565l-1.707,1.141l-1.074-0.131L9.48,21.016l0.234-0.865l0.592-1.091    l1.363-0.69l2.632-0.001l-0.007,0.803l0.946,0.44l-0.075-1.372l0.682-0.686l1.376-0.904l0.094-0.636l1.372-1.428l1.459-0.808    l-0.129-0.106l0.988-0.93l0.362,0.096l0.166,0.208l0.375-0.416l0.092-0.041l-0.411-0.058l-0.417-0.139v-0.4l0.221-0.181h0.487    l0.223,0.098l0.193,0.39l0.236-0.036v-0.034l0.068,0.023l0.684-0.105l0.097-0.334l0.39,0.098v0.362l-0.362,0.249h0.001    l0.053,0.397l1.239,0.382c0,0,0.001,0.005,0.003,0.015l0.285-0.024l0.019-0.537l-0.982-0.447l-0.056-0.258l0.815-0.278l0.036-0.78    l-0.852-0.519l-0.056-1.315l-1.168,0.574h-0.426l0.112-1.001l-1.59-0.375l-0.658,0.497v1.516l-1.183,0.375l-0.474,0.988    l-0.514,0.083v-1.264l-1.112-0.154l-0.556-0.362l-0.224-0.819l1.989-1.164l0.973-0.296l0.098,0.654l0.542-0.028l0.042-0.329    l0.567-0.081l0.01-0.115l-0.244-0.101l-0.056-0.348l0.697-0.059l0.421-0.438l0.023-0.032l0.005,0.002l0.128-0.132l1.465-0.185    l0.648,0.55l-1.699,0.905l2.162,0.51l0.28-0.723h0.945l0.334-0.63l-0.668-0.167V6.212L22.69,5.284l-1.446,0.167l-0.816,0.427    l0.056,1.038l-0.853-0.13L19.5,6.212l0.817-0.742l-1.483-0.074l-0.426,0.129l-0.185,0.5l0.556,0.094l-0.111,0.556l-0.945,0.056    l-0.148,0.37l-1.371,0.038c0,0-0.038-0.778-0.093-0.778c-0.055,0,1.075-0.019,1.075-0.019l0.817-0.798l-0.446-0.223l-0.593,0.576    l-0.984-0.056l-0.593-0.816h-1.261L12.81,6.008h1.206l0.11,0.353l-0.313,0.291l1.335,0.037l0.204,0.482l-1.503-0.056l-0.073-0.371    L12.831,6.54L12.33,6.262l-1.125,0.009C14.888,3.588,19.417,2,24.312,2c5.642,0,10.797,2.109,14.73,5.574l-0.265,0.474    l-1.029,0.403l-0.434,0.471l0.1,0.549l0.531,0.074l0.32,0.8l0.916-0.369l0.151,1.07h-0.276l-0.752-0.111l-0.834,0.14l-0.807,1.14    l-1.154,0.181l-0.167,0.988l0.487,0.115l-0.141,0.635l-1.146-0.23l-1.051,0.23l-0.223,0.585l0.182,1.228l0.617,0.289l1.035-0.006    l0.699-0.063l0.213-0.556l1.092-1.419l0.719,0.147l0.708-0.64l0.132,0.5l1.742,1.175l-0.213,0.286l-0.785-0.042l0.302,0.428    l0.483,0.106l0.566-0.236l-0.012-0.682l0.251-0.126l-0.202-0.214l-1.162-0.648l-0.306-0.861h0.966l0.309,0.306l0.832,0.717    l0.035,0.867l0.862,0.918l0.321-1.258l0.597-0.326l0.112,1.029l0.583,0.64l1.163-0.02c0.225,0.579,0.427,1.168,0.604,1.769    L45.592,18.139z M13.261,11.046l0.584-0.278l0.528,0.126l-0.182,0.709l-0.57,0.181L13.261,11.046z M16.36,12.715v0.459h-1.334    l-0.5-0.139l0.125-0.32l0.641-0.265h0.876v0.265H16.36z M16.974,13.355V13.8l-0.334,0.215l-0.416,0.077c0,0,0-0.667,0-0.737    H16.974z M16.598,13.174v-0.529l0.459,0.418L16.598,13.174z M16.807,14.244v0.433l-0.319,0.32h-0.709l0.111-0.486l0.335-0.029    l0.069-0.167L16.807,14.244z M15.041,13.355h0.737l-0.945,1.321l-0.39-0.209l0.084-0.556L15.041,13.355z M18.059,14.092v0.432    H17.35l-0.194-0.28v-0.402h0.056L18.059,14.092z M17.404,13.498l0.202-0.212l0.341,0.212l-0.273,0.225L17.404,13.498z     M45.954,19.265l0.07-0.082c0.029,0.126,0.06,0.252,0.088,0.38L45.954,19.265z"></path><path d="M3.782,14.884v0.696c0.243-0.568,0.511-1.122,0.798-1.665L3.782,14.884z"></path></g></g></svg>