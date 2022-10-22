import React, { Component , Fragment } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Team from "../blocks/team/TeamTwo";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers ,FiChevronUp , FiCheck } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterOne";
import BrandOne from "../elements/Brand";
import bg1 from '../assets/bg-1.jpg';


const SlideList = [
    {
        textPosition: 'text-right',
        bgImage: 'bg_image--32',
        category: '',
        title: 'Hairline.',
        description: 'Innovative Hair Solutions To  Rebuild A New You',
        buttonText: 'Get Consultation',
        buttonLink: '#'
    },
   
]

const ServiceListOne = [
    {
        icon: <FiCast />,
        title: 'Self confidence',
        description: 'Hair loss can lower your self -confidence and we believe every man deserves to feel good about himself.'
    },
    {
        icon: <FiLayers />,
        title: 'No Side Effects',
        description: 'We only use medical-grade adhesives to fix the system which are bacteria resistant and extremely safe.'
    },
    {
        icon: <FiUsers />,
        title: "It's reversible",
        description: 'If you decide that you are no longer interested in wearing your hair replacement system, you can simply have it removed.'
    },
]

const starndardService = [
    {
        image: '01',
        title: 'Thinking Development',
        description: 'I throw myself down among the tall grass by the stream',
    },
    {
        image: '02',
        title: 'Business Consulting',
        description: 'I throw myself down among the tall grass by the stream',
    },
    {
        image: '03',
        title: 'Biseness Development',
        description: 'I throw myself down among the tall grass by the stream',
    },

]

class CorporateBusiness extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){

        var namesItemOne = [
            'Non- surgical hair replacement also known as human hair replacement is a method popularly used as a solution for hair loss.',
            'A hair replacement system is a lace, monofilament or ultra- thin skin patch woven with human hair.',
            'The hair system is attached to the scalp with adhesives such as glue and tape or hair clips.',
            'The difference between hair systems and hair wigs is that a hair wig covers the entire head while a hair system is meant to cover hair loss in a particular area.',
        ];
        var namesItemTwo = [
            'The Only ISO Certified hair system company in india to Guarantee You Quality',
            'We provide Learning videos which are of Great help.',
            'TCompletely Styled and Cut Ready To Wear hait system delivered at your Doorstep.',
            'We use the highest quality Real Human Remy Hair on our Hair-systems to ensure you get 100% natural looking system',
            'We have been Certified bt American board of Accredition Services for providing High Quality hair system',
            'Since we are mainly an online platform, we can afford to sell the Most Expensive hair systems at Affordable Prices',
            'Online ordering process makes it Easier to Order out of the Comfort of your own home..',
        ];
        
        const PostList = BlogContent.slice(0 , 3);

        return(
            <Fragment> 
                <Helmet pageTitle="Corporate Business" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}
                
                {/* Start Service Area */}
                <div className="service-area ptb--30 bg_color--1">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}


             
                {/* Start Counterup Area */}
                <div className="counterup-area pb--80 pt--40 bg_image bg_image--17 theme-text-white" data-black-overlay="7">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-4.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Working Process</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</p>
                                    </div>
                                    <div className="accordion-wrapper mt--30">
                                        <Accordion01 />
                                    </div>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="/about">See how it works</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">Managing Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-3 col-md-6 col-sm-6 col-12 mt--30" teamStyle="" item="4" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">About</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                                    </div>
                                    <div className="mt--30">
                                        <h4>Lorem ipsum dolor sit.</h4>
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="mt--30">
                                        <h4>Lorem ipsum dolor sit.</h4>
                                        <ul className="list-style--1">
                                            {namesItemTwo.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="/assets/images/about/about-3.png" alt="About Images"/>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                    <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Brand Area  */}
                <div className="rn-brand-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandOne branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}



             

                {/* Start call To Action  */}
                <CallAction />
                {/* End call To Action  */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default CorporateBusiness;