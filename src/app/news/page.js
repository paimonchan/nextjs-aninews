import Image from 'next/image'
import Script from 'next/script'

import '@/style/style.css'
import '@/style/all.css'
import '@/style/owl.carousel.min.css'

export default function Home() {
    return (
        <>
            <Script
                src="https://code.jquery.com/jquery-3.4.1.min.js"
                strategy="lazyOnload"
            />
            <Script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
                strategy="lazyOnload"
            />
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center bg-dark px-lg-5">
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-sm bg-dark p-0">
                            <ul className="navbar-nav ml-n2">
                                <li className="nav-item border-right border-secondary">
                                    <a className="nav-link text-body small" href="#">Monday, January 1, 2045</a>
                                </li>
                                <li className="nav-item border-right border-secondary">
                                    <a className="nav-link text-body small" href="#">Advertise</a>
                                </li>
                                <li className="nav-item border-right border-secondary">
                                    <a className="nav-link text-body small" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body small" href="#">Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 text-right d-none d-md-block">
                        <nav className="navbar navbar-expand-sm bg-dark p-0">
                            <ul className="navbar-nav ml-auto mr-n2">
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-twitter"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-facebook-f"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-linkedin-in"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-instagram"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-google-plus-g"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-youtube"></small></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-center bg-white py-3 px-lg-5">
                    <div className="col-lg-4">
                        <a href="index.html" className="navbar-brand p-0 d-none d-lg-block">
                            <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-secondary font-weight-normal">News</span></h1>
                        </a>
                    </div>
                    <div className="col-lg-8 text-center text-lg-right">
                        <a href="https://htmlcodex.com"><img   className="Image-fluid" src="/img/ads-728x90.png" alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <a href="category.html" className="nav-item nav-link">Category</a>
                            <a href="single.html" className="nav-item nav-link active">Single News</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="#" className="dropdown-item">Menu item 1</a>
                                    <a href="#" className="dropdown-item">Menu item 2</a>
                                    <a href="#" className="dropdown-item">Menu item 3</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="input-group ml-auto d-none d-lg-flex" style={{"width": "100%", "maxWidth": "300px"}}>
                            <input type="text" className="form-control border-0" placeholder="Keyword"/>
                            <div className="input-group-append">
                                <button className="input-group-text bg-primary text-dark border-0 px-3"><i
                                        className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container-fluid mt-5 mb-3 pt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <div className="section-title border-right-0 mb-0" style={{width: "180px"}}>
                                    <h4 className="m-0 text-uppercase font-weight-bold">Tranding</h4>
                                </div>
                                <div className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center bg-white border border-left-0"
                                    style={{width: "calc(100% - 180px)", "paddingRight": "100px"}}>
                                    <div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                                    <div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="position-relative mb-3">
                                <img   alt="" className="Image-fluid w-100" src="/img/news-700x435-1.jpg" style={{"objectFit": "cover"}}/>
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="mb-3">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">Business</a>
                                        <a className="text-body" href="">Jan 01, 2045</a>
                                    </div>
                                    <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">Lorem ipsum dolor sit amet elit vitae porta diam...</h1>
                                    <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                        magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                        amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                        sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                        aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                        sit stet no diam kasd vero.</p>
                                    <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                        vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                        nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                        ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                        clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                        justo dolore sit invidunt.</p>
                                    <h3 className="text-uppercase font-weight-bold mb-3">Lorem ipsum dolor sit amet elit</h3>
                                    <img alt="" className="Image-fluid w-50 float-left mr-4 mb-2" src="/img/news-800x500-1.jpg"/>
                                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                        invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                        lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                        rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                        sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                        lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                        sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                        dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                        sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                        duo tempor sea kasd clita ipsum et.</p>
                                    <h5 className="text-uppercase font-weight-bold mb-3">Lorem ipsum dolor sit amet elit</h5>
                                    <img   alt="" className="Image-fluid w-50 float-right mr-4 mb-2" src="/img/news-800x500-2.jpg"/>
                                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                        invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                        lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                        rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                        sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                        lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                        sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                        dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                        sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                        duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                        aliquyam et ut.</p>
                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <Image  className="rounded-circle mr-2" src="/img/user.jpg" width={25} height={25} alt=""/>
                                        <span>John Doe</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="ml-3"><i className="far fa-eye mr-2"></i>12345</span>
                                        <span className="ml-3"><i className="far fa-comment mr-2"></i>123</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">3 Comments</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="media mb-4">
                                        <Image src="/img/user.jpg" width={45} height={45} alt="Image" className="Image-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                        <div className="media-body">
                                            <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <Image src="/img/user.jpg" width={45} height={45} alt="Image" className="Image-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                        <div className="media-body">
                                            <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                            <div className="media mt-4">
                                                <Image src="/img/user.jpg" width={45} height={45} alt="Image" className="Image-fluid mr-3 mt-1"
                                                    style={{width: "45px"}}/>
                                                <div className="media-body">
                                                    <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                        labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                        eirmod ipsum.</p>
                                                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Leave a comment</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-4">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label >Name *</label>
                                                    <input type="text" className="form-control" id="name"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label >Email *</label>
                                                    <input type="email" className="form-control" id="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label >Website</label>
                                            <input type="url" className="form-control" id="website"/>
                                        </div>

                                        <div className="form-group">
                                            <label >Message *</label>
                                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value="Leave a comment"
                                                className="btn btn-primary font-weight-semi-bold py-2 px-3"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-3">
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#39569E"}}>
                                        <i className="fab fa-facebook-f text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                        <span className="font-weight-medium">12,345 Fans</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#52AAF4"}}>
                                        <i className="fab fa-twitter text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                        <span className="font-weight-medium">12,345 Followers</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#0185AE"}}>
                                        <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                        <span className="font-weight-medium">12,345 Connects</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#C8359D"}}>
                                        <i className="fab fa-instagram text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                        <span className="font-weight-medium">12,345 Followers</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#DC472E"}}>
                                        <i className="fab fa-youtube text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                        <span className="font-weight-medium">12,345 Subscribers</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none" style={{background: "#055570"}}>
                                        <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                        <span className="font-weight-medium">12,345 Followers</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                                </div>
                                <div className="bg-white text-center border border-top-0 p-3">
                                    <a href=""><img  className="img-fluid" src="/img/news-800x500-2.jpg" alt=""/></a>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-3">
                                    <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                        <img   className="Image-fluid" src="/img/news-110x110-1.jpg" alt=""/>
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                        <img   className="Image-fluid" src="/img/news-110x110-2.jpg" alt=""/>
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                        <img   className="Image-fluid" src="/img/news-110x110-3.jpg" alt=""/>
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                        <img   className="Image-fluid" src="/img/news-110x110-4.jpg" alt=""/>
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{height: "110px"}}>
                                        <img   className="Image-fluid" src="/img/news-110x110-5.jpg" alt=""/>
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                                </div>
                                <div className="bg-white text-center border border-top-0 p-3">
                                    <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                                    <div className="input-group mb-2" style={{width: "100%"}}>
                                        <input type="text" className="form-control form-control-lg" placeholder="Your Email"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                                        </div>
                                    </div>
                                    <small>Lorem ipsum dolor sit amet elit</small>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-3">
                                    <div className="d-flex flex-wrap m-n1">
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Health</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Education</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Science</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
                <div className="row py-4">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
                        <p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p className="font-weight-medium"><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p className="font-weight-medium"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
                        <div className="mb-3">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                        <div className="mb-3">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                        <div className="">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
                        <div className="m-n1">
                            <a href="" className="btn btn-sm btn-secondary m-1">Politics</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Corporate</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Health</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Education</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Science</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Foods</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Entertainment</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Travel</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Lifestyle</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Politics</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Corporate</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Health</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Education</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Science</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Foods</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <a href=""><img   className="w-100" src="/img/news-110x110-1.jpg" alt=""/></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img   className="w-100" src="/img/news-110x110-2.jpg" alt=""/></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img   className="w-100" src="/img/news-110x110-3.jpg" alt=""/></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img   className="w-100" src="/img/news-110x110-4.jpg" alt=""/></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img   className="w-100" src="/img/news-110x110-5.jpg" alt=""/></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img   className="w-100" src="/img/news-110x110-1.jpg" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 px-sm-3 px-md-5" style={{background: "#111111"}}>
                <p className="m-0 text-center">&copy; <a href="#">Your Site Name</a>. All Rights Reserved. 
                
                Design by <a href="https://htmlcodex.com">HTML Codex</a><br/>
                Distributed by <a href="https://themewagon.com">ThemeWagon</a></p>
            </div>

            <a href="#" className="btn btn-primary btn-square back-to-top"><i className="fa fa-arrow-up"></i></a>

        </>
    )
}